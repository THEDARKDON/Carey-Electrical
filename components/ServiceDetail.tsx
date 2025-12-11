import React, { useEffect } from 'react';
import { ArrowLeft, Check, ShieldCheck, Zap, Star, ChevronDown, Phone, FileText, MapPin, ArrowRight } from 'lucide-react';
import { Button, Reveal, SectionTitle, Card, useSEO } from './UIComponents';
import { ServiceDetailData } from '../types';
import { LOCATIONS, SERVICE_DETAILS } from '../constants';
import * as Icons from 'lucide-react';

interface ServiceDetailProps {
  data: ServiceDetailData;
  onBack: () => void;
  onCtaClick: () => void;
  onProductClick?: (id: string) => void;
  onServiceClick?: (id: string) => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ data, onBack, onCtaClick, onProductClick, onServiceClick }) => {

  const relatedServices = data.relatedServices
    ? data.relatedServices.map(id => SERVICE_DETAILS[id]).filter(Boolean).slice(0, 3)
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  // SEO with enhanced schema including breadcrumbs, service details, and FAQs
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://careyelectrical.co.uk"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://careyelectrical.co.uk/#/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": data.title,
            "item": window.location.href
          }
        ]
      },
      {
        "@type": "Service",
        "name": data.title,
        "serviceType": data.title,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Carey Electrical",
          "telephone": "01635 783887",
          "email": "info@careyelectrical.co.uk",
          "url": "https://careyelectrical.co.uk",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Thatcham",
            "addressRegion": "Berkshire",
            "postalCode": "RG18 3BD",
            "addressCountry": "GB"
          }
        },
        "description": data.overview,
        "image": data.heroImage,
        "areaServed": [
          { "@type": "City", "name": "Newbury" },
          { "@type": "City", "name": "Reading" },
          { "@type": "City", "name": "Basingstoke" },
          { "@type": "State", "name": "Berkshire" }
        ],
        "offers": {
          "@type": "Offer",
          "description": "Professional " + data.title + " services",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "GBP"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": data.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "HowTo",
        "name": `How ${data.title} Installation Works`,
        "description": `Professional ${data.title} installation process by Carey Electrical`,
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Survey",
            "text": "Detailed site analysis and shading calculation to determine optimal system configuration."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Design",
            "text": "Custom proposal with full ROI breakdown and system specifications."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Install",
            "text": "1-2 day installation by MCS certified engineers with minimal disruption."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Support",
            "text": "Monitoring setup, system handover, and ongoing maintenance support."
          }
        ]
      }
    ]
  };

  const pageKeywords = `${data.title}, ${data.title} Berkshire, ${data.title} Newbury, ${data.title} Reading, solar installation, renewable energy, MCS certified`;

  useSEO(
    `${data.title} Installation Berkshire`,
    `Expert ${data.title} services from MCS certified Carey Electrical. ${data.overview.substring(0, 140)}`,
    schema,
    data.heroImage,
    'website',
    pageKeywords
  );

  // Helper to get icon component dynamically
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent size={24} /> : <Check size={24} />;
  };

  // Get random selection of locations for cross-linking to avoid clutter
  const servingLocations = LOCATIONS.slice(0, 12); 

  return (
    <div className="min-h-screen bg-brand-black pt-20">
      {/* Navigation Bar Placeholder */}
      <div className="fixed top-24 left-6 z-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full text-white hover:text-brand-green hover:border-brand-green transition-all shadow-lg group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.heroImage}
            alt={data.title}
            width={1920}
            height={1080}
            loading="eager"
            decoding="sync"
            className="w-full h-full object-cover opacity-60 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <Reveal>
               <span className="inline-block px-4 py-1 mb-6 rounded-full bg-brand-green/20 border border-brand-green/50 text-brand-green font-bold text-sm tracking-widest uppercase backdrop-blur-sm">
                 Service Focus
               </span>
            </Reveal>
            <Reveal delay={100}>
               <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">{data.title}</h1>
            </Reveal>
            <Reveal delay={200}>
               <p className="text-xl md:text-3xl text-slate-200 font-light">{data.subtitle}</p>
            </Reveal>
          </div>
        </div>
        
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
               <span className="text-brand-green">Why Choose</span> {data.title}?
             </h2>
             <p className="text-slate-300 text-lg leading-relaxed mb-8">
               {data.overview}
             </p>
             
             {/* Rich SEO Content */}
             {data.extendedContent && (
                <div 
                  className="prose prose-invert prose-lg max-w-none mb-10
                    prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-h3:text-brand-green
                    prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-brand-green prose-a:no-underline hover:prose-a:underline
                    prose-ul:text-slate-300 prose-ul:mb-6 prose-li:mb-2
                    prose-strong:text-white"
                  dangerouslySetInnerHTML={{ __html: data.extendedContent }}
                />
             )}

             <Button onClick={onCtaClick} className="shadow-neon">Get A Quote Now</Button>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sticky top-32">
            {data.benefits.map((benefit, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-brand-green/30 transition-all hover:bg-slate-800 group h-full">
                  <div className="w-12 h-12 bg-slate-950 rounded-lg flex items-center justify-center text-brand-green mb-4 group-hover:scale-110 transition-transform shadow-inner">
                    {getIcon(benefit.icon)}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase with Technical Specs */}
      <section className="py-20 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle subtitle="Hardware" title="Featured Technology" center />
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mt-12">
            {data.products.map((product, idx) => (
              <Reveal key={idx} delay={idx * 200}>
                <div 
                  className={`bg-brand-black rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group hover:shadow-neon-hover transition-all duration-500 h-full flex flex-col ${onProductClick ? 'cursor-pointer' : ''}`}
                  onClick={() => onProductClick && onProductClick(product.id)}
                >
                  {/* Product Image */}
                  <div className="h-64 overflow-hidden relative">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-brand-green text-brand-black font-bold px-3 py-1 rounded text-xs uppercase tracking-wide">
                      {product.brand}
                    </div>
                    {onProductClick && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="px-6 py-2 bg-brand-green text-brand-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Product Details</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                      <p className="text-slate-400 text-sm">{product.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {product.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-slate-300">
                           <Zap size={14} className="text-brand-green shrink-0" />
                           <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technical Specification Table */}
                    {product.techSpecs && (
                      <div className="mt-auto bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden">
                        <div className="px-4 py-2 bg-slate-800/80 border-b border-slate-700 flex items-center gap-2">
                          <FileText size={14} className="text-brand-green" />
                          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Technical Specifications</span>
                        </div>
                        <div className="p-4 grid grid-cols-2 gap-y-3 gap-x-4">
                          {Object.entries(product.techSpecs).map(([key, value], i) => (
                            <div key={i} className="flex flex-col">
                              <span className="text-xs text-slate-500">{key}</span>
                              <span className="text-sm font-semibold text-slate-200">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Specific Gallery for this Service */}
      {data.galleryImages && data.galleryImages.length > 0 && (
        <section className="py-20 bg-brand-black">
          <div className="container mx-auto px-6">
            <SectionTitle subtitle="Portfolio" title="Recent Installations" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.galleryImages.map((img, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="rounded-xl overflow-hidden border border-slate-800 h-64 group relative cursor-pointer hover:border-brand-green/50 transition-all">
                    <img src={img} alt={`${data.title} installation by Carey Electrical in Berkshire - example ${idx + 1}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur px-3 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      View Project
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Installation Process */}
      <section className="py-20 container mx-auto px-6">
        <SectionTitle subtitle="Our Process" title="From Survey to Savings" />
        
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-brand-green/50 to-slate-800 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { title: 'Survey', desc: 'Detailed site analysis & shading calculation.', icon: 'ClipboardList' },
              { title: 'Design', desc: 'Custom proposal with full ROI breakdown.', icon: 'PenTool' },
              { title: 'Install', desc: '1-2 day install by certified engineers.', icon: 'Wrench' },
              { title: 'Support', desc: 'Monitoring setup & handover pack.', icon: 'Headphones' },
            ].map((step, idx) => (
               <Reveal key={idx} delay={idx * 150}>
                 <div className="bg-brand-black p-6 rounded-2xl border border-slate-800 text-center md:text-left shadow-xl hover:-translate-y-2 transition-transform duration-300">
                   <div className="w-16 h-16 mx-auto md:mx-0 bg-slate-900 rounded-full flex items-center justify-center text-brand-green border-2 border-slate-800 mb-4 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 relative">
                     {getIcon(step.icon)}
                   </div>
                   <div className="text-5xl font-extrabold text-slate-800 absolute top-4 right-6 pointer-events-none opacity-50">0{idx + 1}</div>
                   <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                   <p className="text-slate-400 text-sm">{step.desc}</p>
                 </div>
               </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-brand-black">
        <div className="container mx-auto px-6 max-w-4xl">
           <h3 className="text-3xl font-bold text-white mb-10 text-center">Common Questions</h3>
           <div className="space-y-4 mb-20">
             {data.faqs.map((faq, idx) => (
               <Reveal key={idx}>
                 <div className="bg-slate-950 border border-slate-800 p-6 rounded-lg hover:border-brand-green/40 transition-colors">
                   <p className="text-brand-green font-bold mb-2">{faq.question}</p>
                   <p className="text-slate-400 text-sm">{faq.answer}</p>
                 </div>
               </Reveal>
             ))}
           </div>
        </div>
      </section>

      {/* Related Services Cross-Links */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-slate-950 border-t border-slate-900">
          <div className="container mx-auto px-6">
            <SectionTitle subtitle="Explore More" title="Related Services" center />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {relatedServices.map((service, idx) => (
                <Reveal key={service.id} delay={idx * 100}>
                  <a
                    href={`#/services/${service.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onServiceClick) onServiceClick(service.id);
                      else window.location.hash = `/services/${service.id}`;
                    }}
                    className="group block bg-brand-black rounded-xl overflow-hidden border border-slate-800 hover:border-brand-green/50 transition-all"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white group-hover:text-brand-green transition-colors mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm line-clamp-2">{service.subtitle}</p>
                      <span className="inline-flex items-center gap-1 mt-4 text-brand-green text-sm font-medium group-hover:gap-2 transition-all">
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SEO Cross-Links (Hub & Spoke) */}
      <section className="py-16 bg-brand-black border-t border-slate-900">
        <div className="container mx-auto px-6">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8 text-center">{data.title} Available In:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {servingLocations.map((loc, idx) => (
              <a 
                key={idx}
                href={`#`} 
                className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium hover:text-brand-green hover:border-brand-green transition-all"
                onClick={(e) => { e.preventDefault(); window.location.hash = `/location/${loc.slug}`; }}
              >
                <MapPin size={12} className="inline mr-1" />
                {data.title.split(' ')[0]} in {loc.name}
              </a>
            ))}
            <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = '/locations'; }} className="px-4 py-2 rounded-lg bg-slate-800 text-white text-xs font-bold hover:bg-slate-700">
              View All Locations
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-green/5 border-t border-brand-green/10">
        <div className="container mx-auto px-6 text-center">
           <div className="bg-brand-green/10 rounded-3xl p-8 md:p-12 text-center border border-brand-green/20 relative overflow-hidden max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-brand-green/5 animate-pulse-slow" />
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to Switch?</h2>
                <p className="text-slate-300 mb-8 max-w-lg mx-auto">Get a custom quote for your {data.title} installation today. No hidden fees, just honest energy advice.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <Button onClick={onCtaClick} className="text-lg px-8">Get Quote Now</Button>
                   <Button variant="outline" className="text-lg px-8" onClick={() => window.location.href = `tel:${"01635783887"}`}>
                     <Phone size={18} className="mr-2" /> Call 01635 783887
                   </Button>
                </div>
              </Reveal>
           </div>
        </div>
      </section>
    </div>
  );
};
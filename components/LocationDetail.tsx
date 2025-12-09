import React, { useEffect } from 'react';
import { ArrowLeft, Check, MapPin, Zap, Phone, Sun, FileText, HelpCircle, ArrowRight } from 'lucide-react';
import { Button, Reveal, SectionTitle, Card, useSEO } from './UIComponents';
import { LocationPageData } from '../types';
import { PROJECTS, LOCATIONS } from '../constants';

interface LocationDetailProps {
  data: LocationPageData;
  onBack: () => void;
  onNavigate: (view: string) => void;
}

export const LocationDetail: React.FC<LocationDetailProps> = ({ data, onBack, onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  // Combined LocalBusiness and FAQPage Schema using @graph
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": `Carey Electrical ${data.name}`,
        "image": "https://careyelectrical.co.uk/" + data.heroImage,
        "telephone": "01635 783887",
        "email": "info@careyelectrical.co.uk",
        "url": window.location.href,
        "areaServed": {
          "@type": "Place",
          "name": data.name
        },
        "priceRange": "££",
        "description": data.metaDescription,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Thatcham", // Head office
          "addressRegion": "Berkshire",
          "addressCountry": "UK"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": data.faq.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  useSEO(
    `Solar Panels & Battery Installers ${data.name}`,
    data.metaDescription,
    schema
  );

  // Filter projects for this location if possible, otherwise show generic good ones
  const localProjects = PROJECTS.filter(p => p.location && (p.location.includes(data.name) || p.location.includes(data.slug)));
  const displayProjects = localProjects.length > 0 ? localProjects : PROJECTS.slice(0, 3);

  // Get other locations for internal linking (exclude current)
  const nearbyLocations = LOCATIONS.filter(l => l.slug !== data.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-brand-black pt-20">
      
      {/* Navigation */}
      <div className="fixed top-24 left-6 z-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-full text-white hover:text-brand-green hover:border-brand-green transition-all shadow-lg group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Map</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.heroImage} 
            alt={`Solar Panels installed in ${data.name}`} 
            className="w-full h-full object-cover opacity-50 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-green/20 border border-brand-green/40 text-brand-green font-bold text-sm uppercase tracking-widest mb-6 backdrop-blur-md">
              <MapPin size={14} /> Serving {data.name} & Surrounding Areas
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
              Solar Panels in <span className="text-brand-green">{data.name}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xl text-zinc-200 font-light mb-8 max-w-2xl mx-auto">
              Your local MCS certified experts for Solar PV, Battery Storage, and EV Charging.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <Button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }}>
              Get a Quote for {data.name}
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Intro & Local Context */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{data.introTitle}</h2>
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              {data.introText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              {data.localLandmarks.map((landmark, idx) => (
                <span key={idx} className="px-3 py-1 bg-zinc-900 border border-zinc-700 rounded text-xs text-zinc-400 font-medium">
                  📍 {landmark}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Sun className="text-brand-green" /> Solar Potential
              </h3>
              <p className="text-zinc-400 mb-6">{data.solarPotential}</p>
              
              <div className="h-px w-full bg-zinc-800 my-6" />
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="text-brand-green" /> Planning & Permissions
              </h3>
              <p className="text-zinc-400 mb-6">{data.planningAdvice}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXTENDED CONTENT (New SEO Section) */}
      {data.extendedContent && (
        <section className="py-12 bg-brand-black">
          <div className="container mx-auto px-6 max-w-4xl">
            <Reveal>
              <div 
                className="prose prose-invert prose-lg max-w-none 
                  prose-headings:text-white prose-headings:font-bold prose-h2:text-3xl prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-brand-green prose-a:no-underline hover:prose-a:underline
                  prose-ul:text-zinc-300 prose-ul:mb-6 prose-li:mb-2
                  prose-strong:text-white"
                dangerouslySetInnerHTML={{ __html: data.extendedContent }}
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* Services in Location */}
      <section className="py-20 bg-zinc-950 border-y border-zinc-900">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Local Services" title={`Energy Solutions for ${data.name}`} center />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal>
              <Card className="hover:border-brand-green/30">
                <Sun size={40} className="text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Solar Installation</h3>
                <p className="text-zinc-400 text-sm">Custom designed solar arrays for {data.name} roofs. We use all-black panels for a superior aesthetic.</p>
              </Card>
            </Reveal>
            <Reveal delay={100}>
              <Card className="hover:border-brand-green/30">
                <Zap size={40} className="text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Battery Storage</h3>
                <p className="text-zinc-400 text-sm">Store your energy. We install Tesla Powerwall and Myenergi Libbi systems across the county.</p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card className="hover:border-brand-green/30">
                <Check size={40} className="text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Maintenance</h3>
                <p className="text-zinc-400 text-sm">Already have solar in {data.name}? We offer cleaning, bird proofing, and inverter replacements.</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Local Projects Gallery */}
      <section className="py-20 bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
             <h2 className="text-3xl font-bold text-white">Our Work Near You</h2>
             <Button variant="outline" onClick={() => onNavigate('/projects')} className="hidden md:flex">View All Projects</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 100}>
                <div className="group relative rounded-xl overflow-hidden h-64 border border-zinc-800">
                  <img src={project.url} alt={project.description} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                    <span className="text-brand-green text-xs font-bold uppercase tracking-wider mb-1">{project.location}</span>
                    <h4 className="text-white font-bold">{project.description}</h4>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionTitle subtitle="FAQ" title={`Questions from ${data.name} Residents`} center />
          
          <div className="space-y-4">
            {data.faq.map((item, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                  <div className="flex gap-4">
                    <HelpCircle className="text-zinc-600 shrink-0" />
                    <div>
                      <h4 className="text-white font-bold mb-2">{item.question}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas Link */}
      <section className="py-16 bg-brand-black border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <h3 className="text-xl font-bold text-white mb-8 text-center uppercase tracking-widest text-sm text-zinc-500">Also Serving</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {nearbyLocations.map((loc) => (
              <button 
                key={loc.slug}
                onClick={() => onNavigate(loc.slug)}
                className="px-6 py-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-brand-green hover:border-brand-green transition-all text-sm font-bold flex items-center gap-2"
              >
                {loc.name} <ArrowRight size={14} />
              </button>
            ))}
            <button 
               onClick={() => onNavigate('locations')}
               className="px-6 py-2 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-all text-sm font-bold"
            >
              View All Areas
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-green/5 border-t border-brand-green/10">
        <div className="container mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Power Your {data.name} Home</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">Stop renting your energy from the grid. Own your power with a custom solar solution from Carey Electrical.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }} className="px-10 py-4 text-lg shadow-neon">
                Get My Free Quote
              </Button>
              <Button variant="outline" onClick={() => window.location.href = `tel:${"01635783887"}`}>
                <Phone size={18} className="mr-2" /> Speak to an Expert
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
};
import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap, Maximize, Battery, Phone } from 'lucide-react';
import { Button, Reveal, SectionTitle, Card, useSEO } from './UIComponents';
import { ProductPageData } from '../types';
import * as Icons from 'lucide-react';

interface ProductDetailProps {
  data: ProductPageData;
  onBack: () => void;
  onNavigate: (viewId: string) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ data, onBack, onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  // SEO with enhanced Product schema and breadcrumbs
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
            "name": "Products",
            "item": "https://careyelectrical.co.uk/#/ecosystem"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": data.name,
            "item": window.location.href
          }
        ]
      },
      {
        "@type": "Product",
        "name": data.name,
        "image": data.heroImage,
        "description": data.description,
        "brand": {
          "@type": "Brand",
          "name": data.brand
        },
        "category": data.category || "Solar Energy Equipment",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
          "lowPrice": data.priceRange?.low || "500",
          "highPrice": data.priceRange?.high || "15000",
          "offerCount": "1",
          "seller": {
            "@type": "Organization",
            "name": "Carey Electrical",
            "url": "https://careyelectrical.co.uk"
          },
          "itemCondition": "https://schema.org/NewCondition"
        },
        "sku": data.id,
        "mpn": data.id,
        "manufacturer": {
          "@type": "Organization",
          "name": data.brand
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "47",
          "bestRating": "5"
        }
      }
    ]
  };

  const productKeywords = `${data.name}, ${data.brand}, ${data.name} installation, ${data.name} Berkshire, ${data.brand} installer UK, certified ${data.brand} installer`;

  useSEO(
    `${data.name} Installation | ${data.brand} Certified`,
    `Professional ${data.name} installation by certified ${data.brand} installer. ${data.description.substring(0, 120)}`,
    schema,
    data.heroImage,
    'website',
    productKeywords
  );

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent size={24} /> : <CheckCircle2 size={24} />;
  };

  return (
    <div className="min-h-screen bg-brand-black pt-20">
      
      {/* Nav */}
      <div className="fixed top-24 left-6 z-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full text-white hover:text-brand-green hover:border-brand-green transition-all shadow-lg group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-brand-black" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,_rgba(16,185,129,0.2),transparent_60%)]" />
        
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-sm font-bold uppercase tracking-wider">
                <ShieldCheck size={14} /> Authorized Installer
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight leading-none">
                {data.name}
              </h1>
              <p className="text-2xl md:text-3xl text-slate-400 font-light tracking-wide">
                {data.tagline}
              </p>
              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Button className="shadow-neon" onClick={() => document.getElementById('specs')?.scrollIntoView({behavior: 'smooth'})}>
                  View Specifications
                </Button>
                <Button variant="outline" onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }}>
                  Get A Quote
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-green/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-1000" />
              <img 
                src={data.heroImage} 
                alt={data.name} 
                className="relative z-10 w-full rounded-3xl shadow-2xl border border-white/5 transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview & Features */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <Reveal>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto text-center mb-20 font-light">
              {data.description}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.features.map((feature, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <Card className="h-full bg-slate-900/50 border-slate-800 hover:border-brand-green/30">
                  <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-brand-green border border-slate-800 mb-6 shadow-lg">
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section id="specs" className="py-24 bg-brand-black border-t border-slate-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionTitle subtitle="Data Sheet" title="Technical Specifications" center />
          
          <Reveal>
            <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                {Object.entries(data.specs).map(([key, value], idx) => (
                  <div key={key} className="p-6 md:p-8 flex flex-col hover:bg-slate-800/50 transition-colors">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{key}</span>
                    <span className="text-xl md:text-2xl font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-brand-black text-center">
        <div className="container mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl font-bold text-white mb-6">Install {data.name} with Confidence</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              We are certified {data.brand} installers. Contact us for a precise quote including installation and commissioning.
            </p>
            <Button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }} className="px-10 py-4 text-lg">
              Request {data.name} Quote
            </Button>
          </Reveal>
        </div>
      </section>

    </div>
  );
};
import React, { useEffect } from 'react';
import { ArrowLeft, MapPin, Calendar, CheckCircle2, User, Zap, BarChart3, Quote } from 'lucide-react';
import { Button, Reveal, SectionTitle, Badge, useSEO } from './UIComponents';
import { ProjectImage } from '../types';

interface ProjectDetailProps {
  data: ProjectImage;
  onBack: () => void;
  onNavigate: (viewId: string) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ data, onBack, onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  // SEO Schema for Case Study
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "image": data.url,
    "author": "Carey Electrical",
    "datePublished": data.date,
    "publisher": {
      "@type": "Organization",
      "name": "Carey Electrical",
      "logo": {
        "@type": "ImageObject",
        "url": "https://careyelectrical.co.uk/logo.png"
      }
    },
    "description": `Case study of a ${data.systemSize} ${data.category} installation in ${data.location} by Carey Electrical.`
  };

  useSEO(
    `${data.title} | ${data.location} Case Study`,
    `See how we helped ${data.client} in ${data.location} achieve energy independence with a ${data.systemSize} system.`,
    schema
  );

  return (
    <div className="min-h-screen bg-brand-black pt-20">
      
      {/* Navigation */}
      <div className="fixed top-24 left-6 z-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full text-white hover:text-brand-green hover:border-brand-green transition-all shadow-lg group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Projects</span>
        </button>
      </div>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={data.url} 
            alt={data.title} 
            className="w-full h-full object-cover animate-ken-burns opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className="bg-brand-green text-black border-none">{data.category}</Badge>
              {data.location && (
                <Badge className="bg-slate-900/80 backdrop-blur text-white border-slate-600 flex items-center gap-1">
                  <MapPin size={12} /> {data.location}
                </Badge>
              )}
              {data.systemSize && (
                <Badge className="bg-slate-900/80 backdrop-blur text-brand-green border-brand-green/50 flex items-center gap-1">
                  <Zap size={12} /> {data.systemSize}
                </Badge>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 max-w-4xl leading-tight">
              {data.title}
            </h1>
            <div className="flex items-center gap-6 text-slate-300 text-sm font-medium">
              <div className="flex items-center gap-2">
                <User size={16} className="text-brand-green" />
                Client: {data.client}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-brand-green" />
                Completed: {data.date}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-12">
            
            <Reveal delay={100}>
              <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 text-sm font-bold">01</span>
                  The Challenge
                </h2>
                <div dangerouslySetInnerHTML={{ __html: data.challenge || '' }} />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-brand-green text-sm font-bold">02</span>
                  Our Solution
                </h2>
                <div dangerouslySetInnerHTML={{ __html: data.solution || '' }} />
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-black text-sm font-bold">03</span>
                  The Outcome
                </h2>
                <div className="prose prose-invert prose-lg max-w-none mb-6" dangerouslySetInnerHTML={{ __html: data.outcome || '' }} />
                
                {/* Stats Grid */}
                {data.stats && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
                    {data.stats.map((stat, i) => (
                      <div key={i} className="text-center sm:text-left">
                        <p className="text-brand-green font-bold text-2xl mb-1">{stat.value}</p>
                        <p className="text-slate-500 text-xs uppercase tracking-wider font-bold">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>

            {/* Gallery Grid */}
            {data.gallery && data.gallery.length > 0 && (
              <Reveal delay={400}>
                <h3 className="text-2xl font-bold text-white mb-6">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.gallery.map((img, idx) => (
                    <img key={idx} src={img} alt={`Installation photo ${idx + 1}`} className="rounded-xl border border-slate-800 w-full h-64 object-cover" />
                  ))}
                </div>
              </Reveal>
            )}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-32">
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl">
                <Zap className="w-12 h-12 text-brand-green mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Inspired by this project?</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  We can design a similar high-performance system tailored to your property in {data.location}.
                </p>
                <div className="space-y-4">
                  <Button fullWidth onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }}>
                    Request A Quote
                  </Button>
                  <Button fullWidth variant="outline" onClick={() => window.location.href = `tel:${"01635783887"}`}>
                    Call To Discuss
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
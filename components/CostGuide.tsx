import React, { useEffect } from 'react';
import { SectionTitle, Reveal, Card, Button, Breadcrumbs, useSEO } from './UIComponents';
import { COST_GUIDE_CONTENT } from '../constants';
import { PoundSterling, Check, HelpCircle, Phone, ArrowRight } from 'lucide-react';

interface CostGuideProps {
  onBack: () => void;
  onNavigate: (view: string) => void;
}

export const CostGuide: React.FC<CostGuideProps> = ({ onBack, onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FAQ Schema for Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": COST_GUIDE_CONTENT.faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  useSEO(
    "Solar Panel Cost Guide 2025 - UK Pricing",
    "How much do solar panels cost in 2025? Full breakdown of installation prices, battery storage costs, and potential savings for Berkshire homeowners.",
    faqSchema
  );

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Breadcrumbs items={[{ label: 'Home', action: onBack }, { label: 'Cost Guide' }]} />
        
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-brand-green/20 border border-brand-green/50 text-brand-green font-bold text-sm tracking-widest uppercase">
              Updated {COST_GUIDE_CONTENT.lastUpdated}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              <span className="text-brand-green">Cost</span> Guide
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Transparent pricing for Solar PV and Battery Storage installations in Berkshire and Hampshire.
            </p>
            <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto">
              {['/27162577-e234-4b8c-ade3-b26fda59906f copy.jpg', '/529d5e5e-5571-4a64-a3d1-b431abf65c50 copy.jpg', '/b6726c41-55cf-4466-b54f-31f8a8c7d682 copy.jpg'].map((img, idx) => (
                <div key={idx} className="aspect-video overflow-hidden rounded-xl border border-slate-800">
                  <img src={img} alt={`Solar Installation ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {COST_GUIDE_CONTENT.sections.map((section, idx) => (
          <Reveal key={idx} delay={idx * 150}>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-brand-green rounded-full" />
                {section.title}
              </h2>
              
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {section.content}
                </p>

                {section.table && (
                  <div className="overflow-hidden rounded-xl border border-slate-700">
                    <table className="w-full text-left">
                      <thead className="bg-slate-800 text-slate-400 text-xs uppercase font-bold tracking-wider">
                        <tr>
                          <th className="px-6 py-4">{section.table[0].col1}</th>
                          <th className="px-6 py-4">{section.table[0].col2}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-700">
                        {section.table.slice(1).map((row, rIdx) => (
                          <tr key={rIdx} className="bg-slate-900/50 hover:bg-slate-800 transition-colors">
                            <td className="px-6 py-4 text-white font-medium">{row.col1}</td>
                            <td className="px-6 py-4 text-brand-green font-bold">{row.col2}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}

        <div className="my-16">
          <SectionTitle subtitle="FAQ" title="Common Pricing Questions" center />
          <div className="space-y-4">
            {COST_GUIDE_CONTENT.faqs.map((faq, idx) => (
              <Reveal key={idx}>
                <div className="bg-slate-950 border border-slate-800 p-6 rounded-lg hover:border-brand-green/40 transition-colors">
                  <div className="flex gap-4">
                    <HelpCircle className="text-brand-green shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-2 text-lg">{faq.question}</h4>
                      <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="bg-gradient-to-r from-slate-900 to-brand-black border border-slate-800 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-green/5 animate-pulse-slow" />
            <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Get Your Fixed Price Quote</h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto relative z-10">
              Every home is unique. Contact us for a free survey and a guaranteed fixed-price proposal valid for 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }} className="shadow-neon">
                Start Calculator
              </Button>
              <Button variant="outline" onClick={() => window.location.href = `tel:01635783887`}>
                <Phone className="mr-2" size={18} /> Call Team
              </Button>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
};
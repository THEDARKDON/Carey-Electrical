import React, { useEffect, useState } from 'react';
import { SectionTitle, Reveal, Button, Breadcrumbs, useSEO } from './UIComponents';
import { GLOSSARY_TERMS } from '../constants';
import { Search, BookOpen } from 'lucide-react';

interface GlossaryProps {
  onBack: () => void;
  onNavigate: (view: string) => void;
}

export const Glossary: React.FC<GlossaryProps> = ({ onBack, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const glossarySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://careyelectricalltd.com" },
          { "@type": "ListItem", "position": 2, "name": "Glossary", "item": window.location.href }
        ]
      },
      {
        "@type": "DefinedTermSet",
        "name": "Solar Energy Glossary",
        "description": "A comprehensive glossary of solar energy terms and definitions for homeowners",
        "hasDefinedTerm": GLOSSARY_TERMS.slice(0, 20).map(term => ({
          "@type": "DefinedTerm",
          "name": term.term,
          "description": term.definition
        }))
      }
    ]
  };

  useSEO(
    "Solar Energy Glossary - Terms Explained",
    "Confused by solar jargon? Our glossary explains everything from kW vs kWh to G99 and SEG payments. Simple definitions for homeowners.",
    glossarySchema,
    undefined,
    'website',
    "solar glossary, solar terms, kW vs kWh, inverter, SEG, solar panel terminology, renewable energy terms"
  );

  const filteredTerms = GLOSSARY_TERMS.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ['Technical', 'Regulatory', 'Financial'];

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Breadcrumbs items={[{ label: 'Home', action: onBack }, { label: 'Glossary' }]} />

        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              Solar <span className="text-brand-green">Jargon Buster</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Understanding your quote shouldn't require a degree in engineering. We break down the key terms you need to know.
            </p>

            <div className="relative max-w-lg mx-auto">
              <input 
                type="text" 
                placeholder="Search for a term (e.g. Inverter)" 
                className="w-full bg-slate-900 border border-slate-700 rounded-full py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-green transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-brand-green/30 transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-green transition-colors">{item.term}</h3>
                    {item.category && (
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-950 px-2 py-1 rounded border border-slate-800">
                        {item.category}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 leading-relaxed">{item.definition}</p>
                </div>
              </Reveal>
            ))
          ) : (
            <div className="text-center py-20 text-slate-500">
              <p>No definitions found for "{searchTerm}".</p>
            </div>
          )}
        </div>

        <div className="mt-20 bg-brand-green/5 border border-brand-green/20 rounded-2xl p-8 text-center">
          <BookOpen className="w-12 h-12 text-brand-green mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">Our team is happy to explain any technical details in plain English over the phone.</p>
          <Button onClick={() => window.location.href = `tel:01635783887`}>Call 01635 783887</Button>
        </div>

      </div>
    </div>
  );
};
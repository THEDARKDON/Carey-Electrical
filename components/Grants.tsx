import React, { useEffect } from 'react';
import { SectionTitle, Reveal, Card, Button, Breadcrumbs, useSEO } from './UIComponents';
import { PoundSterling, Check, HelpCircle, AlertTriangle, ArrowRight } from 'lucide-react';

interface GrantsProps {
  onBack: () => void;
  onNavigate: (view: string) => void;
}

export const Grants: React.FC<GrantsProps> = ({ onBack, onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO(
    "Solar Grants, Funding & 0% VAT (2025 Guide)",
    "Everything you need to know about ECO4, the Smart Export Guarantee (SEG) and 0% VAT on solar panels and batteries.",
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Are there grants for solar panels?", "acceptedAnswer": { "@type": "Answer", "text": "The main grant available is ECO4 for low-income households. For most homeowners, the 0% VAT rate acts as a significant discount." } },
        { "@type": "Question", "name": "What is the Smart Export Guarantee?", "acceptedAnswer": { "@type": "Answer", "text": "The SEG is a scheme where energy suppliers pay you for the electricity you export to the grid." } }
      ]
    }
  );

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Breadcrumbs items={[{ label: 'Home', action: onBack }, { label: 'Grants & Funding' }]} />
        
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              Incentives & <span className="text-brand-green">Funding</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Navigating the landscape of government schemes and tax breaks for renewable energy.
            </p>
          </div>
        </Reveal>

        {/* 0% VAT Section */}
        <Reveal delay={100}>
          <div className="mb-16 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-brand-green/10 p-4 border-b border-brand-green/20 flex items-center justify-center gap-2">
              <Check className="text-brand-green" size={20} />
              <span className="text-brand-green font-bold uppercase tracking-wider text-sm">Available to Everyone</span>
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">0% VAT on Solar & Batteries</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The UK government has set the VAT rate for the installation of energy-saving materials (ESMs) to <strong>0% until 31 March 2027</strong>. This is effectively a 20% discount on the entire cost of your system compared to standard goods.
              </p>
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                <h3 className="text-white font-bold mb-4">What is covered?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Solar PV Panels', 'Battery Storage (Standalone or Retrofit)', 'Inverters & Mounting Systems', 'Installation Labour Costs'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-400">
                      <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center">
                        <Check size={12} className="text-brand-green" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* SEG Section */}
        <Reveal delay={200}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="p-2 bg-slate-800 rounded-lg text-brand-green"><PoundSterling size={24} /></div>
              Smart Export Guarantee (SEG)
            </h2>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The SEG requires licensed electricity suppliers to pay small-scale generators (you) for low-carbon electricity which they export back to the National Grid. 
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                <strong>Important:</strong> Rates vary wildly between suppliers. Some offer as low as 2p/kWh, while others (like Octopus Energy) offer up to 15p-29p/kWh for solar customers.
              </p>
              <div className="flex items-start gap-4 p-4 bg-brand-green/5 border border-brand-green/20 rounded-xl">
                <AlertTriangle className="text-brand-green shrink-0 mt-1" />
                <p className="text-sm text-slate-400">
                  To qualify for SEG payments, your installation must be certified by the <strong>MCS (Microgeneration Certification Scheme)</strong>. Carey Electrical is a fully MCS accredited installer, ensuring you can claim these payments.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ECO4 Section */}
        <Reveal delay={300}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">ECO4 Scheme</h2>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                ECO4 is a government scheme aimed at improving the energy efficiency of housing stock occupied by low-income and vulnerable households.
              </p>
              <h4 className="text-white font-bold mb-4">Eligibility Criteria Usually Includes:</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-400 mb-8">
                <li>Receiving specific benefits (e.g. Universal Credit, Pension Credit).</li>
                <li>Living in a property with an EPC rating of D, E, F or G.</li>
                <li>Owning your own home or having landlord permission.</li>
              </ul>
              <p className="text-sm text-slate-500 italic">
                *Note: We focus on private residential and commercial installations. For ECO4 funding, you usually need to apply through specific grant aggregators or energy suppliers directly.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="text-center mt-20">
          <Button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }}>
            Get Your 0% VAT Quote
          </Button>
        </div>

      </div>
    </div>
  );
};
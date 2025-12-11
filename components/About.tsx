import React, { useEffect } from 'react';
import { SectionTitle, Reveal, Card, Button, Breadcrumbs, StatCard, useSEO } from './UIComponents';
import { ABOUT_CONTENT, ACCREDITATIONS } from '../constants';
import { ShieldCheck, MessageSquare, MapPin } from 'lucide-react';
import * as Icons from 'lucide-react';

interface AboutProps {
  onBack: () => void;
  onNavigate: (view: string) => void;
}

export const About: React.FC<AboutProps> = ({ onBack, onNavigate }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://careyelectrical.co.uk" },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": window.location.href }
        ]
      },
      {
        "@type": "AboutPage",
        "name": "About Carey Electrical",
        "description": "Meet the team behind Carey Electrical, Berkshire's trusted experts in Solar PV and Battery Storage",
        "mainEntity": {
          "@type": "Organization",
          "name": "Carey Electrical",
          "foundingLocation": {
            "@type": "Place",
            "name": "Thatcham, Berkshire"
          },
          "slogan": "Power Your Future With Clean Energy",
          "knowsAbout": ["Solar PV Installation", "Battery Storage", "EV Charging", "Renewable Energy"],
          "hasCredential": ACCREDITATIONS.map(acc => ({
            "@type": "EducationalOccupationalCredential",
            "name": acc.name,
            "description": acc.sub
          }))
        }
      }
    ]
  };

  useSEO(
    "About Carey Electrical - MCS Certified Installers",
    "Meet the team behind Carey Electrical. Based in Thatcham, we are Berkshire's trusted experts in Solar PV and Battery Storage installation.",
    aboutSchema,
    ABOUT_CONTENT.heroImage,
    'website',
    "Carey Electrical, about us, MCS certified, solar installers Berkshire, Thatcham electricians, renewable energy experts"
  );

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent size={24} /> : <ShieldCheck size={24} />;
  };

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Breadcrumbs items={[{ label: 'Home', action: onBack }, { label: 'About Us' }]} />

        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8">
              Local Experts, <span className="text-brand-green">Global Tech</span>
            </h1>
            <img
              src={ABOUT_CONTENT.heroImage}
              alt="Carey Electrical team - MCS certified solar panel installers in Berkshire performing a professional solar installation"
              className="w-full h-[400px] object-cover rounded-3xl shadow-2xl border border-slate-800 mb-12"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-6">
            <SectionTitle subtitle="Our Story" title="Who We Are" />
            <div className="text-slate-300 text-lg leading-relaxed space-y-6">
              {ABOUT_CONTENT.story.map((para, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {ABOUT_CONTENT.teamStats.map((stat, idx) => (
                <Reveal key={idx} delay={200 + (idx * 100)}>
                  <StatCard value={stat.value} label={stat.label} />
                </Reveal>
              ))}
            </div>
            
            <Reveal delay={400}>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-6">Our Accreditations</h3>
                <div className="grid grid-cols-2 gap-4">
                  {ACCREDITATIONS.map((acc, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-400">
                      <ShieldCheck className="text-brand-green shrink-0" size={20} />
                      <span className="text-sm font-medium">{acc.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="bg-slate-950 border-y border-slate-900 py-20 -mx-6 px-6">
          <div className="container mx-auto">
            <SectionTitle subtitle="Core Values" title="The Carey Promise" center />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ABOUT_CONTENT.values.map((val, idx) => (
                <Reveal key={idx} delay={idx * 150}>
                  <Card className="text-center h-full hover:border-brand-green/30">
                    <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-brand-green mx-auto mb-6 shadow-neon">
                      {getIcon(val.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{val.title}</h3>
                    <p className="text-slate-400">{val.desc}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle subtitle="Our Work" title="Recent Installations" center />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/529d5e5e-5571-4a64-a3d1-b431abf65c50 copy.jpg', alt: 'Professional solar panel mounting system installed by Carey Electrical in Berkshire' },
              { src: '/27162577-e234-4b8c-ade3-b26fda59906f copy.jpg', alt: 'Residential solar PV system on slate roof in Newbury' },
              { src: '/a0581ab0-ce18-46e9-bc42-a93599cd0898 copy.jpg', alt: 'Tesla Powerwall battery storage installation in Reading area' },
              { src: '/b6726c41-55cf-4466-b54f-31f8a8c7d682 copy.jpg', alt: 'Complete solar and battery system installed in Basingstoke home' },
              { src: '/baea77fd-a9df-488b-9759-39748439a29a copy.jpg', alt: 'Commercial solar installation on business premises by MCS certified installers' },
              { src: '/img_8048.jpeg', alt: 'High-efficiency solar panels installed on a UK residential property' },
              { src: '/img_0493.jpeg', alt: 'Expert solar panel fitting demonstrating professional workmanship' },
              { src: '/img_8715.jpeg', alt: 'Ground-mounted solar array installation for off-grid energy solution' }
            ].map((image, idx) => (
              <Reveal key={idx} delay={idx * 75}>
                <div className="aspect-square overflow-hidden rounded-xl border border-slate-800 group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Join the Renewable Revolution</h2>
          <Button onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }} className="px-12 py-4 text-lg">
            Contact The Team
          </Button>
        </div>

      </div>
    </div>
  );
};
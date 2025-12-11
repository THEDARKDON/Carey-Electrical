import React, { useEffect } from 'react';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';
import { Button, useSEO } from './UIComponents';
import { BRAND } from '../constants';

interface NotFoundProps {
  onNavigate: (path: string) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO(
    'Page Not Found',
    'The page you are looking for could not be found. Browse our solar panel installation services or contact Carey Electrical for assistance.',
    undefined,
    undefined,
    'website'
  );

  const popularPages = [
    { label: 'Solar Panel Installation', path: '/services/domestic-solar' },
    { label: 'Battery Storage', path: '/services/battery-storage' },
    { label: 'EV Charging', path: '/services/ev-charging' },
    { label: 'Cost Guide', path: '/cost-guide' },
    { label: 'Our Projects', path: '/projects' },
    { label: 'Contact Us', path: '/#contact' }
  ];

  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center pt-20 pb-20">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <div className="mb-8">
          <div className="text-[150px] md:text-[200px] font-extrabold text-slate-900 leading-none select-none">
            404
          </div>
          <div className="relative -mt-16 md:-mt-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Page Not Found
            </h1>
            <p className="text-slate-400 text-lg mb-8">
              Sorry, we couldn't find the page you're looking for. It may have been moved, deleted, or never existed.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button onClick={() => onNavigate('/')} className="gap-2">
            <Home size={18} />
            Go Home
          </Button>
          <Button variant="outline" onClick={() => window.history.back()} className="gap-2">
            <ArrowLeft size={18} />
            Go Back
          </Button>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-left">
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <Search size={18} className="text-brand-green" />
            Popular Pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {popularPages.map((page) => (
              <button
                key={page.path}
                onClick={() => onNavigate(page.path)}
                className="text-left px-4 py-3 rounded-lg bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-brand-green transition-colors text-sm font-medium"
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm mb-4">
            Need help finding something? Get in touch with our team.
          </p>
          <a
            href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 text-brand-green font-bold hover:underline"
          >
            <Phone size={16} />
            {BRAND.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

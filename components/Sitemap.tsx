import React from 'react';
import { Map, Home, Wrench, MapPin, Newspaper, FileText, Package, Briefcase, ChevronRight } from 'lucide-react';
import { Reveal, SectionTitle, useSEO } from './UIComponents';
import { SERVICES, LOCATIONS, BLOG_POSTS, PRODUCTS_CONTENT } from '../constants';

interface SitemapProps {
  onNavigate: (path: string) => void;
}

export const Sitemap: React.FC<SitemapProps> = ({ onNavigate }) => {
  useSEO(
    'Sitemap | Carey Electrical',
    'Complete sitemap for Carey Electrical. Find all pages including services, locations, products, and blog posts.',
    undefined,
    undefined,
    'website'
  );

  const mainPages = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: FileText },
    { name: 'Our Projects', path: '/projects', icon: Briefcase },
    { name: 'Cost Guide', path: '/cost-guide', icon: FileText },
    { name: 'Solar Calculator', path: '/calculator', icon: FileText },
    { name: 'Grants & Incentives', path: '/grants', icon: FileText },
    { name: 'Service Areas', path: '/locations', icon: MapPin },
    { name: 'News & Blog', path: '/news', icon: Newspaper },
    { name: 'Smart Ecosystem', path: '/ecosystem', icon: Package },
    { name: 'Glossary', path: '/glossary', icon: FileText },
  ];

  const serviceCategories = {
    'Solar Installation': SERVICES.filter(s => ['domestic-solar', 'commercial-solar', 'integrated-solar', 'flat-roof-solar', 'ground-mount', 'agricultural-solar', 'solar-carports', 'new-builds'].includes(s.id)),
    'Battery & EV': SERVICES.filter(s => ['battery-storage', 'ev-charging', 'commercial-ev', 'off-grid'].includes(s.id)),
    'Maintenance & Repairs': SERVICES.filter(s => ['solar-repairs', 'maintenance', 'bird-proofing', 'inverter-replacement', 'solar-removal'].includes(s.id)),
  };

  const locationsByCounty: Record<string, typeof LOCATIONS> = {};
  LOCATIONS.forEach(loc => {
    if (!locationsByCounty[loc.county]) locationsByCounty[loc.county] = [];
    locationsByCounty[loc.county].push(loc);
  });

  const products = Object.values(PRODUCTS_CONTENT);

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-sm font-bold mb-6">
              <Map size={16} /> Site Navigation
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Sitemap</h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Explore all pages on our website. Find information about our services, coverage areas, products, and latest news.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal delay={100}>
            <section className="bg-slate-900/50 rounded-2xl border border-slate-800 p-8">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Home size={20} className="text-brand-green" /> Main Pages
              </h2>
              <ul className="space-y-3">
                {mainPages.map((page) => (
                  <li key={page.path}>
                    <a
                      href={`#${page.path}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(page.path); }}
                      className="flex items-center gap-3 text-slate-300 hover:text-brand-green transition-colors group"
                    >
                      <ChevronRight size={14} className="text-slate-600 group-hover:text-brand-green transition-colors" />
                      {page.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={200}>
            <section className="bg-slate-900/50 rounded-2xl border border-slate-800 p-8">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Package size={20} className="text-brand-green" /> Products
              </h2>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.id}>
                    <a
                      href={`#/product/${product.id}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(`/product/${product.id}`); }}
                      className="flex items-center gap-3 text-slate-300 hover:text-brand-green transition-colors group"
                    >
                      <ChevronRight size={14} className="text-slate-600 group-hover:text-brand-green transition-colors" />
                      {product.name} <span className="text-slate-500 text-sm">({product.brand})</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={300}>
            <section className="bg-slate-900/50 rounded-2xl border border-slate-800 p-8 lg:col-span-2">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Wrench size={20} className="text-brand-green" /> Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(serviceCategories).map(([category, services]) => (
                  <div key={category}>
                    <h3 className="text-sm font-bold text-brand-green uppercase tracking-wider mb-4">{category}</h3>
                    <ul className="space-y-3">
                      {services.map((service) => (
                        <li key={service.id}>
                          <a
                            href={`#/services/${service.id}`}
                            onClick={(e) => { e.preventDefault(); onNavigate(`/services/${service.id}`); }}
                            className="flex items-center gap-3 text-slate-300 hover:text-brand-green transition-colors group text-sm"
                          >
                            <ChevronRight size={12} className="text-slate-600 group-hover:text-brand-green transition-colors" />
                            {service.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={400}>
            <section className="bg-slate-900/50 rounded-2xl border border-slate-800 p-8 lg:col-span-2">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin size={20} className="text-brand-green" /> Service Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {Object.entries(locationsByCounty).map(([county, locations]) => (
                  <div key={county}>
                    <h3 className="text-sm font-bold text-brand-green uppercase tracking-wider mb-4">{county}</h3>
                    <ul className="space-y-2">
                      {locations.map((location) => (
                        <li key={location.slug}>
                          <a
                            href={`#/location/${location.slug}`}
                            onClick={(e) => { e.preventDefault(); onNavigate(`/location/${location.slug}`); }}
                            className="flex items-center gap-2 text-slate-300 hover:text-brand-green transition-colors group text-sm"
                          >
                            <ChevronRight size={12} className="text-slate-600 group-hover:text-brand-green transition-colors" />
                            {location.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal delay={500}>
            <section className="bg-slate-900/50 rounded-2xl border border-slate-800 p-8 lg:col-span-2">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Newspaper size={20} className="text-brand-green" /> News & Blog
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {BLOG_POSTS.map((post) => (
                  <a
                    key={post.slug}
                    href={`#/news/${post.slug}`}
                    onClick={(e) => { e.preventDefault(); onNavigate(`/news/${post.slug}`); }}
                    className="flex items-start gap-3 text-slate-300 hover:text-brand-green transition-colors group p-3 rounded-lg hover:bg-slate-800/50"
                  >
                    <ChevronRight size={14} className="text-slate-600 group-hover:text-brand-green transition-colors mt-1 shrink-0" />
                    <div>
                      <span className="text-sm line-clamp-2">{post.title}</span>
                      <span className="text-xs text-slate-500 block mt-1">{post.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Instagram, Facebook, Mail, Phone, MapPin, ChevronRight, ShieldCheck, Home, Building2, BatteryCharging, Layers, WifiOff, ArrowUp, CheckCircle, Loader2, ChevronDown, Car, RefreshCw, Wrench, Hammer, HardHat, Feather, ZapOff, Building, Warehouse, SquareStack, LayoutGrid, Wheat } from 'lucide-react';
import { Button, SectionTitle, Card, Reveal, TestimonialCard, StatCard, ParticleBackground, useSEO, Typewriter, Marquee } from './components/UIComponents';
import { SolarCalculator } from './components/Calculator';
import { ServiceDetail } from './components/ServiceDetail';
import { ProductDetail } from './components/ProductDetail';
import { LocationDetail } from './components/LocationDetail';
import { Blog } from './components/Blog';
import { BlogPostDetail } from './components/BlogPostDetail';
import { Portfolio } from './components/Portfolio';
import { ProjectDetail } from './components/ProjectDetail';
import { Locations } from './components/Locations';
import { LiveMonitor } from './components/LiveMonitor';
import { SmartEcosystem } from './components/Ecosystem'; 
import { CostGuide } from './components/CostGuide';
import { Grants } from './components/Grants';
import { About } from './components/About';
import { Glossary } from './components/Glossary';
import { BRAND, SERVICES, PROJECTS, SERVICE_DETAILS, PRODUCTS_CONTENT, TRUSTED_BRANDS, TESTIMONIALS, ACCREDITATIONS, LOCATION_CONTENT, BLOG_CONTENT, LOCATIONS } from './constants';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState('home');
  const [params, setParams] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // --- ROUTING LOGIC (HASH BASED) ---
  
  const parseUrl = () => {
    // Get the hash, remove the '#' symbol
    const hash = window.location.hash.substring(1); 
    
    if (hash === '/' || hash === '') return { view: 'home', params: '' };
    if (hash === '/projects') return { view: 'portfolio', params: '' };
    if (hash === '/news') return { view: 'blog', params: '' };
    if (hash === '/locations') return { view: 'locations', params: '' };
    if (hash === '/cost-guide') return { view: 'cost-guide', params: '' };
    if (hash === '/grants') return { view: 'grants', params: '' };
    if (hash === '/about') return { view: 'about', params: '' };
    if (hash === '/glossary') return { view: 'glossary', params: '' };
    
    // Dynamic Routes
    if (hash.startsWith('/services/')) return { view: 'service', params: hash.split('/services/')[1] };
    if (hash.startsWith('/location/')) return { view: 'location-detail', params: hash.split('/location/')[1] };
    if (hash.startsWith('/product/')) return { view: 'product', params: hash.split('/product/')[1] };
    if (hash.startsWith('/news/')) return { view: 'blog-post', params: hash.split('/news/')[1] };
    if (hash.startsWith('/project/')) return { view: 'project-detail', params: hash.split('/project/')[1] };
    
    return { view: 'home', params: '' }; // Fallback
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Initial Load
    const { view, params } = parseUrl();
    setView(view);
    setParams(params);

    // Hash Change Listener
    const onHashChange = () => {
      const { view, params } = parseUrl();
      setView(view);
      setParams(params);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  // Navigation Function
  const navigate = (path: string) => {
    window.location.hash = path;
    setIsMenuOpen(false);
  };

  // Contact Form Handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setContactMessage('');
    }, 1500);
  };

  // Calculator Callback
  const handleCalculatorQuote = (data: any) => {
    const msg = `I used your ROI calculator. I have a monthly bill of £${data.bill} and I am interested in a ${data.systemSize}kW system with ${data.battery}kWh battery. Est. savings £${data.savings}/yr.`;
    setContactMessage(msg);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // --- SEO FOR HOME ---
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": BRAND.name,
    "image": 'IMG_3254.jpeg', 
    "telephone": BRAND.phone,
    "email": BRAND.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thatcham",
      "addressRegion": "Berkshire",
      "postalCode": "RG18 3BD",
      "addressCountry": "UK"
    },
    "priceRange": "££",
    "areaServed": ["Newbury", "Reading", "Basingstoke", "Winchester", "Oxford"],
    "sameAs": [
      "https://www.facebook.com/careyelectrical",
      "https://www.instagram.com/careyelectrical"
    ]
  };

  useSEO(
    view === 'home' ? "Solar Panels & Battery Storage Experts Berkshire" : "Carey Electrical",
    view === 'home' ? "Carey Electrical are MCS certified solar installers serving Newbury, Reading & Basingstoke. Get a free quote for Solar PV, Tesla Powerwall & Myenergi Libbi systems." : "",
    view === 'home' ? orgSchema : undefined
  );

  const Navbar = () => (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-black/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-glass' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => navigate('/')}>
          <img
            src="/image1.png"
            alt="Carey Electrical"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-8 bg-brand-black/30 px-8 py-3 rounded-full border border-white/5 backdrop-blur-sm">
          <a onClick={() => navigate('/')} className={`text-sm font-medium cursor-pointer transition-colors hover:scale-105 transform duration-200 ${view === 'home' ? 'text-brand-green' : 'text-slate-300 hover:text-white'}`}>Home</a>
          
          <div className="relative group">
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1">
              Services <ChevronRight size={14} className="rotate-90" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64">
              <div className="bg-brand-black border border-slate-700 rounded-xl p-2 shadow-2xl flex flex-col gap-1 max-h-80 overflow-y-auto custom-scrollbar">
                {SERVICES.map(s => (
                  <button key={s.id} onClick={() => navigate(`/services/${s.id}`)} className="text-left px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-brand-green rounded-lg transition-colors flex items-center gap-3 w-full">
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <a onClick={() => navigate('/projects')} className={`text-sm font-medium cursor-pointer transition-colors hover:scale-105 transform duration-200 ${view === 'portfolio' ? 'text-brand-green' : 'text-slate-300 hover:text-white'}`}>Projects</a>
          <a onClick={() => navigate('/cost-guide')} className={`text-sm font-medium cursor-pointer transition-colors hover:scale-105 transform duration-200 ${view === 'cost-guide' ? 'text-brand-green' : 'text-slate-300 hover:text-white'}`}>Costs</a>
          <a onClick={() => navigate('/locations')} className={`text-sm font-medium cursor-pointer transition-colors hover:scale-105 transform duration-200 ${view === 'locations' ? 'text-brand-green' : 'text-slate-300 hover:text-white'}`}>Locations</a>
          <a onClick={() => navigate('/news')} className={`text-sm font-medium cursor-pointer transition-colors hover:scale-105 transform duration-200 ${view === 'blog' ? 'text-brand-green' : 'text-slate-300 hover:text-white'}`}>News</a>
        </div>

        <div className="hidden md:block">
           <Button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100); }} className="text-sm">Get Quote</Button>
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-brand-black z-40 flex flex-col items-center justify-center gap-6 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <a onClick={() => navigate('/')} className="text-2xl font-bold text-slate-300 hover:text-brand-green cursor-pointer">Home</a>
        <a onClick={() => navigate('/about')} className="text-2xl font-bold text-slate-300 hover:text-brand-green cursor-pointer">About Us</a>
        <a onClick={() => navigate('/projects')} className="text-2xl font-bold text-slate-300 hover:text-brand-green cursor-pointer">Projects</a>
        <a onClick={() => navigate('/cost-guide')} className="text-2xl font-bold text-slate-300 hover:text-brand-green cursor-pointer">Pricing Guide</a>
        <a onClick={() => navigate('/news')} className="text-2xl font-bold text-slate-300 hover:text-brand-green cursor-pointer">News</a>
        <a onClick={() => navigate('/grants')} className="text-2xl font-bold text-slate-300 hover:text-brand-green cursor-pointer">Grants</a>
        <div className="h-px w-20 bg-slate-800" />
        <Button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }}>Get Quote</Button>
      </div>
    </nav>
  );

  const Hero = () => {
    const heroImages = [
      '/img_0493.jpeg',
      '/img_8048.jpeg',
      '/img_0875.jpeg',
      '/img_8715.jpeg',
      '/img_0366.jpeg',
      '/b6726c41-55cf-4466-b54f-31f8a8c7d682.jpg',
      '/img_0494.jpeg',
      '/a0581ab0-ce18-46e9-bc42-a93599cd0898.jpg',
      '/img_0876.jpeg'
    ];
    
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
      }, 5000); 
      return () => clearInterval(interval);
    }, []);

    return (
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden bg-brand-black">
          {heroImages.map((img, idx) => (
             <div 
               key={img}
               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentImageIdx ? 'opacity-50' : 'opacity-0'}`}
             >
               <img 
                 src={img} 
                 alt="Solar Installation Background" 
                 className={`w-full h-full object-cover animate-ken-burns origin-center ${idx === currentImageIdx ? 'scale-100' : 'scale-110'}`}
               />
             </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/50 to-brand-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-brand-black/60 to-brand-black" />
          
          <ParticleBackground />
        </div>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl animate-float -z-0 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-glow/10 rounded-full blur-3xl animate-pulse-slow -z-0 mix-blend-screen" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-brand-green/30 text-brand-green text-sm font-bold mb-8 backdrop-blur-md shadow-neon hover:scale-105 transition-transform cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                </span>
                <span>Accepting New Projects for 2025</span>
              </div>
            </Reveal>
            
            <Reveal delay={100}>
              <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-tight mb-8 tracking-tight drop-shadow-2xl">
                Power Your Future <br className="hidden md:block"/> With <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-glow to-teal-400 text-glow"><Typewriter text="Clean Energy" /></span>
              </h1>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                We design and install high-performance Solar PV & Battery Storage systems. 
                Certified experts serving {BRAND.location}. 
                <span className="text-white font-medium"> Reduce bills. Gain independence.</span>
              </p>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="text-lg px-10 py-5" onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})}>
                  Calculate Your Savings
                </Button>
                <Button variant="outline" className="text-lg px-10 py-5 bg-brand-black/40 backdrop-blur-sm" onClick={() => navigate('/cost-guide')}>
                  View Cost Guide
                </Button>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-20 pt-10 border-t border-white/5 w-full">
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  {ACCREDITATIONS.map((acc, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <ShieldCheck className="text-brand-green" size={24} />
                      <div className="text-left">
                        <p className="text-white font-bold text-sm leading-none">{acc.name}</p>
                        <p className="text-slate-500 text-sm uppercase tracking-wide">{acc.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-green/50 animate-bounce">
            <ChevronDown size={32} />
        </div>
      </section>
    );
  };

  // Modern Bento Grid for Services
  const ServicesList = () => {
    const iconMap: Record<string, any> = {
       'Home': Home, 
       'Building2': Building2, 
       'BatteryCharging': BatteryCharging, 
       'Layers': Layers, 
       'WifiOff': WifiOff,
       'Car': Car,
       'RefreshCw': RefreshCw,
       'Wrench': Wrench,
       'Hammer': Hammer,
       'HardHat': HardHat,
       'Feather': Feather,
       'ZapOff': ZapOff,
       'Building': Building,
       'Warehouse': Warehouse,
       'SquareStack': SquareStack,
       'LayoutGrid': LayoutGrid,
       'Wheat': Wheat
    };

    // Helper to get specific services by ID
    const getService = (id: string) => SERVICES.find(s => s.id === id);
    
    // Bento Box Item Component
    const BentoItem = ({ service, className, large = false }: { service: any, className?: string, large?: boolean }) => {
      if (!service) return null;
      const Icon = iconMap[service.icon] || Home;
      return (
        <div 
          onClick={() => navigate(`/services/${service.id}`)}
          className={`group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-brand-green/30 transition-all duration-300 cursor-pointer ${className}`}
        >
          {/* Background Gradient/Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 z-0" />
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
             <Icon size={large ? 200 : 120} />
          </div>

          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-brand-green mb-4 group-hover:bg-brand-green group-hover:text-black transition-colors shadow-lg">
                <Icon size={24} />
              </div>
              <h3 className={`${large ? 'text-3xl' : 'text-xl'} font-bold text-white mb-2`}>{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </div>
            
            <div className="mt-4 flex items-center text-brand-green text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
               Explore <ArrowRight size={16} className="ml-2" />
            </div>
          </div>
        </div>
      );
    };

    return (
      <section id="services" className="py-32 bg-brand-black relative">
        <div className="container mx-auto px-6 relative z-20">
          <SectionTitle subtitle="Our Expertise" title="Complete Energy Solutions" center />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
            
            {/* ROW 1 */}
            <Reveal>
              <BentoItem service={getService('domestic-solar')} className="md:col-span-2 md:row-span-2 min-h-[420px]" large />
            </Reveal>

            <Reveal delay={100}>
              <BentoItem service={getService('battery-storage')} className="md:col-span-2 min-h-[200px]" />
            </Reveal>

            {/* ROW 2 */}
            <Reveal delay={200}>
               <BentoItem service={getService('ev-charging')} className="md:col-span-1 min-h-[200px]" />
            </Reveal>

            <Reveal delay={300}>
               <BentoItem service={getService('integrated-solar')} className="md:col-span-1 min-h-[200px]" />
            </Reveal>

            {/* ROW 3 */}
            <Reveal delay={350}>
               <BentoItem service={getService('solar-carports')} className="md:col-span-1 min-h-[200px]" />
            </Reveal>

            <Reveal delay={400}>
               <BentoItem service={getService('flat-roof-solar')} className="md:col-span-1 min-h-[200px]" />
            </Reveal>

            <Reveal delay={450}>
               <BentoItem service={getService('solar-repairs')} className="md:col-span-1 min-h-[200px]" />
            </Reveal>

            <Reveal delay={500}>
               <BentoItem service={getService('inverter-replacement')} className="md:col-span-1 min-h-[200px]" />
            </Reveal>

            <Reveal delay={550}>
               <BentoItem service={getService('solar-removal')} className="md:col-span-1 min-h-[200px]" />
            </Reveal>

            <Reveal delay={600}>
               <BentoItem service={getService('new-builds')} className="md:col-span-1 min-h-[200px]" />
            </Reveal>

            {/* ROW 4 */}
            <Reveal delay={650}>
               <BentoItem service={getService('bird-proofing')} className="md:col-span-1 min-h-[200px]" />
            </Reveal>

            <Reveal delay={700}>
               <BentoItem service={getService('maintenance')} className="md:col-span-1 min-h-[200px]" />
            </Reveal>

            <Reveal delay={750}>
               <BentoItem service={getService('ground-mount')} className="md:col-span-1 min-h-[200px]" />
            </Reveal>

            <Reveal delay={800}>
               <BentoItem service={getService('off-grid')} className="md:col-span-1 min-h-[200px]" />
            </Reveal>

            {/* ROW 5 */}
            <Reveal delay={850}>
               <BentoItem service={getService('commercial-solar')} className="md:col-span-2 min-h-[200px]" />
            </Reveal>

            <Reveal delay={900}>
               <BentoItem service={getService('agricultural-solar')} className="md:col-span-1 min-h-[200px]" />
            </Reveal>

            <Reveal delay={950}>
               <BentoItem service={getService('commercial-ev')} className="md:col-span-1 min-h-[200px]" />
            </Reveal>

          </div>
        </div>
      </section>
    );
  };

  const ImpactStats = () => (
    <section className="py-20 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Market Data" title="Why Solar Now?" center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal>
            <StatCard value="+45%" label="Energy Prices" subtext="Increase in grid electricity costs over 3 years" />
          </Reveal>
          <Reveal delay={150}>
            <StatCard value="0%" label="VAT on Batteries" subtext="Government incentive extended for 2025" />
          </Reveal>
          <Reveal delay={300}>
            <StatCard value="12-15%" label="ROI" subtext="Tax-free return on investment per annum" />
          </Reveal>
        </div>
      </div>
    </section>
  );

  // ... (Rest of components: TrustedBrands, Gallery, Testimonials, Contact, Footer, MobileStickyCTA)
  
  // Reuse existing component definitions for brevity as they haven't changed except for being inside the file
  const TrustedBrands = () => (
    <section className="py-20 bg-brand-black border-t border-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Authorized Installers For Market Leaders</p>
      </div>
      
      <Marquee speed={30}>
          {TRUSTED_BRANDS.map((brand, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 mx-8">
               {/* Placeholder for Logo if available, else text */}
               <h4 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">{brand.name}</h4>
               <span className="text-[10px] text-brand-green uppercase tracking-wider mt-1">Certified</span>
            </div>
          ))}
      </Marquee>
    </section>
  );

  const Gallery = () => (
    <section id="projects" className="py-32 bg-slate-900 relative">
      <div className="absolute inset-0 bg-brand-black/90" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <SectionTitle subtitle="Recent Installations" title="Excellence in Every Detail" className="mb-0" />
          <div className="hidden md:block pb-6">
             <Button variant="outline" onClick={() => navigate('/projects')}>View Full Portfolio</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((project, idx) => (
             <Reveal key={project.id} delay={idx * 150}>
              <div 
                className={`group relative overflow-hidden rounded-2xl h-[400px] border border-slate-700/50 bg-slate-800 shadow-2xl ${project.slug ? 'cursor-pointer' : ''}`}
                onClick={() => project.slug && navigate(`/project/${project.slug}`)}
              >
                <img 
                  src={project.url} 
                  alt={project.description} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-fit px-3 py-1 bg-brand-green text-brand-black text-xs font-bold uppercase tracking-wider rounded-full mb-3 shadow-lg">
                    {project.category}
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2 leading-snug">{project.description}</h4>
                  <div className="h-1 w-0 bg-brand-green rounded-full group-hover:w-16 transition-all duration-500 delay-100 shadow-[0_0_10px_#10b981]" />
                </div>
                {project.slug && (
                  <div className="absolute top-4 right-4 bg-brand-black/50 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 hover:bg-brand-green hover:text-black hover:border-brand-green text-white">
                     <ArrowRight size={20} />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" onClick={() => navigate('/projects')}>View All Projects</Button>
        </div>
      </div>
    </section>
  );

  const Testimonials = () => (
    <section className="py-20 bg-brand-black">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Client Feedback" title="What Our Customers Say" center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 200}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );

  const Contact = () => (
    <section id="contact" className="py-32 bg-brand-black border-t border-slate-900 relative">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-900/20 skew-x-12 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionTitle subtitle="Get In Touch" title="Start Your Energy Journey" />
            <Reveal delay={100}>
              <p className="text-slate-300 mb-12 text-lg leading-relaxed">
                Ready to reduce your reliance on the grid? Contact {BRAND.name} for a free, no-obligation survey and quotation. We prioritize clear communication and transparent pricing.
              </p>
            </Reveal>
            
            <div className="space-y-8">
              {[
                { icon: Phone, title: "Call Us", value: BRAND.phone, desc: "Mon-Fri from 8am to 6pm" },
                { icon: Mail, title: "Email Us", value: BRAND.email, desc: "We usually reply within 24 hours" },
                { icon: MapPin, title: "Service Area", value: BRAND.location, desc: "Local experts at your door" }
              ].map((item, i) => (
                <Reveal key={i} delay={200 + (i * 100)}>
                  <div className="flex items-center gap-6 text-white group p-4 rounded-xl transition-colors hover:bg-slate-900/50 border border-transparent hover:border-slate-800">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-brand-green border border-slate-700 group-hover:scale-110 group-hover:border-brand-green/50 transition-all shadow-lg group-hover:shadow-neon">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium mb-1 uppercase tracking-wide">{item.title}</p>
                      <p className="font-bold text-2xl group-hover:text-brand-green transition-colors">{item.value}</p>
                      <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={300}>
            <Card className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 shadow-2xl relative overflow-hidden">
              {formStatus === 'success' ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-slate-900 animate-in fade-in zoom-in">
                  <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-brand-green w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-slate-400 mb-8">Thank you for contacting Carey Electrical. One of our engineers will be in touch shortly to discuss your project.</p>
                  <Button variant="outline" onClick={() => { setFormStatus('idle'); setContactMessage(''); }}>Send Another</Button>
                </div>
              ) : (
                <form className="space-y-6 relative z-10" onSubmit={handleFormSubmit}>
                  <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-400 ml-1">First Name</label>
                      <input required type="text" className="w-full bg-brand-black/50 border border-slate-700 rounded-lg p-4 text-white focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all placeholder:text-slate-600" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-400 ml-1">Last Name</label>
                      <input required type="text" className="w-full bg-brand-black/50 border border-slate-700 rounded-lg p-4 text-white focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all placeholder:text-slate-600" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
                    <input required type="email" className="w-full bg-brand-black/50 border border-slate-700 rounded-lg p-4 text-white focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all placeholder:text-slate-600" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-400 ml-1">I'm interested in...</label>
                    <select className="w-full bg-brand-black/50 border border-slate-700 rounded-lg p-4 text-white focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all">
                      <option>Solar PV Installation</option>
                      <option>Battery Storage</option>
                      <option>EV Charging</option>
                      <option>System Maintenance</option>
                      <option>Commercial Quote</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-400 ml-1">Message</label>
                    <textarea 
                      required 
                      rows={4} 
                      className="w-full bg-brand-black/50 border border-slate-700 rounded-lg p-4 text-white focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all placeholder:text-slate-600" 
                      placeholder="Tell us about your project..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <Button fullWidth className="py-5 text-lg mt-4" disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center"><Loader2 className="animate-spin mr-2" /> Sending...</span>
                    ) : 'Send Enquiry'}
                  </Button>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-brand-black border-t border-slate-900 pt-20 pb-24 md:pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
             <img
               src="/image1.png"
               alt="Carey Electrical"
               className="h-10 w-auto object-contain"
             />
             <p className="text-slate-400 leading-relaxed max-w-sm">
               Leading the way in renewable energy solutions for Berkshire and beyond. MCS Certified excellence in Solar PV, Battery Storage, and EV Charging.
             </p>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-brand-green hover:text-brand-black transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-brand-green hover:text-brand-black transition-all">
                  <Facebook size={20} />
                </a>
             </div>
          </div>
          
          {/* Column 2: Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {SERVICES.map(s => (
                <li key={s.id}><a onClick={() => navigate(`/services/${s.id}`)} className="hover:text-brand-green transition-colors cursor-pointer block py-1">{s.title}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a onClick={() => navigate('/about')} className="hover:text-brand-green transition-colors cursor-pointer block py-1">About Us</a></li>
              <li><a onClick={() => navigate('/cost-guide')} className="hover:text-brand-green transition-colors cursor-pointer block py-1">Pricing Guide</a></li>
              <li><a onClick={() => navigate('/projects')} className="hover:text-brand-green transition-colors cursor-pointer block py-1">Our Projects</a></li>
              <li><a onClick={() => navigate('/news')} className="hover:text-brand-green transition-colors cursor-pointer block py-1">Industry News</a></li>
              <li><a onClick={() => navigate('/grants')} className="hover:text-brand-green transition-colors cursor-pointer block py-1">Grants & Funding</a></li>
              <li><a onClick={() => navigate('/glossary')} className="hover:text-brand-green transition-colors cursor-pointer block py-1">Solar Glossary</a></li>
            </ul>
          </div>

          {/* Column 4: Locations (Expanded) */}
          <div className="lg:col-span-4">
             <h4 className="text-white font-bold mb-6 text-lg">Areas We Cover</h4>
             <div className="grid grid-cols-2 gap-x-4 gap-y-2">
               {LOCATIONS.map(loc => (
                 <a 
                   key={loc.slug} 
                   onClick={() => navigate(`/location/${loc.slug}`)} 
                   className="text-slate-400 text-sm hover:text-brand-green transition-colors cursor-pointer truncate"
                 >
                   {loc.name}
                 </a>
               ))}
             </div>
             <a onClick={() => navigate('/locations')} className="text-brand-green text-xs font-bold uppercase tracking-wider mt-4 inline-block hover:underline cursor-pointer">
               View Full Map &rarr;
             </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Carey Electrical. All rights reserved.</p>
          <div className="flex gap-2">
             <span className="px-2 py-1 bg-slate-800 rounded text-xs">MCS Certified</span>
             <span className="px-2 py-1 bg-slate-800 rounded text-xs">NICEIC</span>
             <span className="px-2 py-1 bg-slate-800 rounded text-xs">RECC</span>
          </div>
        </div>
      </div>
    </footer>
  );

  // Mobile Sticky CTA
  const MobileStickyCTA = () => (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-slate-900 border-t border-slate-800 p-4 z-50 flex gap-3 shadow-2xl safe-area-bottom">
      <Button variant="secondary" className="flex-1 text-sm py-3" onClick={() => window.location.href = `tel:${BRAND.phone.replace(/\s/g, '')}`}>
        <Phone size={16} /> Call
      </Button>
      <Button variant="primary" className="flex-1 text-sm py-3" onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }}>
        Get Quote
      </Button>
    </div>
  );

  // VIEW CONTROLLER
  
  if (view === 'about') {
    return (
      <div className="bg-brand-black min-h-screen text-slate-200">
        <Navbar />
        <About onBack={() => navigate('/')} onNavigate={(path) => navigate(path === 'home' ? '/' : path)} />
        <Footer />
        <MobileStickyCTA />
      </div>
    )
  }

  if (view === 'cost-guide') {
    return (
      <div className="bg-brand-black min-h-screen text-slate-200">
        <Navbar />
        <CostGuide onBack={() => navigate('/')} onNavigate={(path) => navigate(path === 'home' ? '/' : path)} />
        <Footer />
        <MobileStickyCTA />
      </div>
    )
  }

  if (view === 'grants') {
    return (
      <div className="bg-brand-black min-h-screen text-slate-200">
        <Navbar />
        <Grants onBack={() => navigate('/')} onNavigate={(path) => navigate(path === 'home' ? '/' : path)} />
        <Footer />
        <MobileStickyCTA />
      </div>
    )
  }

  if (view === 'glossary') {
    return (
      <div className="bg-brand-black min-h-screen text-slate-200">
        <Navbar />
        <Glossary onBack={() => navigate('/')} onNavigate={(path) => navigate(path === 'home' ? '/' : path)} />
        <Footer />
        <MobileStickyCTA />
      </div>
    )
  }

  if (view === 'product' && params && PRODUCTS_CONTENT[params]) {
    return (
      <div className="bg-brand-black min-h-screen text-slate-200">
        <Navbar />
        <ProductDetail 
          data={PRODUCTS_CONTENT[params]} 
          onBack={() => navigate('/')}
          onNavigate={(path) => navigate(path === 'home' ? '/' : path)}
        />
        <Footer />
        <MobileStickyCTA />
      </div>
    )
  }

  if (view === 'project-detail' && params) {
    const project = PROJECTS.find(p => p.slug === params);
    if (project) {
      return (
        <div className="bg-brand-black min-h-screen text-slate-200">
          <Navbar />
          <ProjectDetail 
            data={project} 
            onBack={() => navigate('/projects')}
            onNavigate={(path) => navigate(path === 'home' ? '/' : path)}
          />
          <Footer />
          <MobileStickyCTA />
        </div>
      )
    }
  }

  if (view === 'blog-post' && params && BLOG_CONTENT[params]) {
    return (
      <div className="bg-brand-black min-h-screen text-slate-200">
        <Navbar />
        <BlogPostDetail 
          data={BLOG_CONTENT[params]} 
          onBack={() => navigate('/news')}
          onNavigate={(path) => navigate(path === 'home' ? '/' : path)}
        />
        <Footer />
        <MobileStickyCTA />
      </div>
    )
  }

  if (view === 'location-detail' && params && LOCATION_CONTENT[params]) {
    return (
      <div className="bg-brand-black min-h-screen text-slate-200">
        <Navbar />
        <LocationDetail 
          data={LOCATION_CONTENT[params]} 
          onBack={() => navigate('/locations')}
          onNavigate={(path) => navigate(path === 'home' ? '/' : path)}
        />
        <Footer />
        <MobileStickyCTA />
      </div>
    )
  }

  if (view === 'service' && params && SERVICE_DETAILS[params]) {
    return (
      <div className="bg-brand-black min-h-screen text-slate-200 selection:bg-brand-green selection:text-brand-black">
        <Navbar />
        <ServiceDetail 
          data={SERVICE_DETAILS[params]} 
          onBack={() => navigate('/')}
          onCtaClick={() => {
             navigate('/');
             setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100);
          }}
          onProductClick={(id) => navigate(`/product/${id}`)}
        />
        <Footer />
        <MobileStickyCTA />
      </div>
    );
  }

  if (view === 'blog') {
    return (
      <div className="bg-brand-black min-h-screen text-slate-200">
        <Navbar />
        <Blog onBack={() => navigate('/')} onNavigate={(path) => navigate(path)} />
        <Footer />
        <MobileStickyCTA />
      </div>
    )
  }

  if (view === 'portfolio') {
    return (
      <div className="bg-brand-black min-h-screen text-slate-200">
        <Navbar />
        <Portfolio onBack={() => navigate('/')} onNavigate={(path) => navigate(path)} />
        <Footer />
        <MobileStickyCTA />
      </div>
    )
  }

  if (view === 'locations') {
    return (
      <div className="bg-brand-black min-h-screen text-slate-200">
        <Navbar />
        <Locations onBack={() => navigate('/')} onNavigate={(slug) => navigate(`/location/${slug}`)} />
        <Footer />
        <MobileStickyCTA />
      </div>
    )
  }

  // DEFAULT HOME VIEW
  return (
    <div className="bg-brand-black min-h-screen text-slate-200 selection:bg-brand-green selection:text-brand-black">
      <Navbar />
      <Hero />
      <ImpactStats />
      <LiveMonitor />
      <ServicesList />
      <SmartEcosystem />
      <Gallery />
      <SolarCalculator onRequestQuote={handleCalculatorQuote} />
      <Testimonials />
      <TrustedBrands />
      <Contact />
      <Footer />
      <MobileStickyCTA />
      
      {/* Scroll To Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-20 md:bottom-8 right-8 bg-brand-green text-brand-black p-3 rounded-full shadow-neon hover:shadow-neon-hover transition-all transform hover:-translate-y-1 z-40 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;
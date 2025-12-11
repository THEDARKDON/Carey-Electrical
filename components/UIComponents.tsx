import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronRight, Home } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyle = "relative overflow-hidden px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-brand-green/50 group";
  
  const variants = {
    primary: "bg-brand-green text-brand-black shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-neon border border-transparent hover:border-brand-glow/50",
    secondary: "bg-brand-grey text-white hover:bg-slate-700 border border-slate-600",
    outline: "bg-transparent border-2 border-brand-green text-brand-green hover:bg-brand-green/10 hover:shadow-neon shadow-[inset_0_0_10px_rgba(16,185,129,0.1)]"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      )}
    </button>
  );
};

export const SectionTitle: React.FC<{ subtitle: string; title: string; center?: boolean; className?: string }> = ({ subtitle, title, center, className = '' }) => (
  <div className={`mb-16 ${center ? 'text-center' : ''} ${className}`}>
    <Reveal>
      <span className="text-brand-green font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
        {title}
      </h2>
      <div className={`h-1.5 w-24 bg-gradient-to-r from-brand-green to-brand-glow mt-6 rounded-full ${center ? 'mx-auto' : ''} shadow-[0_0_15px_#10b981]`} />
    </Reveal>
  </div>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string; hoverEffect?: boolean }> = ({ children, className = '', hoverEffect = true }) => (
  <div className={`glass-panel p-8 rounded-2xl border border-white/5 transition-all duration-500 relative overflow-hidden group ${className}`}>
    {hoverEffect && (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-green/20 to-transparent blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      </>
    )}
    <div className="relative z-10 h-full">
      {children}
    </div>
  </div>
);

export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold uppercase tracking-wider text-brand-green ${className}`}>
    {children}
  </span>
);

export const StatCard: React.FC<{ value: string; label: string; subtext?: string }> = ({ value, label, subtext }) => (
  <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-center group hover:border-brand-green/30 transition-all">
    <div className="text-4xl md:text-5xl font-extrabold text-brand-green mb-2 group-hover:scale-110 transition-transform duration-300">{value}</div>
    <div className="text-white font-bold text-lg uppercase tracking-wide mb-1">{label}</div>
    {subtext && <div className="text-slate-500 text-sm">{subtext}</div>}
  </div>
);

export const TestimonialCard: React.FC<{ name: string; location: string; quote: string; rating: number; system: string }> = ({ name, location, quote, rating, system }) => (
  <Card className="h-full">
    <div className="flex justify-between items-start mb-6">
      <div className="flex text-amber-400 gap-1">
        {[...Array(rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <Quote className="text-slate-700 w-8 h-8" />
    </div>
    <p className="text-slate-300 italic mb-6 leading-relaxed">"{quote}"</p>
    <div className="mt-auto border-t border-slate-800 pt-4">
      <p className="text-white font-bold">{name}</p>
      <p className="text-brand-green text-xs uppercase tracking-wider mb-1">{location}</p>
      <p className="text-slate-500 text-xs flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-brand-green" /> {system}
      </p>
    </div>
  </Card>
);

// Animation Component for scrolling reveal
export const Reveal: React.FC<{ children: React.ReactNode; width?: "fit-content" | "100%"; delay?: number }> = ({ children, width = "100%", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    }
  }, []);

  return (
    <div 
      ref={ref} 
      style={{ 
        width, 
        transitionDelay: `${delay}ms` 
      }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

export const CountUp: React.FC<{ end: number; duration?: number; suffix?: string; prefix?: string }> = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setHasAnimated(true);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

// Particle Background Component
export const ParticleBackground: React.FC = () => {
  useEffect(() => {
    // Simple CSS-only particle implementation for performance
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="absolute bg-brand-green/20 rounded-full animate-float"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDuration: Math.random() * 10 + 5 + 's',
            animationDelay: Math.random() * 5 + 's',
            opacity: Math.random() * 0.5
          }}
        />
      ))}
    </div>
  );
};

// Breadcrumbs for SEO Structure
export const Breadcrumbs: React.FC<{ items: { label: string; action?: () => void }[] }> = ({ items }) => (
  <nav className="flex text-sm text-slate-500 mb-6 font-medium animate-in fade-in slide-in-from-left-2">
    <ol className="flex items-center space-x-2">
      <li>
        <button onClick={items[0].action} className="hover:text-brand-green transition-colors flex items-center">
          <Home size={14} className="mr-1" /> Home
        </button>
      </li>
      {items.slice(1).map((item, index) => (
        <li key={index} className="flex items-center">
          <ChevronRight size={14} className="mx-2 text-slate-700" />
          {item.action ? (
            <button onClick={item.action} className="hover:text-brand-green transition-colors">
              {item.label}
            </button>
          ) : (
            <span className="text-slate-300">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

// Typewriter Effect for Hero
export const Typewriter: React.FC<{ text: string; delay?: number }> = ({ text, delay = 50 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

// Simple Bar Chart for ROI Visualization
export const SimpleBarChart: React.FC<{ data: number[] }> = ({ data }) => {
  const maxVal = Math.max(...data.map(Math.abs));
  
  return (
    <div className="w-full h-40 flex items-end justify-between gap-1 mt-4">
      {data.map((val, i) => {
        const height = (Math.abs(val) / maxVal) * 100;
        return (
          <div key={i} className="flex-1 flex flex-col justify-end group relative">
            <div 
              style={{ height: `${height}%` }} 
              className={`w-full rounded-t-sm transition-all duration-500 ${val >= 0 ? 'bg-brand-green' : 'bg-red-500/50'}`}
            >
              <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-xs px-2 py-1 rounded border border-slate-700 whitespace-nowrap z-10">
                Yr {i+1}: £{val.toLocaleString()}
              </div>
            </div>
            <div className="h-[1px] bg-slate-700 w-full mt-1"></div>
          </div>
        )
      })}
    </div>
  );
}

// Marquee for Infinite Scrolling Brands
export const Marquee: React.FC<{ children: React.ReactNode; direction?: 'left' | 'right'; speed?: number }> = ({ children, direction = 'left', speed = 40 }) => {
  return (
    <div className="overflow-hidden flex w-full mask-gradient">
       <div className={`flex gap-16 md:gap-24 min-w-full animate-scroll`} style={{ animationDirection: direction === 'right' ? 'reverse' : 'normal', animationDuration: `${speed}s` }}>
         {children}
         {children} {/* Duplicate for seamless loop */}
       </div>
    </div>
  )
}

// --- SEO HOOK ---
interface SEOProps {
  title: string;
  description: string;
  schema?: object;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string;
}

export const useSEO = (title: string, description: string, schema?: object, image?: string, type: 'website' | 'article' = 'website', keywords?: string) => {
  useEffect(() => {
    const fullTitle = `${title} | Carey Electrical`;
    document.title = fullTitle;

    const defaultImage = window.location.origin + '/carey_electrical_logo_improved-removebg-preview.png';
    const ogImage = image || defaultImage;
    const currentUrl = window.location.href;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords || 'solar panels, battery storage, EV charging, solar installation, Berkshire, Newbury, Reading, MCS certified, renewable energy' },
      { name: 'author', content: 'Carey Electrical' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' },
      { name: 'geo.region', content: 'GB-BRK' },
      { name: 'geo.placename', content: 'Newbury, Berkshire' },
      { name: 'geo.position', content: '51.4014;-1.3231' },
      { name: 'ICBM', content: '51.4014, -1.3231' },
      { name: 'rating', content: 'general' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'distribution', content: 'global' },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: currentUrl },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: `${title} - Carey Electrical` },
      { property: 'og:site_name', content: 'Carey Electrical' },
      { property: 'og:locale', content: 'en_GB' },
      { property: 'article:publisher', content: 'https://careyelectrical.co.uk' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:image:alt', content: `${title} - Carey Electrical` },
      { name: 'twitter:site', content: '@careyelectrical' },
      { name: 'twitter:creator', content: '@careyelectrical' },
      { name: 'format-detection', content: 'telephone=yes' },
      { name: 'theme-color', content: '#10b981' },
      { name: 'msapplication-TileColor', content: '#10b981' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Carey Electrical' }
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attr = name ? 'name' : 'property';
      const value = name || property;
      let meta = document.querySelector(`meta[${attr}='${value}']`) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, value!);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    let linkCanonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", currentUrl.split('#')[0]);

    if (schema) {
      const oldSchema = document.getElementById("json-ld-schema");
      if (oldSchema) oldSchema.remove();

      const script = document.createElement('script');
      script.id = "json-ld-schema";
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById("json-ld-schema");
      if (script) script.remove();
    };
  }, [title, description, schema, image, type, keywords]);
};
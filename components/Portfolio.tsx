import React, { useState, useEffect } from 'react';
import { SectionTitle, Reveal, Card, Badge, Button, useSEO } from './UIComponents';
import { PROJECTS } from '../constants';
import { MapPin, Zap, ArrowRight, Eye } from 'lucide-react';

interface PortfolioProps {
  onBack: () => void;
  onNavigate?: (path: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onBack, onNavigate }) => {
  const [filter, setFilter] = useState<'All' | 'Domestic' | 'Commercial' | 'Battery'>('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO(
    "Solar Installation Portfolio",
    "View our gallery of recent Solar PV, Battery Storage and EV Charger installations across Berkshire and Hampshire.",
    undefined
  );

  const categories = ['All', 'Domestic', 'Commercial', 'Battery'];

  // Simple logic to map existing categories to filter logic
  const filteredProjects = PROJECTS.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'Domestic' && p.category === 'Solar PV') return true;
    if (filter === 'Battery' && p.category === 'Battery Storage') return true;
    if (filter === 'Commercial' && p.category === 'Commercial') return true;
    return false;
  });

  const handleProjectClick = (project: typeof PROJECTS[0]) => {
    if (project.slug && onNavigate) {
      onNavigate(`/project/${project.slug}`);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Our <span className="text-brand-green">Work</span></h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">Browse our latest installations across Berkshire and Hampshire.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider border transition-all ${
                    filter === cat 
                      ? 'bg-brand-green text-brand-black border-brand-green shadow-neon' 
                      : 'bg-transparent text-zinc-400 border-zinc-700 hover:border-brand-green/50 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 50}>
              <div 
                className={`break-inside-avoid relative group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 ${project.slug ? 'cursor-pointer' : ''}`}
                onClick={() => handleProjectClick(project)}
              >
                <img 
                  src={project.url} 
                  alt={project.description} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex gap-2 mb-3">
                         <Badge className="bg-brand-green text-black border-none">{project.category}</Badge>
                         {project.location && (
                           <Badge className="bg-zinc-800 text-zinc-300 border-zinc-600 flex items-center gap-1">
                             <MapPin size={10} /> {project.location}
                           </Badge>
                         )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.description}</h3>
                      <div className="flex justify-between items-center">
                        {project.systemSize && (
                          <div className="flex items-center gap-2 text-brand-green text-sm font-bold">
                             <Zap size={14} /> {project.systemSize}
                          </div>
                        )}
                        {project.slug && (
                          <div className="flex items-center gap-1 text-white text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur">
                            View Case Study <ArrowRight size={12} />
                          </div>
                        )}
                      </div>
                   </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
           <div className="text-center py-20 text-zinc-500">
             <p>No projects found in this category.</p>
           </div>
        )}

        <div className="mt-20 text-center">
             <Button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="px-10">Get Your Quote</Button>
        </div>
      </div>
    </div>
  );
};
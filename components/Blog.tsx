import React, { useEffect, useState } from 'react';
import { SectionTitle, Reveal, Card, Badge, Button, useSEO } from './UIComponents';
import { BLOG_POSTS } from '../constants';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogProps {
  onBack: () => void;
  onNavigate: (path: string) => void;
}

export const Blog: React.FC<BlogProps> = ({ onBack, onNavigate }) => {
  const [filter, setFilter] = useState('All');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO(
    "Solar Industry News & Guides",
    "Latest updates on Solar PV technology, battery storage, and government grants for UK homeowners.",
    undefined
  );

  const categories = ['All', 'Technology', 'Finance', 'Maintenance', 'Commercial'];
  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter(p => p.id !== featuredPost.id && (filter === 'All' || p.category === filter));

  const handlePostClick = (slug: string) => {
    onNavigate(`/news/${slug}`);
  };

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="mb-12 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Industry <span className="text-brand-green">Insights</span></h1>
            <p className="text-xl text-zinc-400 max-w-2xl">Latest news, technology updates, and guides from the solar experts.</p>
          </div>
        </Reveal>

        {/* Featured Post */}
        {filter === 'All' && (
          <Reveal>
            <div 
              className="mb-20 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 relative group cursor-pointer hover:border-brand-green/30 transition-all"
              onClick={() => handlePostClick(featuredPost.slug)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto overflow-hidden relative">
                   <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                   <div className="flex items-center gap-3 mb-6">
                      <Badge className="bg-brand-green text-black">{featuredPost.category}</Badge>
                      <span className="text-zinc-500 text-sm font-medium uppercase tracking-wide flex items-center gap-2">
                        <Calendar size={14} /> {featuredPost.date}
                      </span>
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-brand-green transition-colors">
                     {featuredPost.title}
                   </h2>
                   <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                     {featuredPost.excerpt}
                   </p>
                   <div className="flex items-center text-brand-green font-bold uppercase tracking-widest text-sm group-hover:translate-x-2 transition-transform">
                     Read Featured Story <ArrowRight className="ml-2" size={16} />
                   </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Filter */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-zinc-800 pb-8">
          <span className="flex items-center gap-2 text-zinc-500 font-bold uppercase text-xs tracking-wider mr-4">
            <Tag size={14} /> Filter by:
          </span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${
                filter === cat 
                  ? 'bg-zinc-800 text-white border border-zinc-600' 
                  : 'text-zinc-400 hover:text-brand-green hover:bg-zinc-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, idx) => (
            <Reveal key={post.id} delay={idx * 100}>
              <Card className="h-full flex flex-col p-0 overflow-hidden border-zinc-800 hover:border-zinc-600">
                <div onClick={() => handlePostClick(post.slug)} className="cursor-pointer h-full flex flex-col">
                  <div className="h-56 overflow-hidden relative group">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-brand-black/80 backdrop-blur text-white border-brand-green/30">{post.category}</Badge>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4 font-medium uppercase tracking-wide">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-brand-green transition-colors">{post.title}</h3>
                    <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">{post.excerpt}</p>
                    <div className="pt-6 border-t border-zinc-800 flex items-center text-brand-green font-bold text-xs group-hover:translate-x-1 transition-transform">
                      READ MORE <ArrowRight className="ml-2 w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-20 text-center border-t border-zinc-900 pt-10">
             <Button variant="secondary" onClick={onBack}>Back to Home</Button>
        </div>
      </div>
    </div>
  );
};
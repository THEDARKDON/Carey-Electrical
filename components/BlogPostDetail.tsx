import React, { useEffect, useMemo } from 'react';
import { ArrowLeft, Calendar, User, Tag, Share2, ArrowRight, Clock } from 'lucide-react';
import { Button, Reveal, Card, Badge, useSEO } from './UIComponents';
import { BlogPostData } from '../types';

interface BlogPostDetailProps {
  data: BlogPostData;
  onBack: () => void;
  onNavigate: (path: string) => void;
}

const getContentStats = (content: string) => {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return { readingTime: `${minutes} min read`, wordCount };
};

export const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ data, onBack, onNavigate }) => {

  const contentStats = useMemo(() => getContentStats(data.content), [data.content]);
  const { readingTime, wordCount } = contentStats;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  // Article Schema with Breadcrumbs
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://careyelectrical.co.uk"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "News",
            "item": "https://careyelectrical.co.uk/#/news"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": data.title,
            "item": window.location.href
          }
        ]
      },
      {
        "@type": "BlogPosting",
        "headline": data.title,
        "image": {
          "@type": "ImageObject",
          "url": data.heroImage,
          "width": 1200,
          "height": 630
        },
        "author": {
          "@type": "Person",
          "name": data.author,
          "url": "https://careyelectrical.co.uk"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Carey Electrical",
          "logo": {
            "@type": "ImageObject",
            "url": "https://careyelectrical.co.uk/carey_electrical_logo_improved-removebg-preview.png",
            "width": 600,
            "height": 200
          }
        },
        "datePublished": data.date,
        "dateModified": data.date,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": window.location.href
        },
        "description": data.excerpt || data.title,
        "articleSection": data.category,
        "keywords": data.tags ? data.tags.join(', ') : "solar energy, renewable energy, solar panels",
        "wordCount": wordCount,
        "timeRequired": `PT${Math.ceil(wordCount / 200)}M`
      }
    ]
  };

  const articleKeywords = `${data.category}, solar energy news, renewable energy, ${data.tags ? data.tags.join(', ') : 'solar panels, battery storage'}`;

  useSEO(
    data.title,
    (data.excerpt || data.title) + " - Expert insights on solar energy from Carey Electrical.",
    schema,
    data.heroImage,
    'article',
    articleKeywords
  );

  return (
    <div className="min-h-screen bg-brand-black pt-20">
      {/* Nav */}
      <div className="fixed top-24 left-6 z-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full text-white hover:text-brand-green hover:border-brand-green transition-all shadow-lg group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to News</span>
        </button>
      </div>

      <article>
        {/* Header */}
        <header className="relative h-[50vh] min-h-[400px] flex items-end pb-12 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={data.heroImage} 
              alt={data.title} 
              className="w-full h-full object-cover animate-ken-burns opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Reveal>
              <div className="flex gap-3 mb-6">
                <Badge className="bg-brand-green text-black">{data.category}</Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 max-w-4xl leading-tight">
                {data.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-brand-green" />
                  {data.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-brand-green" />
                  {data.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-brand-green" />
                  {readingTime}
                </div>
              </div>
            </Reveal>
          </div>
        </header>

        {/* Content Body */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Article */}
            <div className="lg:col-span-8">
              <Reveal delay={100}>
                <div 
                  className="prose prose-invert prose-lg max-w-none 
                    prose-headings:font-bold prose-headings:text-white prose-a:text-brand-green prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-white prose-li:text-slate-300 prose-p:text-slate-300 prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              </Reveal>

              {/* Author Bio Box */}
              <div className="mt-16 p-8 bg-slate-900 rounded-2xl border border-slate-800 flex items-center gap-6">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-brand-black font-bold text-2xl">
                  {data.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Written by {data.author}</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Senior Renewable Engineer at Carey Electrical. Certified MCS Installer specializing in battery integration and hybrid systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-32">
                
                {/* Share */}
                <Card className="mb-8">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Share2 size={18} className="text-brand-green" /> Share Article
                  </h4>
                  <div className="flex gap-2">
                    <Button variant="outline" className="px-4 py-2 text-xs flex-1">Facebook</Button>
                    <Button variant="outline" className="px-4 py-2 text-xs flex-1">Twitter</Button>
                    <Button variant="outline" className="px-4 py-2 text-xs flex-1">LinkedIn</Button>
                  </div>
                </Card>

                {/* Related Links / CTA */}
                <div className="bg-gradient-to-br from-slate-900 to-brand-black p-8 rounded-2xl border border-brand-green/30 shadow-neon">
                  <h3 className="text-xl font-bold text-white mb-4">Want to know more?</h3>
                  <p className="text-slate-400 text-sm mb-6">
                    See how much you could save with a custom solar design for your home.
                  </p>
                  
                  {data.relatedLinks && (
                    <div className="space-y-3 mb-8">
                      {data.relatedLinks.map((link, i) => (
                        <a 
                          key={i} 
                          href={link.url}
                          className="block text-sm font-bold text-brand-green hover:text-white transition-colors flex items-center gap-2"
                        >
                          <ArrowRight size={14} /> {link.label}
                        </a>
                      ))}
                    </div>
                  )}

                  <Button fullWidth onClick={() => { onNavigate('home'); setTimeout(() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'}), 100); }}>
                    Calculate ROI
                  </Button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </article>
    </div>
  );
};
import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import Reveal from '../ui/Reveal.jsx';

export default function Blogs({ posts = [] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 lg:py-32 bg-primary-bg border-b border-primary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary-text tracking-tight mb-4">Latest Insights</h2>
              <p className="text-primary-muted text-lg max-w-2xl">
                Thoughts, learnings, and updates from our engineering and design teams.
              </p>
            </div>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {posts.map((post, index) => {
            const { slug, data } = post;
            const delay = index * 100;
            const dateStr = new Date(data.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return (
              <Reveal key={slug} direction="up" delay={delay}>
                <a 
                  href={`/blog/${slug}`} 
                  className="flex flex-col h-full group bg-primary-bg border border-primary-border-muted hover:border-primary-border-hover transition-colors duration-300"
                >
                  {/* Thumbnail */}
                  <div className="w-full aspect-[4/3] overflow-hidden relative">
                    {data.thumbnail ? (
                      <img 
                        src={data.thumbnail} 
                        alt={data.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-out grayscale hover:grayscale-0"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary-border flex items-center justify-center">
                        <span className="text-primary-muted font-mono text-sm uppercase tracking-widest">No Image</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-primary-text/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4 text-primary-faint text-xs font-mono uppercase tracking-widest">
                        <Calendar className="w-3 h-3" />
                        <time dateTime={data.date.toISOString()}>{dateStr}</time>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-primary-text mb-4 leading-tight group-hover:text-primary-muted transition-colors">
                        {data.title}
                      </h3>
                    </div>
                    
                    <div className="mt-8 flex items-center gap-2 text-primary-text font-bold uppercase tracking-wider text-sm transition-colors">
                      <span className="group-hover:mr-2 transition-all duration-300">Read Article</span>
                      <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

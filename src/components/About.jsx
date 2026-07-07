import React from 'react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-primary-bg overflow-hidden relative border-b border-primary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Left (60% approx -> 7 cols) */}
          <div className="lg:col-span-7">
            <Reveal direction="left" delay={0}>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-primary-text tracking-tight leading-tight">
                We build what others can't.
              </h2>
              <div className="space-y-6">
                <p className="text-primary-muted text-base md:text-lg leading-relaxed">
                  BraxSystems is a digital engineering agency specializing in high-complexity, mission-critical applications. We don't just write code; we architect solutions that bridge the gap between complex business requirements and seamless user experiences.
                </p>
                <p className="text-primary-muted text-base md:text-lg leading-relaxed">
                  With a deep understanding of modern ecosystems, we craft digital products that drive exponential growth, enhance engagement, and boost your bottom line without compromising on performance or security.
                </p>
              </div>
            </Reveal>
          </div>
          
          {/* Visual Right (40% approx -> 5 cols) */}
          <div className="lg:col-span-5 relative h-full min-h-[400px]">
            <Reveal direction="right" delay={200} className="w-full h-full">
              <div className="relative w-full h-full border border-primary-border-muted bg-primary-card p-8 flex items-center justify-center overflow-hidden group">
                {/* Abstract geometric composition */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                  }}
                ></div>
                
                <svg className="w-full max-w-[280px] h-auto text-zinc-700 group-hover:text-primary-text transition-colors duration-700" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 20L180 60V140L100 180L20 140V60L100 20Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M100 20V100M180 60L100 100M20 60L100 100" stroke="currentColor" strokeWidth="2"/>
                  <path d="M100 180V100M180 140L100 100M20 140L100 100" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="100" cy="100" r="12" fill="currentColor" />
                </svg>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

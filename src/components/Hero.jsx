import React from 'react';
import { ChevronDown } from 'lucide-react';
import HeroAnimation from './HeroAnimation';

export default function Hero() {
  const headline = "ARCHITECTING DIGITAL SOLUTIONS".split(' ');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-primary-bg px-4 sm:px-6 lg:px-8">
      
      {/* 3D Particle Background */}
      <HeroAnimation />

      <div className="relative z-10 text-center max-w-5xl mx-auto mt-20 pt-16 pb-24 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-primary-text uppercase leading-[0.95]">
          {headline.map((word, i) => (
            <React.Fragment key={i}>
              <span 
                className="word inline-block" 
                style={{ animationDelay: `${0.3 + (i * 0.08)}s` }}
              >
                {word}
              </span>
              {i !== headline.length - 1 && ' '}
            </React.Fragment>
          ))}
        </h1>
        
        <p 
          className="mt-6 text-lg md:text-xl text-primary-muted max-w-2xl mx-auto mb-12 font-medium opacity-0 animate-[wordReveal_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{ animationDelay: '0.8s' }}
        >
          We engineer high-performance web and mobile applications, cutting-edge UI/UX, and data-driven marketing to scale your business.
        </p>
        
        <div 
          className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-[wordReveal_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{ animationDelay: '1.0s' }}
        >
          <a 
            href="#projects" 
            className="px-10 py-4 text-sm font-bold bg-primary-text text-primary-bg uppercase tracking-widest transition-all hover:opacity-80"
          >
            VIEW OUR WORK
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 text-sm font-bold bg-transparent text-primary-text border-2 border-primary-text uppercase tracking-widest transition-all hover:bg-primary-text hover:text-primary-bg"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-[wordReveal_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards] z-10"
        style={{ animationDelay: '1.2s' }}
      >
        <a href="#about" className="text-primary-faint hover:text-primary-text transition-colors duration-300 flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest mb-2 font-medium">SCROLL</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

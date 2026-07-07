import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const headline = "ARCHITECTING DIGITAL SOLUTIONS".split(' ');

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-primary-bg px-4 sm:px-6 lg:px-8">
      {/* Background grain overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-primary-text uppercase leading-[1.1]">
          {headline.map((word, i) => (
            <React.Fragment key={i}>
              <span 
                className="word" 
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
          className="flex flex-col sm:flex-row justify-center gap-6 opacity-0 animate-[wordReveal_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          style={{ animationDelay: '1.0s' }}
        >
          <a 
            href="#projects" 
            className="bg-primary-text text-primary-bg px-8 py-4 font-bold text-lg border-2 border-primary-text uppercase tracking-wider transition-all duration-300 hover:bg-zinc-200 hover:border-zinc-200"
          >
            View Our Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 font-bold text-lg text-primary-text bg-transparent border-2 border-primary-border-hover uppercase tracking-wider transition-all duration-300 hover:bg-primary-text hover:text-primary-bg hover:border-primary-text"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-[wordReveal_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
        style={{ animationDelay: '1.2s' }}
      >
        <a href="#about" className="text-primary-faint hover:text-primary-text transition-colors duration-300 flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

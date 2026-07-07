import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function CtaSection() {
  const headline = "Ready to build something remarkable?".split(' ');

  return (
    <section className="py-32 lg:py-48 bg-primary-card border-b border-primary-border text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Reveal direction="up">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-primary-text mb-8 leading-tight">
            {headline.map((word, i) => (
              <React.Fragment key={i}>
                <span className="inline-block overflow-hidden">
                  <span 
                    className="inline-block animate-[wordReveal_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]" 
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {word}
                  </span>
                </span>
                {i !== headline.length - 1 && ' '}
              </React.Fragment>
            ))}
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-muted mb-12">
            Let's talk about your next project.
          </p>
          
          <a 
            href="#contact" 
            className="inline-block bg-primary-text text-primary-bg px-10 py-5 text-xl font-bold uppercase tracking-widest border-2 border-primary-text hover:bg-primary-bg hover:text-primary-text transition-colors duration-300"
          >
            Start a Conversation
          </a>
        </Reveal>
      </div>
    </section>
  );
}

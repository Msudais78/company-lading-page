import React from 'react';
import Reveal from './Reveal';
import GlobeAnimation from './GlobeAnimation';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-primary-bg overflow-hidden relative border-b border-primary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          
          {/* Text Left */}
          <div>
            <Reveal direction="left" delay={0}>
              <div className="inline-flex items-center gap-x-2 px-3 py-1 rounded-sm border border-primary-border-muted text-xs font-bold text-primary-text uppercase tracking-widest mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-text opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-text"></span>
                </span>
                Architecture Scale Engineering
              </div>
              
              <h2 className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tighter mb-8 text-primary-text leading-[1.05]">
                Building the <br/><span className="text-primary-faint">invisible </span>core.
              </h2>
              
              <p className="text-lg md:text-xl text-primary-muted max-w-lg mb-10 leading-relaxed">
                We engineer mission-critical applications for the modern web. High complexity is our standard; performance is our obsession.
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <a href="#projects" className="group relative inline-flex justify-center items-center px-8 py-4 bg-primary-text text-primary-bg font-bold uppercase tracking-widest transition-all hover:opacity-80">
                  Deploy a Project
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full border-2 border-primary-bg bg-primary-card flex items-center justify-center text-[10px] text-primary-text font-bold z-30">JS</div>
                      <div className="w-10 h-10 rounded-full border-2 border-primary-bg bg-primary-card flex items-center justify-center text-[10px] text-primary-text font-bold z-20">AWS</div>
                      <div className="w-10 h-10 rounded-full border-2 border-primary-bg bg-primary-card flex items-center justify-center text-[10px] text-primary-text font-bold z-10">R3F</div>
                  </div>
                  <span className="text-sm text-primary-muted font-medium tracking-tight">Trusted by 40+ Tech Teams</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 3D Globe Right */}
          <div className="relative h-[500px] lg:h-[600px] w-full">
            <Reveal direction="right" delay={200} className="w-full h-full relative">
              <GlobeAnimation />
              
              {/* Stats Overlays */}
              <div className="absolute top-10 right-0 md:-right-8 bg-primary-bg/80 backdrop-blur-md border border-primary-border-muted p-4 rounded-sm shadow-xl pointer-events-none">
                <div className="text-[10px] uppercase text-primary-faint font-bold mb-1 tracking-widest">Network Latency</div>
                <div className="text-xl font-mono font-bold text-primary-text">14ms</div>
              </div>
              
              <div className="absolute bottom-10 left-0 md:-left-8 bg-primary-bg/80 backdrop-blur-md border border-primary-border-muted p-4 rounded-sm shadow-xl pointer-events-none">
                <div className="text-[10px] uppercase text-primary-faint font-bold mb-1 tracking-widest">Active Nodes</div>
                <div className="text-xl font-mono font-bold text-primary-text">1,204</div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

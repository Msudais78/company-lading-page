import React from 'react';

const partners = [
  "ACME CORP", "GLOBAL TECH", "NEXUS AI", "QUANTUM", "STELLAR", "HORIZON", "ZENITH", "APEX"
];

export default function LogoTicker() {
  return (
    <div className="py-12 bg-primary-bg border-b border-primary-border overflow-hidden relative">
      {/* Fade gradients for smooth entry/exit of the ticker */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      
      <div className="flex w-full">
        <div className="ticker-track">
          {/* First set of logos */}
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="px-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              <span className="text-xl md:text-2xl font-black text-primary-text uppercase tracking-widest whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {partners.map((partner, index) => (
            <div 
              key={`dup-${index}`} 
              className="px-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              <span className="text-xl md:text-2xl font-black text-primary-text uppercase tracking-widest whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
          {/* Third set just to ensure the track never empties on ultra-wide screens */}
          {partners.map((partner, index) => (
            <div 
              key={`dup2-${index}`} 
              className="px-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
            >
              <span className="text-xl md:text-2xl font-black text-primary-text uppercase tracking-widest whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import Reveal from './Reveal';

const accentColors = [
  'text-blue-600',
  'text-violet-600',
  'text-teal-600',
  'text-sky-600',
  'text-orange-600',
  'text-emerald-600',
  'text-rose-600',
  'text-amber-600',
  'text-indigo-600',
  'text-pink-600',
  'text-cyan-600',
  'text-red-600',
  'text-fuchsia-600'
];

function TiltCard({ children, to }) {
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    // Disable on mobile where hover doesn't make sense
    if (window.innerWidth < 1024) return;
    
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Normalize coordinates to -1 to 1
    const normalizeX = (x - centerX) / centerX;
    const normalizeY = (y - centerY) / centerY;
    
    // Max tilt is 12 degrees
    const tiltX = normalizeY * -12;
    const tiltY = normalizeX * 12;
    
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <Link 
      to={to}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="block h-full p-8 rounded-3xl bg-primary-card border border-primary-border-muted hover:border-primary-text transition-all duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div style={{ transform: 'translateZ(30px)' }} className="h-full flex flex-col justify-between">
        {children}
      </div>
    </Link>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-primary-bg overflow-hidden border-b border-primary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <Reveal direction="up" delay={0}>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-primary-card-hover border border-primary-border-muted text-primary-text text-xs tracking-[3px] font-bold rounded-full uppercase">
                Capabilities
              </span>
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary-text font-['Space_Grotesk'] leading-[1.1]">
              Full-stack<br/>digital engineering.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={200}>
            <p className="mt-6 text-primary-muted max-w-md text-lg">
              From infrastructure to intelligence — we build the systems that power modern businesses.
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const colorClass = accentColors[index % accentColors.length];
            return (
              <Reveal key={service.id} direction="up" delay={(index % 4) * 100}>
                <TiltCard to={`/service/${service.id}`}>
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className={`text-xs font-bold ${colorClass}`}>{service.num}</span>
                        <h4 className="font-bold text-xl mt-2 text-primary-text leading-tight pr-2">{service.title}</h4>
                      </div>
                      {/* Faded Background Number */}
                      <div className="text-5xl font-light text-zinc-100 -mt-2 -mr-2 select-none pointer-events-none">
                        {service.num}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-primary-muted leading-relaxed">
                    {service.description}
                  </p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

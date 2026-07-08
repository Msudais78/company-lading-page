import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { services } from '../data/services';

function ServiceCard({ service, index, expandedId, setExpandedId }) {
  const cardRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isExpanded = expandedId === service.num;
  const isDimmed = expandedId !== null && expandedId !== service.num;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for scroll entry animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || isExpanded) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const normalizeX = (x - centerX) / centerX;
    const normalizeY = (y - centerY) / centerY;

    const tiltX = normalizeY * -6;
    const tiltY = normalizeX * 6;
    
    const staticRot = parseFloat(service.rotation);
    
    card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) rotate(${staticRot}deg) translateY(-4px)`;
    card.style.transition = 'none';
  };

  const handleMouseLeave = () => {
    if (isMobile || isExpanded) return;
    const card = cardRef.current;
    if (!card) return;
    
    card.style.transform = `rotate(${service.rotation})`;
    card.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (isExpanded) {
      setExpandedId(null);
    } else {
      setExpandedId(service.num);
    }
  };
  
  let transformStyle = {};
  if (isMobile) {
    transformStyle = { transform: 'none' };
  } else if (isExpanded) {
    transformStyle = { transform: 'rotate(0deg) scale(1.02)' };
  } else if (isDimmed) {
    transformStyle = { transform: `rotate(${service.rotation}) scale(0.97)` };
  } else if (isVisible) {
    transformStyle = { transform: `rotate(${service.rotation})` };
  }

  const dotCount = service.tier === 1 ? 4 : service.tier === 2 ? 3 : 2;
  
  return (
    <div 
      ref={cardRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`service-card relative group flex flex-col justify-between h-full p-6 md:p-8 rounded-sm bg-primary-card hover:bg-primary-card-hover border border-primary-border-muted overflow-hidden ${service.span} ${isExpanded ? 'z-50 shadow-2xl' : 'z-10'} ${isDimmed ? 'opacity-30 blur-[2px]' : 'opacity-100 blur-none'} cursor-pointer`}
      style={{ 
        '--service-rotation': isMobile ? '0deg' : service.rotation,
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? `cardEnter 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards` : 'none',
        animationDelay: `${index * 100}ms`,
        ...transformStyle,
        transition: isExpanded || isDimmed ? 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'all 0.3s ease'
      }}
      tabIndex={0}
      aria-expanded={isExpanded}
    >
      <div className="service-card-hover-border absolute inset-0 rounded-sm overflow-hidden z-0 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <span 
            className="service-number text-primary-text text-xl md:text-2xl font-black font-mono tracking-wider group-hover:opacity-60 transition-opacity"
            style={{ animationDelay: `${index * 0.5}s`, animationPlayState: isExpanded ? 'paused' : 'running' }}
          >
            {service.num}
          </span>
          {isExpanded && (
            <button 
              onClick={(e) => { e.stopPropagation(); setExpandedId(null); }}
              className="p-2 -mr-2 -mt-2 text-primary-muted hover:text-primary-text transition-colors z-50 relative"
              aria-label="Close details"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        <h3 className={`font-bold text-primary-text leading-tight mb-4 transition-all duration-300 ${isExpanded ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
          {service.title}
        </h3>
        
        <div className={`text-primary-faint text-sm leading-relaxed overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-0 max-h-0' : 'opacity-100 max-h-20'}`}>
          {service.description}
        </div>

        {/* Expanded Content */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
          <p className="text-primary-faint text-sm md:text-base mb-6 leading-relaxed">
            {service.expandedDescription}
          </p>
          
          <div className="h-px w-full bg-primary-border-muted my-6"></div>
          
          <div className="mb-6">
            <h4 className="text-primary-text font-bold text-xs uppercase tracking-widest mb-4">Capabilities:</h4>
            <ul className="space-y-3">
              {service.capabilities.map((cap, i) => (
                <li key={i} className="text-primary-muted text-sm flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full border border-primary-muted bg-transparent"></div>
                  {cap}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-zinc-500 text-xs font-mono tracking-tight mb-8 mt-8">
            Tech: {service.tech}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={`/service/${service.id}`} onClick={(e) => e.stopPropagation()} className="inline-flex items-center justify-center border border-primary-border-muted bg-primary-text text-primary-bg px-6 py-3 text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-opacity">
              View Full Details <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a href="#projects" onClick={(e) => e.stopPropagation()} className="inline-flex items-center justify-center border border-primary-border-muted px-6 py-3 text-primary-text text-sm font-bold uppercase tracking-widest hover:bg-zinc-100 transition-colors">
              Explore Projects
            </a>
          </div>
        </div>
      </div>
      
      {/* Collapsed Footer */}
      <div className={`mt-8 flex justify-between items-end relative z-10 transition-all duration-300 ${isExpanded ? 'opacity-0 translate-y-4 invisible h-0 overflow-hidden' : 'opacity-100 translate-y-0 visible'}`}>
        <div className="flex gap-1.5 pb-1">
          {Array.from({ length: dotCount }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-zinc-400 transition-colors duration-300"></div>
          ))}
        </div>
        <ArrowRight className="w-5 h-5 text-primary-muted opacity-40 md:opacity-20 transform md:group-hover:opacity-100 md:group-hover:translate-x-1 transition-all duration-300" />
      </div>
    </div>
  );
}

export default function Services() {
  const [expandedId, setExpandedId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleGlobalClick = () => setExpandedId(null);
    const handleEscape = (e) => { if (e.key === 'Escape') setExpandedId(null); };
    
    if (expandedId) {
      document.addEventListener('click', handleGlobalClick);
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('click', handleGlobalClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [expandedId]);

  // Section visibility for header animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 bg-primary-bg border-b border-primary-border overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal direction="up" delay={0}>
              <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest block mb-4">
                What We Do
              </span>
            </Reveal>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1]">
              <Reveal direction="up" delay={100}>
                <span className="text-primary-text block">We build digital products</span>
              </Reveal>
              <Reveal direction="up" delay={200}>
                <span className="text-primary-muted block">that move the needle.</span>
              </Reveal>
            </h2>
          </div>
          <Reveal direction="up" delay={400}>
            <a href="#services" className="text-primary-muted hover:text-primary-text text-xs uppercase tracking-widest font-bold flex items-center transition-colors">
              View all <ArrowRight className="w-3 h-3 ml-1" />
            </a>
          </Reveal>
        </div>
        
        {/* Bento Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative perspective-[2000px] grid-flow-dense"
          onClick={(e) => e.stopPropagation()}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.num} 
              service={service} 
              index={index} 
              expandedId={expandedId}
              setExpandedId={setExpandedId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

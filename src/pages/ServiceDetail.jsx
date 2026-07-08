import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { services } from '../data/services';
import Reveal from '../components/Reveal';

export default function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [nextService, setNextService] = useState(null);

  useEffect(() => {
    // Scroll to top when loading new service
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const currentIndex = services.findIndex(s => s.id === id);
    if (currentIndex !== -1) {
      setService(services[currentIndex]);
      const nextIndex = (currentIndex + 1) % services.length;
      setNextService(services[nextIndex]);
    }
  }, [id]);

  if (!service) return null;

  return (
    <article className="min-h-screen bg-primary-bg">
      {/* 1. Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-faint hover:text-primary-text font-bold uppercase tracking-widest text-xs mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <Reveal direction="up">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xl md:text-2xl font-black font-mono text-primary-muted">{service.num}</span>
            <span className="w-12 h-px bg-primary-border-muted"></span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-text tracking-tighter mb-12 leading-[1.05]">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-muted leading-relaxed max-w-3xl">
            {service.expandedDescription}
          </p>
        </Reveal>
      </section>

      {/* 2. Cover Image */}
      <Reveal direction="up" delay={200}>
        <div className="w-full aspect-[21/9] bg-primary-card overflow-hidden">
          <img 
            src={service.coverImage} 
            alt={`${service.title} Cover`} 
            className="w-full h-full object-cover opacity-90 transition-transform duration-[2000ms] hover:scale-105"
          />
        </div>
      </Reveal>

      {/* 3. Details & Capabilities */}
      <section className="py-24 border-b border-primary-border max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-3xl font-bold text-primary-text mb-8">Capabilities</h2>
              <ul className="space-y-6">
                {service.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-2 w-2 h-2 rounded-full border-2 border-primary-text bg-transparent shrink-0"></div>
                    <span className="text-xl text-primary-muted font-medium">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary-card p-10 lg:p-16 border border-primary-border-muted flex flex-col justify-center">
              <h4 className="text-primary-faint uppercase tracking-widest text-sm font-bold mb-4">Technology Stack</h4>
              <p className="text-2xl text-primary-text font-mono tracking-tight leading-relaxed">
                {service.tech}
              </p>
              
              <div className="mt-16">
                <a href="/#contact" className="inline-flex items-center justify-center bg-primary-text text-primary-bg px-8 py-4 text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-opacity w-full sm:w-auto">
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. Next Service CTA */}
      {nextService && (
        <section className="py-32 bg-primary-card-hover text-center px-4">
          <Reveal direction="up">
            <p className="text-primary-faint uppercase tracking-widest font-bold mb-6">Next Service</p>
            <Link 
              to={`/service/${nextService.id}`} 
              className="group inline-flex flex-col items-center"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-primary-text tracking-tight mb-8 group-hover:opacity-70 transition-opacity">
                {nextService.title}
              </h2>
              <div className="w-16 h-16 rounded-full border border-primary-text flex items-center justify-center text-primary-text group-hover:bg-primary-text group-hover:text-primary-bg transition-all duration-300 transform group-hover:translate-x-2">
                <ArrowRight className="w-6 h-6" />
              </div>
            </Link>
          </Reveal>
        </section>
      )}
    </article>
  );
}

import React from 'react';
import { Building2, Command, Hexagon, Layers, Cpu, Globe, Activity, Shield } from 'lucide-react';
import Reveal from './Reveal';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO',
    company: 'TechFlow',
    icon: Hexagon,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'BraxSystems completely transformed our digital presence. Their engineering team delivered an architecture that increased our user retention and scaled flawlessly during peak loads.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder',
    company: 'RetailPro',
    icon: Building2,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'The custom e-commerce platform they built handles our peak traffic effortlessly. True professionals who understand both business objectives and scalable architecture.',
  },
  {
    name: 'Emily Chen',
    role: 'VP Engineering',
    company: 'GlobalReach',
    icon: Globe,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'Their CI/CD pipeline implementation reduced our deployment times by 70%. We now ship features faster and with significantly higher confidence.',
  },
  {
    name: 'David Thompson',
    role: 'CMO',
    company: 'StartupX',
    icon: Command,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'The UI/UX design is incredibly sleek. Our user engagement spiked by 45% in the first month. They really understand modern design principles.',
  },
  {
    name: 'Anita Patel',
    role: 'Product Owner',
    company: 'FinServe',
    icon: Layers,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'Unparalleled technical expertise. They delivered our complex React Native application weeks ahead of schedule with zero major bugs.',
  },
  {
    name: 'John Carter',
    role: 'VP Digital',
    company: 'TrendSetters',
    icon: Activity,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'The switch to a headless architecture boosted our SEO scores immensely. The site is lightning fast and conversion rates are through the roof.',
  },
  {
    name: 'Linda Wu',
    role: 'CTO',
    company: 'HealthPlus',
    icon: Shield,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'BraxSystems took our vision and built a robust API layer that powers our entire operations. Security and performance were top notch.',
  },
  {
    name: 'Robert Fox',
    role: 'Director',
    company: 'Nexa Solutions',
    icon: Cpu,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'A seamless collaboration. They act as a true technical partner, not just an agency. We rely on them for all our major architectural decisions.',
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-primary-bg border-b border-primary-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-text tracking-tight">What Clients Say</h2>
          </div>
        </Reveal>

        <div className="relative group flex overflow-hidden">
          {/* Gradient Masks for smooth fading edges */}
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-primary-bg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-primary-bg to-transparent z-10 pointer-events-none"></div>
          
          <div 
            className="ticker-track flex gap-8 py-4 group-hover:[animation-play-state:paused]"
            style={{ animationDuration: '80s' }}
          >
            {/* Double the array for infinite seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => {
              const Icon = testimonial.icon;
              return (
                <div 
                  key={index}
                  className="w-[400px] md:w-[500px] flex-none relative border border-primary-border-muted bg-primary-card p-8 md:p-12 min-h-[350px] flex flex-col justify-between transition-colors duration-300 hover:border-primary-border-hover"
                >
                  {/* Large decorative quote mark */}
                  <div className="absolute top-4 left-4 text-primary-border-hover text-8xl font-serif leading-none opacity-20 select-none">
                    "
                  </div>
                  
                  <div className="relative z-10 mt-8 mb-12">
                    <p className="text-lg md:text-xl text-primary-muted italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  {/* Footer containing Avatar and Company Info */}
                  <div className="relative z-10 mt-auto pt-6 border-t border-primary-border flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-border-muted shrink-0">
                        <img 
                          src={testimonial.avatar} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-primary-text font-bold text-base md:text-lg whitespace-nowrap">{testimonial.name}</h4>
                        <p className="text-xs text-primary-faint uppercase tracking-widest mt-1">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-1 opacity-60 text-primary-text shrink-0">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                      <span className="font-bold tracking-widest uppercase text-[10px]">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

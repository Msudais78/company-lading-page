import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const steps = [
  {
    title: 'Discovery',
    description: 'We listen, research, and define the problem space to ensure we are building the right solution for your specific market and users.',
  },
  {
    title: 'Strategy',
    description: 'Architecture decisions, tech stack selection, and roadmap creation. We map out the entire technical journey before writing a line of code.',
  },
  {
    title: 'Design',
    description: 'Wireframes, interactive prototypes, and comprehensive visual design systems that strictly align with your brand identity and UX best practices.',
  },
  {
    title: 'Development',
    description: 'Agile sprints, rigorous code reviews, and continuous integration. We build scalable, high-performance systems ready for production.',
  },
  {
    title: 'Launch & Scale',
    description: 'Zero-downtime deployment, performance monitoring, and ongoing optimization to ensure your product grows seamlessly with your user base.',
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="process" className="py-24 lg:py-32 bg-primary-bg border-b border-primary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-text tracking-tight">How We Work</h2>
          </div>
        </Reveal>

        {/* Desktop Layout - Horizontal Timeline */}
        <div className="hidden lg:block relative" ref={ref}>
          {/* Connecting Line */}
          <div className="absolute top-6 left-0 w-full h-px bg-zinc-800"></div>
          
          {/* Animated fill line */}
          <div 
            className="absolute top-6 left-0 h-px bg-primary-text transition-all duration-1000 ease-in-out"
            style={{ 
              width: isIntersecting ? '100%' : '0%',
              transformOrigin: 'left'
            }}
          ></div>

          <div className="grid grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => setActiveStep(index)}
              >
                {/* Node */}
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mb-8 ${
                    activeStep === index 
                      ? 'bg-primary-text text-primary-bg' 
                      : 'bg-primary-bg border-2 border-primary-border-hover text-primary-faint group-hover:border-primary-text group-hover:text-primary-text'
                  }`}
                >
                  <span className="font-bold font-mono text-sm">0{index + 1}</span>
                </div>
                
                {/* Title above line */}
                <h3 className={`text-xl font-bold transition-colors duration-300 text-center ${
                  activeStep === index ? 'text-primary-text' : 'text-primary-faint group-hover:text-primary-muted'
                }`}>
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Active Content Panel */}
          <div className="mt-16 p-12 border border-primary-border-muted bg-primary-card min-h-[200px] flex items-center">
            <div 
              key={activeStep} // force re-render for animation
              className="animate-[wordReveal_0.5s_ease-out_forwards]"
            >
              <h4 className="text-3xl font-bold text-primary-text mb-6">0{activeStep + 1}. {steps[activeStep].title}</h4>
              <p className="text-primary-muted text-xl leading-relaxed max-w-4xl">
                {steps[activeStep].description}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Vertical Accordion */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <Reveal key={index} direction="up" delay={index * 100}>
              <div className="border border-primary-border-muted bg-primary-card overflow-hidden">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-sm ${activeStep === index ? 'text-primary-text' : 'text-primary-faint'}`}>
                      0{index + 1}
                    </span>
                    <h3 className={`text-xl font-bold ${activeStep === index ? 'text-primary-text' : 'text-primary-muted'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-primary-faint transition-transform duration-300 ${activeStep === index ? 'rotate-180' : ''}`} />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    activeStep === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-primary-muted leading-relaxed">
                    {step.description}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

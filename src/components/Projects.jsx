import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-primary-bg border-b border-primary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-text tracking-tight">Selected Work</h2>
          </div>
        </Reveal>
        
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-3/5 overflow-hidden rounded-sm relative">
                  <Reveal direction={isEven ? 'left' : 'right'} className="w-full h-full">
                    <div className="aspect-video overflow-hidden bg-primary-card-hover relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-[1.02]"
                      />
                    </div>
                  </Reveal>
                </div>
                
                {/* Text Side */}
                <div className="w-full lg:w-2/5">
                  <Reveal direction={isEven ? 'right' : 'left'}>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-1.5 h-1.5 bg-primary-border-hover rounded-full"></span>
                        <p className="text-xs uppercase tracking-widest text-primary-faint font-bold">
                          {project.category}
                        </p>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-primary-text mb-6">
                        {project.title}
                      </h3>
                      
                      <p className="text-primary-muted text-lg mb-8 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <Link to={`/project/${project.id}`} className="inline-flex items-center gap-3 text-primary-text font-bold uppercase tracking-wider text-sm hover:text-primary-muted transition-colors group/link">
                        View Case Study
                        <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

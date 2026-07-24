import React from 'react';
import Reveal from '../ui/Reveal.jsx';

const techStack = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'AWS', 
  'Docker', 'Kubernetes', 'PostgreSQL', 'GraphQL', 'Figma', 'Python',
  'Redis', 'Vercel', 'GitLab CI', 'Terraform'
];

export default function TechStack() {
  return (
    <section className="py-24 bg-primary-bg border-b border-primary-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal direction="up">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-text tracking-tight mb-12">Powered by Modern Technology</h2>
        </Reveal>
        
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => {
            // Distribute animation delays for organic floating effect
            const delay = (index % 5) * 0.4;
            
            return (
              <Reveal key={index} direction="up" delay={index * 50}>
                <div 
                  className="animate-float"
                  style={{ animationDelay: `${delay}s` }}
                >
                  <div className="border border-primary-border-muted rounded-sm px-6 py-3 text-primary-muted font-medium hover:border-zinc-500 hover:bg-primary-card-hover/50 hover:text-primary-text transition-all duration-200 cursor-default">
                    {tech}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

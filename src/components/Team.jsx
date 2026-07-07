import React from 'react';
import Reveal from './Reveal';

const teamMembers = [
  { name: 'Muhammad Waqas', role: 'CEO • 5 Yrs PHP/Laravel Dev', img: '/team/waqas.jpg' },
  { name: 'Muhammad Sudais', role: 'Full Stack Developer', img: '/team/sudais.jpg' },
  { name: 'Mian Shoaib', role: 'Front End Developer', img: '/team/shoaib.jpg' },
  { name: 'Haroon', role: 'Video Editor', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400' },
  { name: 'Abdul Haseeb', role: 'Backend Engineer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400' }
];

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-primary-bg border-b border-primary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-text tracking-tight mb-6">The People Behind the Pixels</h2>
            <p className="text-primary-muted text-lg md:text-xl">
              A cross-functional team of engineers, designers, and strategists dedicated to delivering digital excellence.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Reveal key={index} direction="up" delay={index * 100}>
              <div className="group flex flex-col">
                <div className="overflow-hidden rounded-sm mb-6 aspect-square bg-primary-card-hover">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-all duration-500 ease-out"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-primary-text mb-1">{member.name}</h3>
                <p className="text-primary-faint text-sm font-medium mb-4">{member.role}</p>
                

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

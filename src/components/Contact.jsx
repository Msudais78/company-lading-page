import React from 'react';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary-bg border-b border-primary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Title and Contact Cards */}
          <div className="space-y-12">
            <Reveal direction="up">
              <h2 className="text-5xl md:text-7xl font-bold text-primary-text tracking-tighter">
                Get In Touch
              </h2>
            </Reveal>

            <div className="space-y-6">
              <Reveal direction="up" delay={100}>
                <div className="bg-primary-card p-8 md:p-12 rounded-sm border border-primary-border-muted transition-colors duration-300 hover:border-primary-border-hover group">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary-faint mb-4">Phone Number</h3>
                  <a href="tel:+923159300600" className="text-2xl md:text-3xl text-primary-text font-medium group-hover:underline">
                    +92 315 9300600
                  </a>
                </div>
              </Reveal>

              <Reveal direction="up" delay={200}>
                <div className="bg-primary-card p-8 md:p-12 rounded-sm border border-primary-border-muted transition-colors duration-300 hover:border-primary-border-hover group">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary-faint mb-4">Email</h3>
                  <a href="mailto:info.braxsystems@gmail.com" className="text-2xl md:text-3xl text-primary-text font-medium group-hover:underline break-all">
                    info.braxsystems@gmail.com
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className="w-full h-[500px] lg:h-[600px] rounded-sm overflow-hidden border border-primary-border-muted relative bg-primary-card">
            <Reveal direction="left" className="w-full h-full">
              <iframe 
                src="https://maps.google.com/maps?q=braxsystems,+ZU+Business+Center,+Abdul+khel,+Chamkani,+Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                className="transition-all duration-700 absolute inset-0"
              ></iframe>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

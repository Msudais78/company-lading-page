import React from 'react';
import { ArrowUp, Code2, MessageCircle, Briefcase } from 'lucide-react';
import { services } from '../../data/services.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-bg pt-24 pb-8 border-t border-primary-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Col 1: Logo & Info */}
          <div className="lg:pr-8">
            <a href="/" onClick={scrollToTop} className="text-2xl font-bold tracking-tight text-primary-text flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
              <span className="text-3xl font-black bg-primary-text text-primary-bg px-2 py-1 italic rounded-sm leading-none">B</span>
              <span className="uppercase tracking-widest mt-1">raxSystems</span>
            </a>
            <p className="text-primary-faint text-sm leading-relaxed mb-8">
              Architecting high-performance digital solutions for modern businesses. We build what others can't.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-600 hover:text-primary-text transition-colors duration-200">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-600 hover:text-primary-text transition-colors duration-200">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-600 hover:text-primary-text transition-colors duration-200">
                <Code2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-primary-text font-bold uppercase tracking-widest text-sm mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="/#about" className="text-primary-faint hover:text-primary-text transition-colors text-sm">About Us</a></li>
              <li><a href="/#services" className="text-primary-faint hover:text-primary-text transition-colors text-sm">Services</a></li>
              <li><a href="/#process" className="text-primary-faint hover:text-primary-text transition-colors text-sm">Our Process</a></li>
              <li><a href="/#projects" className="text-primary-faint hover:text-primary-text transition-colors text-sm">Selected Work</a></li>
              <li><a href="/#team" className="text-primary-faint hover:text-primary-text transition-colors text-sm">Team</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-primary-text font-bold uppercase tracking-widest text-sm mb-6">Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.id}>
                  <a href={`/service/${service.id}`} className="text-primary-faint hover:text-primary-text transition-colors text-sm">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-primary-text font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-primary-faint text-sm leading-relaxed">ZU Business Center, Abdul khel,<br />Chamkani, Pakistan</li>
              <li>
                <a href="mailto:info.braxsystems@gmail.com" className="text-primary-faint hover:text-primary-text transition-colors text-sm block truncate">
                  info.braxsystems@gmail.com
                </a>
              </li>
              <li className="text-primary-faint text-sm">+92 315 9300600</li>
            </ul>
            <div className="mt-8">
              <a href="#contact" className="inline-block border border-primary-border-muted text-primary-muted px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-primary-text hover:text-primary-bg hover:border-primary-text transition-all duration-300">
                Get in Touch
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-sm font-medium">
            &copy; {new Date().getFullYear()} BraxSystems. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-primary-faint hover:text-primary-text transition-colors duration-200 text-sm uppercase tracking-widest font-bold group"
          >
            Back to Top
            <span className="w-8 h-8 rounded-full border border-primary-border-muted flex items-center justify-center group-hover:border-primary-text group-hover:bg-primary-text group-hover:text-primary-bg transition-all duration-200">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

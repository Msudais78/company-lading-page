import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (window.location.pathname !== '/') {
      window.location.href = '/' + href;
    } else {
      const element = document.getElementById(href.substring(1));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Work', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary-bg/80 backdrop-blur-md border-b border-primary-border-muted py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <a href="/" onClick={() => setIsOpen(false)} className="text-xl md:text-2xl font-bold tracking-tight text-primary-text flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl md:text-3xl font-black bg-primary-text text-primary-bg px-2 py-1 italic rounded-sm leading-none">B</span>
              <span className="uppercase tracking-widest mt-1">raxSystems</span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-primary-muted hover:text-primary-text transition-colors text-sm font-medium uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="border border-primary-text text-primary-text px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-primary-text hover:text-primary-bg transition-all duration-300 ease-in-out"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-text p-2">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-primary-bg z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
        style={{ top: '80px', height: 'calc(100vh - 80px)' }}
      >
        <div className="flex flex-col space-y-8 text-center w-full px-6">
          {navLinks.map((link, index) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-3xl font-black text-primary-muted hover:text-primary-text uppercase tracking-widest transition-all duration-300 transform hover:scale-110"
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="border-2 border-primary-text bg-primary-text text-primary-bg px-8 py-4 text-xl font-black uppercase tracking-widest mt-8 w-full transition-transform transform active:scale-95 text-center"
            style={{ transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms' }}
          >
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  );
}

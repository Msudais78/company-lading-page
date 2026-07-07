import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-black transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-2xl font-bold tracking-tight text-black">
              BraxSystems
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#about" className="text-black hover:underline font-bold">About</a>
            <a href="/#services" className="text-black hover:underline font-bold">Services</a>
            <a href="/#projects" className="text-black hover:underline font-bold">Projects</a>
            <a href="/#testimonials" className="text-black hover:underline font-bold">Testimonials</a>
            <Link to="/form" className="bg-black text-white border-2 border-black px-6 py-2 hover:bg-white hover:text-black transition-all duration-300 font-bold">
              Get in Touch
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b-2 border-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-black hover:bg-black hover:text-white font-bold border-b border-black">About</a>
            <a href="/#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-black hover:bg-black hover:text-white font-bold border-b border-black">Services</a>
            <a href="/#projects" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-black hover:bg-black hover:text-white font-bold border-b border-black">Projects</a>
            <a href="/#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-black hover:bg-black hover:text-white font-bold border-b border-black">Testimonials</a>
            <Link to="/form" className="block px-3 py-2 bg-black text-white font-bold mt-2 text-center" onClick={() => setIsOpen(false)}>Get in Touch</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

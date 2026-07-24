import { useState } from 'react';
import logo from "../../assets/Braxsystems.png";
import "./header.css";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);1
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Brax Systems Logo" className="logo-img" />
      </div>

      <nav>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
          </li>
          <li className="nav-item">
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
          </li>
          <li className="nav-item mobile-only-action">
            <div className="header-actions">
              <a href="tel:03419509108" className="phone-number">
                <svg className="phone-icon" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                03419509108
              </a>
              <button className="cta-button" onClick={() => setIsOpen(false)}>Contact Us</button>
            </div>
          </li>
        </ul>
      </nav>

      {/* Desktop Actions */}
      <div className="header-actions desktop-only-action">
        <a href="tel:03419509108" className="phone-number">
          <svg className="phone-icon" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          03419509108
        </a>
        <button className="cta-button">Contact Us</button>
      </div>

      <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

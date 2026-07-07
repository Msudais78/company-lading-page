import React from 'react';
import Hero from '../components/Hero';
import LogoTicker from '../components/LogoTicker';
import About from '../components/About';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Process from '../components/Process';
import Projects from '../components/Projects';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import TechStack from '../components/TechStack';
import CtaSection from '../components/CtaSection';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoTicker />
      <About />
      <Stats />
      <Services />
      <Process />
      <Projects />
      <Team />
      <Testimonials />
      <TechStack />
      <CtaSection />
      <Contact />
    </main>
  );
}

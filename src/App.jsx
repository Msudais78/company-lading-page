import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';

function App() {
  return (
    <div className="bg-primary-bg text-primary-text selection:bg-primary-text selection:text-primary-bg transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<CaseStudy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

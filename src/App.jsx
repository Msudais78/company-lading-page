import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Form from './components/form';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Projects />
              <Testimonials />
              <Contact />
            </>
          } />
          <Route path="/form" element={
            <div className="max-w-md mx-auto py-20 px-6">
              <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
              <Form />
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

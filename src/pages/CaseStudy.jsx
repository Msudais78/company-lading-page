import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import Reveal from '../components/Reveal';

export default function CaseStudy() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);

  useEffect(() => {
    const currentIndex = projects.findIndex(p => p.id === id);
    if (currentIndex !== -1) {
      setProject(projects[currentIndex]);
      // Determine next project for infinite loop
      const nextIndex = (currentIndex + 1) % projects.length;
      setNextProject(projects[nextIndex]);
    }
  }, [id]);

  if (project === null) {
    // Check if it's still loading (sync, so it should be fast, but just in case)
    return null; // Or could return <Navigate to="/" /> if not found
  }

  return (
    <article className="min-h-screen bg-primary-bg">
      {/* 1. Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-faint hover:text-primary-text font-bold uppercase tracking-widest text-xs mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <Reveal direction="up">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-primary-text rounded-full"></span>
            <p className="text-sm uppercase tracking-widest text-primary-muted font-bold">
              {project.category}
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-text tracking-tighter mb-12 leading-tight">
            {project.title}
          </h1>
        </Reveal>
      </section>

      {/* 2. Cover Image */}
      <Reveal direction="up" delay={200}>
        <div className="w-full aspect-[21/9] bg-primary-card overflow-hidden">
          <img 
            src={project.image} 
            alt={`${project.title} Cover`} 
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </Reveal>

      {/* 3. Briefing Grid */}
      <section className="py-24 border-b border-primary-border max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-primary-faint uppercase tracking-widest text-sm font-bold mb-4">Client</h4>
              <p className="text-xl text-primary-text font-medium">{project.client}</p>
            </div>
            <div>
              <h4 className="text-primary-faint uppercase tracking-widest text-sm font-bold mb-4">Timeline</h4>
              <p className="text-xl text-primary-text font-medium">{project.timeline}</p>
            </div>
            <div>
              <h4 className="text-primary-faint uppercase tracking-widest text-sm font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-text font-medium">
                {project.services.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. The Challenge & Solution */}
      <section className="py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-8">The Challenge</h2>
            <p className="text-xl md:text-2xl text-primary-muted leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </Reveal>

        {/* First Gallery Image as Breaker */}
        {project.gallery[0] && (
          <Reveal direction="up">
            <div className="w-full aspect-video bg-primary-card mb-24 overflow-hidden">
              <img src={project.gallery[0]} alt="Project Detail" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        )}

        <Reveal direction="up">
          <div className="mb-32">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-8">The Architecture & Solution</h2>
            <p className="text-xl md:text-2xl text-primary-muted leading-relaxed">
              {project.solution}
            </p>
          </div>
        </Reveal>

        {/* Results Grid */}
        <Reveal direction="up">
          <div className="border border-primary-border-muted p-12 lg:p-16 bg-primary-card">
            <h3 className="text-2xl font-bold text-primary-text mb-12 text-center uppercase tracking-widest">Impact & Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {project.results.map((result, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-5xl md:text-6xl font-bold text-primary-text tracking-tighter mb-4">{result.value}</span>
                  <span className="text-primary-faint uppercase tracking-widest text-sm font-bold">{result.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 5. Remaining Gallery Images */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.slice(1).map((img, i) => (
            <Reveal key={i} direction="up" delay={i * 100}>
              <div className="aspect-square bg-primary-card overflow-hidden">
                <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover transition-all duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. Next Project CTA */}
      {nextProject && (
        <section className="py-32 border-t border-primary-border bg-primary-card-hover text-center px-4">
          <Reveal direction="up">
            <p className="text-primary-faint uppercase tracking-widest font-bold mb-6">Next Case Study</p>
            <Link 
              to={`/project/${nextProject.id}`} 
              className="group inline-flex flex-col items-center"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-primary-text tracking-tight mb-8 group-hover:opacity-70 transition-opacity">
                {nextProject.title}
              </h2>
              <div className="w-16 h-16 rounded-full border border-primary-text flex items-center justify-center text-primary-text group-hover:bg-primary-text group-hover:text-primary-bg transition-all duration-300 transform group-hover:translate-x-2">
                <ArrowRight className="w-6 h-6" />
              </div>
            </Link>
          </Reveal>
        </section>
      )}
    </article>
  );
}

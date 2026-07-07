const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'HealthCare App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'E-Commerce Platform',
    category: 'UI/UX Design & SEO',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-white border-b-8 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black uppercase tracking-tight">Featured Projects</h2>
            <p className="text-black text-xl max-w-xl font-medium">
              A glimpse into the digital solutions we've architected for our partners.
            </p>
          </div>
          <a href="#" className="mt-6 md:mt-0 text-white bg-black px-6 py-3 font-bold border-2 border-black uppercase tracking-wider flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black active:translate-y-0 active:shadow-none">
            View All Projects
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative cursor-pointer block border-4 border-black overflow-hidden bg-white transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              {/* Grayscale filter for images to maintain strict B&W theme, turning colorful images B&W */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[400px] object-cover grayscale group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10 flex flex-col justify-center items-center text-center p-6 border-4 border-transparent group-hover:border-black">
                <p className="text-black font-bold mb-2 uppercase tracking-widest border-b-2 border-black pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">{project.category}</p>
                <h3 className="text-3xl font-black text-black uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

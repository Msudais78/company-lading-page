export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black bg-white text-black font-bold mb-8 uppercase tracking-widest">
          <span className="w-2 h-2 bg-black"></span>
          Elevating Digital Experiences
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-black uppercase leading-none">
          Architecting <br className="hidden md:block" />
          Digital Solutions
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-black max-w-3xl mx-auto mb-10 font-medium border-l-4 border-black pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          BraxSystems delivers high-performance web and mobile applications, cutting-edge UI/UX, and data-driven marketing to scale your business.
        </p>


        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
          <a href="#services" className="bg-black text-white px-8 py-4 font-bold text-lg border-2 border-black uppercase tracking-wider transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black active:translate-y-0 active:shadow-none">
            Explore Services
          </a>
          <a href="#projects" className="px-8 py-4 font-bold text-lg text-black bg-white border-2 border-black uppercase tracking-wider transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white active:translate-y-0 active:shadow-none">
            View Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full border-b-8 border-black"></div>
    </section>
  );
}

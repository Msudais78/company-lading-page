export default function About() {
  return (
    <section id="about" className="py-20 relative bg-white border-b-8 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-black uppercase tracking-tight">
              Who We Are
            </h2>
            <p className="text-black text-xl mb-6 leading-relaxed font-medium">
              We are a team of passionate engineers, designers, and marketers dedicated to transforming your ideas into powerful digital solutions. From scalable web architectures to intuitive user interfaces, we bridge the gap between complex technology and seamless user experiences.
            </p>
            <p className="text-black text-xl mb-8 leading-relaxed font-medium">
              With a deep understanding of modern ecosystems, we don't just build software—we craft digital ecosystems that drive growth, enhance engagement, and boost your bottom line.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black p-6 border-4 border-black text-white">
                <h3 className="text-5xl font-black mb-2">150+</h3>
                <p className="text-lg font-bold uppercase tracking-wider">Projects</p>
              </div>
              <div className="bg-white p-6 border-4 border-black text-black">
                <h3 className="text-5xl font-black mb-2">99%</h3>
                <p className="text-lg font-bold uppercase tracking-wider">Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white border-8 border-black p-8 group overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <svg className="w-full h-auto text-black" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-white p-6 border-4 border-black">
                  <p className="text-2xl font-black text-black uppercase tracking-widest">Global<br/>Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

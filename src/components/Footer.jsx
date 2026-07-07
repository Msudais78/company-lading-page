export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="text-2xl font-black tracking-tight text-white uppercase">
                BraxSystems
              </span>
            </div>
            <p className="text-white font-medium mb-6 border-l-4 border-white pl-4">
              Empowering businesses through cutting-edge digital solutions, scalable architecture, and strategic marketing.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-black text-white mb-6 uppercase tracking-wider border-b-2 border-white pb-2 inline-block">Services</h4>
            <ul className="space-y-4 font-bold">
              <li><a href="#" className="hover:underline">Web Development</a></li>
              <li><a href="#" className="hover:underline">App Development</a></li>
              <li><a href="#" className="hover:underline">UI/UX Design</a></li>
              <li><a href="#" className="hover:underline">SEO Optimization</a></li>
              <li><a href="#" className="hover:underline">Cloud Architecture</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-black text-white mb-6 uppercase tracking-wider border-b-2 border-white pb-2 inline-block">Company</h4>
            <ul className="space-y-4 font-bold">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#projects" className="hover:underline">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-black text-white mb-6 uppercase tracking-wider border-b-2 border-white pb-2 inline-block">Subscribe</h4>
            <p className="text-white mb-4 font-bold">Get the latest insights on tech.</p>
            <div className="flex">
              <input type="email" placeholder="YOUR EMAIL" className="bg-black border-2 border-white border-r-0 px-4 py-3 w-full text-white focus:outline-none placeholder-white uppercase font-bold" />
              <button className="bg-white text-black border-2 border-white px-4 py-3 font-black hover:bg-black hover:text-white transition-colors uppercase">
                Send
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t-4 border-white pt-8 flex flex-col md:flex-row justify-between items-center font-bold uppercase text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BraxSystems. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

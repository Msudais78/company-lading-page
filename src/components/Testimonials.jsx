const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow',
    content: 'BraxSystems completely transformed our digital presence. Their UI/UX team delivered a design that increased our user retention by 40% in just two months.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder, RetailPro',
    content: 'The custom e-commerce platform they built handles our peak traffic effortlessly. True professionals who understand both business and scalable architecture.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    name: 'Emily Chen',
    role: 'Marketing Director, GlobalReach',
    content: 'Their SEO and Digital Marketing strategies put us on the first page of Google for our main keywords. The ROI has been phenomenal.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative bg-white border-b-8 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black uppercase tracking-tight">Client Feedback</h2>
          <p className="text-black text-xl max-w-2xl mx-auto font-medium">
            Don't just take our word for it. Here's what our partners have achieved.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 border-4 border-black relative transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white group cursor-pointer">
              <div className="text-black group-hover:text-white mb-6 transition-colors duration-300">
                <svg className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-300 ease-out" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-black group-hover:text-white text-lg font-bold mb-8 italic transition-colors duration-300">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 grayscale border-2 border-black group-hover:border-white transition-all duration-300" />
                <div>
                  <h4 className="font-black text-black group-hover:text-white uppercase transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-sm font-bold text-black group-hover:text-white border-t-2 border-black group-hover:border-white pt-1 transition-all duration-300">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative bg-white border-b-8 border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black uppercase tracking-tight">Get in Touch</h2>
          <p className="text-black text-xl max-w-2xl mx-auto font-medium">
            Ready to architect your next big digital solution? Drop us a message below.
          </p>
        </div>
        
        <div className="bg-white p-8 md:p-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <form 
            action="https://formsubmit.co/sudais.datasceince@gmail.com" 
            method="POST"
            className="space-y-6"
          >
            {/* Optional FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New Contact Form Submission - BraxSystems" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-black font-bold uppercase tracking-wider mb-2">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  className="bg-white border-4 border-black px-4 py-3 text-black font-bold focus:outline-none focus:ring-4 focus:ring-black/20 transition-all duration-300"
                  placeholder="JOHN DOE"
                />
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="email" className="text-black font-bold uppercase tracking-wider mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  className="bg-white border-4 border-black px-4 py-3 text-black font-bold focus:outline-none focus:ring-4 focus:ring-black/20 transition-all duration-300"
                  placeholder="JOHN@EXAMPLE.COM"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-black font-bold uppercase tracking-wider mb-2">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows="6" 
                required 
                className="bg-white border-4 border-black px-4 py-3 text-black font-bold focus:outline-none focus:ring-4 focus:ring-black/20 transition-all duration-300 resize-none"
                placeholder="HOW CAN WE HELP YOU?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-black text-white px-8 py-5 font-black text-xl border-4 border-black uppercase tracking-widest transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black active:translate-y-0 active:shadow-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

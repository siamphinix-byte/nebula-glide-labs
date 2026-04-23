import { CheckCircle2, ArrowRight, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="relative bg-[#050209] overflow-hidden pt-32">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/20 rounded-t-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* CTA Card */}
        <div className="bg-[#11081a] border border-white/5 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 mb-32 relative overflow-hidden card-glow">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none" />
           <div className="flex-1 relative z-10">
              <span className="text-white/60 text-sm font-medium">Claim a $799 Consultation, on US!</span>
              <h2 className="text-4xl md:text-5xl font-semibold mt-4 mb-6">
                Enhance Your Brand <br />
                Potential <span className="font-serif italic text-brand-primary">At No Cost!</span>
              </h2>
              <ul className="space-y-3 mb-8">
                {['Expect a response from us within 24 hours', 'We\'re happy to sign an NDA upon request', 'Get access to a team of dedicated product specialists'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                 <img src="https://picsum.photos/seed/ceo/60/60" referrerPolicy="no-referrer" alt="CEO" className="w-14 h-14 rounded-full border-2 border-brand-primary/50" />
                 <div>
                    <p className="font-bold">Abdullah Al Noman</p>
                    <p className="text-white/50 text-sm">CEO & Co-founder</p>
                 </div>
              </div>
           </div>
           
           <div className="flex-1 w-full max-w-md bg-white/[0.02] border border-white/10 rounded-3xl p-8 relative z-10">
             <form className="space-y-4">
               <div>
                 <label className="text-sm font-medium text-white/70 block mb-1">Full Name</label>
                 <input type="text" placeholder="John Doe" className="w-full bg-[#1a0f26] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" />
               </div>
               <div className="flex gap-4">
                 <div className="flex-1">
                   <label className="text-sm font-medium text-white/70 block mb-1">Your Email</label>
                   <input type="email" placeholder="youremail@gmail.com" className="w-full bg-[#1a0f26] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" />
                 </div>
                 <div className="flex-1">
                   <label className="text-sm font-medium text-white/70 block mb-1">Whatsapp Number</label>
                   <input type="text" placeholder="1 123 345 678" className="w-full bg-[#1a0f26] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" />
                 </div>
               </div>
               <div>
                  <label className="text-sm font-medium text-white/70 block mb-2">Project Budget</label>
                  <div className="flex flex-wrap gap-2">
                     {['Less than $5K', '$5K - $10K', '$10K - $20K', '$20K - $50K', 'More than $50K'].map(b => (
                        <button key={b} type="button" className="px-3 py-1.5 rounded-lg border border-white/10 text-xs text-white/70 bg-[#1a0f26] hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-colors">{b}</button>
                     ))}
                  </div>
               </div>
               <div>
                 <label className="text-sm font-medium text-white/70 block mb-1">Project Details</label>
                 <textarea placeholder="I want to redesign my website..." className="w-full bg-[#1a0f26] border border-white/10 rounded-xl px-4 py-3 text-sm h-24 resize-none focus:outline-none focus:border-brand-primary transition-colors"></textarea>
               </div>
               <button type="button" className="w-full bg-brand-primary text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-brand-primary/90 transition-colors glow-btn mt-2">
                 Let's Connect <ArrowRight className="w-4 h-4" />
               </button>
             </form>
           </div>
        </div>

        {/* Global Locations Map Placeholder */}
        <div className="mb-24 relative rounded-3xl overflow-hidden aspect-[2/1] border border-white/5 opacity-80 group hover:opacity-100 transition-opacity duration-500">
           <img src="https://picsum.photos/seed/earth/1200/600?grayscale" referrerPolicy="no-referrer" alt="World Map" className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-50" />
           <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050209] to-transparent h-1/2" />
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="text-8xl md:text-[150px] font-bold text-white/[0.03] tracking-tighter mix-blend-overlay">BRANDOFRIAR</h2>
           </div>
           
           <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 md:grid-cols-5 gap-4">
              {['United States', 'South Africa', 'Singapore', 'Italy', 'Dubai'].map(loc => (
                 <div key={loc} className="bg-[#11081a]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl hidden md:block">
                    <p className="font-semibold text-sm mb-1">{loc}</p>
                    <p className="text-xs text-white/50">Location Info St.</p>
                 </div>
              ))}
           </div>
        </div>

        {/* Links Area */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-white/10 pt-16 pb-32">
           <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded bg-brand-primary flex items-center justify-center font-bold text-white">B</div>
                <span className="font-bold text-xl tracking-tight">BrandoFriar</span>
              </div>
              <p className="text-white/50 text-sm max-w-sm mb-6 leading-relaxed">
                 Say goodbye to outdated enterprise software and welcome the smoother one. We lead you from design to product innovation to shape your path from idea to success.
              </p>
              <div className="flex gap-4">
                 {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                       <Icon className="w-4 h-4 text-white" />
                    </a>
                 ))}
              </div>
           </div>
           <div>
              <h4 className="font-semibold mb-6">Important Links</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                 <li><a href="#" className="hover:text-brand-primary transition-colors">Contact Us</a></li>
                 <li><a href="#" className="hover:text-brand-primary transition-colors">About Us</a></li>
                 <li><a href="#" className="hover:text-brand-primary transition-colors">Products</a></li>
                 <li><a href="#" className="hover:text-brand-primary transition-colors">Industry</a></li>
              </ul>
           </div>
           <div>
              <h4 className="font-semibold mb-6">Services</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                 <li><a href="#" className="hover:text-brand-primary transition-colors">UI/UX Design</a></li>
                 <li><a href="#" className="hover:text-brand-primary transition-colors">Web Design</a></li>
                 <li><a href="#" className="hover:text-brand-primary transition-colors">Logo & Branding</a></li>
                 <li><a href="#" className="hover:text-brand-primary transition-colors">Webflow Design</a></li>
              </ul>
           </div>
           <div>
              <h4 className="font-semibold mb-6">Compare</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                 <li><a href="#" className="hover:text-brand-primary transition-colors">Vs Agencies</a></li>
                 <li><a href="#" className="hover:text-brand-primary transition-colors">Vs Freelancers</a></li>
                 <li><a href="#" className="hover:text-brand-primary transition-colors">Vs Inhouse</a></li>
              </ul>
           </div>
        </div>
      </div>
      
      {/* Bottom Legal */}
      <div className="border-t border-white/5 py-6">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
            <Link to="/terms-condition" className="hover:text-brand-primary transition-colors">Terms & Conditions</Link>
            <p>© 2026, BrandoFriar LLC. All Rights Reserved.</p>
            <Link to="/privacy-policy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
         </div>
      </div>
    </footer>
  )
}

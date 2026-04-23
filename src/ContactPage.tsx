import { Reveal, StaggerReveal } from './components/GSAPWrapper';
import { CheckCircle2, ArrowRight, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ContactPage() {
  return (
    <div className="bg-[#09030b] min-h-screen text-white pt-32 pb-40 relative overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium text-white/70 mb-8 backdrop-blur-md">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-white">Contact</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Ready to <span className="font-serif italic text-brand-primary">Elevate</span> <br />
            Your Brand?
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Whether you have a complete vision or just an idea, our team is ready to help you craft an incredible digital experience.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
           
           {/* Left Column: Info & Value Prop */}
           <StaggerReveal className="flex flex-col gap-10">
              <div className="bg-[#11081a]/80 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden card-glow group">
                 <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-primary/20 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                 
                 <span className="text-brand-primary text-sm font-bold uppercase tracking-widest block mb-4">Claim a $799 Consultation, on US!</span>
                 <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                   Enhance Your Brand <br />
                   Potential <span className="font-serif italic text-brand-teal">At No Cost!</span>
                 </h2>
                 <ul className="space-y-4 mb-10">
                   {['Expect a response from us within 24 hours', 'We\'re happy to sign an NDA upon request', 'Get access to a team of dedicated product specialists'].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-white/80 text-sm md:text-base">
                       <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                       {item}
                     </li>
                   ))}
                 </ul>
                 <div className="flex items-center gap-5 bg-[#0a0a0a]/50 p-4 rounded-[32px] border border-white/5 w-fit">
                    <img src="https://picsum.photos/seed/noman/80/80" referrerPolicy="no-referrer" alt="CEO" className="w-16 h-16 rounded-full border-2 border-brand-primary" />
                    <div>
                       <p className="font-bold text-lg">Abdullah Al Noman</p>
                       <p className="text-white/60 text-sm">CEO & Co-founder</p>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 hover:bg-white/10 hover:border-white/10 transition-colors">
                    <Mail className="w-8 h-8 text-brand-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-white/60 text-sm">hello@brandofriar.com</p>
                 </div>
                 <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 hover:bg-white/10 hover:border-white/10 transition-colors">
                    <MapPin className="w-8 h-8 text-brand-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                    <p className="text-white/60 text-sm leading-relaxed">16 Cove Road, Mount Arlington<br/>NJ 07856, USA.</p>
                 </div>
              </div>
           </StaggerReveal>

           {/* Right Column: Form */}
           <Reveal direction="up" delay={0.3} className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl relative z-10 backdrop-blur-sm">
             <form className="space-y-6">
               <div>
                 <label className="text-sm font-semibold text-white/80 block mb-2">Full Name <span className="text-red-500">*</span></label>
                 <input type="text" placeholder="e.g. John Doe" className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-white placeholder:text-white/30" required />
               </div>
               <div className="flex flex-col sm:flex-row gap-6">
                 <div className="flex-1">
                   <label className="text-sm font-semibold text-white/80 block mb-2">Your Email <span className="text-red-500">*</span></label>
                   <input type="email" placeholder="john@company.com" className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-white placeholder:text-white/30" required />
                 </div>
                 <div className="flex-1">
                   <label className="text-sm font-semibold text-white/80 block mb-2">Whatsapp Number</label>
                   <input type="tel" placeholder="+1 (234) 567-8900" className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-white placeholder:text-white/30" />
                 </div>
               </div>
               <div>
                  <label className="text-sm font-semibold text-white/80 block mb-3">Project Budget</label>
                  <div className="flex flex-wrap gap-2">
                     {['Less than $5K', '$5K - $10K', '$10K - $20K', '$20K - $50K', 'More than $50K'].map(b => (
                        <label key={b} className="cursor-pointer group">
                           <input type="radio" name="budget" className="hidden peer" value={b} />
                           <span className="px-5 py-2.5 rounded-full border border-white/10 text-sm font-medium text-white/70 bg-[#0a0a0a] peer-checked:bg-brand-primary peer-checked:text-white peer-checked:border-brand-primary peer-checked:shadow-[0_0_15px_rgba(122,60,245,0.4)] hover:bg-white/10 transition-all block">
                              {b}
                           </span>
                        </label>
                     ))}
                  </div>
               </div>
               <div>
                 <label className="text-sm font-semibold text-white/80 block mb-2">Project Details</label>
                 <textarea placeholder="Tell us about your project goals, timeline, and any specific requirements..." className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl px-5 py-4 text-sm h-36 resize-none focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-white placeholder:text-white/30"></textarea>
               </div>
               <button type="button" className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-primary/90 transition-all glow-btn mt-4 group">
                 Let's Connect <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
             </form>
           </Reveal>
        </div>
      </div>
    </div>
  );
}

import { Reveal } from '../components/GSAPWrapper';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Quote() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-24 relative z-10">
      
      {/* Left Text / Info Side */}
      <div className="lg:w-5/12 space-y-8 sticky top-32">
        <Reveal direction="down">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold tracking-widest uppercase border border-brand-primary/20 shadow-[0_0_15px_rgba(122,60,245,0.2)]">
            Launch Your Vision
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mt-6">
            Turn your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-[#a166ff] shadow-brand-primary/20 drop-shadow-lg">Ideas</span> into Digital <span className="italic font-serif opacity-90">Assets.</span>
          </h1>
          
          <p className="text-white/60 text-lg leading-relaxed max-w-md mt-6">
            We partner with ambitious founders to design, build, and scale the next generation of industry leaders.
          </p>
          
          <div className="flex items-center gap-6 pt-6">
            <div className="flex -space-x-3">
              <img src="https://picsum.photos/seed/face1/60/60" className="w-12 h-12 rounded-full border-2 border-brand-bg object-cover" alt="Founder" />
              <img src="https://picsum.photos/seed/face2/60/60" className="w-12 h-12 rounded-full border-2 border-brand-bg object-cover" alt="Founder" />
              <img src="https://picsum.photos/seed/face3/60/60" className="w-12 h-12 rounded-full border-2 border-brand-bg object-cover" alt="Founder" />
            </div>
            <span className="text-sm font-medium text-white/50 border-l border-white/10 pl-6 py-2">
              Joined by <strong className="text-white/80">250+ Foundations</strong>
            </span>
          </div>
        </Reveal>
      </div>

      {/* Right Form Card Side */}
      <Reveal delay={0.2} className="lg:w-7/12 w-full w-full">
        <div className="bg-brand-surface rounded-2xl shadow-2xl p-1 relative overflow-hidden border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-transparent opacity-50 pointer-events-none" />
          
          <div className="bg-[#09030b]/80 backdrop-blur-xl rounded-xl p-8 lg:p-10 relative z-10">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Get a Free Quote</h2>
              <p className="text-white/60 text-sm">Tell us about your venture and we'll handle the rest.</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.location.href='/'; }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all placeholder:text-white/20 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Company Name</label>
                  <input type="text" placeholder="Venture Inc." required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all placeholder:text-white/20 outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Email Address</label>
                  <input type="email" placeholder="john@venture.com" required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all placeholder:text-white/20 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all placeholder:text-white/20 outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Service Interest</label>
                <select required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all appearance-none outline-none cursor-pointer">
                  <option value="" disabled selected className="text-black">Select a service...</option>
                  <option value="brand" className="text-black">Brand Strategy</option>
                  <option value="uiux" className="text-black">UI/UX Design</option>
                  <option value="dev" className="text-black">Development</option>
                  <option value="growth" className="text-black">Growth Marketing</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Project Details</label>
                <textarea rows={4} placeholder="Tell us about your goals, timeline, and challenges..." required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all placeholder:text-white/20 resize-none outline-none"></textarea>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full bg-gradient-to-r from-brand-primary to-[#a166ff] text-white font-bold py-5 rounded-xl shadow-[0_0_30px_rgba(122,60,245,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 text-lg">
                  Get My Free Quote <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-white/40 mt-6 max-w-xs mx-auto leading-relaxed">
                  By submitting, you agree to our <Link to="/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link> and <Link to="/terms-condition" className="text-brand-primary hover:underline">Terms of Service</Link>.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Action Highlights Below Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="bg-brand-surface/50 p-6 rounded-2xl flex items-center gap-4 border border-white/5">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-primary shrink-0 shadow-[0_0_15px_rgba(122,60,245,0.2)]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
               <h4 className="text-sm font-bold text-white mb-0.5">24h Response</h4>
               <p className="text-xs text-white/50 leading-relaxed">Our team reviews all inquiries within one business day.</p>
            </div>
          </div>
          <div className="bg-brand-surface/50 p-6 rounded-2xl flex items-center gap-4 border border-white/5">
            <div className="w-12 h-12 bg-[#1cdbba]/10 rounded-full flex items-center justify-center text-brand-teal shrink-0 shadow-[0_0_15px_rgba(28,219,186,0.2)]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
               <h4 className="text-sm font-bold text-white mb-0.5">Zero Obligations</h4>
               <p className="text-xs text-white/50 leading-relaxed">Get expert feedback and pricing without any pressure.</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Abstract Orbs */}
      <div className="fixed top-1/4 -left-1/4 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 -right-1/4 w-[600px] h-[600px] bg-[#ebd356]/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
    </main>
  );
}

import { Reveal } from '../components/GSAPWrapper';
import { Rocket, CheckCircle2, Shield, Lock, CreditCard, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Checkout() {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-center gap-12 lg:gap-24">
      {/* Left Section: Order Summary */}
      <Reveal className="w-full md:w-5/12 flex flex-col space-y-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-bold text-brand-primary tracking-widest text-xs uppercase">Your Selection</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none">Growth Package</h1>
          </div>
          
          <div className="bg-brand-surface rounded-2xl p-8 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-baseline">
                <span className="text-white/60 font-medium">Subscription</span>
                <span className="text-3xl font-bold text-white tracking-tight">$2,450<span className="text-sm font-normal text-white/40">/mo</span></span>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70 leading-relaxed">Full Ecosystem Access & Governance Tools</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70 leading-relaxed">Strategic Venture Capital Advisory</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70 leading-relaxed">Priority 24/7 Studio Support</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-center gap-6 px-2 opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex -space-x-3">
              <img src="https://picsum.photos/seed/p1/50/50" className="w-10 h-10 rounded-full border-2 border-brand-bg object-cover grayscale" alt="user" />
              <img src="https://picsum.photos/seed/p2/50/50" className="w-10 h-10 rounded-full border-2 border-brand-bg object-cover grayscale" alt="user" />
              <div className="w-10 h-10 rounded-full border-2 border-brand-bg bg-brand-primary/20 flex items-center justify-center text-[10px] font-bold text-brand-primary backdrop-blur-md">
                +14
              </div>
            </div>
            <p className="text-xs text-white/50 leading-relaxed max-w-[200px]">
              Join 800+ founders accelerating their ventures with BrandFriar.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Right Section: Payment Card */}
      <Reveal direction="up" delay={0.2} className="w-full md:w-7/12 mt-8 md:mt-0">
        <div className="bg-brand-surface rounded-2xl shadow-2xl p-8 lg:p-12 relative overflow-hidden border border-white/5">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Payment Method</h2>
              <p className="text-white/50 text-sm">Secure and encrypted transaction via Stripe.</p>
            </div>
            
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); window.location.href='/payment-verification'; }}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Account Email</label>
                <input 
                  type="email" 
                  placeholder="founder@venture.com" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all placeholder:text-white/20 outline-none" 
                />
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">Card Details</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Card number" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all placeholder:text-white/20 outline-none" 
                    />
                    <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 w-6 h-6 pointer-events-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="MM / YY" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all placeholder:text-white/20 text-center outline-none" 
                  />
                  <input 
                    type="text" 
                    placeholder="CVC" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all placeholder:text-white/20 text-center outline-none" 
                  />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-brand-primary to-[#a166ff] text-white font-bold py-5 rounded-xl shadow-[0_0_30px_rgba(122,60,245,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 text-lg"
                >
                  Pay $2,450 <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white/50">
                <Shield className="w-5 h-5" />
                <span className="text-[11px] font-bold uppercase tracking-widest">PCI Compliant</span>
              </div>
              <div className="flex items-center gap-2 opacity-60">
                <Lock className="w-4 h-4" />
                <span className="text-[10px] font-medium tracking-wide">Secured by Stripe SSL</span>
              </div>
            </div>
          </div>
          <div className="absolute top-8 right-8 z-50">
            <Link to="/pricing" className="text-xs uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors">
              Cancel
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
}

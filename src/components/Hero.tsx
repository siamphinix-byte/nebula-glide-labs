import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, Calendar } from 'lucide-react';

export function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-badge', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' });
      gsap.from('.hero-title', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', stagger: 0.2, delay: 0.2 });
      gsap.from('.hero-btn', { opacity: 0, scale: 0.9, duration: 0.6, ease: 'back.out(1.5)', delay: 0.8 });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center min-h-[90vh] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />
      
      <div className="hero-badge flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
        <div className="flex -space-x-2">
           {[1,2,3].map((i) => (
             <img key={i} src={`https://picsum.photos/seed/${i * 10}/32/32`} alt="avatar" className="w-6 h-6 rounded-full border border-[#09030b]" referrerPolicy="no-referrer" />
           ))}
        </div>
        <span className="text-sm font-medium text-white/80">Leading UI/UX Design Agency</span>
        <div className="flex text-[#ebd356] ml-2">
          ★★★★★
        </div>
      </div>

      <h1 className="hero-title max-w-5xl mx-auto text-5xl md:text-7xl lg:text-[100px] leading-[0.9] font-semibold tracking-tight mb-8">
        We <span className="font-serif italic text-brand-primary relative">
          Design
          <Sparkles className="absolute -top-4 -right-6 w-8 h-8 text-brand-secondary fill-brand-secondary" />
        </span> Products That Drive <span className="font-serif italic text-brand-teal relative">
          Results
          <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 200 12" fill="none">
            <path d="M2.37891 9.87329C46.3318 -0.0632596 95.834 -0.0163351 139.791 9.87228" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </span>
      </h1>

      <div className="hero-btn mt-12 flex gap-4">
        <button className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all glow-btn group">
          <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Book a Call
        </button>
      </div>

      {/* Marquee snippet included below the hero in the screenshot */}
      <div className="hero-title w-full max-w-6xl mt-24">
         <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-6">Trusted by 200+ of the world's top brands</p>
         <div className="marquee">
            <div className="marquee-content opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {['pepsi', 'liberate', 'edvive', 'klub', 'lendview', 'property finder', 'rakuten'].map((brand, i) => (
                  <span key={i} className="text-2xl font-bold font-serif italic text-white/70 mx-8">{brand}</span>
               ))}
            </div>
             <div className="marquee-content opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {['pepsi', 'liberate', 'edvive', 'klub', 'lendview', 'property finder', 'rakuten'].map((brand, i) => (
                  <span key={i} className="text-2xl font-bold font-serif italic text-white/70 mx-8">{brand}</span>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}

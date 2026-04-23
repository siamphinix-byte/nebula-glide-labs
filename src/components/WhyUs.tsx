import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function WhyUs() {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 px-6 bg-[#f7f7f7] text-[#09030b] flex flex-col items-center text-center overflow-hidden">
      <div className="mb-12 max-w-3xl">
        <span className="text-[#09030b]/60 text-sm font-semibold uppercase tracking-wider border border-[#09030b]/20 px-3 py-1 rounded-full">What Sets Us Apart</span>
        <h2 className="text-4xl md:text-5xl font-semibold mt-6">
          Why Us? Because Your <span className="font-serif italic">Growth Is Our Mission</span>
        </h2>
        <p className="text-[#09030b]/60 mt-4 text-lg">
          See the difference thoughtful design makes. Our works highlight the dedication we bring to every client partnership.
        </p>
      </div>

      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center mt-12 mb-24">
        {/* Core center */}
        <div className="absolute w-24 h-24 bg-brand-bg rounded-full z-20 flex items-center justify-center shadow-2xl">
          <div className="w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
             <div className="w-4 h-4 bg-brand-primary rounded-full animate-pulse" />
          </div>
        </div>

        {/* Orbiting dashed rings */}
        <div ref={circleRef} className="absolute inset-0">
          <div className="absolute inset-4 border border-dashed border-[#09030b]/20 rounded-full" />
          <div className="absolute inset-12 border border-solid border-[#09030b]/5 rounded-full" />
          <div className="absolute inset-24 border border-dashed border-[#09030b]/10 rounded-full" />
          
          {/* Orbiting Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center font-bold text-xl">🤝</div>
          <div className="absolute bottom-1/4 left-0 -translate-x-1/2 w-16 h-16 bg-brand-primary text-white rounded-full shadow-[0_0_20px_rgba(122,60,245,0.4)] flex items-center justify-center font-bold text-2xl">📈</div>
          <div className="absolute top-1/4 right-0 translate-x-1/2 w-14 h-14 bg-[#ebd356] rounded-full shadow-lg flex items-center justify-center font-bold text-xl">✨</div>
        </div>
      </div>
    </section>
  )
}

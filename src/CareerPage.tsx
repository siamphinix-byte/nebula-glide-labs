import { Reveal, StaggerReveal } from './components/GSAPWrapper';
import { ArrowRight, ChevronRight, Download, Users, Lightbulb, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQAccordion } from './components/FAQAccordion';

export function CareerPage() {
  return (
    <div className="bg-[#09030b] min-h-screen text-white font-sans selection:bg-brand-primary selection:text-white pb-0 relative">
      
      {/* 1. Hero Section */}
      <section className="bg-[#0d0714] text-white pt-20 pb-16 relative overflow-hidden flex flex-col items-center text-center z-10 rounded-b-[40px] md:rounded-b-[80px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center flex flex-col items-center w-full">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white/50 mb-6 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-brand-primary">Career</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
              Be A Part Of <br />
              <span className="font-serif italic drop-shadow-xl text-brand-teal">Something Great</span>
            </h1>
          </Reveal>

          {/* Collage Section */}
          <Reveal direction="up" delay={0.2} className="w-full mt-12 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <div className="rounded-3xl overflow-hidden h-64"><img src="https://picsum.photos/seed/team1/400/600" className="w-full h-full object-cover" alt="Team" referrerPolicy="no-referrer" /></div>
              <div className="rounded-3xl overflow-hidden h-64"><img src="https://picsum.photos/seed/team2/400/600" className="w-full h-full object-cover" alt="Team" referrerPolicy="no-referrer" /></div>
              <div className="rounded-3xl overflow-hidden h-64"><img src="https://picsum.photos/seed/team3/400/600" className="w-full h-full object-cover" alt="Team" referrerPolicy="no-referrer" /></div>
              <div className="rounded-3xl overflow-hidden h-64"><img src="https://picsum.photos/seed/team4/400/600" className="w-full h-full object-cover" alt="Team" referrerPolicy="no-referrer" /></div>
            </div>
            <div className="mt-8">
              <button className="bg-brand-primary text-white rounded-xl px-10 py-4 font-bold text-lg inline-flex items-center gap-2 hover:bg-brand-primary/90 transition-all shadow-[0_10px_20px_rgba(122,60,245,0.3)] hover:-translate-y-1">
                Meet Our Team <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Perks Section */}
      <section className="py-32 max-w-[1400px] mx-auto px-6 mt-10">
         <Reveal direction="up" className="text-center mb-16 relative">
            <span className="inline-block border border-brand-teal/30 text-brand-teal bg-brand-teal/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 relative z-10 backdrop-blur-md">Why Join Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight relative z-10 text-white drop-shadow-lg">
              Life at <span className="font-serif italic text-brand-primary drop-shadow-sm">BrandoFriar</span>
            </h2>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-teal/20 blur-[80px] pointer-events-none" />
         </Reveal>
         
         <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            <div className="bg-[#170d1e]/80 backdrop-blur-xl p-10 rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/5 hover:border-brand-primary/50 transition-colors duration-500 group relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
               <div className="w-16 h-16 bg-[#09030b] border border-white/10 rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-inner">
                  <Users className="w-8 h-8 text-brand-primary" />
               </div>
               <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-primary transition-colors relative z-10">Great Team Culture</h3>
               <p className="text-white/60 leading-relaxed text-base group-hover:text-white/80 transition-colors relative z-10">We believe in a collaborative, ego-free environment where everyone's voice is heard and valued.</p>
            </div>
            
            <div className="bg-[#170d1e]/80 backdrop-blur-xl p-10 rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/5 hover:border-brand-teal/50 transition-colors duration-500 group relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
               <div className="w-16 h-16 bg-[#09030b] border border-white/10 rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-inner">
                  <Lightbulb className="w-8 h-8 text-brand-teal" />
               </div>
               <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-teal transition-colors relative z-10">Continuous Learning</h3>
               <p className="text-white/60 leading-relaxed text-base group-hover:text-white/80 transition-colors relative z-10">We sponsor courses, workshops, and encourage side projects to keep your skills sharp.</p>
            </div>
            
            <div className="bg-[#170d1e]/80 backdrop-blur-xl p-10 rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/5 hover:border-brand-secondary/50 transition-colors duration-500 group relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
               <div className="w-16 h-16 bg-[#09030b] border border-white/10 rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-inner">
                  <HeartHandshake className="w-8 h-8 text-brand-secondary" />
               </div>
               <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-secondary transition-colors relative z-10">Work-Life Balance</h3>
               <p className="text-white/60 leading-relaxed text-base group-hover:text-white/80 transition-colors relative z-10">Flexible hours, remote work options, and mandatory time off to recharge your creative batteries.</p>
            </div>
         </StaggerReveal>
      </section>
      
      {/* 3. Open Positions Section */}
      <section id="open-positions" className="bg-[#0d0714] border-y border-white/5 py-32 rounded-[40px] md:rounded-[80px] relative shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
         <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px] md:rounded-[80px]">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(122,60,245,0.1)_0%,transparent_70%)] blur-[60px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(28,219,186,0.05)_0%,transparent_70%)] blur-[80px]" />
         </div>
         <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <Reveal direction="up" className="text-center mb-20 relative">
               <span className="inline-block border border-brand-primary/30 text-brand-primary bg-brand-primary/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 relative z-10 backdrop-blur-md shadow-[0_0_15px_rgba(122,60,245,0.2)]">Job Board</span>
               <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg relative z-10">
                 Current <span className="font-serif italic text-brand-teal drop-shadow-sm">Openings</span>
               </h2>
               <p className="text-white/60 mt-6 max-w-2xl mx-auto text-lg relative z-10">Don't see a role that fits? Send us an open application. We're always looking for talented folks.</p>
            </Reveal>

            <StaggerReveal className="space-y-8">
               {/* Job Card 1 */}
               <div className="bg-[#170d1e] rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border border-white/5 hover:border-brand-teal/50 transition-colors duration-500 group shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(28,219,186,0.15)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative z-10 w-full md:w-auto">
                     <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-[#09030b] border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-white/80 shadow-sm backdrop-blur-sm">Design</span>
                        <span className="bg-[#09030b] border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-white/80 shadow-sm backdrop-blur-sm">Full-time</span>
                        <span className="bg-[#09030b] border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-brand-primary shadow-sm backdrop-blur-sm">Remote</span>
                     </div>
                     <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-brand-teal transition-colors">Senior Product Designer</h3>
                     <p className="text-white/60 text-base max-w-xl group-hover:text-white/80 transition-colors">Lead end-to-end product design for high-profile client projects. Expertise in Figma and prototyping required.</p>
                  </div>
                  <div className="relative z-10 w-full md:w-auto flex justify-end">
                      <button className="bg-white/5 text-white/90 border border-white/10 hover:border-brand-teal hover:text-brand-teal hover:bg-brand-teal/10 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group/btn w-full md:w-auto">
                         Apply Now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                  </div>
               </div>

               {/* Job Card 2 */}
               <div className="bg-[#170d1e] rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border border-white/5 hover:border-brand-primary/50 transition-colors duration-500 group shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(122,60,245,0.15)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative z-10 w-full md:w-auto">
                     <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-[#09030b] border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-white/80 shadow-sm backdrop-blur-sm">Development</span>
                        <span className="bg-[#09030b] border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-white/80 shadow-sm backdrop-blur-sm">Full-time</span>
                        <span className="bg-[#09030b] border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-brand-teal shadow-sm backdrop-blur-sm">Hybrid</span>
                     </div>
                     <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">Frontend Developer (React)</h3>
                     <p className="text-white/60 text-base max-w-xl group-hover:text-white/80 transition-colors">Build pixel-perfect, highly animated React applications using Tailwind and GSAP. Experience with Vite a plus.</p>
                  </div>
                  <div className="relative z-10 w-full md:w-auto flex justify-end">
                      <button className="bg-white/5 text-white/90 border border-white/10 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/10 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group/btn w-full md:w-auto">
                         Apply Now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                  </div>
               </div>
               
               {/* Job Card 3 */}
               <div className="bg-[#170d1e] rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border border-white/5 hover:border-brand-secondary/50 transition-colors duration-500 group shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(235,211,86,0.15)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative z-10 w-full md:w-auto">
                     <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-[#09030b] border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-white/80 shadow-sm backdrop-blur-sm">Marketing</span>
                        <span className="bg-[#09030b] border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-white/80 shadow-sm backdrop-blur-sm">Part-time</span>
                        <span className="bg-[#09030b] border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-brand-secondary shadow-sm backdrop-blur-sm">Remote</span>
                     </div>
                     <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-brand-secondary transition-colors">Social Media Manager</h3>
                     <p className="text-white/60 text-base max-w-xl group-hover:text-white/80 transition-colors">Curate and manage our agency's presence across LinkedIn, Instagram, and Twitter/X.</p>
                  </div>
                  <div className="relative z-10 w-full md:w-auto flex justify-end">
                      <button className="bg-white/5 text-white/90 border border-white/10 hover:border-brand-secondary hover:text-brand-secondary hover:bg-brand-secondary/10 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group/btn w-full md:w-auto">
                         Apply Now <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                  </div>
               </div>
            </StaggerReveal>
         </div>
      </section>

      {/* 4. FAQs Section */}
      <section className="py-32 relative z-10 px-6">
         <div className="max-w-4xl mx-auto">
            <Reveal direction="up" className="text-center mb-16 relative">
               <span className="inline-block border border-brand-teal/30 text-brand-teal bg-brand-teal/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 relative z-10 backdrop-blur-md">Frequently Asked Questions</span>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg relative z-10 text-white">
                 Hiring <br/><span className="font-serif italic text-brand-secondary drop-shadow-sm">Process</span>
               </h2>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/20 blur-[80px] pointer-events-none" />
            </Reveal>

            <Reveal className="space-y-4 relative z-10">
               <div className="bg-[#170d1e]/80 backdrop-blur-xl rounded-[40px] p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/5">
                  <FAQAccordion question="How long does the hiring process take?" answer="Typically 2-3 weeks from the initial application to an offer. We value your time and try to move quickly." isDark={true} />
                  <FAQAccordion question="Will I have to do a test project?" answer="For design and development roles, we often do a small, paid test project (takes about 4-6 hours) to see how we collaborate." isDark={true} />
                  <FAQAccordion question="Do you sponsor visas?" answer="Currently, we are only able to hire individuals authorized to work in their respective locations or hire them as contractors." isDark={true} />
                  <FAQAccordion question="What should I include in my portfolio?" answer="Quality over quantity. Show us 2-3 of your best projects, explaining your process, challenges faced, and the final results." isDark={true} />
               </div>
            </Reveal>
         </div>
      </section>

      {/* Bottom Footer Marquee Section */}
      <div className="bg-brand-primary py-5 text-center text-white font-semibold text-lg md:text-xl overflow-hidden whitespace-nowrap relative z-20 border-t border-white/20 shadow-[0_-10px_30px_rgba(122,60,245,0.3)] hover:bg-brand-primary/90 transition-colors cursor-pointer">
         <div className="animate-[marquee_20s_linear_infinite] inline-block tracking-wide hover:paused">
            Why Risk It With The <span className="font-serif italic text-brand-teal mx-1">Wrong Partner?</span> Get 100% Value And Guarantee. Don't Miss Out - <Link to="/contact" className="underline hover:text-brand-teal transition-colors mx-1">Get Started Now</Link> <span className="mx-8 text-brand-teal opacity-50">✦</span>
            Why Risk It With The <span className="font-serif italic text-brand-teal mx-1">Wrong Partner?</span> Get 100% Value And Guarantee. Don't Miss Out - <Link to="/contact" className="underline hover:text-brand-teal transition-colors mx-1">Get Started Now</Link>
         </div>
      </div>

    </div>
  );
}

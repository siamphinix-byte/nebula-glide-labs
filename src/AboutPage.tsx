import { Reveal, StaggerReveal } from './components/GSAPWrapper';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQAccordion } from './components/FAQAccordion';

export function AboutPage() {
  return (
    <div className="bg-[#09030b] min-h-screen text-white pt-24 pb-0 relative overflow-hidden font-sans">
      
      {/* 1. Hero Section (Dark) */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 relative">
        <Reveal direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium text-white/70 mb-8 backdrop-blur-md">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-white">About us</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Behind The Scene: Team <br />
            <span className="font-serif italic text-brand-teal">Design Monks</span>
          </h1>
        </Reveal>

        {/* Masonry Image Collage */}
        <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          <div className="col-span-2 row-span-2 rounded-[32px] overflow-hidden relative group">
            <img src="https://picsum.photos/seed/team1/800/800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Team 1" referrerPolicy="no-referrer" />
          </div>
          <div className="rounded-[32px] overflow-hidden relative group">
            <img src="https://picsum.photos/seed/team2/400/400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Team 2" referrerPolicy="no-referrer" />
          </div>
          <div className="rounded-[32px] overflow-hidden relative group">
            <img src="https://picsum.photos/seed/team3/400/400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Team 3" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-2 rounded-[32px] overflow-hidden relative group">
            <img src="https://picsum.photos/seed/team4/800/400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Team 4" referrerPolicy="no-referrer" />
          </div>
        </StaggerReveal>
      </section>

      {/* 2. Light Section: Who We Are & Metrics */}
      <section className="bg-[#f7f7f7] text-[#09030b] py-24 rounded-t-[40px] md:rounded-t-[80px]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div>
              <span className="inline-block border border-green-500/30 text-green-700 bg-green-500/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                Your Go-To Partner For <br/>Impactful Designs To<br/>Create <span className="font-serif italic text-brand-primary">Apps & Websites</span> For Business Success!
              </h2>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-primary/90 transition-all glow-btn">
                Book a Call <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
               <img src="https://picsum.photos/seed/mockupapp/600/600" className="w-full h-auto drop-shadow-2xl rounded-3xl mix-blend-multiply" alt="Mockup" referrerPolicy="no-referrer" />
            </div>
          </Reveal>

          <Reveal direction="up" className="text-center mb-16">
             <span className="inline-block border border-green-500/30 text-green-700 bg-green-500/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">Visionary Partnerships</span>
             <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
               <span className="font-serif italic text-brand-primary">Pioneering</span> Impactful Change With Forward-Thinking <span className="font-serif italic text-brand-primary">Partners</span> Since 2021.
             </h2>
          </Reveal>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
             <div className="bg-white p-8 rounded-[32px] shadow-sm border border-black/5">
                <h4 className="text-lg font-bold text-[#555] mb-4">Clients</h4>
                <p className="text-6xl font-bold mb-4 text-[#111]">150+</p>
                <p className="text-sm text-[#666]">Collaborating with ambitious brands to create meaningful experiences.</p>
             </div>
             <div className="bg-white p-8 rounded-[32px] shadow-sm border border-black/5">
                <h4 className="text-lg font-bold text-[#555] mb-4">Countries Served</h4>
                <p className="text-6xl font-bold mb-4 text-[#111]">7</p>
                <p className="text-sm text-[#666]">Bringing creativity and strategy together for brand success worldwide</p>
             </div>
             <div className="bg-white p-8 rounded-[32px] shadow-sm border border-black/5">
                <h4 className="text-lg font-bold text-[#555] mb-4">Experience</h4>
                <p className="text-6xl font-bold mb-4 text-[#111]">4</p>
                <p className="text-sm text-[#666]">Designing with passion, precision, and expertise over the years.</p>
             </div>
             <div className="bg-white p-8 rounded-[32px] shadow-sm border border-black/5">
                <h4 className="text-lg font-bold text-[#555] mb-4">Biriyani Plates</h4>
                <p className="text-6xl font-bold mb-4 text-[#111]">999</p>
                <p className="text-sm text-[#666]">We're serious about our Biriyani! Joytun Birani is our top spot.</p>
             </div>
          </StaggerReveal>

          <Reveal className="grid md:grid-cols-2 gap-12 items-center mb-20 relative">
             <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] -z-10" />
             <div>
                <span className="inline-block border border-green-500/30 text-green-700 bg-green-500/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">Our Story</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                  How <span className="font-serif italic">Colleagues</span> Turned Into <span className="font-serif italic text-brand-primary">Co-Founders</span>
                </h2>
                <p className="text-lg text-[#555] mb-8 leading-relaxed">
                  Meet Atiq and Noman, the founders of BrandoFriar. Their journey began as colleagues, united by a shared vision. In 2021, they decided to launch their own venture after working together on major projects for brands like Viber and Samsung. Now, BrandoFriar is home to over 40 passionate team members, all dedicated to our mission.
                </p>
                <button className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-[0_10px_20px_rgba(122,60,245,0.2)]">
                  Meet the Team <ArrowRight className="w-5 h-5" />
                </button>
             </div>
             <div className="relative">
               <img src="https://picsum.photos/seed/founders/600/700" className="w-full h-auto rounded-[40px] shadow-xl" alt="Founders" referrerPolicy="no-referrer" />
             </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Dark Section: Our Impacts */}
      <section className="bg-[#09030b] text-white py-32 rounded-t-[40px] md:rounded-t-[80px] -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal direction="up" className="text-center mb-16">
            <span className="inline-block border border-green-500/30 text-green-400 bg-green-500/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">Our Impacts</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              <span className="font-serif italic text-brand-primary">Contribution We Made :</span> <br />
              UX Insights to Grow the Industry
            </h2>
            <p className="text-white/60">Building a stronger design community by sharing what we know, so you can create what you dream.</p>
          </Reveal>

          <StaggerReveal className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 border-b border-white/10 pb-12">
            <div className="text-center"><p className="text-4xl md:text-5xl font-bold mb-2">268</p><p className="text-white/50 text-sm">Videos</p></div>
            <div className="text-center"><p className="text-4xl md:text-5xl font-bold mb-2">100K</p><p className="text-white/50 text-sm">Likes</p></div>
            <div className="text-center"><p className="text-4xl md:text-5xl font-bold mb-2">50K</p><p className="text-white/50 text-sm">Subscribers</p></div>
            <div className="text-center"><p className="text-4xl md:text-5xl font-bold mb-2">1M</p><p className="text-white/50 text-sm">Views</p></div>
          </StaggerReveal>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[1,2,3,4].map(idx => (
              <div key={idx} className="bg-white/5 rounded-3xl overflow-hidden aspect-[9/16] relative group border border-white/10">
                <img src={`https://picsum.photos/seed/tiktok${idx}/400/800`} alt="Video" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                   <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center backdrop-blur-md">
                      <div className="w-0 h-0 border-l-[14px] border-l-white border-y-[10px] border-y-transparent ml-1" />
                   </div>
                </div>
              </div>
            ))}
          </StaggerReveal>

          <div className="text-center">
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3 rounded-xl font-bold transition-all inline-flex items-center gap-2">
               Book a Call <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="bg-[#09030b] text-white py-20 pb-32">
        <div className="max-w-[1400px] mx-auto px-6 overflow-hidden">
          <Reveal direction="up" className="text-center mb-16">
            <span className="inline-block border border-green-500/30 text-green-400 bg-green-500/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Collaborative Minds, <span className="font-serif italic text-brand-primary">Singular Focus</span>
            </h2>
          </Reveal>

          <div className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar snap-x">
             {[
               { name: "Abdullah Al Noman", role: "Product Designer" },
               { name: "Hasan Imam Nahid", role: "UI Designer" },
               { name: "Abdullah Al Maruf", role: "Product Designer" },
               { name: "Tanvir Ahmed", role: "Creative Director" },
               { name: "Jubayer Alam", role: "UX Designer" }
             ].map((member, i) => (
                <div key={i} className="min-w-[280px] shrink-0 snap-center group">
                   <div className="bg-white/5 rounded-[40px] overflow-hidden aspect-[4/5] relative mb-6">
                      <img src={`https://picsum.photos/seed/member${i}/400/500`} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10">
                         <h3 className="font-bold text-lg text-white font-serif tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">BrandoFriar</h3>
                      </div>
                   </div>
                   <div className="text-center">
                     <h3 className="text-xl font-bold">{member.name}</h3>
                     <p className="text-white/50 text-sm mt-1">{member.role}</p>
                   </div>
                </div>
             ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-[0_10px_20px_rgba(122,60,245,0.2)] inline-flex items-center gap-2">
               Meet The Team <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Light Section: Stories & Partners & FAQs */}
      <section className="bg-white text-[#09030b] py-32 rounded-t-[40px] md:rounded-t-[80px]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal direction="up" className="mb-20">
             <span className="inline-block border border-green-500/30 text-green-700 bg-green-500/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">Customer Review</span>
             <h2 className="text-4xl md:text-5xl font-bold leading-tight">
               Customer Stories <br/> <span className="font-serif italic text-brand-primary">That Inspire Us</span>
             </h2>
          </Reveal>

          <Reveal className="grid md:grid-cols-2 gap-8 mb-32">
             <div className="bg-gray-50 border border-gray-100 rounded-[40px] p-10 md:p-14 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                     <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"><div className="w-4 h-4 bg-white rotate-45 rounded-sm" /></div>
                     <span className="font-bold text-lg">Alpine Empower</span>
                  </div>
                  <p className="text-[#444] text-lg leading-relaxed mb-10 italic">
                    "I had countless ideas but no clear direction until BrandoFriar stepped in. Their team patiently listened, refined every detail, and never once hesitated when I requested multiple changes. The result? A stunning & user-friendly platform that perfectly captures our vision."
                  </p>
                </div>
                <div>
                   <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-8 mb-10">
                      <div><p className="text-3xl font-bold mb-1">98%</p><p className="text-xs text-[#666]">Customer Satisfaction</p></div>
                      <div><p className="text-3xl font-bold mb-1">30%</p><p className="text-xs text-[#666]">Business Growth</p></div>
                      <div><p className="text-3xl font-bold mb-1">70+</p><p className="text-xs text-[#666]">Global Reach</p></div>
                   </div>
                   <div className="flex items-center gap-4">
                      <img src="https://picsum.photos/seed/ceo/60/60" className="w-14 h-14 rounded-full" alt="Fahim Aziz" referrerPolicy="no-referrer" />
                      <div>
                         <p className="font-bold text-lg">Fahim Aziz</p>
                         <p className="text-sm text-[#666]">Founder and CEO, Alpine Empower</p>
                      </div>
                   </div>
                </div>
             </div>
             <div className="bg-[#1a0b2e] rounded-[40px] p-8 overflow-hidden relative flex items-center justify-center min-h-[400px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(122,60,245,0.4)_0%,transparent_70%)] opacity-50" />
                <img src="https://picsum.photos/seed/globe/500/500" className="w-full max-w-[400px] h-auto relative z-10 mix-blend-screen opacity-90" alt="Global" referrerPolicy="no-referrer" />
             </div>
          </Reveal>

          {/* Partners */}
          <Reveal direction="up" className="text-center mb-32">
             <span className="inline-block border border-green-500/30 text-green-700 bg-green-500/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">Partners</span>
             <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto mb-16">
               Collaborating with Ambitious <span className="font-serif italic text-brand-primary">Startups And Industry</span> Titans Alike
             </h2>
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
               {[1,2,3,4,5,6,7,8,9,10].map(i => (
                 <div key={i} className="h-24 bg-white border border-gray-100 rounded-2xl flex items-center justify-center p-6 shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0">
                    <img src={`https://picsum.photos/seed/logo${i}/120/40`} className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity" alt={`Partner ${i}`} referrerPolicy="no-referrer" />
                 </div>
               ))}
             </div>
          </Reveal>

          {/* Career CTA Card */}
          <Reveal className="bg-[#11081a] text-white rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl mb-32 relative">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(122,60,245,0.15)_0%,transparent_50%)] pointer-events-none" />
             <div className="p-12 md:p-20 flex-1 z-10 flex flex-col justify-center border-r border-white/5">
                <span className="inline-block border border-green-500/30 text-green-400 bg-green-500/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 w-fit">Career</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6">Want to be a <br/><span className="font-serif italic text-brand-primary">Monk Like Us?</span></h2>
                <p className="text-lg text-white/60 mb-10 max-w-sm">
                  Are you a talented and self-motivated person with a positive vibe? If yes, you can be the next member of our BrandoFriar family.
                </p>
                <button className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_10px_20px_rgba(122,60,245,0.2)] hover:bg-brand-primary/90 inline-flex items-center gap-2 w-fit">
                   Join our team <ArrowRight className="w-5 h-5" />
                </button>
             </div>
             <div className="flex-1 min-h-[400px] relative">
                <img src="https://picsum.photos/seed/career/800/800" className="absolute inset-0 w-full h-full object-cover" alt="Career" referrerPolicy="no-referrer" />
             </div>
          </Reveal>

          {/* FAQs */}
          <Reveal className="max-w-4xl mx-auto mb-32">
             <div className="text-center mb-16">
               <span className="inline-block border border-green-500/30 text-green-700 bg-green-500/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">Frequently Asked Questions</span>
               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                 Your Questions <br/><span className="font-serif italic text-brand-primary">Answered!</span>
               </h2>
             </div>
             <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm">
                <FAQAccordion question="How Long Does A Design Project Take?" answer="A typical design project takes anywhere from 4 to 8 weeks depending on the complexity, number of pages, and specific requirements of your business." />
                <FAQAccordion question="Why is BrandoFriar Different?" answer="We combine deep strategic thinking with top-tier aesthetic execution. We don't just make it look pretty; we ensure it converts and aligns perfectly with your business goals." />
                <FAQAccordion question="How Much Does A Design Project Cost At Your Agency?" answer="Project costs vary widely based on scope. Our typical engagements start around $5,000. Book a call with us for a detailed custom proposal." />
                <FAQAccordion question="Is BrandoFriar a start-up-friendly agency?" answer="Absolutely! We love working with ambitious startups to help them establish their market presence with a strong, scalable brand and product foundation." />
                <FAQAccordion question="What design tools do you use?" answer="Our primary tool of choice is Figma for all UI/UX and collaborative design work. We seamlessly transition from Figma to platforms like Webflow or Framer." />
             </div>
          </Reveal>

          {/* Bottom CTA Card */}
          <Reveal className="bg-[url('https://picsum.photos/seed/gradientbg/1200/600')] bg-cover bg-center rounded-[40px] overflow-hidden relative shadow-2xl min-h-[500px] flex items-center p-8 md:p-16">
             <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
             <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">
                <div className="text-white">
                   <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
                     Claim A $799 Consultation, On Us!
                   </div>
                   <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
                     Your Brand Deserves <br/>the <span className="font-serif italic text-[#cceb4e]">Next Level!</span>
                   </h2>
                   <p className="text-lg text-white/80 mb-10">
                     Get expert advice and a custom strategy session worth $799 at no cost.
                   </p>
                   <Link to="/contact" className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_10px_20px_rgba(122,60,245,0.3)] inline-flex items-center gap-2">
                      Let's Talk <ArrowRight className="w-5 h-5" />
                   </Link>
                </div>
                <div className="relative justify-self-center md:justify-self-end">
                   <img src="https://picsum.photos/seed/laptopdash/600/500" className="w-[120%] max-w-none -ml-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" alt="Dashboard" referrerPolicy="no-referrer" />
                </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom Footer Section (will blend into global footer) */}
      <div className="bg-[#cceb4e] py-4 text-center text-black font-semibold text-lg overflow-hidden whitespace-nowrap -mb-1 relative z-20">
         <div className="animate-[marquee_20s_linear_infinite] inline-block">
            Why Risk It With The <span className="font-serif italic">Wrong Partner?</span> Get 100% Value And Guarantee. Don't Miss Out - <span className="underline cursor-pointer">Get Started Now</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Why Risk It With The <span className="font-serif italic">Wrong Partner?</span> Get 100% Value And Guarantee. Don't Miss Out - <span className="underline cursor-pointer">Get Started Now</span>
         </div>
      </div>
    </div>
  );
}

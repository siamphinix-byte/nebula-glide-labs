import { Reveal, StaggerReveal } from './components/GSAPWrapper';
import { ArrowRight, Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQAccordion } from './components/FAQAccordion';

export function BlogPage() {
  const categories = [
    "Latest Blogs", "AI", "Artificial intelligence", "Branding", "Design career", "Design Chit Chat", "Design hierarchy", "Design Principles"
  ];

  const blogs = [
    { title: "5 Best UX Audit Agencies in Europe Trusted by Global Brands", image: "https://picsum.photos/seed/uxaudit/800/450" },
    { title: "Drag and Drop UI Design: Tools, Examples, and Design Strategies", image: "https://picsum.photos/seed/dragdrop/800/450" },
    { title: "Top 5 Design Thinking Consulting Firms: Services & Strategy", image: "https://picsum.photos/seed/consulting/800/450" },
    { title: "How Long Does It Take to Create a Website in 2026", image: "https://picsum.photos/seed/howlong/800/450" },
    { title: "Construction Company Website Design That Wins More Clients", image: "https://picsum.photos/seed/construction/800/450" },
    { title: "Hotel Website Design Guide to Boost Guest Conversions", image: "https://picsum.photos/seed/hotelux/800/450" },
    { title: "Expert Crypto Website Design Agency for Crypto Platforms", image: "https://picsum.photos/seed/cryptoweb/800/450" },
    { title: "Blockchain Graphic Design: Clear Visuals for Crypto Platforms", image: "https://picsum.photos/seed/blockchainui/800/450" },
    { title: "Architecture Firm Website Design: Inspirations and Process", image: "https://picsum.photos/seed/architectureui/800/450" },
    { title: "Marketing Agency Website Design: Expert Strategy Guide", image: "https://picsum.photos/seed/marketingux/800/450" },
  ];

  const authors = [
    { name: "Atiqur Rahaman", role: "CEO & Co-founder", image: "https://picsum.photos/seed/atiq/600/800" },
    { name: "Abdullah Al Noman", role: "COO & Co-founder", image: "https://picsum.photos/seed/noman/600/800" },
    { name: "Sabiha Sultana", role: "Content Writer", image: "https://picsum.photos/seed/sabiha/600/800" },
    { name: "Md. Sajib Ahmed", role: "SEO Specialist", image: "https://picsum.photos/seed/sajib/600/800" }
  ];

  return (
    <div className="bg-[#09030b] min-h-screen text-white font-sans pb-0 relative selection:bg-brand-primary selection:text-white">
      
      {/* 1. Hero Section (Dark) */}
      <section className="bg-[#0d0714] text-white pt-40 pb-32 relative overflow-hidden rounded-b-[40px] md:rounded-b-[80px] z-10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(122,60,245,0.2)_0%,transparent_60%)] filter blur-[80px]" />
           <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(28,219,186,0.15)_0%,transparent_60%)] filter blur-[80px]" />
           <img src="https://picsum.photos/seed/glasscube/200/200" className="absolute top-[20%] right-[10%] w-32 object-contain opacity-30 mix-blend-screen animate-[slideY_10s_ease-in-out_infinite_alternate]" alt="" referrerPolicy="no-referrer" />
           <img src="https://picsum.photos/seed/giftbox/200/200" className="absolute bottom-[20%] left-[10%] w-40 object-contain opacity-30 mix-blend-screen animate-[slideY_12s_ease-in-out_infinite_alternate]" alt="" referrerPolicy="no-referrer" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white/50 mb-8 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
              <span>&gt;</span>
              <span className="text-brand-primary">Blogs</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-12 drop-shadow-lg">
              Your Go-To Source: <br />
              <span className="font-serif italic drop-shadow-xl text-brand-secondary">Blog Highlights & More</span>
            </h1>

            <div className="relative max-w-xl mx-auto group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500 group-focus-within:text-brand-primary transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search any blog" 
                className="w-full pl-12 pr-4 py-4 md:py-5 bg-white/5 border border-white/10 text-white rounded-[20px] focus:outline-none focus:ring-2 focus:ring-brand-primary/50 shadow-xl transition-all text-lg placeholder-gray-500 hover:bg-white/10"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Blog Content Section */}
      <section className="max-w-[1400px] mx-auto px-6 pt-16 pb-24 relative z-0 -mt-8">
         {/* Categories */}
         <Reveal className="mb-12 relative z-20">
            <div className="flex overflow-x-auto gap-3 pb-4 hide-scrollbar">
               {categories.map((cat, idx) => (
                  <button 
                     key={idx} 
                     className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-sm ${
                        idx === 0 ? 'bg-brand-primary text-white shadow-[0_0_15px_rgba(122,60,245,0.4)]' : 'bg-[#170d1e] text-white/70 hover:text-white hover:bg-brand-primary/20 border border-white/5 hover:border-brand-primary/50'
                     }`}
                  >
                     {cat}
                  </button>
               ))}
            </div>
         </Reveal>

         {/* Grid */}
         <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mb-20">
            {blogs.map((blog, idx) => (
               <Link to="/blog-details" key={idx} className="group block">
                  <div className="rounded-[32px] overflow-hidden mb-6 aspect-[16/9] bg-[#170d1e] border border-white/5 group-hover:border-brand-primary/30 group-hover:shadow-[0_0_30px_rgba(122,60,245,0.15)] transition-all duration-500 relative">
                     <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                     <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-2xl font-bold leading-snug group-hover:text-brand-primary transition-colors text-white pr-4">
                     {blog.title}
                  </h3>
               </Link>
            ))}
         </StaggerReveal>

         {/* Pagination */}
         <Reveal className="flex justify-center items-center gap-2 pb-16 border-b border-white/10">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-primary text-white font-bold shadow-[0_0_15px_rgba(122,60,245,0.4)]">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 font-semibold transition-colors border border-white/5">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 font-semibold transition-colors border border-white/5">3</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 font-semibold transition-colors border border-white/5">4</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 font-semibold transition-colors border border-white/5">5</button>
            <span className="text-white/50 px-2">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 font-semibold transition-colors border border-white/5">22</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 font-semibold transition-colors border border-white/5">
               <ChevronRight className="w-5 h-5" />
            </button>
         </Reveal>
      </section>

      {/* 3. Authors Section */}
      <section className="py-20">
         <div className="max-w-[1400px] mx-auto px-6">
            <Reveal direction="up" className="text-center mb-16">
               <span className="inline-block border border-brand-teal/30 text-brand-teal bg-brand-teal/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">Authors</span>
               <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                 Voices Behind <span className="font-serif italic text-brand-secondary">The Words</span>
               </h2>
            </Reveal>

            <StaggerReveal className="grid md:grid-cols-4 gap-6">
               {authors.map((author, idx) => (
                  <div key={idx} className="text-center group">
                     <div className="rounded-[40px] overflow-hidden bg-gradient-to-b from-[#170d1e] to-[#09030b] mb-6 relative aspect-[3/4] shadow-md border border-white/5 group-hover:border-brand-primary/30 transition-all duration-500">
                        <img src={author.image} alt={author.name} className="w-full h-full object-cover object-top opacity-60 group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#09030b] via-transparent to-transparent opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 via-transparent to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <h3 className="font-bold text-xl text-white font-serif tracking-widest drop-shadow-lg">BrandoFriar</h3>
                        </div>
                     </div>
                     <h3 className="text-xl font-bold mb-1 text-white group-hover:text-brand-primary transition-colors">{author.name}</h3>
                     <p className="text-white/50">{author.role}</p>
                  </div>
               ))}
            </StaggerReveal>
         </div>
      </section>

      {/* 4. Newsletter Section */}
      <section className="py-20 px-6">
         <Reveal className="max-w-[1200px] mx-auto bg-[#170d1e] rounded-[40px] md:rounded-[60px] p-10 md:p-20 relative overflow-hidden text-center shadow-2xl border border-white/5">
            {/* Abstract Backgrounds */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(28,219,186,0.15)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(122,60,245,0.15)_0%,transparent_70%)] pointer-events-none" />
            
            <img src="https://picsum.photos/seed/abstractrings/300/300" className="absolute top-0 right-10 w-48 object-contain opacity-40 mix-blend-screen animate-[slideY_8s_ease-in-out_infinite_alternate]" alt="" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/abstractdonut/300/300" className="absolute bottom-[-10%] left-[-5%] w-64 object-contain opacity-30 mix-blend-screen animate-[slideY_10s_ease-in-out_infinite_alternate]" alt="" referrerPolicy="no-referrer" />
            
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
               <span className="inline-block border border-brand-teal/30 text-brand-teal bg-brand-teal/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8">Newsletter</span>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                 Stay In The Loop And Keep Up With All Our <span className="font-serif italic text-brand-secondary">News And Updates</span>
               </h2>
               <p className="text-white/60 mb-10 text-lg">
                  Be the first to hear about our latest projects, design insights, and studio updates.
               </p>

               <div className="flex items-center gap-[-10px] mb-12">
                  <img src="https://picsum.photos/seed/u1/40/40" className="w-10 h-10 rounded-full border-2 border-[#170d1e] relative z-[4]" alt="User" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/u2/40/40" className="w-10 h-10 rounded-full border-2 border-[#170d1e] relative -ml-3 z-[3]" alt="User" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/u3/40/40" className="w-10 h-10 rounded-full border-2 border-[#170d1e] relative -ml-3 z-[2]" alt="User" referrerPolicy="no-referrer" />
                  <div className="w-10 h-10 rounded-full border-2 border-[#170d1e] bg-brand-primary text-white flex items-center justify-center relative -ml-3 z-[1] text-xs font-bold shadow-sm">40+</div>
               </div>

               <form className="w-full max-w-lg bg-white/5 border border-white/10 p-2 rounded-2xl flex flex-col sm:flex-row gap-2 shadow-xl relative z-20 backdrop-blur-md">
                  <div className="flex-1 flex items-center px-4 bg-transparent rounded-xl">
                     <span className="text-white/40 mr-2">✉</span>
                     <input type="email" placeholder="Your email here" className="w-full bg-transparent focus:outline-none text-white placeholder-white/40" />
                  </div>
                  <button type="submit" className="bg-brand-primary text-white px-8 py-4 sm:py-3 rounded-xl font-bold hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(122,60,245,0.39)] shrink-0 group">
                     Subscribe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
               </form>
            </div>
         </Reveal>
      </section>

      {/* 5. FAQs Section */}
      <section className="py-20 relative z-10 px-6">
         <div className="max-w-4xl mx-auto">
            <Reveal direction="up" className="text-center mb-16">
               <span className="inline-block border border-brand-teal/30 text-brand-teal bg-brand-teal/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">Frequently Asked Questions</span>
               <h2 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-sm">
                 Your Questions <br/><span className="font-serif italic text-brand-secondary drop-shadow-sm">Answered!</span>
               </h2>
            </Reveal>

            <Reveal className="space-y-4">
               <div className="bg-[#170d1e] rounded-[32px] p-8 md:p-12 shadow-2xl border border-white/5">
                  <FAQAccordion question="How Long Does A Design Project Take?" answer="A typical design project takes anywhere from 4 to 8 weeks depending on the complexity, number of pages, and specific requirements of your business." isDark={true} />
                  <FAQAccordion question="Why is BrandoFriar Different?" answer="We combine deep strategic thinking with top-tier aesthetic execution. We don't just make it look pretty; we ensure it converts and aligns perfectly with your business goals." isDark={true} />
                  <FAQAccordion question="How Much Does A Design Project Cost At Your Agency?" answer="Project costs vary widely based on scope. Our typical engagements start around $5,000. Book a call with us for a detailed custom proposal." isDark={true} />
                  <FAQAccordion question="Is BrandoFriar a start-up-friendly agency?" answer="Absolutely! We love working with ambitious startups to help them establish their market presence with a strong, scalable brand and product foundation." isDark={true} />
                  <FAQAccordion question="What design tools do you use?" answer="Our primary tool of choice is Figma for all UI/UX and collaborative design work. We seamlessly transition from Figma to platforms like Webflow or Framer." isDark={true} />
                  <FAQAccordion question="Do you create WordPress e-commerce sites, and develop apps?" answer="Yes, we have developers proficient in modern web stacks including WordPress, Shopify, and custom app development using React Native or Flutter." isDark={true} />
               </div>
            </Reveal>
         </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="px-6 pb-32">
          <Reveal className="max-w-[1400px] mx-auto bg-[#170d1e] rounded-[40px] md:rounded-[80px] overflow-hidden relative shadow-2xl min-h-[500px] flex items-center p-8 md:p-16 border border-white/10 group">
             <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-teal/10 opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
             <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://picsum.photos/seed/gradientbg2/1200/600')] bg-cover bg-left opacity-20 filter grayscale mix-blend-overlay"></div>
             
             <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">
                <div className="text-white">
                   <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/30 text-brand-teal px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
                     Claim A $799 Consultation, On Us!
                   </div>
                   <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
                     Your Brand Deserves <br/>the <span className="font-serif italic text-brand-secondary">Next Level!</span>
                   </h2>
                   <p className="text-lg text-white/60 mb-10 max-w-md">
                     Get expert advice and a custom strategy session worth $799 at no cost
                   </p>
                   
                   <div className="flex items-center gap-[-10px] mb-8">
                     <img src="https://picsum.photos/seed/u11/40/40" className="w-10 h-10 rounded-full border-2 border-[#170d1e] relative z-[4]" alt="User" referrerPolicy="no-referrer" />
                     <img src="https://picsum.photos/seed/u12/40/40" className="w-10 h-10 rounded-full border-2 border-[#170d1e] relative -ml-3 z-[3]" alt="User" referrerPolicy="no-referrer" />
                     <img src="https://picsum.photos/seed/u13/40/40" className="w-10 h-10 rounded-full border-2 border-[#170d1e] relative -ml-3 z-[2]" alt="User" referrerPolicy="no-referrer" />
                     <div className="w-10 h-10 rounded-full border-2 border-[#170d1e] bg-brand-primary text-white flex items-center justify-center relative -ml-3 z-[1] text-xs font-bold shadow-sm">40+</div>
                   </div>

                   <Link to="/contact" className="bg-brand-primary hover:bg-brand-primary/80 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_10px_20px_rgba(122,60,245,0.3)] inline-flex items-center gap-2 w-fit">
                      Let's Talk <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
                <div className="relative justify-self-center md:justify-self-end w-full max-w-lg">
                   <img src="https://picsum.photos/seed/laptopdashbig/800/600" className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform -rotate-[5deg] scale-110 group-hover:rotate-0 transition-transform duration-700 opacity-80" alt="Dashboard" referrerPolicy="no-referrer" />
                </div>
             </div>
          </Reveal>
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

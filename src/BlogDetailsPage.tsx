import { Reveal, StaggerReveal } from './components/GSAPWrapper';
import { ArrowRight, CheckCircle2, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BlogDetailsPage() {
  return (
    <div className="bg-[#09030b] min-h-screen text-white font-sans pb-0 relative selection:bg-brand-primary selection:text-white">
      {/* 1. Dark Hero Section */}
      <section className="bg-[#0d0714] text-white pt-32 pb-48 relative overflow-hidden flex flex-col items-center text-center z-10 rounded-b-[40px] md:rounded-b-[80px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-b border-white/5">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(122,60,245,0.2)_0%,transparent_60%)] filter blur-[80px]" />
          <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(28,219,186,0.15)_0%,transparent_60%)] filter blur-[80px]" />
          <img src="https://picsum.photos/seed/purpleglass/200/200" className="absolute top-[20%] right-[10%] w-32 opacity-30 mix-blend-screen animate-[slideY_10s_ease-in-out_infinite_alternate]" alt="" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/bluebox/200/200" className="absolute bottom-[20%] left-[10%] w-40 opacity-30 mix-blend-screen animate-[slideY_12s_ease-in-out_infinite_alternate]" alt="" referrerPolicy="no-referrer" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white/50 mb-8 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/blog" className="hover:text-brand-primary transition-colors">Blogs</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-brand-primary truncate max-w-[200px] md:max-w-none">Blog details</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-12 drop-shadow-lg max-w-4xl">
              5 Best UX Audit Agencies In Europe Trusted By Global <span className="font-serif italic text-brand-teal">Brands</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-8 md:gap-24 text-center border-t border-white/10 pt-8 w-full max-w-3xl">
               <div>
                  <p className="text-white/50 text-sm mb-1">Author</p>
                  <p className="font-bold text-lg">Atiqur Rahaman</p>
               </div>
               <div>
                  <p className="text-white/50 text-sm mb-1">Publish Date</p>
                  <p className="font-bold text-lg">Apr 20, 2026</p>
               </div>
               <div>
                  <p className="text-white/50 text-sm mb-1">Latest Update</p>
                  <p className="font-bold text-lg">Apr 20, 2026</p>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero Image (Overlapping) */}
      <section className="max-w-[1200px] mx-auto px-6 relative z-20 -mt-32 mb-20">
         <Reveal>
            <div className="w-full aspect-[21/9] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
               <img src="https://picsum.photos/seed/uxauditbg/1200/600" alt="Blog Hero" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
         </Reveal>
      </section>

      {/* 2. Main Content Grid */}
      <section className="max-w-[1400px] mx-auto px-6 mb-32">
         <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_300px] gap-12 relative items-start">
            
            {/* Left Sticky Sidebar: TOC */}
            <div className="hidden lg:block sticky top-32">
               <Reveal direction="right">
                  <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-white">
                     7 Min Read
                  </h4>
                  <ul className="space-y-4 text-sm text-white/50 font-medium border-l-[3px] border-white/10">
                     <li className="pl-4 border-l-[3px] border-brand-primary text-brand-primary -ml-[3px] py-1 cursor-pointer">What Does a UX Audit Agency Do?</li>
                     <li className="pl-4 hover:text-brand-primary cursor-pointer transition-colors py-1">How We Selected the Best UX Audit Agencies in Europe</li>
                     <li className="pl-4 hover:text-brand-primary cursor-pointer transition-colors py-1">Best UX Audit Agencies in Europe (2026 List)</li>
                     <li className="pl-4 hover:text-brand-primary cursor-pointer transition-colors py-1">UX Audit Deliverables You Should Expect</li>
                     <li className="pl-4 hover:text-brand-primary cursor-pointer transition-colors py-1">How Long a UX Audit Takes</li>
                     <li className="pl-4 hover:text-brand-primary cursor-pointer transition-colors py-1">How Much Do UX Audit Services Cost in Europe</li>
                     <li className="pl-4 hover:text-brand-primary cursor-pointer transition-colors py-1">How to Choose the Best UX Audit Agency</li>
                     <li className="pl-4 hover:text-brand-primary cursor-pointer transition-colors py-1">When Your Product Needs a UX Audit</li>
                     <li className="pl-4 hover:text-brand-primary cursor-pointer transition-colors py-1">UX Audit vs UX Research vs UX Review</li>
                     <li className="pl-4 hover:text-brand-primary cursor-pointer transition-colors py-1">Final Thoughts: Finding the Right UX Audit Agency in Europe</li>
                  </ul>
               </Reveal>
            </div>

            {/* Center: Blog Content */}
            <div className="prose prose-lg prose-invert max-w-none text-white/80 prose-headings:text-white prose-a:text-brand-teal marker:text-brand-primary">
               <Reveal direction="up">
                  {/* Key Takeaways */}
                  <div className="bg-[#170d1e] rounded-3xl p-8 md:p-10 mb-12 border border-white/5 shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[60px] pointer-events-none group-hover:bg-brand-primary/20 transition-colors duration-700" />
                     <h3 className="flex items-center gap-3 text-2xl font-bold mb-8 text-brand-teal relative z-10">
                        <span className="w-8 h-8 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center text-sm border border-brand-teal/30 shadow-[0_0_15px_rgba(28,219,186,0.3)]">✦</span>
                        Key Takeaways
                     </h3>
                     <ul className="space-y-4 list-none p-0 m-0 relative z-10 text-white/80">
                        <li className="flex items-start gap-4"><span className="text-brand-teal mt-1.5 font-bold shadow-[0_0_10px_rgba(28,219,186,0.5)] bg-brand-teal/20 w-3 h-3 rounded-full shrink-0"></span> UX audits uncover hidden usability issues and improve overall product performance.</li>
                        <li className="flex items-start gap-4"><span className="text-brand-teal mt-1.5 font-bold shadow-[0_0_10px_rgba(28,219,186,0.5)] bg-brand-teal/20 w-3 h-3 rounded-full shrink-0"></span> Choosing an agency requires checking expertise, methodology, and proven case studies.</li>
                        <li className="flex items-start gap-4"><span className="text-brand-primary mt-1.5 font-bold shadow-[0_0_10px_rgba(122,60,245,0.5)] bg-brand-primary/30 w-3 h-3 rounded-full shrink-0"></span> Structured audits combine research, testing, and clear recommendations for faster improvements.</li>
                        <li className="flex items-start gap-4"><span className="text-brand-teal mt-1.5 font-bold shadow-[0_0_10px_rgba(28,219,186,0.5)] bg-brand-teal/20 w-3 h-3 rounded-full shrink-0"></span> Industry-focused agencies deliver more relevant insights for SaaS, fintech, or enterprise products.</li>
                        <li className="flex items-start gap-4"><span className="text-brand-teal mt-1.5 font-bold shadow-[0_0_10px_rgba(28,219,186,0.5)] bg-brand-teal/20 w-3 h-3 rounded-full shrink-0"></span> Design Monks provides actionable fixes, clear guidance, and measurable UX results.</li>
                     </ul>
                  </div>

                  <p className="leading-relaxed">Low clicks, poor sales, and user drop-offs come from hidden UX issues inside digital products. Teams feel lost, apps pages lack clear direction or appeal to users. A UX audit helps spot these problems early and shows where users face trouble during real use.</p>
                  <p className="leading-relaxed">A UX audit reviews screens, user paths, and key actions with real data and behavior patterns. It checks what works and what fails across the product. Many teams lack the time or great skill to do this well, so a UX audit agency brings expert review, clear insights, and faster results.</p>
                  <p className="leading-relaxed">But, where to get the trusted one? Well, that's what you'll learn today. Today, I'll spill the beans about the best UX audit agencies across Europe with proven work and real impact. So, stay connected.</p>

                  <h2 className="text-3xl font-bold mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">What Does a UX Audit Agency Do?</h2>
                  <p className="leading-relaxed">A UX audit agency checks how easy and clear your product feels for real users. In the audit process, they follow a proper UX audit checklist, study each page, action, and step to find where users feel confused or stuck.</p>

                  <div className="relative group cursor-pointer my-12">
                     <div className="absolute inset-0 bg-brand-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                     <img src="https://picsum.photos/seed/process/800/400" alt="Process Map" className="w-full rounded-2xl relative z-10 border border-white/10 group-hover:border-brand-primary/50 shadow-2xl transition-all duration-500" referrerPolicy="no-referrer" />
                  </div>

                  <p className="leading-relaxed">Their main goal is simple. Fix small problems that block trust, reduce clicks, and hurt overall product usability.</p>
                  <p className="leading-relaxed">These agencies use different ways to review your product with care and logic. Methods like a UX heuristic evaluation help them use usual interface and form checks design quality based on proven rules.</p>
               </Reveal>

               <Reveal direction="up">
                  <h3 className="text-2xl font-bold mt-16 mb-6 text-brand-teal">Key UX Audit Methods Agencies Use</h3>
                  <ul className="space-y-4 list-disc pl-5 mb-16 marker:text-brand-teal">
                     <li className="pl-2 leading-relaxed"><strong className="text-white">Heuristic Evaluation:</strong> Experts review the design using clear rules. This method helps find usability issues fast without real user involvement.</li>
                     <li className="pl-2 leading-relaxed"><strong className="text-white">Cognitive Walkthrough:</strong> Experts go through tasks step by step as a new user would. This method shows where users may feel confused or unsure during important actions.</li>
                     <li className="pl-2 leading-relaxed"><strong className="text-white">Usability Testing:</strong> Real users test the product and share their experience. It reveals real usage flow problems instead of relying only on internal opinions or assumptions.</li>
                  </ul>

                  <h2 className="text-3xl font-bold mt-16 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Best UX Audit Agencies in Europe (2026 List)</h2>
                  <p className="leading-relaxed">I reviewed 300+ UX agencies across 17 major cities, with audit specialists charging around €100 to 170 per hour for expert-level work. Choosing the right UX/UI design agency is crucial to improve conversion and user paths.</p>

                  {/* Custom Table */}
                  <div className="overflow-x-auto my-12 relative group rounded-2xl border border-white/10 overflow-hidden bg-[#170d1e]/50 backdrop-blur-sm">
                     <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-brand-teal/5 to-transparent pointer-events-none" />
                     <table className="min-w-full text-sm relative z-10">
                        <thead className="bg-white/5 border-b border-white/10">
                           <tr>
                              <th className="px-6 py-4 text-left font-bold text-white/90">Agency</th>
                              <th className="px-6 py-4 text-left font-bold text-white/90">Location</th>
                              <th className="px-6 py-4 text-left font-bold text-white/90">Services</th>
                              <th className="px-6 py-4 text-left font-bold text-white/90">Focus</th>
                              <th className="px-6 py-4 text-left font-bold text-white/90">Clients</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                           <tr className="hover:bg-white/5 transition-colors group/row">
                              <td className="px-6 py-4 font-semibold text-brand-teal group-hover/row:text-brand-primary transition-colors">Design Monks</td>
                              <td className="px-6 py-4 text-white/70">London, Dubai, Singapore</td>
                              <td className="px-6 py-4 text-white/70">UX audit, usability testing</td>
                              <td className="px-6 py-4 text-white/70">SaaS & Fintech</td>
                              <td className="px-6 py-4 text-white/70">Startups, SMBs</td>
                           </tr>
                           <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-6 py-4 font-semibold text-white/90">UX-Republic</td>
                              <td className="px-6 py-4 text-white/70">France, Belgium, Switzerland</td>
                              <td className="px-6 py-4 text-white/70">UX audit, user testing</td>
                              <td className="px-6 py-4 text-white/70">Enterprise Systems</td>
                              <td className="px-6 py-4 text-white/70">Large Enterprises</td>
                           </tr>
                           <tr className="hover:bg-white/5 transition-colors">
                              <td className="px-6 py-4 font-semibold text-white/90">Experience UX</td>
                              <td className="px-6 py-4 text-white/70">UK</td>
                              <td className="px-6 py-4 text-white/70">UX audit, expert review</td>
                              <td className="px-6 py-4 text-white/70">Education, Non-profit</td>
                              <td className="px-6 py-4 text-white/70">Focus on specific sectors</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>

                  <p className="leading-relaxed">Now, let's get introduced to the 5 best UX audit agencies. First, get a glance at the comparison table.</p>

                  <h3 className="text-2xl font-bold mt-16 mb-4 flex items-center gap-3">
                    <span className="bg-brand-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-[0_0_15px_rgba(122,60,245,0.5)]">1</span> 
                    Design Monks
                  </h3>
                  <p className="leading-relaxed">A UX-focused agency that helps digital products improve usability, fix conversion gaps, and create smoother user journeys through structured UX audits.</p>
                  <img src="https://picsum.photos/seed/dm/800/400" alt="Design Monks Site" className="w-full rounded-2xl my-8 border border-white/10 shadow-lg" referrerPolicy="no-referrer" />
                  <p className="font-bold text-white mb-4">Quick Overview:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2 marker:text-brand-primary">
                     <li className="leading-relaxed"><strong className="text-white">Website:</strong> <span className="text-brand-teal">Design Monks</span></li>
                     <li className="leading-relaxed"><strong className="text-white">Location:</strong> London, Dhaka, Dubai, Singapore</li>
                     <li className="leading-relaxed"><strong className="text-white">Services Offered:</strong> UX audit, usability testing, heuristic evaluation, UX strategy, product redesign</li>
                     <li className="leading-relaxed"><strong className="text-white">Clients:</strong> Startups and growing SaaS products across global markets</li>
                  </ul>

                  <h3 className="text-2xl font-bold mt-16 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Final Thoughts: Finding the Right UX Audit Agency in Europe</h3>
                  <p className="leading-relaxed">Good user experience drives engagement, reduces frustration, and helps products perform better. Picking the right UX audit agency matters because not all audits uncover the same issues or offer clear solutions.</p>
                  <p className="leading-relaxed">Evaluating expertise, audit methods, and past results ensures your product gets meaningful improvements. Agencies that combine research, usability testing, and practical recommendations create real impact.</p>

                  {/* Tags */}
                  <div className="flex gap-3 mt-12">
                     <span className="px-5 py-2.5 border border-white/10 hover:border-brand-primary/50 rounded-full text-sm font-semibold bg-[#170d1e] cursor-pointer text-white/80 hover:text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(122,60,245,0.2)]">UX Design</span>
                  </div>

                  {/* Author Block inside content */}
                  <div className="mt-20 bg-[#170d1e] rounded-[32px] p-8 md:p-10 border border-white/5 shadow-2xl flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[80px] pointer-events-none group-hover:bg-brand-primary/10 transition-colors duration-700" />
                     <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-brand-primary/30 shadow-[0_0_20px_rgba(122,60,245,0.2)]">
                        <img src="https://picsum.photos/seed/atiq/150/150" alt="Atiqur Rahaman" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                     </div>
                     <div className="relative z-10">
                        <h4 className="text-2xl font-bold mb-1 text-white">Atiqur Rahaman</h4>
                        <p className="text-brand-primary text-sm font-bold mb-5 tracking-wide uppercase">CEO & Founder</p>
                        <p className="text-white/60 mb-6 text-sm leading-relaxed max-w-2xl">
                           With over 8 years of design experience, Atiqur Rahaman has worked on 40+ innovative products in over 20 industries. Big names like Olac, Transcom, and Selise.fit trust his creative ideas. His work helps brands grow while staying fresh and innovative.
                        </p>
                        <button className="text-brand-teal font-bold text-sm hover:text-brand-primary transition-colors flex items-center gap-1 group/btn">
                           Know More <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                     </div>
                  </div>
               </Reveal>

            </div>

            {/* Right Sticky Sidebar: Promo Widget */}
            <div className="hidden lg:block sticky top-32">
               <Reveal direction="left">
                 <div className="bg-[#170d1e] rounded-[32px] p-8 relative overflow-hidden shadow-[0_10px_30px_rgba(122,60,245,0.2)] border border-brand-primary/20 group hover:border-brand-primary/50 transition-colors duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/30 blur-[40px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-secondary/10 blur-[40px] pointer-events-none" />
                    
                    <div className="relative z-10 text-white">
                       <p className="text-brand-teal text-xs font-bold uppercase tracking-wider mb-4 inline-block bg-brand-teal/10 px-3 py-1.5 rounded-full border border-brand-teal/20">UX/UI Design Service</p>
                       <h4 className="text-2xl font-bold mb-6 leading-tight drop-shadow-sm">Want a product that Sells, Not just sits?</h4>
                       <ul className="space-y-4 mb-8 text-sm text-white/80">
                          <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-primary drop-shadow-[0_0_5px_rgba(122,60,245,0.5)] bg-brand-primary/10 rounded-full" /> Conversion-focused design</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-primary drop-shadow-[0_0_5px_rgba(122,60,245,0.5)] bg-brand-primary/10 rounded-full" /> Built for business growth</li>
                       </ul>
                       <Link to="/contact" className="block w-full text-center bg-brand-primary text-white py-4 rounded-xl font-bold hover:bg-brand-primary/90 transition-all text-sm shadow-[0_10px_20px_rgba(122,60,245,0.3)] hover:shadow-[0_15px_30px_rgba(122,60,245,0.5)] hover:-translate-y-1">
                          Let's Fix My Website <ArrowRight className="w-4 h-4 inline-block ml-1" />
                       </Link>
                    </div>
                 </div>
               </Reveal>
            </div>
         </div>
      </section>

      {/* 3. See other Blogs */}
      <section className="bg-transparent py-24 rounded-t-[40px] md:rounded-t-[80px]">
         <div className="max-w-[1400px] mx-auto px-6">
            <Reveal direction="up" className="text-center mb-16">
               <span className="inline-block border border-brand-teal/30 text-brand-teal bg-brand-teal/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">More Blogs</span>
               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                 See other <span className="font-serif italic text-brand-secondary">Blogs</span>
               </h2>
            </Reveal>

            <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
               <Link to="/blog-details" className="group block cursor-pointer">
                  <div className="rounded-[32px] overflow-hidden mb-6 aspect-[16/9] shadow-sm border border-white/5 bg-[#170d1e] group-hover:border-brand-primary/30 group-hover:shadow-[0_0_30px_rgba(122,60,245,0.15)] transition-all duration-500 relative">
                     <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                     <img src="https://picsum.photos/seed/blog1/800/450" alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-xl font-bold leading-snug group-hover:text-brand-primary transition-colors text-white">
                     E-commerce Dashboard UI Design: Importance, Steps & Mistakes
                  </h3>
               </Link>
               <Link to="/blog-details" className="group block cursor-pointer">
                  <div className="rounded-[32px] overflow-hidden mb-6 aspect-[16/9] shadow-sm border border-white/5 bg-[#170d1e] group-hover:border-brand-primary/30 group-hover:shadow-[0_0_30px_rgba(122,60,245,0.15)] transition-all duration-500 relative">
                     <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                     <img src="https://picsum.photos/seed/blog2/800/450" alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-xl font-bold leading-snug group-hover:text-brand-primary transition-colors text-white">
                     What Does a UX Designer Actually Do? [2024 Guide]
                  </h3>
               </Link>
               <Link to="/blog-details" className="group block cursor-pointer">
                  <div className="rounded-[32px] overflow-hidden mb-6 aspect-[16/9] shadow-sm border border-white/5 bg-[#170d1e] group-hover:border-brand-primary/30 group-hover:shadow-[0_0_30px_rgba(122,60,245,0.15)] transition-all duration-500 relative">
                     <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                     <img src="https://picsum.photos/seed/blog3/800/450" alt="Blog 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-xl font-bold leading-snug group-hover:text-brand-primary transition-colors text-white">
                     10 Interaction Design Principles: Your Must-Learn
                  </h3>
               </Link>
            </StaggerReveal>

            <div className="text-center">
               <Link to="/blog" className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-3 rounded-xl font-bold transition-all border border-brand-primary/20 hover:border-brand-primary group">
                  View More Blogs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
         </div>
      </section>

      {/* 4. Success Stories Inline Component */}
      <section className="bg-transparent py-24 pb-32 relative">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(28,219,186,0.1)_0%,transparent_60%)] pointer-events-none" />
         <div className="max-w-[1400px] mx-auto px-6 overflow-hidden relative z-10">
            <Reveal direction="up" className="text-center mb-16">
               <span className="inline-block border border-brand-teal/30 text-brand-teal bg-brand-teal/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">Testimonial</span>
               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                 Success Stories <span className="font-serif italic text-brand-secondary">That Inspire Us</span>
               </h2>
            </Reveal>

            {/* Simulated Horizontal Scroll/Marquee for Testimonials */}
            <div className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar snap-x">
               {/* Testimonial Card 1 (Active/Highlighted state based on screenshot) */}
               <div className="min-w-[320px] md:min-w-[400px] shrink-0 snap-center bg-[#170d1e] text-white rounded-[32px] p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-brand-primary/30 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/10 blur-[40px] pointer-events-none" />
                   <div>
                      <div className="flex text-brand-secondary mb-6"><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/></div>
                      <p className="text-white/90 text-lg leading-relaxed mb-8 italic">
                         "I've worked with Design Monks on three websites, and they've been nothing but exceptional. Their design is top-notch, communication is reliable, and quality assurance always smooth. They quickly act on feedback and deliver exactly what I need. For me, they're a 10/10 partner for all things design and development."
                      </p>
                   </div>
                   <div className="flex items-center gap-4">
                      <img src="https://picsum.photos/seed/austin/60/60" className="w-14 h-14 rounded-full border-2 border-brand-secondary/30" alt="Austin" referrerPolicy="no-referrer" />
                      <div>
                         <p className="font-bold">Austin</p>
                         <p className="text-white/50 text-sm">CEO @ Clarity LLC</p>
                      </div>
                   </div>
               </div>
               
               {/* Testimonial Card 2 (Image focused like screenshot) */}
               <div className="min-w-[320px] md:min-w-[400px] shrink-0 snap-center rounded-[32px] overflow-hidden relative shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 flex items-end group">
                   <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                   <img src="https://picsum.photos/seed/venex/400/500" alt="Venex" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-700" referrerPolicy="no-referrer" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                   <div className="relative z-20 p-8 w-full text-white">
                      <p className="font-bold text-xl uppercase tracking-wider text-center drop-shadow-md">VENEX</p>
                   </div>
               </div>

                {/* Testimonial Card 3 (Image focused like screenshot) */}
               <div className="min-w-[320px] md:min-w-[400px] shrink-0 snap-center rounded-[32px] overflow-hidden relative shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 flex items-end bg-[#b09673] group">
                   <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                   <img src="https://picsum.photos/seed/advocall/400/500" alt="Advocall" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 group-hover:opacity-80 transition-opacity duration-700" referrerPolicy="no-referrer" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                   <div className="relative z-20 p-8 w-full text-white">
                      <p className="font-bold text-xl uppercase tracking-wider text-center drop-shadow-md">ADVOCALL</p>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Contact CTA Section */}
      <section className="px-6 pb-24 -mt-10 relative z-10">
         <Reveal className="max-w-[1400px] mx-auto bg-[#0d0714] rounded-[40px] md:rounded-[80px] overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.6)] min-h-[600px] flex flex-col md:flex-row border border-white/10 group/cta">
             <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-50 group-hover/cta:opacity-100 transition-opacity duration-700 pointer-events-none" />
             
             {/* Left Text */}
             <div className="flex-1 p-10 md:p-16 flex flex-col justify-center text-white border-r border-white/10 relative z-10 bg-[#170d1e]/80 backdrop-blur-xl">
                 <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/30 text-brand-teal px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-8 w-fit backdrop-blur-md">
                     Claim A $799 Consultation, On Us!
                 </div>
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
                     Enhance Your Brand <br/>Potential <span className="font-serif italic text-brand-secondary">At No Cost!</span>
                 </h2>
                 <ul className="space-y-4 mb-12 text-sm text-white/70">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-teal drop-shadow-[0_0_5px_rgba(28,219,186,0.5)]" /> Expect a response from us within 24 hours</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-teal drop-shadow-[0_0_5px_rgba(28,219,186,0.5)]" /> We're happy to sign an NDA upon request.</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-teal drop-shadow-[0_0_5px_rgba(28,219,186,0.5)]" /> Get access to a team of dedicated product specialists.</li>
                 </ul>
                 
                 <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl w-fit backdrop-blur-md shadow-lg group">
                    <img src="https://picsum.photos/seed/nomanfoot/60/60" className="w-14 h-14 rounded-full border-2 border-brand-teal/50 group-hover:border-brand-teal transition-colors" alt="Noman" referrerPolicy="no-referrer" />
                    <div>
                       <p className="font-bold text-white text-lg">Abdullah Al Noman</p>
                       <p className="text-white/50 text-xs mb-1">COO & Co-Founder</p>
                       <p className="text-brand-teal text-xs flex items-center gap-2 font-semibold"><span className="w-2 h-2 rounded-full bg-brand-teal shadow-[0_0_8px_rgba(28,219,186,0.8)]" /> (+1) 716) 503-6335</p>
                       <p className="text-white/70 text-xs hover:text-white underline cursor-pointer mt-2 transition-colors">Book a Call Directly</p>
                    </div>
                 </div>
             </div>

             {/* Right Form */}
             <div className="flex-1 p-10 md:p-16 bg-[#09030b]/90 relative z-10 flex items-center backdrop-blur-xl">
                 <form className="w-full max-w-md mx-auto flex flex-col gap-8">
                    <div>
                       <label className="block text-brand-primary text-xs font-bold mb-2 uppercase tracking-wide">Full Name</label>
                       <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/20 text-white pb-3 focus:outline-none focus:border-brand-primary transition-colors text-sm placeholder-white/30" />
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                       <div>
                          <label className="block text-brand-primary text-xs font-bold mb-2 uppercase tracking-wide">Your Email</label>
                          <input type="email" placeholder="youremail@gmail.com" className="w-full bg-transparent border-b border-white/20 text-white pb-3 focus:outline-none focus:border-brand-primary transition-colors text-sm placeholder-white/30" />
                       </div>
                       <div>
                          <label className="block text-brand-primary text-xs font-bold mb-2 uppercase tracking-wide">Whatsapp Number</label>
                          <input type="tel" placeholder="1 123 1234567" className="w-full bg-transparent border-b border-white/20 text-white pb-3 focus:outline-none focus:border-brand-primary transition-colors text-sm placeholder-white/30" />
                       </div>
                    </div>
                    
                    <div>
                       <label className="block text-brand-primary text-xs font-bold mb-4 uppercase tracking-wide">Project Budget</label>
                       <div className="flex flex-wrap gap-3">
                          <button type="button" className="px-5 py-2.5 rounded-full border border-white/20 text-white/80 text-xs hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/10 transition-all">Less than $5K</button>
                          <button type="button" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary bg-brand-primary/10 text-xs transition-all shadow-[0_0_10px_rgba(122,60,245,0.2)]">$5K - $10K</button>
                          <button type="button" className="px-5 py-2.5 rounded-full border border-white/20 text-white/80 text-xs hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/10 transition-all">$10K - $20K</button>
                       </div>
                    </div>

                    <div>
                       <label className="block text-brand-primary text-xs font-bold mb-2 uppercase tracking-wide">Project Details</label>
                       <textarea placeholder="I want to redesign my website..." className="w-full bg-transparent border-b border-white/20 text-white pb-3 focus:outline-none focus:border-brand-primary transition-colors text-sm min-h-[80px] resize-none placeholder-white/30"></textarea>
                    </div>

                    <button type="submit" className="bg-brand-primary text-white py-5 rounded-xl font-bold hover:bg-brand-primary/80 transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(122,60,245,0.3)] hover:shadow-[0_15px_30px_rgba(122,60,245,0.5)] mt-4 hover:-translate-y-1 group">
                       Let's Connect <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                 </form>
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

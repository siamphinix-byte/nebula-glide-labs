import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Target, Dribbble, Globe, Send, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function PrivacyPolicy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for each section
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.animate-section').forEach((section: any) => {
        gsap.fromTo(section, 
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#fcfbfc] min-h-screen text-[#111]">
      {/* Hero Header */}
      <div className="relative pt-44 pb-24 bg-[#06030c] overflow-hidden text-center z-10 border-b border-white/10">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-brand-teal/20 blur-[120px] rounded-full pointer-events-none" />
        <img src="https://picsum.photos/seed/crystal1/400/500" alt="" className="absolute -top-10 left-0 w-64 h-auto mix-blend-screen opacity-50 select-none pointer-events-none mask-image-fade" referrerPolicy="no-referrer" />
        <img src="https://picsum.photos/seed/crystal2/400/500" alt="" className="absolute top-0 right-0 w-64 h-auto mix-blend-screen opacity-50 select-none pointer-events-none mask-image-fade" referrerPolicy="no-referrer" />
        
        <div className="relative z-10 flex flex-col items-center">
           <div className="text-white/70 text-[13px] font-medium mb-8 flex items-center gap-3">
             <Link to="/" className="hover:text-white transition-colors">Home</Link>
             <span className="text-white/30">&gt;</span>
             <span className="text-white">Privacy & Policy</span>
           </div>
           <h1 className="text-5xl md:text-7xl lg:text-[100px] font-bold text-white tracking-tight leading-tight flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center">
             <span>Privacy</span>
             <span className="font-serif italic text-white font-light">& Policy</span>
           </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 py-24">
         <div className="space-y-16">
            <section className="animate-section">
               <h2 className="text-[32px] md:text-[40px] font-bold mb-4 tracking-tight">Privacy Policy</h2>
               <p className="text-gray-500 mb-8 font-medium text-sm">Last updated: January 27, 2024</p>
               <p className="text-gray-700 leading-[1.8] max-w-4xl text-[15px] md:text-base">
                 This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
               </p>
            </section>

            <section className="animate-section">
               <h3 className="text-[28px] md:text-[32px] font-bold mb-8 tracking-tight">Interpretation And Definitions</h3>
               <h4 className="text-xl font-bold mb-4">Interpretation</h4>
               <p className="text-gray-700 leading-[1.8] mb-10 max-w-4xl text-[15px] md:text-base">
                 The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
               </p>
               
               <h4 className="text-xl font-bold mb-6">Definitions</h4>
               <p className="text-gray-700 leading-[1.8] mb-8 max-w-4xl text-[15px] md:text-base">For the purposes of this Privacy Policy:</p>
               
               <ul className="space-y-6">
                 {[
                   { term: 'Account', desc: 'means a unique account created for You to access our Service or parts of our Service.' },
                   { term: 'Affiliate', desc: 'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.' },
                   { term: 'Company', desc: '(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Design Monks, House 29-A, Road - 6, Pallabi, Mirpur 12, Dhaka 1216.' },
                   { term: 'Cookies', desc: 'are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.' },
                   { term: 'Country', desc: 'refers to: Bangladesh' },
                   { term: 'Device', desc: 'means any device that can access the Service such as a computer, a cellphone or a digital tablet.' },
                   { term: 'Personal Data', desc: 'is any information that relates to an identified or identifiable individual.' },
                   { term: 'Service', desc: 'refers to the Website.' }
                 ].map((def, i) => (
                   <li key={i} className="flex gap-4 items-start">
                      <div className="mt-1.5 w-5 h-5 rounded-full border border-brand-primary/40 bg-brand-primary/5 flex items-center justify-center shrink-0 text-brand-primary shadow-sm">
                         <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                      </div>
                      <p className="text-gray-700 leading-[1.7] text-[15px] md:text-base">
                        <strong className="text-gray-900 font-semibold">{def.term}</strong> {def.desc}
                      </p>
                   </li>
                 ))}
               </ul>
            </section>

            <section className="animate-section">
               <h3 className="text-[28px] md:text-[32px] font-bold mb-10 tracking-tight">Collecting And Using Your Personal Data</h3>
               <h4 className="text-xl font-bold mb-6">Types of Data Collected</h4>
               
               <div className="mb-12">
                  <div className="flex gap-3 items-center mb-6">
                      <div className="w-[22px] h-[22px] rounded-full border border-brand-primary/40 bg-brand-primary/5 flex items-center justify-center shrink-0 text-brand-primary shadow-sm">
                         <div className="w-2.5 h-[2px] bg-brand-primary rounded-full" />
                      </div>
                      <strong className="text-gray-900 font-bold text-lg">Personal Data</strong>
                  </div>
                  <p className="text-gray-700 leading-[1.8] mb-6 text-[15px] md:text-base">
                     While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                  </p>
                  <ul className="list-disc pl-10 space-y-3 text-gray-800 font-medium text-[15px] md:text-base marker:text-gray-400">
                     <li>Email address</li>
                     <li>First name and last name</li>
                     <li>Phone number</li>
                     <li>Usage Data</li>
                  </ul>
               </div>

               <div className="mb-12">
                 <div className="flex gap-3 items-center mb-6">
                      <div className="w-[22px] h-[22px] rounded-full border border-brand-primary/40 bg-brand-primary/5 flex items-center justify-center shrink-0 text-brand-primary shadow-sm">
                         <div className="w-2.5 h-[2px] bg-brand-primary rounded-full" />
                      </div>
                      <strong className="text-gray-900 font-bold text-lg">Usage Data</strong>
                  </div>
                  <p className="text-gray-700 leading-[1.8] space-y-6 text-[15px] md:text-base">
                     <span className="block">Usage Data is collected automatically when using the Service.</span>
                     <span className="block">Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</span>
                     <span className="block">When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</span>
                  </p>
               </div>
               
               <div>
                 <div className="flex gap-3 items-center mb-6">
                      <div className="w-[22px] h-[22px] rounded-full border border-brand-primary/40 bg-brand-primary/5 flex items-center justify-center shrink-0 text-brand-primary shadow-sm">
                         <div className="w-2.5 h-[2px] bg-brand-primary rounded-full" />
                      </div>
                      <strong className="text-gray-900 font-bold text-lg">Tracking Technologies and Cookies</strong>
                  </div>
                  <p className="text-gray-700 leading-[1.8] space-y-6 text-[15px] md:text-base mb-6">
                     We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                  </p>
                  
                  <ul className="space-y-6 ml-2">
                     <li className="text-gray-700 leading-[1.8] text-[15px] md:text-base flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                        <span><strong className="text-gray-900 font-semibold">Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</span>
                     </li>
                     <li className="text-gray-700 leading-[1.8] text-[15px] md:text-base flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                        <span><strong className="text-gray-900 font-semibold">Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</span>
                     </li>
                  </ul>
               </div>
            </section>

            <section className="animate-section">
               <h3 className="text-[28px] md:text-[32px] font-bold mb-6 tracking-tight">Contact Us</h3>
               <p className="text-gray-700 leading-[1.8] mb-4 text-[15px] md:text-base">If you have any questions about this Privacy Policy, You can contact us:</p>
               <ul className="list-disc pl-6 text-gray-700 text-[15px] md:text-base marker:text-gray-400">
                  <li>By email: hello@designmonks.co</li>
               </ul>
            </section>
         </div>
      </div>

      {/* Newsletter Block matching screenshot */}
      <div className="py-24 bg-[#faf9fc] border-t border-gray-100 pb-36">
         <div className="max-w-3xl mx-auto px-6 text-center animate-section">
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-[1.8] text-[15px] md:text-[17px]">
               Say goodbye to outdated enterprise software and welcome the smoother one. We lead you from design to product innovation to shape your path from idea to success
            </p>
            <div className="flex justify-center gap-3 md:gap-4 mb-10 flex-wrap">
               {[
                 { icon: Globe },
                 { icon: Target },
                 { icon: Instagram },
                 { icon: Linkedin },
                 { icon: Twitter },
                 { icon: Send },
               ].map((Social, i) => (
                  <div key={i} className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all cursor-pointer hover:scale-110 duration-300">
                     <Social.icon className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                  </div>
               ))}
            </div>
            <div className="flex max-w-md mx-auto items-center p-1.5 md:p-2 bg-white rounded-xl border border-gray-200 shadow-sm focus-within:ring-2 focus-within:ring-brand-primary/20 transition-all">
               <div className="flex-1 px-3 md:px-4 flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <input type="email" placeholder="Your email here" className="bg-transparent w-full text-sm focus:outline-none text-gray-800" />
               </div>
               <button className="bg-brand-primary text-white font-semibold py-3 px-6 md:px-8 rounded-lg hover:bg-brand-primary/90 transition-colors shadow-[0_0_15px_rgba(122,60,245,0.4)] text-sm md:text-base flex items-center gap-2 group">
                 Subscribe <span className="group-hover:translate-x-1 transition-transform">→</span>
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}

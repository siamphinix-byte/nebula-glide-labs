import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Target, Globe, Send, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function TermsCondition() {
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
             <span>Terms</span>
             <span className="font-serif italic text-white font-light">& Condition</span>
           </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 py-24">
         <div className="space-y-16">
            <section className="animate-section">
               <p className="text-gray-700 leading-[1.8] max-w-4xl text-[15px] md:text-base space-y-4">
                 <span className="block">Hello Good people,<br/>Welcome to Design Monks!</span>
                 <span className="block">For your information, these terms and conditions govern the use of the Design Monks Website: https://design-monks.webflow.io/ By using this Website, you acknowledge and accept these terms, agreeing to be bound by them. If you disagree with any part of these terms and conditions, please do not use our Website.</span>
                 <span className="block">The following terminology applies to these Terms and Conditions, Privacy Policy, and all Agreements: "Client", "You", and "Your" refer to the user accessing our services and agreeing to our terms. "The Company", "Ourselves", "We", "Our", and "Us" refer to Design Monks. "Party" or "Parties" refers to both the Client and ourselves.</span>
               </p>
            </section>

            <section className="animate-section">
               <h3 className="text-[28px] md:text-[32px] font-bold mb-6 tracking-tight">Cookies</h3>
               <p className="text-gray-700 leading-[1.8] mb-10 max-w-4xl text-[15px] md:text-base">
                 We use cookies to enhance your experience on our Website. By continuing to browse, you consent to the use of cookies in accordance with Design Monks' Privacy Policy. Cookies help us personalize content and improve our website's functionality, making it easier for you to navigate and access our services.
               </p>
            </section>

            <section className="animate-section">
               <h3 className="text-[28px] md:text-[32px] font-bold mb-6 tracking-tight">Intellectual Property Rights</h3>
               <p className="text-gray-700 leading-[1.8] mb-6 max-w-4xl text-[15px] md:text-base space-y-4">
                 <span className="block">Design Monks retains all intellectual property rights for the content, designs, and materials displayed on the Website unless stated otherwise. All rights are reserved.<br/>You are granted access to our Website for personal use only. The following actions are prohibited without prior consent:</span>
                 <span className="block">- Selling, renting, or sublicensing any material from our Website.<br/>- Reproducing or copying content without authorization.<br/>- Republishing content from Design Monks.<br/>- Redistributing any content or materials from Design Monks.<br/>- These terms apply as soon as you access our site.</span>
               </p>
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
                     <span className="block">We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</span>
                  </p>
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

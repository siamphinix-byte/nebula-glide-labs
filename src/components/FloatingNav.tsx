import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, VolumeX, Briefcase, Puzzle, Crown, Menu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function FloatingNav() {
  const location = useLocation();
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  useEffect(() => {
    gsap.fromTo([desktopNavRef.current, mobileNavRef.current], 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.5 }
    );
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Background White/Gray Frosted Blur underneath navigation */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-[140px] bg-white/[0.08] backdrop-blur-2xl pointer-events-none z-[80] border-t border-white/5"
        style={{ maskImage: 'linear-gradient(to top, black 30%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent 100%)' }}
      />

      {/* Services Megamenu Popup */}
      <div 
        className={`fixed bottom-[110px] left-1/2 -translate-x-1/2 w-full max-w-4xl z-[90] transition-all duration-300 ${
          showServicesMenu ? 'opacity-100 translate-y-0 visible shadow-2xl pointer-events-auto' : 'opacity-0 translate-y-4 invisible pointer-events-none'
        }`}
        onMouseEnter={() => setShowServicesMenu(true)}
        onMouseLeave={() => setShowServicesMenu(false)}
      >
        {/* Invisible bridge block to link the hit areas together so hover doesn't drop */}
        <div className="absolute h-[50px] w-full bottom-[-50px] left-0 pointer-events-auto" />
        
        <div className="bg-[#f0eff5] rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/50 overflow-hidden flex flex-col md:flex-row mx-4 relative">
          {/* Left Column (Links) */}
          <div className="flex-1 p-8 md:p-10 bg-white grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 content-start">
             <div>
               <Link to="/services" className="group block" onClick={() => setShowServicesMenu(false)}>
                 <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">UI UX</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">Creating user-friendly digital experiences.</p>
               </Link>
             </div>
             <div>
               <Link to="/services" className="group block" onClick={() => setShowServicesMenu(false)}>
                 <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Logo & Branding</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">Creating memorable identities for brands.</p>
               </Link>
             </div>
             <div>
               <Link to="/services" className="group block" onClick={() => setShowServicesMenu(false)}>
                 <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Web Design</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">Building visually appealing & functional websites.</p>
               </Link>
             </div>
             <div>
               <Link to="/services" className="group block" onClick={() => setShowServicesMenu(false)}>
                 <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Webflow Design</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">Developing responsive websites effortlessly.</p>
               </Link>
             </div>
             <div>
               <Link to="/services" className="group block" onClick={() => setShowServicesMenu(false)}>
                 <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Framer Design</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">Interactive web designs are made simple.</p>
               </Link>
             </div>
             <div>
               <Link to="/services" className="group block" onClick={() => setShowServicesMenu(false)}>
                 <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">SaaS Design</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">Intuitive interfaces that boost user engagement.</p>
               </Link>
             </div>
          </div>

          {/* Right Column (Image Preview) */}
          <div className="w-[40%] bg-[#d3d3d3] relative hidden md:flex items-center justify-center p-6 border-l border-gray-200 overflow-hidden">
             <img src="https://picsum.photos/seed/laptopmock/500/500" alt="Service Preview" className="w-[120%] max-w-none transform translate-x-4 translate-y-4 drop-shadow-2xl" referrerPolicy="no-referrer" />
             <div className="absolute bottom-4 right-4 bg-[#e8e8e8] hover:bg-white transition-colors w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-sm">
                <VolumeX className="w-5 h-5 text-gray-600" />
             </div>
          </div>
        </div>
        
        {/* Pointer Triangle */}
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white mx-auto mt-[-1px] filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] relative z-10 hidden md:block left-[-60px]" />
      </div>

      {/* More Megamenu Popup */}
      <div 
        className={`fixed bottom-[110px] left-1/2 -translate-x-1/2 w-full max-w-3xl z-[90] transition-all duration-300 ${
          showMoreMenu ? 'opacity-100 translate-y-0 visible shadow-2xl pointer-events-auto' : 'opacity-0 translate-y-4 invisible pointer-events-none'
        }`}
        onMouseEnter={() => setShowMoreMenu(true)}
        onMouseLeave={() => setShowMoreMenu(false)}
      >
        {/* Invisible bridge block for hover persistence */}
        <div className="absolute h-[50px] w-full bottom-[-50px] left-0 pointer-events-auto" />
        
        <div className="bg-[#fcfcfc] rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/50 overflow-hidden flex flex-col md:flex-row mx-4 p-4 gap-4 relative">
          
          {/* Left Column (Video/Phone Preview) */}
          <div className="w-[45%] bg-[#120a21] relative hidden md:flex flex-col justify-between items-center p-6 rounded-[24px] overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/20 to-transparent pointer-events-none" />
             <div className="mt-8 border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-sm px-4 py-2 rounded-full relative z-10 w-fit">
                The design looks okay
             </div>
             <div className="relative z-10 w-full px-4 mb-4 mt-16">
                <div className="rounded-2xl overflow-hidden border border-white/10 mb-4 aspect-[4/3] bg-black">
                   <img src="https://picsum.photos/seed/videocall/400/300" alt="Video Call" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                </div>
                <div className="flex justify-between items-center w-full">
                   <p className="text-white text-sm font-semibold">Maybe the design looks okay</p>
                   <div className="bg-white/20 hover:bg-white/30 transition-colors w-8 h-8 rounded-full flex items-center justify-center cursor-pointer backdrop-blur-md">
                      <VolumeX className="w-4 h-4 text-white" />
                   </div>
                </div>
             </div>
          </div>

          {/* Right Column (Links) */}
          <div className="flex-1 p-6 md:p-8 flex flex-col gap-6">
             <Link to="/" className="group block" onClick={() => setShowMoreMenu(false)}>
               <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Home</h4>
               <p className="text-gray-500 text-xs">Home is where the monk lives</p>
             </Link>
             <Link to="/about" className="group block" onClick={() => setShowMoreMenu(false)}>
               <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">About us</h4>
               <p className="text-gray-500 text-xs">The journey of BrandoFriar</p>
             </Link>
             <Link to="/team" className="group block" onClick={() => setShowMoreMenu(false)}>
               <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Meet the team</h4>
               <p className="text-gray-500 text-xs">An overview of the Monk family</p>
             </Link>
             <Link to="/blog" className="group block" onClick={() => setShowMoreMenu(false)}>
               <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Blogs</h4>
               <p className="text-gray-500 text-xs">A collection of informative blogs</p>
             </Link>
             <Link to="/career" className="group block" onClick={() => setShowMoreMenu(false)}>
               <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Career</h4>
               <p className="text-gray-500 text-xs">Work with top global brands, grow your skills</p>
             </Link>
             <Link to="/contact" className="group block" onClick={() => setShowMoreMenu(false)}>
               <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Contact us</h4>
               <p className="text-gray-500 text-xs">Start your dream design journey from here</p>
             </Link>
          </div>
        </div>
        
        {/* Pointer Triangle relative to 'More' link */}
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white mx-auto mt-[-1px] filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] relative z-10 hidden md:block left-[320px]" />
      </div>

      {/* DESKTOP FLOATING PILL */}
      <div ref={desktopNavRef} className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#09090b] text-white px-8 py-3 rounded-[24px] items-center gap-10 shadow-[0_20px_50px_rgba(0,0,0,0.8),_0_-2px_15px_rgba(28,219,186,0.15)] border border-white/5 border-t-[rgba(28,219,186,0.2)] border-t-[1px] z-[100] whitespace-nowrap">
        {/* Left Links */}
        <div className="flex items-center gap-8">
           <Link 
             to="/projects" 
             className={`text-[15px] font-bold transition-all duration-300 py-2 ${isActive('/projects') ? 'text-brand-primary' : 'text-white hover:text-white/80'}`}
           >
             Projects
           </Link>
           
           <div 
              className="relative py-2"
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
           >
             <Link 
               to="/services" 
               className={`text-[15px] font-bold transition-all duration-300 ${isActive('/services') || showServicesMenu ? 'text-brand-primary' : 'text-white hover:text-white/80'}`}
             >
               Services
             </Link>
           </div>
        </div>
        
        {/* Center Button */}
        <Link 
          to="/contact" 
          className="bg-gradient-to-r from-brand-primary to-[#a166ff] text-white rounded-[14px] px-8 py-3.5 font-bold text-[15px] flex items-center gap-2.5 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(122,60,245,0.4)] relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-8 h-8 bg-white/40 blur-[8px] rounded-full mix-blend-screen -translate-y-1/2 translate-x-1/2 pointer-events-none" />
           <MessageSquare className="w-5 h-5 text-white fill-white relative z-10" />
           <span className="relative z-10 tracking-wide">Start a Project</span>
        </Link>
        
        {/* Right Links */}
        <div className="flex items-center gap-8">
           <Link 
             to="/career" 
             className={`text-[15px] font-bold transition-all duration-300 py-2 ${isActive('/career') ? 'text-brand-primary' : 'text-white hover:text-white/80'}`}
           >
             Career
           </Link>
           
           <div
              className="relative py-2"
              onMouseEnter={() => setShowMoreMenu(true)}
              onMouseLeave={() => setShowMoreMenu(false)}
           >
             <Link 
               to="#" 
               className={`text-[15px] font-bold transition-all duration-300 ${showMoreMenu ? 'text-brand-primary' : 'text-white hover:text-white/80'}`}
               onClick={(e) => e.preventDefault()}
             >
               More
             </Link>
           </div>
        </div>
      </div>

      {/* MOBILE BOTTOM APP-TAB BAR */}
      <div ref={mobileNavRef} className="md:hidden fixed bottom-0 left-0 right-0 h-[80px] bg-[#0d0d0d]/95 backdrop-blur-xl border-t border-white/10 rounded-t-[2.5rem] flex items-center justify-around px-4 z-[100] pb-2 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
         {/* Projects */}
         <Link to="/projects" className={`flex flex-col items-center gap-1.5 mt-2 transition-colors ${isActive('/projects') ? 'text-white' : 'text-white/50 hover:text-white/80'}`}>
            <Briefcase className="w-[22px] h-[22px] stroke-[2px]" />
            <span className="text-[11px] font-medium tracking-wide">Projects</span>
         </Link>

         {/* Services */}
         <Link to="/services" className={`flex flex-col items-center gap-1.5 mt-2 transition-colors ${isActive('/services') ? 'text-white' : 'text-white/50 hover:text-white/80'}`} onClick={() => setShowServicesMenu(true)}>
            <Puzzle className="w-[22px] h-[22px] stroke-[2px]" />
            <span className="text-[11px] font-medium tracking-wide">Services</span>
         </Link>

         {/* Center Floating Action Button (Start a project) */}
         <div className="relative -top-7 w-16 h-16 flex justify-center items-center">
            <Link 
               to="/contact" 
               className="absolute inset-0 bg-brand-primary rounded-[1.25rem] shadow-[0_0_25px_rgba(122,60,245,0.7)] border-[4px] border-[#0d0d0d] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
            >
                <div className="absolute -inset-[1px] bg-white rounded-[1.10rem] opacity-20 pointer-events-none blur-sm" />
                <MessageSquare className="w-7 h-7 text-white fill-white relative z-10" />
            </Link>
         </div>

         {/* Career */}
         <Link to="/career" className={`flex flex-col items-center gap-1.5 mt-2 transition-colors ${isActive('/career') ? 'text-white' : 'text-white/50 hover:text-white/80'}`}>
            <Crown className="w-[22px] h-[22px] stroke-[2px]" />
            <span className="text-[11px] font-medium tracking-wide">Career</span>
         </Link>

         {/* More */}
         <div className="flex flex-col items-center gap-1.5 mt-2 text-white/50 hover:text-white/80 cursor-pointer transition-colors" onClick={() => setShowMoreMenu(true)}>
            <Menu className="w-[22px] h-[22px] stroke-[2px]" />
            <span className="text-[11px] font-medium tracking-wide">More</span>
         </div>
      </div>
    </>
  );
}

import { Reveal } from './components/GSAPWrapper';

export function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f7f7f7] text-[#333]">
      <Reveal direction="up" className="w-full">
        <div className="w-full h-[500px] border-b border-gray-200 relative overflow-hidden bg-white mb-24">
           {/* Collage placeholder for top header similar to screenshot */}
           <div className="absolute inset-0 flex justify-center items-end opacity-90 mix-blend-multiply">
               <img src="https://picsum.photos/seed/uiux1/600/800" className="w-1/4 h-[80%] object-cover object-top rounded-t-3xl shadow-xl mx-2 -translate-y-12" alt="Mockup 1"/>
               <img src="https://picsum.photos/seed/uiux2/600/800" className="w-1/4 h-[90%] object-cover object-top rounded-t-3xl shadow-2xl z-10" alt="Mockup 2"/>
               <img src="https://picsum.photos/seed/uiux3/600/800" className="w-1/4 h-[80%] object-cover object-top rounded-t-3xl shadow-xl mx-2 -translate-y-12" alt="Mockup 3"/>
               <img src="https://picsum.photos/seed/uiux4/600/800" className="w-1/4 h-[70%] object-cover object-top rounded-t-3xl shadow-xl mx-2 -translate-y-24" alt="Mockup 4"/>
           </div>
           {/* Fade overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#f7f7f7] via-[#f7f7f7]/20 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-6 mb-32">
           <h1 className="text-5xl md:text-6xl font-bold mb-8 text-[#2c2c2c] tracking-tight">UI UX Design</h1>
           <p className="text-xl text-[#555] leading-relaxed max-w-4xl">
             When it comes to UI/UX design, we create experiences that are simple to navigate. Our goal is to deliver user-friendly interactions that align with your brand and fulfill user needs.
           </p>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.2} className="max-w-5xl mx-auto px-6 pb-40">
         <h2 className="text-5xl md:text-6xl font-bold mb-12 text-[#e0e0e0] tracking-tight">UI/UX Design</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="h-[400px] bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <img src="https://picsum.photos/seed/app3/800/600" className="w-full h-full object-cover" alt="Detail 1"/>
             </div>
             <div className="h-[400px] bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <img src="https://picsum.photos/seed/app4/800/600" className="w-full h-full object-cover" alt="Detail 2"/>
             </div>
         </div>
      </Reveal>
    </div>
  );
}

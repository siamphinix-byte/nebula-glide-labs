import { ArrowRight } from 'lucide-react';

export function PortfolioGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-brand-primary text-sm font-semibold uppercase tracking-wider border border-brand-primary/30 px-3 py-1 rounded-full">What We Do</span>
        <h2 className="text-4xl md:text-5xl font-semibold mt-6 text-white">
          We Design <span className="font-serif italic text-white/90">Brands</span> That <span className="font-serif italic text-white/90">Speak</span> To Audiences
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        
        {/* Large Item */}
        <div className="lg:col-span-2 lg:row-span-2 rounded-[32px] bg-[#1d1f2e] overflow-hidden relative group">
          <img src="https://picsum.photos/seed/ui1/800/600" alt="UI Dashboard" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
             <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">Web Application Dashboard</h3>
                <p className="text-white/70">UX/UI • Development</p>
             </div>
          </div>
        </div>

        {/* Tall Item */}
        <div className="lg:row-span-2 rounded-[32px] bg-[#2a382e] overflow-hidden relative group">
          <img src="https://picsum.photos/seed/mobile1/400/800" alt="Mobile App" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
             <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-2">Fintech Wallet App</h3>
                <p className="text-white/70">Mobile App Design</p>
             </div>
          </div>
        </div>

        {/* Standard Items */}
        <div className="rounded-[32px] bg-[#3a2020] overflow-hidden relative group">
          <img src="https://picsum.photos/seed/dash1/400/300" alt="Dashboard" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-luminosity" />
        </div>
        
        <div className="rounded-[32px] bg-[#1a2b3c] overflow-hidden relative group">
          <img src="https://picsum.photos/seed/dash2/400/300" alt="Design" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-luminosity" />
        </div>

        {/* Wide bottom item */}
        <div className="lg:col-span-2 rounded-[32px] bg-[#1b3a2a] overflow-hidden relative group flex items-center p-8">
             <div className="w-1/2 z-10 flex flex-col justify-center">
                 <h3 className="text-3xl font-bold mb-4">Startio Virtual Reality Branding</h3>
                 <p className="text-white/70 mb-6">Visual Identity & Web Design</p>
                 <button className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full w-fit backdrop-blur-md transition-colors text-sm">View Case Study</button>
             </div>
             <div className="absolute right-0 top-0 bottom-0 w-2/3">
                <img src="https://picsum.photos/seed/vr/600/400" alt="VR Girl" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mask-image-linear" style={{ maskImage: 'linear-gradient(to right, transparent, black)'}} />
             </div>
        </div>

      </div>

      <div className="mt-16 text-center">
         <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all glow-btn inline-flex items-center gap-2">
            Book a Call <ArrowRight className="w-5 h-5" />
         </button>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react';

const cases = [
  {
    id: 1,
    tag: 'Travel',
    color: 'bg-[#bcccff]', // Light blue from screenshot
    textColor: 'text-[#0a0a0a]',
    title: 'Easy Booking for Dream Trips',
    desc: "Triply is a hassle-free & effective tour solution for travelers. It's an all-inclusive booking and planning website that helps people make their dream trips easier.",
    metrics: [{ label: 'Pages in Projects', value: '40+' }, { label: 'Retention Growth', value: '36%' }],
    client: { name: 'Shubho Al-Farooque', role: 'Triply CEO', avatar: '11' },
    image: 'https://picsum.photos/seed/travel2/800/600'
  },
  {
    id: 2,
    tag: 'Restaurant',
    color: 'bg-[#ffa39e]', // Coral from screenshot
    textColor: 'text-[#0a0a0a]',
    title: 'Transform Your Dining',
    desc: "At Plate, we bring you a handpicked selection of premium restaurants that offer not just meals, but memorable dining experiences, you'll cherish.",
    metrics: [{ label: 'Location', value: 'France' }, { label: 'Project Duration', value: '5 Months' }],
    client: { name: 'Neil Saidi', role: 'Plate CEO', avatar: '12' },
    image: 'https://picsum.photos/seed/restaurant2/800/600'
  },
  {
    id: 3,
    tag: 'SaaS',
    color: 'bg-[#fae29c]', // Pale Yellow from screenshot
    textColor: 'text-[#0a0a0a]',
    title: 'Reducing Carbon Footprints',
    desc: 'Yenex is a smart and sustainable energy platform. It empowers users with distributed energy solutions to reduce carbon footprints effortlessly.',
    metrics: [{ label: 'Project timeline', value: '2.5 Months' }, { label: 'Customer Acquisition', value: '40%' }],
    client: { name: 'Ted Nash', role: 'Yenex CEO', avatar: '13' },
    image: 'https://picsum.photos/seed/saas2/800/600'
  },
  {
    id: 4,
    tag: 'Healthcare',
    color: 'bg-[#a3f4fa]', // Cyan from screenshot
    textColor: 'text-[#0a0a0a]',
    title: 'Revolutionize Fitness Goals',
    desc: 'Fitmate transforms fitness in Australia with flexible gym access, personalized schedules, and AI-driven insights to solve common workout limitations for users.',
    metrics: [{ label: 'Project scope', value: 'Mobile App' }, { label: 'Project Duration', value: '2 Months' }],
    client: { name: 'Omar', role: 'Fitmate CEO', avatar: '14' },
    image: 'https://picsum.photos/seed/fitness2/800/600'
  },
  {
    id: 5,
    tag: 'Vehicle Maintenance Platform',
    color: 'bg-[#50deb4]', // Mint Green from screenshot
    textColor: 'text-[#0a0a0a]',
    title: 'Simplifying Vehicle Care',
    desc: 'Zantrik is an innovative vehicle maintenance app. We revamped it with a fresh design, gamification, and intuitive features to boost user engagement.',
    metrics: [{ label: 'Project Duration', value: '8 Weeks' }, { label: 'Work Scope', value: 'Mobile App' }],
    client: { name: 'Shubho Al-Farooque', role: 'Zantrik CEO', avatar: '15' },
    image: 'https://picsum.photos/seed/car2/800/600'
  }
];

export function IndustryWins() {
  return (
    <section className="py-24 px-6 w-full bg-brand-bg relative z-10" id="work">
      <div className="text-center mb-16 relative z-20">
        <p className="text-brand-primary font-bold mb-4 tracking-wider uppercase text-sm">Industry Wins</p>
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-white tracking-tight">Proven Success in Every Industry</h2>
      </div>
      
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-0">
        {cases.map((c, index) => (
          <div 
            key={c.id}
            className={`md:sticky ${c.color} ${c.textColor} rounded-[2rem] pt-6 md:pt-8 px-6 md:px-12 pb-8 md:pb-12 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:shadow-2xl transition-all duration-500 min-h-[500px] md:mb-[80px]`}
            style={{ 
              top: `calc(100px + ${index * 80}px)`,
              zIndex: index + 1
            }}
          >
            <div className="h-full flex flex-col">
              <div className="h-[40px] md:h-[48px] shrink-0">
                <h3 className="text-xl md:text-2xl font-serif italic text-black/90 font-medium tracking-tight h-full flex items-start">{c.tag}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center flex-grow mt-2 md:mt-4">
                {/* Left side text content */}
                <div className="md:col-span-6 flex flex-col justify-center h-full order-2 md:order-1">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-[1.1] tracking-tight">{c.title}</h2>
                  <p className="text-black/75 md:text-lg leading-relaxed mb-10 max-w-lg">{c.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    {c.metrics?.map((m, i) => (
                      <div key={i}>
                        <p className="text-sm opacity-60 mb-2 font-medium">{m.label}</p>
                        <p className="font-bold text-2xl md:text-3xl">{m.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-black/5 hover:bg-black/10 transition-colors cursor-pointer rounded-2xl p-3 pl-4 flex items-center justify-between w-full max-w-sm">
                    <div className="flex items-center gap-4">
                      <img src={`https://picsum.photos/seed/${c.client?.avatar}/40/40`} referrerPolicy="no-referrer" alt={c.client?.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <p className="font-bold text-base">{c.client?.name}</p>
                        <p className="text-sm opacity-70">{c.client?.role}</p>
                      </div>
                    </div>
                    <div className="pr-3 opacity-60">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Right side floating image */}
                <div className="md:col-span-6 overflow-hidden rounded-2xl h-[300px] md:h-[450px] order-1 md:order-2 shadow-2xl">
                  <img 
                    src={c.image} 
                    alt={c.title} 
                    referrerPolicy="no-referrer" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-12 md:mt-16">
        <button className="bg-brand-primary text-white hover:bg-brand-primary/90 px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(122,60,245,0.4)] hover:shadow-[0_0_30px_rgba(122,60,245,0.6)] hover:scale-105 flex items-center gap-3">
          See All Projects
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

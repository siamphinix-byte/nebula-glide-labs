import { Link } from 'react-router-dom';
import { Reveal, StaggerReveal } from './components/GSAPWrapper';

const categories = [
  'Explore All', 'Automotive', 'Beauty & Cosmetics', 'Business Consulting', 
  'Construction', 'eCommerce', 'eCRM Portals', 'EdTech', 'Entertainment'
];

const projects = [
  {
    id: 1,
    title: "FROO: Branding & Packaging Design",
    description: "FROO packaging design project focuses on building a cohesive visual identity system for a raw juice brand. The design translates...",
    tag: "eCommerce",
    image: "https://picsum.photos/seed/froo/800/600"
  },
  {
    id: 2,
    title: "Rydara: Effortless Urban Ride Solution",
    description: "Rydara is a ride-booking mobile app designed to improve speed, clarity, and overall usability. The project focused on simplifying the...",
    tag: "Transportation & Logistics",
    image: "https://picsum.photos/seed/rydara/800/600"
  },
  {
    id: 3,
    title: "The Gridline - Structured Living Design",
    description: "The Gridline was developed as a response to the growing visual noise and trend-driven approaches in the furniture industry. It focuses on...",
    tag: "eCommerce",
    image: "https://picsum.photos/seed/gridline/800/600"
  },
  {
    id: 4,
    title: "AirAxis - A Unified Command for Flight Control",
    description: "AirAxis was designed to identify challenges airline teams face when managing flight schedules, crew assignments, and real-time trackin...",
    tag: "eCRM Portals",
    image: "https://picsum.photos/seed/airaxis/800/600"
  },
  {
    id: 5,
    title: "Dwelio - A Modern Real Estate Experience",
    description: "Dwelio is a modern real estate mobile app created to simplify how people discover and evaluate properties for buying or renting. The...",
    tag: "Real Estate",
    image: "https://picsum.photos/seed/dwelio/800/600"
  },
  {
    id: 6,
    title: "Trackory - Smart Shipment Intelligence",
    description: "Trackory was created to solve visibility gaps in shipment tracking and delivery coordination. Research with 28 logistics professionals...",
    tag: "SaaS",
    image: "https://picsum.photos/seed/trackory/800/600"
  }
];

export function ProjectsPage() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen text-[#0d0714] pb-24 font-sans">
      
      {/* Hero Section */}
      <section className="relative bg-[#09030b] text-white pt-40 pb-32 px-6 rounded-b-[40px] md:rounded-b-[80px] overflow-hidden">
        {/* Background Decorative Boxes Placeholder */}
        <div className="absolute top-10 left-10 w-40 h-40 opacity-30 mix-blend-screen pointer-events-none">
           <img src="https://picsum.photos/seed/cube1/200/200" alt="" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="absolute top-20 right-10 w-64 h-64 opacity-30 mix-blend-screen pointer-events-none">
           <img src="https://picsum.photos/seed/cube2/300/300" alt="" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-brand-primary/20 to-transparent pointer-events-none" />

        <Reveal className="max-w-4xl mx-auto text-center relative z-10" direction="up">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium text-white/70 mb-8 backdrop-blur-md">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-white">Projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="font-serif italic mr-3">Designs</span> That Speak <br />
            Results that <span className="font-serif italic text-white/90">Matter</span>
          </h1>
        </Reveal>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-12 md:mt-20">
        
        {/* Category Filters */}
        <Reveal direction="up" delay={0.2}>
          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-16">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  i === 0 
                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' 
                    : 'bg-black/5 text-[#333] hover:bg-black/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project Grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project) => (
            <Link to="#" key={project.id} className="group block">
              <div className="rounded-[32px] overflow-hidden mb-6 bg-white aspect-[4/3] w-full relative">
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                   referrerPolicy="no-referrer"
                 />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#111]">{project.title}</h3>
              <p className="text-[#555] leading-relaxed mb-4 text-sm md:text-base pr-4">
                {project.description}
              </p>
              <span className="inline-block bg-black/5 px-4 py-1.5 rounded-lg text-xs font-semibold text-[#444]">
                {project.tag}
              </span>
            </Link>
          ))}
        </StaggerReveal>

        {/* Pagination placeholder */}
        <Reveal direction="up" className="flex justify-center items-center gap-2 mt-24">
           <button className="w-10 h-10 rounded-full bg-brand-primary text-white font-medium flex items-center justify-center">1</button>
           {[2, 3, 4, 5].map(num => (
              <button key={num} className="w-10 h-10 rounded-full text-black hover:bg-black/5 font-medium transition-colors flex items-center justify-center">{num}</button>
           ))}
           <button className="w-10 h-10 rounded-full text-black hover:bg-black/5 font-medium transition-colors flex items-center justify-center">
             &gt;
           </button>
        </Reveal>

      </div>
    </div>
  );
}

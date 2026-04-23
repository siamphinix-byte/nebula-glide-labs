import { Reveal, StaggerReveal } from './components/GSAPWrapper';
import { ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TeamPage() {
  const founders = [
    { name: "Atiqur Rahaman", role: "CEO & Co-founder", linkedin: "#", behance: "#", youtube: "#", image: "https://picsum.photos/seed/atiq/800/1000" },
    { name: "Abdullah Al Noman", role: "COO & Co-founder", linkedin: "#", behance: "#", image: "https://picsum.photos/seed/noman/800/1000" }
  ];

  const team = [
    { name: "Adom Shafi", role: "Senior UI Designer", image: "https://picsum.photos/seed/shafi/600/800" },
    { name: "Abdullah Al Jami", role: "Product Designer", image: "https://picsum.photos/seed/jami/600/800" },
    { name: "Hasan Imam Nahid", role: "UI Designer", image: "https://picsum.photos/seed/nahid/600/800" },
    { name: "Abdullah Al Maruf", role: "Product Designer", image: "https://picsum.photos/seed/maruf/600/800" },
    { name: "Tanvir Ahmed Saimon", role: "Creative Director", image: "https://picsum.photos/seed/saimon/600/800" },
    { name: "Arif Hossain", role: "Product Designer", image: "https://picsum.photos/seed/arif/600/800" },
    { name: "Neha Hamim", role: "Product Designer", image: "https://picsum.photos/seed/neha/600/800" },
    { name: "Sudarsan Roy", role: "UI Designer", image: "https://picsum.photos/seed/sudarsan/600/800" },
    { name: "Aftab Uz Zaman", role: "Project Manager", image: "https://picsum.photos/seed/aftab/600/800" },
    { name: "Farhan Islam", role: "Visualizer", image: "https://picsum.photos/seed/farhan/600/800" },
    { name: "Abdullah Plabon", role: "UI Designer", image: "https://picsum.photos/seed/plabon/600/800" },
    { name: "Misbah Gunabi", role: "Country Manager - Dubai", image: "https://picsum.photos/seed/misbah/600/800" },
    { name: "Shakira Mushtary", role: "Content Writer", image: "https://picsum.photos/seed/shakira/600/800" },
    { name: "Md Rakib Uddin", role: "Product Designer", image: "https://picsum.photos/seed/rakib/600/800" },
    { name: "G M Minhaz Rahman", role: "Key Account Manager", image: "https://picsum.photos/seed/minhaz/600/800" },
    { name: "MD Imran Sayed Ratul", role: "Social Media Manager", image: "https://picsum.photos/seed/imran/600/800" },
    { name: "Sourav Dhali", role: "Product Designer", image: "https://picsum.photos/seed/sourav/600/800" },
    { name: "Sakib Reza Moon", role: "UI Designer", image: "https://picsum.photos/seed/moon/600/800" },
    { name: "Pritue Mondal", role: "Senior UI Designer", image: "https://picsum.photos/seed/pritue/600/800" },
    { name: "Nazmul Alam Hridoy", role: "Product Designer", image: "https://picsum.photos/seed/hridoy/600/800" },
    { name: "Hafij Uddin Ahmed", role: "UI Designer", image: "https://picsum.photos/seed/hafij/600/800" },
    { name: "Shakila Yesmin", role: "Business Development Manager", image: "https://picsum.photos/seed/yesmin/600/800" },
    { name: "Abid Hasan", role: "Project Manager", image: "https://picsum.photos/seed/abid/600/800" },
    { name: "Shah Jamal", role: "UI Designer", image: "https://picsum.photos/seed/jamal/600/800" },
    { name: "Saif Sarwar", role: "Product Designer", image: "https://picsum.photos/seed/saif/600/800" },
    { name: "Syed Abdul Muhit", role: "UI Designer", image: "https://picsum.photos/seed/muhit/600/800" },
    { name: "Monira Akter", role: "Digital Marketing Executive", image: "https://picsum.photos/seed/monira/600/800" },
    { name: "Md. Sajib Ahmed", role: "SEO Specialist", image: "https://picsum.photos/seed/sajib/600/800" },
    { name: "Sabiha Sultana", role: "Content Writer", image: "https://picsum.photos/seed/sabiha/600/800" },
    { name: "Sabbir Hasan", role: "Graphics Designer", image: "https://picsum.photos/seed/sabbir/600/800" },
  ];

  return (
    <div className="bg-[#f0edf5] min-h-screen text-[#09030b] pt-24 pb-0 relative overflow-hidden font-sans">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(26,20,40,1)_0%,transparent_70%)] pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 relative z-10">
        <Reveal direction="up" className="text-center mb-24 text-white">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium text-white/70 mb-8 backdrop-blur-md">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <span>&gt;</span>
            <span className="text-white">Team Page</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
            Our Awesome <br />
            <span className="font-serif italic text-white drop-shadow-xl">Monks Family</span>
          </h1>
        </Reveal>

        {/* Founders */}
        <StaggerReveal className="grid md:grid-cols-2 gap-8 md:gap-16 mb-24 max-w-5xl mx-auto">
          {founders.map((founder, i) => (
            <div key={i} className="text-center group">
              <div className="rounded-[40px] overflow-hidden bg-gradient-to-b from-[#2a1b38] to-[#1a0f2e] mb-8 relative aspect-[4/5] shadow-xl border border-white/5">
                <img src={founder.image} alt={founder.name} className="w-full h-full object-cover object-top mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-12">
                   <h3 className="font-bold text-3xl text-white font-serif tracking-widest opacity-80">BrandoFriar</h3>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
              <p className="text-[#666] mb-4">{founder.role}</p>
              <div className="flex items-center justify-center gap-3">
                 {founder.linkedin && (
                   <a href={founder.linkedin} className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors text-sm font-semibold">in</a>
                 )}
                 {founder.behance && (
                   <a href={founder.behance} className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors text-sm font-semibold">Bē</a>
                 )}
                 {founder.youtube && (
                   <a href={founder.youtube} className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors text-sm font-semibold">Yt</a>
                 )}
              </div>
            </div>
          ))}
        </StaggerReveal>

        {/* Rest of the team Grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-24">
           {team.map((member, i) => (
              <div key={i} className="text-center group">
                 <div className="rounded-[40px] overflow-hidden bg-gradient-to-b from-[#2a1b38] to-[#1a0f2e] mb-6 relative aspect-[3/4] shadow-md border border-black/5 hover:shadow-xl transition-shadow">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top mix-blend-screen opacity-90 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <h3 className="font-bold text-xl text-white font-serif tracking-widest opacity-80">BrandoFriar</h3>
                    </div>
                 </div>
                 <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                 <p className="text-[#666]">{member.role}</p>
              </div>
           ))}
           {/* The Cat */}
           <div className="text-center group">
                 <div className="rounded-[40px] overflow-hidden bg-gradient-to-b from-[#3a2b48] to-[#2a1f3e] mb-6 relative aspect-[3/4] shadow-md border border-black/5 hover:shadow-xl transition-shadow">
                    <img src="https://picsum.photos/seed/miketysoncat/600/800" alt="Mike Tyson" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                 </div>
                 <h3 className="text-xl font-bold mb-1">Mike Tyson</h3>
                 <p className="text-[#666]">Chief Happiness Officer</p>
           </div>
        </StaggerReveal>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#e4e0ec] py-32 rounded-t-[40px] md:rounded-t-[80px]">
        <div className="max-w-7xl mx-auto px-6">
           <Reveal className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-4 flex flex-col items-center gap-4 relative h-[500px] overflow-hidden rounded-[40px]">
                 {/* Sliding Faces */}
                 <div className="absolute inset-0 bg-gradient-to-b from-[#e4e0ec] via-transparent to-[#e4e0ec] z-10 pointer-events-none" />
                 <div className="flex flex-col gap-4 animate-[slideY_20s_linear_infinite] w-full items-center">
                    {[1,2,3,4,5,6].map(i => (
                       <img key={i} src={`https://picsum.photos/seed/face${i}/200/200`} className={`w-32 h-32 rounded-[32px] object-cover filter ${i === 3 ? 'grayscale-0 scale-110 shadow-xl border-2 border-brand-primary' : 'grayscale opacity-50'}`} alt="Team Member" referrerPolicy="no-referrer" />
                    ))}
                    {/* Duplicate for infinite effect */}
                    {[1,2,3,4,5,6].map(i => (
                       <img key={`dup-${i}`} src={`https://picsum.photos/seed/face${i}/200/200`} className={`w-32 h-32 rounded-[32px] object-cover filter ${i === 3 ? 'grayscale-0 scale-110 shadow-xl border-2 border-brand-primary' : 'grayscale opacity-50'}`} alt="Team Member" referrerPolicy="no-referrer" />
                    ))}
                 </div>
              </div>
              <div className="md:col-span-8 relative pl-8 md:pl-0">
                 <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mb-8 shadow-[0_10px_20px_rgba(122,60,245,0.3)]">
                    <span className="text-white text-2xl font-serif">"</span>
                 </div>
                 <p className="text-2xl md:text-4xl text-[#111] leading-relaxed mb-12 font-medium">
                   The team's energy, the way things are managed, is so smooth, fun, and actually engaging. The founders don't act like bosses; they lead like teammates. On a personal note, I'm from a rainy hometown, and I never liked going to the office all wet. Now, I sip hot tea, watch the rain slide down the window, and feel more focused than ever.
                 </p>
                 <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-xl mb-1">Hafij Uddin Ahmed</h4>
                      <p className="text-[#666]">UI Designer</p>
                    </div>
                    <div className="flex flex-col gap-2">
                       <button className="w-10 h-10 rounded-full border border-brand-primary/30 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
                          <ArrowUp className="w-5 h-5" />
                       </button>
                       <button className="w-10 h-10 rounded-full border border-brand-primary/30 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors">
                          <ArrowDown className="w-5 h-5" />
                       </button>
                    </div>
                 </div>
              </div>
           </Reveal>
        </div>
      </section>

      {/* Career CTA Card */}
      <section className="bg-white py-32 rounded-t-[40px] md:rounded-t-[80px] -mt-10 relative z-10 px-6">
         <Reveal className="max-w-[1200px] mx-auto bg-[#1b1525] text-white rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
             <div className="p-12 md:p-20 flex-1 z-10 flex flex-col justify-center border-r border-white/5 w-full md:w-1/2">
                <span className="inline-block border border-green-500/30 text-green-400 bg-green-500/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 w-fit">Career</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6">Want to be a <br/><span className="font-serif italic text-brand-primary">Monk Like Us?</span></h2>
                <p className="text-lg text-white/60 mb-10 max-w-sm">
                  Are you a talented and self-motivated person with a positive vibe? If yes, you can be the next member of our BrandoFriar family.
                </p>
                <button className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_10px_20px_rgba(122,60,245,0.2)] hover:bg-brand-primary/90 inline-flex items-center gap-2 w-fit">
                   Join our team <ArrowRight className="w-5 h-5" />
                </button>
             </div>
             <div className="flex-1 w-full md:w-1/2 min-h-[400px] relative">
                <img src="https://picsum.photos/seed/monks/800/800" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" alt="Career" referrerPolicy="no-referrer" />
             </div>
          </Reveal>
      </section>

      {/* Bottom Footer Marquee Section (will blend into global footer) */}
      <div className="bg-[#cceb4e] py-4 text-center text-black font-semibold text-lg overflow-hidden whitespace-nowrap relative z-20">
         <div className="animate-[marquee_20s_linear_infinite] inline-block">
            Why Risk It With The <span className="font-serif italic">Wrong Partner?</span> Get 100% Value And Guarantee. Don't Miss Out - <span className="underline cursor-pointer">Get Started Now</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Why Risk It With The <span className="font-serif italic">Wrong Partner?</span> Get 100% Value And Guarantee. Don't Miss Out - <span className="underline cursor-pointer">Get Started Now</span>
         </div>
      </div>

    </div>
  );
}

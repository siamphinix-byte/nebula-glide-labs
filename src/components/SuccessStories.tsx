import { Play } from 'lucide-react';

const stories = [
  {
    id: 1,
    quote: "Working with Design Monks was a great experience. They translated our...",
    name: "Armen Avagyan",
    role: "CEO & Co-founder @ Fraus",
    image: "https://picsum.photos/seed/face1/400/600",
    color: "bg-[#54483e]"
  },
  {
    id: 2,
    quote: "Big shoutout to the Design Monks team. They brought our vision to life both...",
    name: "Victor Okon",
    role: "CEO & Co-founder @ Dficio",
    image: "https://picsum.photos/seed/face2/400/600",
    color: "bg-[#2c2c2c]"
  },
  {
    id: 3,
    quote: "Had an amazing experience with Design Monks. Their talented team understoo...",
    name: "Neil Saidi",
    role: "Founder @ LeKlub",
    image: "https://picsum.photos/seed/face3/400/600",
    color: "bg-[#1f877f]"
  }
]

export function SuccessStories() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-brand-surface rounded-[40px] mb-24">
      <div className="mb-12">
        <span className="text-brand-primary text-sm font-semibold uppercase tracking-wider border border-brand-primary/30 px-3 py-1 rounded-full">Client Stories</span>
        <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-white">
          Success <span className="font-serif italic text-white/90">Stories</span> <br />
          That <span className="font-serif italic text-white/90">Inspire Us</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map(s => (
          <div key={s.id} className="relative rounded-[32px] overflow-hidden group cursor-pointer aspect-[3/4]">
            <img src={s.image} alt={s.name} referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className={`absolute inset-0 bg-gradient-to-t from-${s.color.replace('bg-', '')} to-transparent`} style={{ background: `linear-gradient(to top, ${s.color.match(/\[(.*)\]/)?.[1] || '#000'} e0%, transparent)` }} />
            
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <Play className="w-6 h-6 text-white ml-1" fill="white" />
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white font-medium text-lg mb-4 whitespace-nowrap overflow-hidden text-ellipsis">"{s.quote}"</p>
              <p className="text-white font-bold">{s.name}</p>
              <p className="text-white/70 text-sm">{s.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

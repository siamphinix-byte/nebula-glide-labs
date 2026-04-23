export function Testimonials() {
  const reviews = Array(6).fill({
    text: "I've had the pleasure of collaborating with Design Monks for a while now on my new project. They're lightning-quick in addressing any questions or feedback I have, and they consistently go the extra mile to make sure I'm thrilled with the final outcome. I wholeheartedly endorse them.",
    author: "Ted Nash",
    role: "Founder & CEO @ Yenex",
    avatar: "https://picsum.photos/seed/face4/40/40"
  });

  return (
    <section className="py-24 px-6 bg-white text-black min-h-screen">
      <div className="text-center mb-16">
        <span className="text-black/60 text-sm font-semibold uppercase tracking-wider border border-black/20 px-3 py-1 rounded-full mb-6 inline-block">Referral from People</span>
        <h2 className="text-4xl md:text-5xl font-semibold mt-4">
          Trusted by <span className="font-serif italic">People</span> <br />
          Chosen By <span className="font-serif italic">Brands</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {reviews.map((r, i) => (
          <div key={i} className="break-inside-avoid bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-shadow duration-300">
            <div className="flex text-[#ebd356] mb-4 text-xs">★★★★★</div>
            <p className="text-black/70 mb-6 text-sm leading-relaxed">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <img src={r.avatar} alt="Avatar" referrerPolicy="no-referrer" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-bold text-sm">{r.author}</p>
                <p className="text-xs text-black/60">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

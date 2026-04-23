export function SmartAi() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto rounded-[40px] bg-[#0d0714] border border-white/5 relative overflow-hidden mb-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="text-center mb-16">
        <span className="text-brand-primary text-sm font-semibold uppercase tracking-wider border border-brand-primary/30 px-3 py-1 rounded-full">AI-Powered Design</span>
        <h2 className="text-4xl md:text-5xl font-semibold mt-6 text-white text-center">
          Smarter <span className="font-serif italic">Design</span>, <br className="hidden md:block"/>
          <span className="font-serif italic text-brand-primary">Supercharged By AI</span>
        </h2>
        <p className="text-white/50 mt-4 max-w-2xl mx-auto">
          From wireframes to launch, we blend AI tools with strategy to deliver faster, sharper, and data-led design results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Glow button center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#51249b] rounded-full z-20 flex items-center justify-center shadow-[0_0_40px_rgba(122,60,245,0.6)] hidden md:flex border-[4px] border-[#0d0714]">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white relative top-0.5"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/></svg>
        </div>

        {/* Card 1 */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-brand-primary/30 transition-colors card-glow">
          <h3 className="text-xl font-semibold mb-2">UX Copy <span className="font-serif italic text-white/80">That Clicks</span></h3>
          <p className="text-sm text-white/50 mb-8">We use AI to create effective copies like CTAs and microcopy that speaks.</p>
          <div className="bg-[#1a1125] border border-white/5 rounded-xl p-4 flex flex-col gap-4">
             <div className="flex gap-2 justify-center mb-2">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">⚙️</div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">✨</div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">🧠</div>
             </div>
             <div className="bg-white/5 rounded-lg p-3 text-xs text-white/40">Smarter UX Writing...</div>
             <button className="w-full bg-brand-primary text-white rounded-lg py-2 text-sm font-medium flex items-center justify-center gap-2">✨ Generate</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-brand-primary/30 transition-colors card-glow">
          <h3 className="text-xl font-semibold mb-2">Visuals, <span className="font-serif italic text-white/80">Instantly On Point</span></h3>
          <p className="text-sm text-white/50 mb-8">We generate custom visuals using AI for faster concept directions.</p>
          <div className="flex flex-col gap-3">
             <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                 <div className="w-8 h-8 rounded border border-white/20 bg-gradient-to-br from-blue-500 to-purple-500"></div>
                 <span className="text-sm font-medium">Midjourney</span>
             </div>
             <div className="bg-white/5 border border-brand-primary/50 bg-brand-primary/10 rounded-xl p-4 flex items-center gap-3">
                 <div className="w-8 h-8 rounded border border-white/20 bg-gradient-to-br from-purple-500 to-pink-500"></div>
                 <span className="text-sm font-medium text-white">RunwayML</span>
                 <svg className="ml-auto text-brand-primary w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
             </div>
             <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                 <div className="w-8 h-8 rounded border border-white/20 bg-gradient-to-br from-gray-500 to-gray-700"></div>
                 <span className="text-sm font-medium">Ideogram</span>
             </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-brand-primary/30 transition-colors card-glow">
          <h3 className="text-xl font-semibold mb-2">Data-Led <span className="font-serif italic text-white/80">Design Decisions</span></h3>
          <p className="text-sm text-white/50 mb-8">We predict user behavior before launch with AI heatmap tools.</p>
          <div className="bg-[#1a1125] border border-white/5 rounded-xl p-4 h-48 flex items-end gap-2 justify-center relative">
             <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-medium text-brand-primary bg-brand-primary/10 px-2 py-1 rounded">
               👁️ Attention Insight
             </div>
             {[40, 70, 45, 90, 60].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="w-8 bg-brand-primary/20 rounded-t-sm hover:bg-brand-primary transition-colors"></div>
             ))}
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-brand-primary/30 transition-colors card-glow md:col-span-1">
           <h3 className="text-xl font-semibold mb-2">Smarter & <span className="font-serif italic text-white/80">Faster Wireframes</span></h3>
           <p className="text-sm text-white/50 mb-6">We rapidly turn ideas into functional wireframes using AI tools.</p>
           <div className="bg-[#1a1125] border border-white/5 rounded-xl p-4">
              <div className="opacity-50 text-xs mb-2">📝 Uizard</div>
              <div className="h-2 w-full bg-white/10 rounded mb-2"></div>
              <div className="h-2 w-3/4 bg-white/10 rounded"></div>
           </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-brand-primary/30 transition-colors card-glow md:col-span-1 border-brand-primary/30 shadow-[0_0_30px_rgba(122,60,245,0.1)] relative">
           <h3 className="text-xl font-semibold mb-2">Launch Quicker, <span className="font-serif italic text-white/80">Spend Less</span></h3>
           <p className="text-sm text-white/50 mb-6">AI reduces revisions and guesswork and makes your website ready to launch.</p>
           <div className="absolute bottom-4 right-4 text-brand-primary opacity-20">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22l10-3 10 3L12 2z"/></svg>
           </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-brand-primary/30 transition-colors card-glow md:col-span-1">
           <h3 className="text-xl font-semibold mb-2">No Blank <span className="font-serif italic text-white/80">Canvas Struggles</span></h3>
           <p className="text-sm text-white/50 mb-6">AI generates editable mockups from prompts so we can skip the slow start.</p>
           <div className="border border-brand-primary/30 rounded-lg p-1 bg-[#1a1125] flex gap-2">
             <input type="text" placeholder="Create a landing page..." className="bg-transparent text-xs outline-none px-2 text-white/70 flex-1" />
             <button className="bg-brand-primary px-3 py-1 rounded text-xs font-medium text-white">Generate</button>
           </div>
        </div>
      </div>
    </section>
  )
}

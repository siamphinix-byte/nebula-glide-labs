import { Check, X } from 'lucide-react';

export function Comparison() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-brand-primary text-sm font-semibold uppercase tracking-wider border border-brand-primary/30 px-3 py-1 rounded-full mb-6 inline-block">Why Choose Us</span>
        <h2 className="text-4xl md:text-5xl font-semibold mt-4">
          BrandoFriar's <span className="font-serif italic text-white/90">Alternative?</span> <br />
          Think <span className="font-serif italic text-white/90">One More Time!</span>
        </h2>
      </div>

      <div className="bg-[#0b0612] border border-white/10 rounded-3xl overflow-hidden p-6 md:p-10">
         <div className="overflow-x-auto">
           <table className="w-full text-left min-w-[700px]">
             <thead>
               <tr className="border-b border-white/10 text-white/50 text-sm font-medium">
                 <th className="pb-6 w-2/5 font-semibold">Platform</th>
                 <th className="pb-6 text-center">Speed</th>
                 <th className="pb-6 text-center">Flexibility</th>
                 <th className="pb-6 text-center">Quality</th>
                 <th className="pb-6 text-center">Scalability</th>
                 <th className="pb-6 text-center">Affordability</th>
               </tr>
             </thead>
             <tbody className="text-sm">
               {/* Us */}
               <tr className="border-b border-brand-primary border-dashed bg-brand-primary/5">
                 <td className="py-6 pr-4">
                   <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center shrink-0">B</div>
                     <div>
                       <p className="font-semibold text-base mb-1 text-white">BrandoFriar</p>
                       <p className="text-white/60 text-xs leading-relaxed max-w-[250px]">Expert-driven & committed to higher quality. Get effective result & full support without hiring in-house employees.</p>
                     </div>
                   </div>
                 </td>
                 {Array(5).fill(0).map((_, i) => (
                   <td key={i} className="py-6 text-center"><Check className="w-5 h-5 text-brand-primary mx-auto" /></td>
                 ))}
               </tr>
               {/* Others */}
               {[
                 { t: 'In House Team', d: 'A full-time designer may ensure brand consistency, but there\'s a risk of limited expertise even though you pay regularly.', icon: '🏢' },
                 { t: 'Creative Agencies', d: 'Agencies offer structured processes but mostly with high costs, long timelines, and less flexibility for your projects.', icon: '✍️' },
                 { t: 'Freelancers', d: 'Freelancers may provide affordable design services but they mostly lack consistency, reliability, and collaboration.', icon: '👤' },
                 { t: 'Self-Service Tools', d: 'DIY tools like website builders are budget-friendly, but you can\'t expect strategic thinking & originality.', icon: '⚙️' }
               ].map((row, index) => (
                 <tr key={index} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                   <td className="py-6 pr-4">
                     <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">{row.icon}</div>
                       <div>
                         <p className="font-semibold text-base mb-1 text-white">{row.t}</p>
                         <p className="text-white/50 text-xs leading-relaxed max-w-[250px]">{row.d}</p>
                       </div>
                     </div>
                   </td>
                   <td className="py-6 text-center"><X className="w-4 h-4 text-red-500/80 mx-auto" /></td>
                   <td className="py-6 text-center"><Check className="w-4 h-4 text-white/50 mx-auto" /></td>
                   <td className="py-6 text-center"><X className="w-4 h-4 text-red-500/80 mx-auto" /></td>
                   <td className="py-6 text-center"><Check className="w-4 h-4 text-white/50 mx-auto" /></td>
                   <td className="py-6 text-center"><X className="w-4 h-4 text-red-500/80 mx-auto" /></td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
      </div>
    </section>
  )
}

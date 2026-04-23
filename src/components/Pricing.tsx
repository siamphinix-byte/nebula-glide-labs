import { CheckCircle2, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Website Design',
    desc: 'Ideal for Startup Owners, MVP Builders',
    price: '$1,800',
    features: ['Design Style Guide', 'Responsive across all devices', 'Unlimited Revisions', 'Developer Handoff'],
    color: 'border-white/10 hover:border-brand-primary/50'
  },
  {
    name: 'Web/Mobile App Design',
    desc: 'For SaaS & fast MVP launches',
    price: '$3,500',
    features: ['UX Research', 'Design System with token', 'Unlimited Revisions', 'Developer handoff', 'Transparent communication', 'Responsive across all devices'],
    color: 'border-brand-primary shadow-[0_0_40px_rgba(122,60,245,0.2)] scale-105 z-10 bg-[#140b1e]',
    popular: true
  },
  {
    name: 'Monthly Subscription',
    desc: 'Ideal for Startup or MVP',
    price: '$3,800+',
    features: ['Monthly dedicated designers', 'Adhoc design support', 'Right designer for right product', 'Transparent communication'],
    color: 'border-white/10 hover:border-brand-primary/50'
  }
];

export function Pricing() {
  return (
    <section className="py-24 px-6 relative" id="pricing">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="text-center mb-20 max-w-7xl mx-auto">
        <span className="text-brand-primary text-sm font-semibold uppercase tracking-wider border border-brand-primary/30 px-3 py-1 rounded-full mb-6 inline-block">Pricing plans</span>
        <h2 className="text-4xl md:text-5xl font-semibold mt-4">
          Unbeatable <span className="font-serif italic text-white/90">Value</span> <br />
          Unmatched <span className="font-serif italic text-white/90">Quality</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-7xl mx-auto">
        {plans.map((p, i) => (
          <div key={i} className={`flex-1 w-full max-w-md rounded-[32px] p-8 bg-[#0d0714] border ${p.color} transition-all duration-300 relative`}>
            {p.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <h3 className="text-4xl font-bold mb-2 text-white">{p.price}</h3>
            <p className="text-white/60 text-sm mb-6">{p.desc}</p>
            <h4 className="text-2xl font-semibold text-brand-secondary mb-8">{p.name}</h4>
            
            <ul className="space-y-4 mb-10 text-white/80">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 ${p.popular ? 'bg-brand-primary text-white glow-btn' : 'bg-brand-primary text-white hover:bg-brand-primary/90'}`}>
              Explore More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center max-w-4xl mx-auto">
         <h3 className="text-3xl font-semibold mb-12">Bonuses Worth Over <br /><span className="text-brand-secondary font-serif italic text-4xl">$2,500</span> - Yours Free!</h3>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { i: '🕹️', t: 'Free Design Prototype', d: 'Experience your design in action before development.' },
              { i: '💻', t: 'Developer Handoff', d: 'We ensure what we design is exactly what gets built.' },
              { i: '📊', t: 'Project Management', d: 'Stay on track with our expert project management.' },
              { i: '💭', t: 'Project Consultation', d: 'Get professional advice to enhance your project.' }
            ].map((b, i) => (
               <div key={i} className="text-left border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                  <div className="text-2xl mb-4">{b.i}</div>
                  <h4 className="font-semibold text-sm mb-2">{b.t}</h4>
                  <p className="text-xs text-white/50">{b.d}</p>
               </div>
            ))}
         </div>
      </div>
    </section>
  )
}

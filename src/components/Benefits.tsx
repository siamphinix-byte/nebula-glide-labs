import { Infinity, HeartHandshake, CircleDollarSign, Fingerprint, Headset } from 'lucide-react';

const benefits = [
  {
    icon: Infinity,
    color: 'text-brand-primary bg-brand-primary/10',
    title: 'Unlimited Revisions',
    desc: 'We\'re committed to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine.'
  },
  {
    icon: HeartHandshake,
    color: 'text-red-500 bg-red-500/10',
    title: 'Lifetime Support',
    desc: 'With our lifetime support, you\'re never alone. We\'ll be there for you at every stage with necessary guidance and assistance whenever you need it.'
  },
  {
    icon: CircleDollarSign,
    color: 'text-blue-500 bg-blue-500/10',
    title: 'Personalised Plans',
    desc: 'Get top-quality service without breaking the bank. Our rates are designed to fit your budget so that you can get the best value for your investment.'
  },
  {
    icon: Fingerprint,
    color: 'text-brand-teal bg-brand-teal/10',
    title: 'Custom Design Solutions',
    desc: 'Our easy payment options are completely flexible. So, you can invest in your success while staying within your budget.'
  },
  {
    icon: Headset,
    color: 'text-orange-500 bg-orange-500/10',
    title: '24/7 Customer Support',
    desc: 'Benefit from the expertise of our carefully chosen resources that are designed to make your journey smooth and effortless with outstanding results.'
  }
];

export function Benefits() {
  return (
    <section className="py-24 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="text-black/60 text-sm font-semibold uppercase tracking-wider border border-black/20 px-3 py-1 rounded-full">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-semibold mt-6">
            We <span className="font-serif italic">Design</span> for the <span className="font-serif italic">Future</span> to <br className="hidden md:block" />
            Drive Today's <span className="font-serif italic text-black/80">Success</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {benefits.map((b, i) => {
            // First two items take 3 columns each (half width). Next three take 2 columns each (one third width).
            let colSpan = "md:col-span-3 lg:col-span-3"; // Default for first 2
            if (i > 1) {
               colSpan = "md:col-span-2 lg:col-span-2"; // 3 items in a row
            }
            return (
              <div key={i} className={`p-8 rounded-[32px] bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${colSpan}`}>
                 <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${b.color}`}>
                    <b.icon className="w-8 h-8" strokeWidth={1.5} />
                 </div>
                 <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
                 <p className="text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="w-full overflow-hidden border-y border-gray-200 py-6 mt-24">
         <div className="marquee">
            <div className="marquee-content whitespace-nowrap opacity-60">
               {['Framer', 'Branding', 'Dashboard', 'Logos', 'Webflow', 'Slide Decks', 'Mobile Apps'].map((t, i) => (
                  <span key={i} className="text-2xl font-bold font-serif mx-8 mx-flex items-center gap-8">
                     {t} <span className="text-brand-primary text-3xl">✦</span>
                  </span>
               ))}
            </div>
         </div>
      </div>
    </section>
  )
}

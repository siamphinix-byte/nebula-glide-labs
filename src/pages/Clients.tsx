import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import { Search, ChevronLeft, ChevronRight, TrendingUp, ArrowRight } from 'lucide-react';

const CLIENTS = [
  { id: 'NV', name: 'Nova Ventures', type: 'Series B • Fintech', email: 'billing@novaventures.io', package: 'Enterprise Plus', spent: '$142,500.00', login: '2 hours ago', color: 'bg-brand-primary/10 text-brand-primary' },
  { id: 'AL', name: 'Aether Labs', type: 'Seed • Healthtech', email: 'contact@aetherlabs.com', package: 'Scale Tier', spent: '$24,900.00', login: 'Yesterday, 14:22', color: 'bg-brand-teal/10 text-brand-teal' },
  { id: 'SP', name: 'Solaris Photonics', type: 'Series A • Clean Energy', email: 'ops@solaris.net', package: 'Enterprise Plus', spent: '$89,200.00', login: '3 days ago', color: 'bg-[#ebd356]/10 text-[#ebd356]' },
  { id: 'OG', name: 'Omni Grid', type: 'Acquired • Logistics', email: 'archived@omnigrid.co', package: 'Sunsetted', spent: '$310,000.00', login: 'Aug 24, 2026', color: 'bg-red-500/10 text-red-500', inactive: true },
  { id: 'LX', name: 'Lumina UX', type: 'Stealth • AI SaaS', email: 'founders@lumina.ai', package: 'Scale Tier', spent: '$12,000.00', login: 'Active now', color: 'bg-white/10 text-white' },
];

export function Clients() {
  return (
    <div className="max-w-7xl mx-auto">
      <Reveal direction="down">
        <section className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-3">Client Ecosystem</h2>
            <p className="text-white/60 text-lg font-light leading-relaxed">Oversee active partnerships, fiscal deployments, and operational engagement across the entire venture portfolio.</p>
          </div>
          <div className="flex gap-2 bg-brand-surface p-1.5 rounded-xl border border-white/5">
            <button className="px-6 py-2 rounded-lg bg-white/10 shadow-sm text-sm font-semibold text-white transition-all">All</button>
            <button className="px-6 py-2 rounded-lg hover:bg-white/5 text-sm font-medium text-white/60 transition-all">Active</button>
            <button className="px-6 py-2 rounded-lg hover:bg-white/5 text-sm font-medium text-white/60 transition-all">Inactive</button>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <div className="bg-brand-surface rounded-xl shadow-2xl border border-white/5 overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-white/40">Client Name</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-white/40">Email</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-white/40">Package</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-white/40">Spent</th>
                  <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-white/40">Last Login</th>
                  <th className="px-8 py-5 text-right text-xs font-bold uppercase tracking-widest text-white/40">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {CLIENTS.map((client, i) => (
                  <tr key={i} className={`group hover:bg-white/5 transition-colors ${client.inactive ? 'opacity-50 grayscale' : ''}`}>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${client.color}`}>
                          {client.id}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{client.name}</p>
                          <p className="text-xs text-white/50 bg-white/5 px-2 py-0.5 rounded-md mt-1 inline-block">{client.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-sm text-white/60">{client.email}</td>
                    <td className="px-6 py-6">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        client.package === 'Enterprise Plus' ? 'bg-brand-primary/20 text-brand-primary' :
                        client.package === 'Sunsetted' ? 'bg-red-500/20 text-red-500' :
                        'bg-white/10 text-white/80'
                      }`}>
                        {client.package}
                      </span>
                    </td>
                    <td className="px-6 py-6 font-mono text-sm font-semibold">{client.spent}</td>
                    <td className="px-6 py-6 text-sm text-white/60">{client.login}</td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-brand-primary font-semibold text-sm hover:underline decoration-2 underline-offset-4">
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="px-8 py-5 bg-white/5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50 font-medium">Showing 1 to 5 of 48 active partnerships</p>
            <div className="flex gap-2 items-center">
              <button className="p-2 rounded-lg hover:bg-white/10 text-white/60 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-white/10 rounded-lg border border-white/20">1</div>
              <button className="p-2 rounded-lg hover:bg-white/10 text-white/60 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      <StaggerReveal className="grid grid-cols-12 gap-6 pb-12">
        <div className="col-span-12 md:col-span-4 p-8 rounded-xl bg-brand-surface border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Aggregate MRR</p>
            <h3 className="text-4xl font-bold text-brand-primary tracking-tight">$284,500</h3>
            <div className="flex items-center gap-2 mt-4 text-[#ebd356] text-sm font-semibold bg-[#ebd356]/10 w-fit px-3 py-1 rounded-full">
              <TrendingUp className="w-4 h-4" />
              <span>12.4% vs last quarter</span>
            </div>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
            <TrendingUp className="w-[160px] h-[160px] text-white" />
          </div>
        </div>
        
        <div className="col-span-12 md:col-span-8 p-8 rounded-xl bg-brand-surface border border-white/5 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 h-full">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Expansion Opportunities</h3>
            <p className="text-white/60 max-w-md leading-relaxed text-sm">3 Venture partners are eligible for Enterprise Plus upgrades based on current seat utilization metrics.</p>
            <button className="mt-8 px-6 py-3 rounded-xl bg-white text-black text-sm font-bold flex items-center gap-2 hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Review Insights
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="hidden lg:block w-48 h-32 rounded-xl bg-[#09030b] shadow-inner border border-white/10 relative overflow-hidden flex-shrink-0">
            <img src="https://picsum.photos/seed/graph1/300/200" alt="graph" className="w-full h-full object-cover mix-blend-screen opacity-50 grayscale" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent"></div>
          </div>
        </div>
      </StaggerReveal>
    </div>
  );
}

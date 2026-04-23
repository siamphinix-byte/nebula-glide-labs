import React from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { Search, Filter, Eye, Edit, Trash2, Plus } from 'lucide-react';

const budgets = [
  { id: 1, name: 'Data Warehouse', status: 'Active', total: '$50,000.00', type: 'Quarterly', progress: 0.0, spent: '$0.00', members: ['U'], color: '#bbf600' },
  { id: 2, name: 'AI Chatbot', status: 'Active', total: '$48,832.00', type: 'Project', progress: 0.0, spent: '$0.00', members: ['D','D','T','+3'], color: '#bbf600' },
  { id: 3, name: 'Customer Portal', status: 'Active', total: '$55,000.00', type: 'Project', progress: 0.0, spent: '$0.00', members: ['D','D','T','+4'], color: '#bbf600' },
  { id: 4, name: 'API Gateway', status: 'Active', total: '$42,000.00', type: 'Project', progress: 0.0, spent: '$0.00', members: ['D','D','T','+4'], color: '#bbf600' },
  { id: 5, name: 'Admin Dashboard', status: 'Active', total: '$52,000.00', type: 'Project', progress: 0.0, spent: '$0.00', members: ['D','D','T','+4'], color: '#bbf600' },
  { id: 6, name: 'Payment Integration', status: 'Active', total: '$38,000.00', type: 'Project', progress: 0.0, spent: '$0.00', members: ['D','D','T','+4'], color: '#bbf600' },
  { id: 7, name: 'Security Audit', status: 'Completed', total: '$75,000.00', type: 'Project', progress: 0.0, spent: '$0.00', members: ['D','D','T','+4'], color: '#5b8cff' },
  { id: 8, name: 'Analytics System', status: 'Active', total: '$50,981.00', type: 'Project', progress: 13.4, spent: '$6,833.00', remaining: '$44,148.00', members: ['D','D','T','+4'], color: '#bbf600' }
];

export function Budgets() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full">
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Budget</h1>
          <button className="bg-[#bbf600] text-[#131313] px-5 py-2.5 rounded-xl text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-[#bbf600]/90 transition-all shadow-[0_0_15px_rgba(187, 246, 0,0.3)]">
            <Plus className="w-4 h-4"/> Create Budget
          </button>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl p-6">
           <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
                 <div className="relative w-full sm:w-auto">
                   <Search className="w-4 h-4 absolute left-4 top-1/2 -mt-2 text-white/40" />
                   <input type="text" placeholder="Search budgets..." className="pl-11 pr-4 py-2 w-full sm:w-[280px] bg-[#131313] border border-white/10 rounded-xl text-[14px] focus:outline-none focus:border-[#bbf600] text-white transition-colors" />
                 </div>
                 <button className="bg-[#bbf600] text-[#131313] px-5 py-2 w-full sm:w-auto justify-center rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-[#bbf600]/90 transition-all shadow-[0_0_15px_rgba(187, 246, 0,0.2)]">
                   <Search className="w-4 h-4"/> Search
                 </button>
                 <button className="bg-[#131313] border border-white/10 text-white/80 px-4 py-2 w-full sm:w-auto justify-center rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
                   <Filter className="w-4 h-4"/> Filters
                 </button>
              </div>
              <div className="flex items-center gap-4 justify-end w-full lg:w-auto">
                 <div className="flex bg-[#131313] border border-white/10 rounded-xl p-1">
                   <button className="p-1.5 w-8 h-8 flex justify-center items-center rounded-lg text-white/40 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></button>
                   <button className="p-1.5 w-8 h-8 flex justify-center items-center rounded-lg bg-[#bbf600]/20 text-[#bbf600] shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></button>
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="text-xs text-white/40 font-medium">Per Page:</span>
                   <div className="relative">
                     <select className="bg-[#131313] border border-white/10 rounded-xl pl-4 pr-8 py-1.5 text-sm font-medium text-white focus:outline-none focus:border-[#bbf600] appearance-none cursor-pointer">
                       <option>12</option>
                     </select>
                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/50">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                     </div>
                   </div>
                 </div>
              </div>
           </div>

           <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {budgets.map((b) => (
                <div key={b.id} className="bg-[#131313] rounded-2xl border border-white/5 p-5 flex flex-col hover:border-white/20 transition-all shadow-md group">
                  <div className="flex justify-between items-start mb-3">
                     <h3 className="font-bold text-white text-[15px] truncate pr-2">{b.name}</h3>
                     <span className="text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider shrink-0 border" style={{ color: b.color, backgroundColor: `${b.color}15`, borderColor: `${b.color}25` }}>
                       {b.status}
                     </span>
                  </div>
                  
                  <div className="text-[14px] text-white/60 font-medium mb-6 flex items-center gap-1.5">
                     <span className="text-white/90 font-mono tracking-tight">{b.total}</span>
                     <span className="text-[11px] text-white/30">•</span>
                     <span className="text-[12px]">{b.type}</span>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-[11px] font-bold text-white/50 mb-2">
                       <span>Budget Utilization</span>
                       <span className={b.progress > 0 ? 'text-[#bbf600]' : ''}>{b.progress.toFixed(1)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1c1b1b] rounded-full overflow-hidden border border-white/5">
                       <div className="h-full bg-[#bbf600] rounded-full" style={{ width: `${b.progress}%` }}></div>
                    </div>
                  </div>

                  <div className="flex justify-between text-[12px] font-mono text-white/60 mb-6 border-b border-white/5 pb-4">
                     <span>{b.spent}</span>
                     <span>{b.remaining || b.total}</span>
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                     <div className="flex -space-x-2">
                        {b.members.map((m, idx) => (
                          <div key={idx} className={`w-7 h-7 rounded-full border-2 border-[#131313] flex items-center justify-center font-bold text-[10px] text-[#131313] z-${10-idx}`} style={{ backgroundColor: ['#5b8cff', '#d4bbff', '#bbf600', '#ebd356'][idx % 4] }}>
                            {m}
                          </div>
                        ))}
                     </div>
                     <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-7 h-7 rounded-lg border border-[#5b8cff]/20 text-[#5b8cff] hover:bg-[#5b8cff]/10 flex items-center justify-center transition-colors">
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button className="w-7 h-7 rounded-lg border border-[#ebd356]/20 text-[#ebd356] hover:bg-[#ebd356]/10 flex items-center justify-center transition-colors">
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button className="w-7 h-7 rounded-lg border border-[#f1734f]/20 text-[#f1734f] hover:bg-[#f1734f]/10 flex items-center justify-center transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                     </div>
                  </div>
                </div>
              ))}
           </StaggerReveal>

           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/5 text-[13px] text-white/50">
             <span className="font-medium">Showing 1 to 8 of 8 budgets</span>
             <div className="flex gap-2">
               <button className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium">Previous</button>
               <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#bbf600] text-[#131313] font-bold shadow-md">1</button>
               <button className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium opacity-50 cursor-not-allowed">Next</button>
             </div>
           </div>

        </div>
      </Reveal>
    </div>
  );
}

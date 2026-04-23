import React from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { Search, Filter, Check, X, Eye } from 'lucide-react';

const approvals = [
  { id: 1, user: 'WorkDo', status: 'Pending', period: '3/8/2026 - 3/10/2026', total: '4.00h', billable: '4.00h' },
  { id: 2, user: 'WorkDo', status: 'Pending', period: '3/8/2026 - 3/9/2026', total: '1.00h', billable: '1.00h' },
  { id: 3, user: 'David Kim', status: 'Pending', period: '12/29/2025 - 1/4/2026', total: '33.00h', billable: '26.00h' },
  { id: 4, user: 'David Kim', status: 'Pending', period: '1/26/2026 - 2/1/2026', total: '39.00h', billable: '35.00h' },
  { id: 5, user: 'WorkDo', status: 'Pending', period: '2/5/2026 - 2/6/2026', total: '9.00h', billable: '9.00h' },
  { id: 6, user: 'Christopher Moore', status: 'Approved', period: '12/8/2025 - 12/14/2025', total: '37.00h', billable: '28.00h' },
  { id: 7, user: 'Christopher Moore', status: 'Pending', period: '12/1/2025 - 12/7/2025', total: '37.00h', billable: '23.00h' },
  { id: 8, user: 'Lisa Anderson', status: 'Pending', period: '11/24/2025 - 11/30/2025', total: '40.00h', billable: '26.00h' },
  { id: 9, user: 'Alex Thompson', status: 'Approved', period: '11/24/2025 - 11/30/2025', total: '38.00h', billable: '30.00h' },
  { id: 10, user: 'Michael Chen', status: 'Pending', period: '11/24/2025 - 11/30/2025', total: '37.00h', billable: '27.00h' },
  { id: 11, user: 'Sarah Johnson', status: 'Pending', period: '12/1/2025 - 12/7/2025', total: '39.00h', billable: '35.00h' },
];

export function Approvals() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full">
      
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Approvals</h1>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl overflow-hidden p-6">
           <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
                 <div className="relative w-full sm:w-auto">
                   <Search className="w-4 h-4 absolute left-4 top-1/2 -mt-2 text-white/40" />
                   <input type="text" placeholder="Search by employee name..." className="pl-11 pr-4 py-2 w-full sm:w-[280px] bg-[#131313] border border-white/10 rounded-xl text-[14px] focus:outline-none focus:border-[#bbf600] text-white transition-colors" />
                 </div>
                 <button className="bg-[#bbf600] text-[#131313] px-5 py-2 w-full sm:w-auto justify-center rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-[#bbf600]/90 transition-all shadow-[0_0_15px_rgba(187, 246, 0,0.2)]">
                   <Search className="w-4 h-4"/> Search
                 </button>
                 <button className="bg-[#131313] border border-white/10 text-white/80 px-4 py-2 w-full sm:w-auto justify-center rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
                   <Filter className="w-4 h-4"/> Filters
                 </button>
              </div>
              <div className="flex items-center justify-between lg:justify-end gap-4 w-full lg:w-auto">
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

           <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
             {approvals.map((a, i) => (
               <div key={a.id} className="bg-[#131313] border border-white/5 p-5 rounded-2xl flex flex-col hover:border-white/20 transition-all duration-300 shadow-md">
                 <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                         <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </div>
                      <span className="font-bold text-white text-[14px]">{a.user}</span>
                    </div>
                    <span className={`text-[10px] px-2.5 py-1 rounded-md font-bold tracking-wider uppercase border ${a.status === 'Approved' ? 'bg-[#bbf600]/10 text-[#bbf600] border-[#bbf600]/20' : 'bg-[#ebd356]/10 text-[#ebd356] border-[#ebd356]/20'}`}>
                      {a.status}
                    </span>
                 </div>
                 
                 <div className="text-[12px] text-white/50 mb-4">{a.period}</div>
                 
                 <div className="flex justify-between text-[13px] font-medium items-center mb-6">
                    <span className="text-white">Total: <span className="font-mono text-white/80">{a.total}</span></span>
                    <span className="text-[#bbf600]">Billable: <span className="font-mono">{a.billable}</span></span>
                 </div>

                 <div className="flex items-center gap-4 mt-auto">
                    {a.status === 'Pending' && (
                      <>
                        <button className="w-8 h-8 rounded-full border border-white/10 hover:border-[#bbf600] hover:text-[#bbf600] text-white/40 flex items-center justify-center transition-colors">
                          <Check className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full border border-white/10 hover:border-[#ffb4ab] hover:text-[#ffb4ab] text-white/40 flex items-center justify-center transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      </>
                    )}
                    <button className="w-8 h-8 rounded-full border border-white/10 hover:border-[#4f80ff] hover:text-[#4f80ff] text-[#4f80ff] flex items-center justify-center transition-colors shadow-sm ml-auto">
                      <Eye className="w-4 h-4" />
                    </button>
                 </div>
               </div>
             ))}
           </StaggerReveal>

           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/5 text-[13px] text-white/50">
             <span className="font-medium">Showing 1 to 11 of 11 approvals</span>
             <div className="flex gap-2">
               <button className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium">Previous</button>
               <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#bbf600] text-[#131313] font-bold shadow-md">1</button>
               <button className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium">Next</button>
             </div>
           </div>

        </div>
      </Reveal>

    </div>
  );
}

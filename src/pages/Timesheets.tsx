import React from 'react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import { Plus, Search, Filter, List as ListIcon, Grid, Edit, Trash2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const timesheets = [
  { id: 1, weekOf: '3/8/2026', status: 'Submitted', user: 'WorkDo', totalHrs: '1.00h', billableHrs: '1.00h', period: '3/8/2026 - 3/9/2026', entries: 1 },
  { id: 2, weekOf: '2/24/2026', status: 'Draft', user: 'WorkDo', totalHrs: '3.00h', billableHrs: '3.00h', period: '2/24/2026 - 3/6/2026', entries: 2 },
  { id: 3, weekOf: '2/24/2026', status: 'Draft', user: 'WorkDo', totalHrs: '4.00h', billableHrs: '4.00h', period: '2/24/2026 - 2/27/2026', entries: 2 },
  { id: 4, weekOf: '3/8/2026', status: 'Submitted', user: 'WorkDo', totalHrs: '4.00h', billableHrs: '4.00h', period: '3/8/2026 - 3/10/2026', entries: 2 },
  { id: 5, weekOf: '2/24/2026', status: 'Draft', user: 'WorkDo', totalHrs: '1.00h', billableHrs: '1.00h', period: '2/24/2026 - 2/27/2026', entries: 1 },
  { id: 6, weekOf: '2/28/2026', status: 'Draft', user: 'WorkDo', totalHrs: '2.00h', billableHrs: '2.00h', period: '2/28/2026 - 3/1/2026', entries: 2 },
  { id: 7, weekOf: '3/15/2026', status: 'Draft', user: 'WorkDo', totalHrs: '2.00h', billableHrs: '2.00h', period: '3/15/2026 - 3/16/2026', entries: 1 },
  { id: 8, weekOf: '3/13/2026', status: 'Draft', user: 'WorkDo', totalHrs: '3.00h', billableHrs: '3.00h', period: '3/13/2026 - 3/14/2026', entries: 1 },
  { id: 9, weekOf: '2/26/2026', status: 'Draft', user: 'WorkDo', totalHrs: '2.00h', billableHrs: '2.00h', period: '2/26/2026 - 2/28/2026', entries: 3 },
];

export function Timesheets() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24">
      {/* Header */}
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Timesheets</h1>
          <button className="bg-[#bbf600] hover:bg-[#bbf600]/90 text-[#131313] px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(187,246,0,0.2)]">
            <Plus className="w-4 h-4" /> New Timesheet
          </button>
        </div>
      </Reveal>

      {/* KPI Stats */}
      <Reveal delay={0.1}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 p-4 grid grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-white/5 shadow-xl gap-4 lg:gap-0 mt-6">
           <div className="p-2 sm:p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-[#9fa9ff]">74</span>
             <span className="text-[12px] text-white/50 mt-1 font-medium">Total Timesheets</span>
           </div>
           <div className="p-2 sm:p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-white">63</span>
             <span className="text-[12px] text-white/50 mt-1 font-medium">Draft</span>
           </div>
           <div className="p-2 sm:p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-[#ebd356]">9</span>
             <span className="text-[12px] text-white/50 mt-1 font-medium">Submitted</span>
           </div>
           <div className="p-2 sm:p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-[#bbf600]">2</span>
             <span className="text-[12px] text-white/50 mt-1 font-medium">Approved</span>
           </div>
           <div className="p-2 sm:p-4 flex flex-col items-center justify-center text-center col-span-2 lg:col-span-1">
             <span className="text-3xl font-bold text-[#d4bbff]">0h</span>
             <span className="text-[12px] text-white/50 mt-1 font-medium">This Week</span>
           </div>
        </div>
      </Reveal>

      {/* Timer Section */}
      <Reveal delay={0.2}>
        <div className="bg-[#1c1b1b] p-6 rounded-2xl border border-white/5 shadow-xl">
          <div className="flex justify-between items-center mb-4">
             <div className="flex items-center gap-2 text-white font-bold tracking-tight">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
               Timer
             </div>
             <span className="text-2xl font-mono font-bold text-white tracking-widest">00:00:00</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
             <div className="relative flex-1 w-full">
               <select className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-white focus:outline-none focus:border-[#bbf600] appearance-none cursor-pointer">
                 <option>Select project *</option>
               </select>
               <ChevronIcon />
             </div>
             <div className="relative flex-1 w-full">
               <select className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-white focus:outline-none focus:border-[#bbf600] appearance-none cursor-pointer">
                 <option>Select task *</option>
               </select>
               <ChevronIcon />
             </div>
             <div className="flex-2 w-full">
               <input type="text" placeholder="What are you working on?" className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-white focus:outline-none focus:border-[#bbf600] placeholder:text-white/30" />
             </div>
             <button className="bg-[#bbf600]/10 text-[#bbf600] hover:bg-[#bbf600] hover:text-[#131313] px-6 py-3 rounded-xl text-sm font-bold flex flex-shrink-0 items-center justify-center gap-2 transition-all w-full md:w-auto mt-2 md:mt-0">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
               Start Timer
             </button>
          </div>
        </div>
      </Reveal>

      {/* Toolbar */}
      <Reveal delay={0.3}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#1c1b1b] p-4 rounded-2xl border border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
             <div className="relative w-full sm:w-auto">
               <Search className="w-4 h-4 absolute left-4 top-1/2 -mt-2 text-white/40" />
               <input type="text" placeholder="Search timesheets..." className="pl-11 pr-4 py-2 w-full sm:w-[260px] bg-[#131313] border border-white/10 rounded-xl text-[14px] focus:outline-none focus:border-[#bbf600] text-white transition-colors" />
             </div>
             <button className="bg-[#bbf600] text-[#131313] px-4 py-2 w-full sm:w-auto justify-center rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-[#bbf600]/90 transition-all">
               <Search className="w-4 h-4"/> Search
             </button>
             <button className="bg-[#131313] border border-white/10 text-white/80 px-4 py-2 w-full sm:w-auto justify-center rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
               <Filter className="w-4 h-4"/> Filters
             </button>
          </div>
          <div className="flex items-center justify-between lg:justify-end gap-4 w-full lg:w-auto mt-2 lg:mt-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
             <div className="flex bg-[#131313] border border-white/10 rounded-xl p-1">
               <button className="p-1.5 w-8 h-8 flex justify-center items-center rounded-lg text-white/40 hover:text-white transition-colors"><ListIcon className="w-4 h-4" /></button>
               <button className="p-1.5 w-8 h-8 flex justify-center items-center rounded-lg bg-[#bbf600] text-[#131313] shadow-sm"><Grid className="w-4 h-4" /></button>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-xs text-white/40 font-medium">Per Page:</span>
                <div className="relative">
                  <select className="bg-[#131313] border border-white/10 rounded-xl pl-4 pr-8 py-1.5 text-sm font-medium text-white focus:outline-none focus:border-[#bbf600] appearance-none cursor-pointer">
                    <option>12</option>
                  </select>
                  <ChevronIcon small />
                </div>
             </div>
          </div>
        </div>
      </Reveal>

      {/* Grid */}
      <Reveal delay={0.4}>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {timesheets.map((t) => (
            <div key={t.id} className="bg-[#1c1b1b] border border-white/5 p-6 rounded-[1.5rem] flex flex-col hover:border-white/20 transition-all duration-300 group shadow-lg">
              <div className="flex justify-between items-start mb-4 gap-2">
                 <h3 className="font-bold text-white text-[15px] truncate tracking-tight">Week of {t.weekOf}</h3>
                 <span className={`text-[10px] px-2.5 py-0.5 rounded-md font-bold tracking-wider uppercase border border-current ${t.status === 'Submitted' ? 'text-[#9fa9ff] bg-[#9fa9ff]/10' : 'text-white/60 bg-white/5 border-white/10 text-white/40'}`}>
                   {t.status}
                 </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 text-[12px] text-white/50 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  {t.user}
                </div>
              </div>
              
              <div className="space-y-3 pb-5 flex-1">
                 <div className="flex justify-between text-[13px] font-medium items-center">
                   <div className="flex items-center gap-2 text-white/50"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Total Hours</div>
                   <span className="text-white">{t.totalHrs}</span>
                 </div>
                 <div className="flex justify-between text-[13px] font-medium items-center text-[#bbf600]">
                   <div className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Billable Hours</div>
                   <span>{t.billableHrs}</span>
                 </div>
                 <div className="flex justify-between text-[12px] text-white/40 pt-2 border-t border-white/5">
                   <span>Period</span>
                   <span>{t.period}</span>
                 </div>
                 <div className="flex justify-between text-[12px] text-white/40">
                   <span>Entries</span>
                   <span>{t.entries}</span>
                 </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                 <div className="flex gap-3">
                   <button className="text-[#ebd356] hover:text-[#ebd356]/80 transition-colors" title="Edit"><Edit className="w-4 h-4" /></button>
                   <button className="text-[#ffb4ab] hover:text-[#ffb4ab]/80 transition-colors" title="Delete"><Trash2 className="w-4 h-4" /></button>
                 </div>
                 {t.status === 'Draft' && (
                   <button className="bg-[#bbf600] hover:bg-[#bbf600]/90 text-[#131313] px-3 py-1.5 rounded-lg text-[12px] font-bold shadow-md transition-all">
                     Submit
                   </button>
                 )}
              </div>
            </div>
          ))}
        </StaggerReveal>
      </Reveal>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 bg-[#1c1b1b] p-4 rounded-2xl border border-white/5 text-[13px] text-white/50 shadow-lg">
        <span className="font-medium">Showing 1 to 12 of 74 timesheets</span>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-[#131313] border border-white/10 hover:bg-white/5 transition-colors font-medium">Previous</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#bbf600] text-[#131313] font-bold">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#131313] border border-white/10 hover:bg-white/5 transition-colors font-medium text-white">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#131313] border border-white/10 hover:bg-white/5 transition-colors font-medium">3</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#131313] border border-white/10 hover:bg-white/5 transition-colors font-medium">4</button>
          <span className="w-8 h-8 flex items-center justify-center font-medium">...</span>
          <button className="px-3 py-1.5 rounded-lg bg-[#131313] border border-white/10 hover:bg-white/5 transition-colors text-white font-medium">Next</button>
        </div>
      </div>
      
    </div>
  );
}

const ChevronIcon = ({ small }: { small?: boolean }) => (
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
     <svg className={`fill-current ${small ? 'h-4 w-4' : 'h-5 w-5'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
  </div>
);

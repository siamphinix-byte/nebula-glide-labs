import React from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { Plus, Search, Filter, Calendar as CalendarIcon, Clock, ChevronRight, ChevronLeft } from 'lucide-react';

const weekData = [
  { day: 'Mon', date: '20', total: '473.6h', billable: '381.6h', entries: [{ proj: 'Analytics...', hrs: '1.00h', locked: false }, { proj: 'Analytics...', hrs: '2.00h', locked: true }, { proj: 'Analytics...', hrs: '1.00h', locked: true }], more: 176 },
  { day: 'Tue', date: '21', total: '473.6h', billable: '381.6h', entries: [{ proj: 'Analytics...', hrs: '1.00h', locked: true }, { proj: 'Analytics...', hrs: '2.00h', locked: true }, { proj: 'Analytics...', hrs: '1.00h', locked: true }], more: 176 },
  { day: 'Wed', date: '22', total: '473.6h', billable: '381.6h', entries: [{ proj: 'Analytics...', hrs: '1.00h', locked: true }, { proj: 'Analytics...', hrs: '2.00h', locked: true }, { proj: 'Analytics...', hrs: '1.00h', locked: true }], more: 176 },
  { day: 'Thu', date: '23', total: '473.6h', billable: '381.6h', entries: [{ proj: 'Analytics...', hrs: '1.00h', locked: true }, { proj: 'Analytics...', hrs: '2.00h', locked: true }, { proj: 'Analytics...', hrs: '1.00h', locked: true }], more: 176, today: true },
  { day: 'Fri', date: '24', total: '473.6h', billable: '381.6h', entries: [{ proj: 'Analytics...', hrs: '1.00h', locked: true }, { proj: 'Analytics...', hrs: '2.00h', locked: true }, { proj: 'Analytics...', hrs: '1.00h', locked: true }], more: 176 },
  { day: 'Sat', date: '25', total: '473.6h', billable: '381.6h', entries: [{ proj: 'Analytics...', hrs: '1.00h', locked: true }, { proj: 'Analytics...', hrs: '2.00h', locked: true }, { proj: 'Analytics...', hrs: '1.00h', locked: true }], more: 176 },
  { day: 'Sun', date: '26', total: '473.6h', billable: '381.6h', entries: [{ proj: 'Analytics...', hrs: '1.00h', locked: true }, { proj: 'Analytics...', hrs: '2.00h', locked: true }, { proj: 'Analytics...', hrs: '1.00h', locked: true }], more: 176 },
];

export function WeeklyView() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24">
      
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Weekly View</h1>
        </div>
      </Reveal>

      {/* Navigator */}
      <Reveal delay={0.1}>
        <div className="bg-[#1c1b1b] p-4 sm:p-6 rounded-2xl border border-white/5 shadow-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
             <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-[#131313] hover:bg-white/5 text-white/60 transition-colors">
               <ChevronLeft className="w-5 h-5"/>
             </button>
             <h2 className="text-xl font-bold text-white tracking-tight">4/20/2026 - 4/26/2026</h2>
             <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-[#131313] hover:bg-white/5 text-white/60 transition-colors">
               <ChevronRight className="w-5 h-5"/>
             </button>
          </div>
          <button className="bg-[#131313] border border-white/10 hover:bg-white/5 text-white px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all shadow-sm">
             Current Week
          </button>
        </div>
      </Reveal>

      {/* KPI Stats */}
      <Reveal delay={0.2}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
           <div className="bg-[#1c1b1b] p-5 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-center">
             <div className="flex items-center gap-2 text-[#9fa9ff] mb-2 font-bold text-[13px]">
               <Clock className="w-4 h-4" /> Total Hours
             </div>
             <span className="text-3xl font-black text-[#9fa9ff] tracking-tight">3315.55h</span>
           </div>
           <div className="bg-[#1c1b1b] p-5 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-center">
             <div className="flex items-center gap-2 text-[#bbf600] mb-2 font-bold text-[13px]">
               <CalendarIcon className="w-4 h-4" /> Billable Hours
             </div>
             <span className="text-3xl font-black text-[#bbf600] tracking-tight">2671.55h</span>
           </div>
           <div className="bg-[#1c1b1b] p-5 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-center">
             <div className="flex items-center gap-2 text-[#d4bbff] mb-2 font-bold text-[13px]">
               Entries
             </div>
             <span className="text-3xl font-black text-[#d4bbff] tracking-tight">1253</span>
           </div>
           <div className="bg-[#1c1b1b] p-5 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-center">
             <div className="flex items-center gap-2 text-[#eb7146] mb-2 font-bold text-[13px]">
               Avg/Day
             </div>
             <span className="text-3xl font-black text-[#eb7146] tracking-tight">473.7h</span>
           </div>
        </div>
      </Reveal>

      {/* Week Grid */}
      <Reveal delay={0.3}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl p-6 overflow-x-auto">
           <div className="flex min-w-[900px] gap-4">
              {weekData.map((d, i) => (
                <div key={i} className={`flex-1 flex flex-col border ${d.today ? 'border-[#8ea2ff] shadow-[0_0_20px_rgba(142,162,255,0.1)]' : 'border-white/5'} rounded-2xl bg-[#131313] overflow-hidden`}>
                   <div className="p-4 text-center border-b border-white/5">
                      <div className="text-[13px] text-white/50 font-bold uppercase tracking-wider">{d.day}</div>
                      <div className="text-2xl font-black text-white mt-1 mb-2 flex justify-center items-center gap-2">
                        {d.date} 
                        {d.today && <span className="bg-[#8ea2ff]/20 text-[#8ea2ff] text-[9px] uppercase font-bold px-1.5 py-0.5 rounded-md border border-[#8ea2ff]/30">Today</span>}
                      </div>
                      <div className="text-xl font-bold text-[#9fa9ff] tracking-tight">{d.total}</div>
                      <div className="text-[11px] text-[#bbf600] font-medium tracking-wide mt-0.5">{d.billable} billable</div>
                   </div>
                   
                   <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-[400px]">
                      {d.entries.map((entry, j) => (
                        <div key={j} className="bg-[#1c1b1b] p-3 rounded-xl border border-white/5 hover:border-white/20 transition-colors cursor-pointer group">
                           <div className="text-[12px] font-bold text-white mb-1 truncate">{entry.proj}</div>
                           <div className="flex items-center justify-between">
                              <span className="text-[11px] text-[#9fa9ff] font-mono">{entry.hrs}</span>
                              {entry.locked && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ebd356]"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                              )}
                           </div>
                        </div>
                      ))}
                      <div className="text-center py-2 text-[11px] font-semibold text-white/30 cursor-pointer hover:text-white/60 transition-colors">
                         +{d.more} more
                      </div>
                   </div>

                   <div className="p-3 bg-[#1c1b1b] border-t border-white/5">
                      <button className="w-full py-2 flex justify-center items-center gap-2 text-[12px] font-bold text-white/60 hover:text-white hover:bg-white/5 rounded-lg border border-white/10 transition-colors">
                        <Plus className="w-4 h-4"/> Add
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </Reveal>

    </div>
  );
}

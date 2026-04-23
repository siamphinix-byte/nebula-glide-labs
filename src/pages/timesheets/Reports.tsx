import React from 'react';
import { Reveal } from '../../components/GSAPWrapper';
import { BarChart, Calendar as CalendarIcon, RefreshCw } from 'lucide-react';

export function Reports() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full">
      
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Reports</h1>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl p-6 sm:p-8">
           <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3 tracking-tight">
             <BarChart className="w-5 h-5 text-white/50" /> Report Filters
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-white/70">Project</label>
                <div className="relative">
                  <select className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-white focus:outline-none focus:border-[#bbf600] appearance-none cursor-pointer">
                    <option>All Projects</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/40">
                     <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-white/70">Member</label>
                <div className="relative">
                  <select className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-white focus:outline-none focus:border-[#bbf600] appearance-none cursor-pointer">
                    <option>All Members</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/40">
                     <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-white/70">Start Date</label>
                <div className="relative">
                  <input type="text" value="03/24/2026" readOnly className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-white focus:outline-none focus:border-[#bbf600] cursor-pointer" />
                  <CalendarIcon className="w-4 h-4 absolute right-4 top-1/2 -mt-2 text-white/40" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-white/70">End Date</label>
                <div className="relative">
                  <input type="text" value="04/23/2026" readOnly className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-white focus:outline-none focus:border-[#bbf600] cursor-pointer" />
                  <CalendarIcon className="w-4 h-4 absolute right-4 top-1/2 -mt-2 text-white/40" />
                </div>
              </div>
           </div>

           <div className="flex items-center gap-3">
              <button className="bg-[#bbf600] text-[#131313] px-6 py-2.5 rounded-xl text-[13px] font-bold shadow-[0_0_15px_rgba(187, 246, 0,0.3)] hover:bg-[#bbf600]/90 transition-all">
                 Generate Report
              </button>
              <button className="w-10 h-10 rounded-xl border border-white/10 bg-[#131313] hover:bg-white/5 text-white/60 flex items-center justify-center transition-colors shadow-sm">
                 <RefreshCw className="w-4 h-4" />
              </button>
           </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
         <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl p-16 flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-20 h-20 mb-6 rounded-3xl bg-[#131313] border border-white/5 flex items-center justify-center shadow-inner">
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/20"><rect x="18" y="3" width="4" height="18"/><rect x="10" y="8" width="4" height="13"/><rect x="2" y="13" width="4" height="8"/></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">No timesheet data found for the selected criteria</h3>
            <p className="text-[14px] text-white/40 font-medium">Try adjusting your date range or filters</p>
         </div>
      </Reveal>

    </div>
  );
}

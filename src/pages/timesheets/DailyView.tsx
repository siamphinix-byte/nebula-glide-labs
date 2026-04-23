import React from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { Plus, Search, Filter, Calendar as CalendarIcon, Clock, Edit, Trash2, CheckCircle2 } from 'lucide-react';

const timeEntries = [
  { id: 1, date: '3/8/2026', project: 'Security Audit', task: 'Security Vulnerability Assessment', hours: '1.00h', billable: true },
  { id: 2, date: '2/24/2026', project: 'Analytics System', task: 'Third-party Integration', hours: '2.00h', billable: true },
  { id: 3, date: '2/24/2026', project: 'Analytics System', task: 'Bug Fix Implementation', hours: '1.00h', billable: true },
  { id: 4, date: '2/24/2026', project: 'API Gateway', task: 'Bug Fix Implementation', hours: '1.00h', billable: true },
  { id: 5, date: '2/24/2026', project: 'API Gateway', task: 'Payment Gateway Integration', hours: '3.00h', billable: true },
  { id: 6, date: '2/24/2026', project: 'API Gateway', task: 'Bug Fix Implementation', hours: '1.00h', billable: true },
  { id: 7, date: '2/24/2026', project: 'API Gateway', task: 'Payment Gateway Integration', hours: '3.00h', billable: true },
  { id: 8, date: '3/8/2026', project: 'Customer Portal', task: 'Third-party Integration', hours: '1.00h', billable: true },
  { id: 9, date: '3/8/2026', project: 'Customer Portal', task: 'Security Vulnerability Assessment', hours: '3.00h', billable: true },
  { id: 10, date: '2/24/2026', project: 'Mobile Banking App', task: 'API Endpoint Development', hours: '1.00h', billable: true },
  { id: 11, date: '2/28/2026', project: 'Data Warehouse', task: 'Security Vulnerability Assessment', hours: '1.00h', billable: true },
  { id: 12, date: '2/28/2026', project: 'Data Warehouse', task: 'Data Migration Script', hours: '1.00h', billable: true },
];

export function DailyView() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24">
      
      {/* Header */}
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Daily View</h1>
          <div className="flex flex-wrap items-center gap-3">
             <button className="bg-[#1c1b1b] border border-white/10 hover:bg-white/5 text-white px-4 py-2 rounded-xl text-[13px] font-bold transition-all shadow-sm">
               Mark Billable
             </button>
             <button className="bg-[#1c1b1b] border border-white/10 hover:bg-white/5 text-white px-4 py-2 rounded-xl text-[13px] font-bold transition-all shadow-sm">
               Mark Non-Billable
             </button>
          </div>
        </div>
      </Reveal>

      {/* Date Navigator */}
      <Reveal delay={0.1}>
        <div className="bg-[#1c1b1b] p-4 sm:p-6 rounded-2xl border border-white/5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
             <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-[#131313] hover:bg-white/5 text-white/60 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
             </button>
             <h2 className="text-xl font-bold text-white flex items-center gap-3">
               Thursday, April 23, 2026 
               <span className="bg-[#bbf600]/20 text-[#bbf600] text-[10px] uppercase font-black px-2 py-0.5 rounded-lg border border-[#bbf600]/30">Today</span>
             </h2>
             <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-[#131313] hover:bg-white/5 text-white/60 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
             </button>
          </div>
          <div className="relative">
             <input type="text" value="04/23/2026" readOnly className="bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-sm font-medium text-white focus:outline-none w-48" />
             <CalendarIcon className="w-4 h-4 absolute right-4 top-1/2 -mt-2 text-white/40" />
          </div>
        </div>
      </Reveal>

      {/* KPI Stats */}
      <Reveal delay={0.2}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
           <div className="bg-[#1c1b1b] p-5 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-center">
             <div className="flex items-center gap-2 text-[#9fa9ff] mb-2 font-bold text-[13px]">
               <Clock className="w-4 h-4" /> Total Hours
             </div>
             <span className="text-3xl font-black text-[#9fa9ff] tracking-tight">15.00h</span>
           </div>
           <div className="bg-[#1c1b1b] p-5 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-center">
             <div className="flex items-center gap-2 text-[#bbf600] mb-2 font-bold text-[13px]">
               <CalendarIcon className="w-4 h-4" /> Billable Hours
             </div>
             <span className="text-3xl font-black text-[#bbf600] tracking-tight">15.00h</span>
           </div>
           <div className="bg-[#1c1b1b] p-5 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-center">
             <div className="flex items-center gap-2 text-[#d4bbff] mb-2 font-bold text-[13px]">
               Entries
             </div>
             <span className="text-3xl font-black text-[#d4bbff] tracking-tight">10</span>
           </div>
           <div className="bg-[#1c1b1b] p-5 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-center">
             <div className="flex items-center gap-2 text-[#eb7146] mb-2 font-bold text-[13px]">
               Utilization
             </div>
             <span className="text-3xl font-black text-[#eb7146] tracking-tight">188%</span>
             <span className="text-white/30 text-[10px] font-medium mt-1">Based on 8h day</span>
           </div>
        </div>
      </Reveal>

      {/* Main List Container */}
      <Reveal delay={0.3}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl overflow-hidden mt-6">
          
          <div className="p-6 flex flex-col md:flex-row items-center justify-between border-b border-white/5 gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
              Time Entries
            </h2>
            <button className="bg-[#bbf600] text-[#131313] px-5 py-2.5 rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-[#bbf600]/90 transition-all shadow-[0_0_20px_rgba(187,246,0,0.2)]">
               <Plus className="w-4 h-4" /> Add Entry
            </button>
          </div>

          <div className="p-4 bg-[#131313] flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
               <div className="relative w-full sm:w-auto">
                 <Search className="w-4 h-4 absolute left-4 top-1/2 -mt-2 text-white/40" />
                 <input type="text" placeholder="Search entries..." className="pl-11 pr-4 py-2.5 w-full sm:w-[260px] bg-[#1c1b1b] border border-white/10 rounded-xl text-[14px] focus:outline-none focus:border-[#bbf600] text-white transition-colors" />
               </div>
               <button className="bg-[#bbf600] text-[#131313] px-5 py-2.5 w-full sm:w-auto justify-center rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-[#bbf600]/90 transition-all">
                 <Search className="w-4 h-4"/> Search
               </button>
               <button className="bg-[#1c1b1b] border border-white/10 text-white/80 px-5 py-2.5 w-full sm:w-auto justify-center rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
                 <Filter className="w-4 h-4"/> Filters
               </button>
            </div>
            <div className="flex items-center gap-3 justify-end w-full lg:w-auto">
               <span className="text-xs text-white/40 font-medium">Per Page:</span>
               <div className="relative">
                 <select className="bg-[#1c1b1b] border border-white/10 rounded-xl pl-4 pr-8 py-2 text-sm font-medium text-white focus:outline-none focus:border-[#bbf600] appearance-none cursor-pointer">
                   <option>10</option>
                 </select>
                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/50">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                 </div>
               </div>
            </div>
          </div>

          {/* Time Summary Embed */}
          <div className="p-6 pb-0">
             <div className="bg-[#131313]/50 border border-white/5 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="text-lg font-bold text-white flex items-center gap-3">
                     <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                     Time Summary
                   </h3>
                   <span className="bg-[#bbf600]/10 text-[#bbf600] border border-[#bbf600]/20 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1">
                     <CheckCircle2 className="w-3 h-3" /> All Hours Billable
                   </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                   <div className="bg-[#1c1b1b] rounded-xl p-4 flex items-center justify-between border border-white/5 relative overflow-hidden">
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[#9fa9ff]/10 flex items-center justify-center text-[#9fa9ff]">
                          <Clock className="w-5 h-5"/>
                        </div>
                        <div>
                          <p className="text-[11px] text-white/50 font-bold uppercase tracking-wider mb-0.5">Total Hours</p>
                          <p className="text-xl font-black text-white">15.0h</p>
                        </div>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-[#bbf600] opacity-30 relative z-10" />
                   </div>
                   <div className="bg-[#1c1b1b] rounded-xl p-4 flex items-center justify-between border border-white/5 relative overflow-hidden">
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[#bbf600]/10 flex items-center justify-center text-[#bbf600]">
                          <CalendarIcon className="w-5 h-5"/>
                        </div>
                        <div>
                          <p className="text-[11px] text-white/50 font-bold uppercase tracking-wider mb-0.5">Billable Hours</p>
                          <p className="text-xl font-black text-[#bbf600]">15.0h</p>
                        </div>
                      </div>
                   </div>
                </div>

                <div className="bg-[#1c1b1b] rounded-xl p-5 border border-white/5">
                   <div className="flex justify-between items-center mb-3">
                     <span className="text-[13px] font-bold text-white">Billable Rate</span>
                     <span className="text-[16px] font-black text-white">100%</span>
                   </div>
                   <div className="w-full h-3 bg-[#131313] rounded-full overflow-hidden border border-white/5 relative">
                      <div className="h-full bg-[#bbf600] rounded-full shadow-[0_0_10px_#bbf600]" style={{ width: '100%' }}></div>
                   </div>
                   <div className="text-center mt-2">
                     <span className="text-[10px] font-bold text-white/40 tracking-wider">15h / 15h</span>
                   </div>
                </div>
             </div>
          </div>

          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 text-[10px] uppercase font-bold text-white/40 tracking-widest">
                    <th className="p-4 font-bold w-12 pt-0">
                      <div className="w-4 h-4 rounded border-2 border-white/20 cursor-pointer"></div>
                    </th>
                    <th className="p-4 font-bold pt-0 min-w[120px]">Date</th>
                    <th className="p-4 font-bold pt-0 min-w-[200px]">Project</th>
                    <th className="p-4 font-bold pt-0 min-w-[300px]">Task</th>
                    <th className="p-4 font-bold pt-0 w-24">Hours</th>
                    <th className="p-4 font-bold pt-0 w-32">Billable</th>
                    <th className="p-4 font-bold pt-0 w-24">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-[13px]">
                  {timeEntries.map((row, i) => (
                    <React.Fragment key={row.id}>
                      <Reveal delay={0.1 * Math.min(i, 5)}>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                          <td className="p-4">
                            <div className="w-4 h-4 rounded border-2 border-[#bbf600]/50 cursor-pointer flex items-center justify-center">
                               {/* Check if implemented */}
                            </div>
                          </td>
                          <td className="p-4 text-white/60 font-mono">{row.date}</td>
                          <td className="p-4 font-semibold text-white tracking-tight">{row.project}</td>
                          <td className="p-4 text-white/50">{row.task}</td>
                          <td className="p-4 font-mono text-[#9fa9ff] font-medium">{row.hours}</td>
                          <td className="p-4">
                             {row.billable && (
                               <span className="bg-[#bbf600]/10 text-[#bbf600] border border-[#bbf600]/20 px-2.5 py-1 rounded-md text-[10px] font-bold flex items-center w-fit gap-1.5 uppercase tracking-wider">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#bbf600]"></span>
                                  Billable
                               </span>
                             )}
                          </td>
                          <td className="p-4">
                            <div className="flex gap-4">
                              <button className="text-[#ebd356] hover:text-[#ebd356]/80 transition-colors opacity-70 hover:opacity-100" title="Edit"><Edit className="w-4 h-4" /></button>
                              <button className="text-[#ffb4ab] hover:text-[#ffb4ab]/80 transition-colors opacity-70 hover:opacity-100" title="Delete"><Trash2 className="w-4 h-4" /></button>
                            </div>
                          </td>
                        </tr>
                      </Reveal>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 border-t border-white/5 bg-[#131313] text-[13px] text-white/50">
            <span className="font-medium">Showing 1 to 10 of 179 entries</span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium">Previous</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#bbf600] text-[#131313] font-bold shadow-[0_0_10px_rgba(187, 246, 0,0.3)]">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium text-white">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium text-white line-clamp-none hidden sm:flex">3</button>
              <span className="w-8 h-8 flex items-center justify-center font-medium">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium text-white">18</button>
              <button className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-white font-medium">Next</button>
            </div>
          </div>

        </div>
      </Reveal>
    </div>
  );
}

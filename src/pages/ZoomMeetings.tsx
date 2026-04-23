import React from 'react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import { Search, Filter, Copy, Play, Clock } from 'lucide-react';

const zoomMeetings = [
  { id: 1, topic: 'Weekly Team Standup', desc: 'Weekly team standup meeting to discuss progre...', status: 'Scheduled', date: '2026-10-16', time: '14:29', duration: '60 minutes', project: 'Analytics System' },
  { id: 2, topic: 'Project Planning Session', desc: 'Planning session for upcoming project milestones', status: 'Scheduled', date: '2026-09-16', time: '14:29', duration: '60 minutes', project: 'Inventory System' },
  { id: 3, topic: 'Client Review Meeting', desc: 'Review meeting with client for project deliverabl...', status: 'Scheduled', date: '2026-08-16', time: '14:28', duration: '180 minutes', project: 'AI Chatbot' },
  { id: 4, topic: 'Monthly Business Review', desc: 'Monthly business review with stakeholders', status: 'Scheduled', date: '2026-05-20', time: '14:26', duration: '125 minutes', project: 'Payment' },
  { id: 5, topic: 'Training Session', desc: 'Training session on new tools and technologies', status: 'Scheduled', date: '2026-04-11', time: '14:25', duration: '60 minutes', project: 'Admin Dashboard' },
  { id: 6, topic: 'Product Demo', desc: 'Product demonstration for client feedback', status: 'Scheduled', date: '2026-03-20', time: '14:25', duration: '180 minutes', project: 'Performance Suite' },
  { id: 7, topic: 'Quarterly Planning', desc: 'Quarterly planning meeting for next quarter goals', status: 'Scheduled', date: '2026-01-18', time: '14:24', duration: '120 minutes', project: 'Analytics System' },
];

export function ZoomMeetings() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full">
      
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Zoom Meetings</h1>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
         <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-white/5 pb-6 gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#5b8cff] tracking-tight mb-2">7</span>
               <span className="text-[13px] font-bold text-white/50">Total Meetings</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#bbf600] tracking-tight mb-2">7</span>
               <span className="text-[13px] font-bold text-white/50">Scheduled</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#f1734f] tracking-tight mb-2">4</span>
               <span className="text-[13px] font-bold text-white/50">Upcoming</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-white/80 tracking-tight mb-2">0</span>
               <span className="text-[13px] font-bold text-white/50">Completed</span>
            </div>
         </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl overflow-hidden mt-6">
           <div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
                 <div className="relative w-full sm:w-auto">
                   <Search className="w-4 h-4 absolute left-4 top-1/2 -mt-2 text-white/40" />
                   <input type="text" placeholder="Search meetings..." className="pl-11 pr-4 py-2 w-full sm:w-[280px] bg-[#131313] border border-white/10 rounded-xl text-[14px] focus:outline-none focus:border-[#bbf600] text-white transition-colors" />
                 </div>
                 <button className="bg-[#bbf600] text-[#131313] px-5 py-2 w-full sm:w-auto justify-center rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-[#bbf600]/90 transition-all shadow-[0_0_15px_rgba(187, 246, 0,0.2)]">
                   <Search className="w-4 h-4"/> Search
                 </button>
                 <button className="bg-[#131313] border border-white/10 text-white/80 px-4 py-2 w-full sm:w-auto justify-center rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
                   <Filter className="w-4 h-4"/> Filters
                 </button>
              </div>
              <div className="flex items-center gap-2 justify-end">
                 <span className="text-xs text-white/40 font-medium">Per Page:</span>
                 <div className="relative">
                   <select className="bg-[#131313] border border-white/10 rounded-xl pl-4 pr-8 py-1.5 text-sm font-medium text-white focus:outline-none focus:border-[#bbf600] appearance-none cursor-pointer">
                     <option>10</option>
                   </select>
                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/50">
                      <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                   </div>
                 </div>
              </div>
           </div>

           <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="border-b border-white/5 text-[11px] uppercase font-bold text-white/40 tracking-wider">
                   <th className="px-6 py-4 w-12 text-center">#</th>
                   <th className="px-6 py-4 min-w-[300px]">Meeting</th>
                   <th className="px-6 py-4 w-32">Status</th>
                   <th className="px-6 py-4 w-32">Date & Time</th>
                   <th className="px-6 py-4 w-32">Duration</th>
                   <th className="px-6 py-4 w-40">Project</th>
                   <th className="px-6 py-4 text-right">Meeting URLs</th>
                 </tr>
               </thead>
               <tbody className="text-[13px]">
                 {zoomMeetings.map((row, i) => (
                   <React.Fragment key={row.id}>
                     <Reveal delay={0.05 * i}>
                       <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                         <td className="px-6 py-4 text-center font-bold text-white/80">{row.id}</td>
                         <td className="px-6 py-4">
                            <div className="font-bold text-white mb-1 tracking-tight">{row.topic}</div>
                            <div className="text-[12px] text-white/40 leading-snug truncate max-w-[350px]">{row.desc}</div>
                         </td>
                         <td className="px-6 py-4">
                            <span className="bg-[#5b8cff]/10 text-[#5b8cff] border border-[#5b8cff]/20 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                              {row.status}
                            </span>
                         </td>
                         <td className="px-6 py-4">
                            <div className="font-mono text-white/80">{row.date}</div>
                            <div className="text-[11px] font-mono text-white/40 flex items-center gap-1 mt-0.5"><Clock className="w-3 h-3"/> {row.time}</div>
                         </td>
                         <td className="px-6 py-4 text-white/60">{row.duration}</td>
                         <td className="px-6 py-4 text-white/80">{row.project}</td>
                         <td className="px-6 py-4">
                            <div className="flex justify-end gap-2">
                               <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#5b8cff]/30 text-[#5b8cff] bg-[#5b8cff]/5 hover:bg-[#5b8cff]/10 transition-colors text-[11px] font-bold">
                                 <Copy className="w-3.5 h-3.5" /> Join URL
                               </button>
                               <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#bbf600]/30 text-[#bbf600] bg-[#bbf600]/5 hover:bg-[#bbf600]/10 transition-colors text-[11px] font-bold">
                                 <Play className="w-3.5 h-3.5" /> Start URL
                               </button>
                            </div>
                         </td>
                       </tr>
                     </Reveal>
                   </React.Fragment>
                 ))}
               </tbody>
             </table>
           </div>

           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#131313] border-t border-white/5 text-[13px] text-white/50">
             <span className="font-medium">Showing 1 to 7 of 7 meetings</span>
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

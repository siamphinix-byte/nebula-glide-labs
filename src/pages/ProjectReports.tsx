import React from 'react';
import { Reveal } from '../components/GSAPWrapper';
import { Search, Filter, Eye, Edit } from 'lucide-react';

const projects = [
  { id: 1, name: 'Security Audit', desc: 'Project description for Security Audit', start: '11/12/2025', due: '1/21/2026', members: ['E','D','L'], progress: 58, status: 'Planning', color: '#5b8cff' },
  { id: 2, name: 'Performance Suite', desc: 'Project description for Performance Suite', start: '11/15/2025', due: '2/24/2026', members: ['S','D','G'], progress: 100, status: 'Completed', color: '#d4bbff' },
  { id: 3, name: 'Admin Dashboard', desc: 'Project description for Admin Dashboard', start: '9/21/2025', due: '1/14/2026', members: ['S','D','L'], progress: 90, status: 'On Hold', color: '#ebd356' },
  { id: 4, name: 'Payment Integration', desc: 'Project description for Payment Integration', start: '10/27/2025', due: '1/29/2026', members: ['S','R','D'], progress: 65, status: 'Planning', color: '#5b8cff' },
  { id: 5, name: 'AI Chatbot', desc: 'Project description for AI Chatbot', start: '11/3/2025', due: '2/21/2026', members: ['M','K','D'], progress: 73, status: 'On Hold', color: '#ebd356' },
  { id: 6, name: 'Inventory System', desc: 'Project description for Inventory System', start: '10/27/2025', due: '1/10/2026', members: ['E','D','J'], progress: 69, status: 'On Hold', color: '#ebd356' },
  { id: 7, name: 'CRM Enhancement', desc: 'Project description for CRM Enhancement', start: '9/26/2025', due: '3/7/2026', members: ['S','E','J'], progress: 66, status: 'Planning', color: '#5b8cff' },
  { id: 8, name: 'Data Warehouse', desc: 'Project description for Data Warehouse', start: '11/1/2025', due: '1/21/2026', members: ['S','E','D'], progress: 55, status: 'Planning', color: '#5b8cff' },
  { id: 9, name: 'Mobile Banking App', desc: 'Project description for Mobile Banking App', start: '9/25/2025', due: '1/23/2026', members: ['S','J','R'], progress: 100, status: 'Completed', color: '#d4bbff' },
  { id: 10, name: 'Customer Portal', desc: 'Project description for Customer Portal', start: '10/9/2025', due: '1/14/2026', members: ['M','E','J'], progress: 72, status: 'Active', color: '#bbf600' },
];

export function ProjectReports() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full">
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Project Reports</h1>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
         <div className="grid grid-cols-2 lg:grid-cols-5 border-b border-white/5 pb-6 gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/5 bg-[#1c1b1b] rounded-2xl border shadow-2xl overflow-hidden p-2">
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#5b8cff] tracking-tight mb-2">12</span>
               <span className="text-[13px] font-bold text-white/50">Total Projects</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#bbf600] tracking-tight mb-2">1</span>
               <span className="text-[13px] font-bold text-white/50">Active</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#5b8cff] tracking-tight mb-2">2</span>
               <span className="text-[13px] font-bold text-white/50">Completed</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#ebd356] tracking-tight mb-2">3</span>
               <span className="text-[13px] font-bold text-white/50">On Hold</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#f1734f] tracking-tight mb-2">6</span>
               <span className="text-[13px] font-bold text-white/50">High Priority</span>
            </div>
         </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl overflow-hidden mt-6">
           <div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
                 <div className="relative w-full sm:w-auto">
                   <Search className="w-4 h-4 absolute left-4 top-1/2 -mt-2 text-white/40" />
                   <input type="text" placeholder="Search projects..." className="pl-11 pr-4 py-2 w-full sm:w-[280px] bg-[#131313] border border-white/10 rounded-xl text-[14px] focus:outline-none focus:border-[#bbf600] text-white transition-colors" />
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
                   <th className="px-6 py-4 min-w-[250px]">Project</th>
                   <th className="px-6 py-4">Start Date</th>
                   <th className="px-6 py-4">Due Date</th>
                   <th className="px-6 py-4">Members</th>
                   <th className="px-6 py-4">Progress</th>
                   <th className="px-6 py-4">Status</th>
                   <th className="px-6 py-4 text-right">Actions</th>
                 </tr>
               </thead>
               <tbody className="text-[13px]">
                 {projects.map((row, i) => (
                   <React.Fragment key={row.id}>
                     <Reveal delay={0.05 * i}>
                       <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                         <td className="px-6 py-4 text-center font-bold text-white/80">{row.id}</td>
                         <td className="px-6 py-4">
                            <div className="font-bold text-white tracking-tight">{row.name}</div>
                            <div className="text-[11px] text-white/40 mt-1">{row.desc}</div>
                         </td>
                         <td className="px-6 py-4 font-mono text-white/60">{row.start}</td>
                         <td className="px-6 py-4 font-mono text-white/60">{row.due}</td>
                         <td className="px-6 py-4">
                            <div className="flex -space-x-2">
                               {row.members.map((m, idx) => (
                                 <div key={idx} className={`w-6 h-6 rounded-full border border-[#131313] flex items-center justify-center font-bold text-[9px] text-[#131313] z-${10-idx}`} style={{ backgroundColor: ['#5b8cff', '#bbf600', '#ebd356'][idx % 3] }}>
                                   {m}
                                 </div>
                               ))}
                               <div className="w-6 h-6 rounded-full border border-white/10 bg-[#131313] flex items-center justify-center font-medium text-[9px] text-white/50 z-0">
                                 +{row.id + 2}
                               </div>
                            </div>
                         </td>
                         <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                               <div className="w-full h-1.5 bg-[#131313] rounded-full overflow-hidden border border-white/5 w-16">
                                 <div className="h-full bg-[#5b8cff] rounded-full" style={{ width: `${row.progress}%` }}></div>
                               </div>
                               <span className="text-[11px] font-bold text-white/60">{row.progress}%</span>
                            </div>
                         </td>
                         <td className="px-6 py-4">
                            <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded border" style={{ color: row.color, backgroundColor: `${row.color}15`, borderColor: `${row.color}25` }}>
                              {row.status}
                            </span>
                         </td>
                         <td className="px-6 py-4">
                            <div className="flex justify-end gap-2">
                               <button className="w-7 h-7 rounded bg-[#5b8cff]/10 text-[#5b8cff] border border-[#5b8cff]/20 flex items-center justify-center hover:bg-[#5b8cff]/20 transition-colors">
                                 <Eye className="w-3.5 h-3.5" />
                               </button>
                               <button className="w-7 h-7 rounded bg-[#ebd356]/10 text-[#ebd356] border border-[#ebd356]/20 flex items-center justify-center hover:bg-[#ebd356]/20 transition-colors">
                                 <Edit className="w-3.5 h-3.5" />
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
             <span className="font-medium">Showing 1 to 10 of 12 projects</span>
             <div className="flex gap-2">
               <button className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium">Previous</button>
               <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#bbf600] text-[#131313] font-bold shadow-md">1</button>
               <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 border border-white/10 text-white/60 font-bold transition-colors">2</button>
               <button className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium">Next</button>
             </div>
           </div>

        </div>
      </Reveal>
    </div>
  );
}

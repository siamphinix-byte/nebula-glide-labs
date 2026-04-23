import React from 'react';
import { Reveal } from '../components/GSAPWrapper';
import { Search, Filter, Eye, Edit, Trash2, Calendar, Target, MoreVertical, Plus } from 'lucide-react';

const todos = [
  { id: 1, title: 'Setup Role-Based Access...', by: 'WorkDo', desc: 'Implement user roles (Admin, Manager, Member) with permission-based access to...', priority: 'Medium', due: '4/17/2026', status: 'Overdue', color: 'bg-[#ebd356]', members: ['S','J','M','K','L'] },
  { id: 2, title: 'Implement Task Filtering &...', by: 'WorkDo', desc: 'Develop advanced filtering options for tasks including status, priority, due date, and...', priority: 'Medium', due: '7/25/2026', status: 'Pending', color: 'bg-[#ffb4ab]', members: ['S','J','D','K','G','I'] },
  { id: 3, title: 'Design Project Dashboar...', by: 'WorkDo', desc: 'Create a responsive dashboard layout displaying project progress, recent...', priority: 'Medium', due: '3/1/2026', status: 'Overdue', color: 'bg-[#ebd356]', members: ['S','J','D','K','G','I'] },
  { id: 4, title: 'API Integration for Payme...', by: 'WorkDo', desc: 'Integrate Stripe and PayPal payment gateways into the system. Tasks include A...', priority: 'Medium', due: '4/17/2026', status: 'Overdue', color: 'bg-[#ebd356]', members: ['S','J','M','K','L'] },
  { id: 5, title: 'Website Homepage...', by: 'WorkDo', desc: 'Redesign the homepage layout to improve user experience and increase conversion...', priority: 'High', due: '3/27/2026', status: 'Overdue', color: 'bg-[#ffb4ab]', members: ['S','J','D','K','G','I'] },
];

export function ToDos() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full">
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">ToDos</h1>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
         <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-white/5 pb-6 gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#5b8cff] tracking-tight mb-2">5</span>
               <span className="text-[13px] font-bold text-white/50">Total ToDos</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#d4bbff] tracking-tight mb-2">1</span>
               <span className="text-[13px] font-bold text-white/50">Pending</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#ebd356] tracking-tight mb-2">0</span>
               <span className="text-[13px] font-bold text-white/50">In Progress</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#bbf600] tracking-tight mb-2">0</span>
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
                   <input type="text" placeholder="Search todos..." className="pl-11 pr-4 py-2 w-full sm:w-[280px] bg-[#131313] border border-white/10 rounded-xl text-[14px] focus:outline-none focus:border-[#bbf600] text-white transition-colors" />
                 </div>
                 <button className="bg-[#bbf600] text-[#131313] px-5 py-2 w-full sm:w-auto justify-center rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-[#bbf600]/90 transition-all shadow-[0_0_15px_rgba(187, 246, 0,0.2)]">
                   <Search className="w-4 h-4"/> Search
                 </button>
                 <button className="bg-[#131313] border border-white/10 text-white/80 px-4 py-2 w-full sm:w-auto justify-center rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
                   <Filter className="w-4 h-4"/> Filters
                 </button>
              </div>
              <div className="flex items-center gap-4 justify-end">
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

           <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                 {todos.map((todo, i) => (
                   <div key={i} className="bg-[#131313] rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-colors flex flex-col h-full shadow-md">
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-white text-[15px] leading-tight max-w-[80%]">{todo.title}</h3>
                        <span className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-wider float-right shrink-0 border ${todo.status === 'Overdue' ? 'bg-[#f1734f]/10 text-[#f1734f] border-[#f1734f]/20' : 'bg-[#d4bbff]/10 text-[#d4bbff] border-[#d4bbff]/20'}`}>
                          {todo.status === 'Overdue' ? '⚠ ' : ''}{todo.status}
                        </span>
                     </div>
                     <div className="text-[12px] text-white/40 mb-4 font-medium">By {todo.by}</div>
                     
                     <p className="text-[13px] text-white/60 leading-relaxed mb-6 flex-grow">{todo.desc}</p>
                     
                     <div className="flex items-center justify-between text-[12px] font-bold border-b border-white/5 pb-4 mb-4">
                        <div className="flex gap-1.5"><span className="text-white/40">Priority:</span> <span className={todo.priority === 'High' ? 'text-[#f1734f]' : 'text-[#ebd356]'}>{todo.priority}</span></div>
                        <div className="flex gap-1.5"><span className="text-white/40">Due:</span> <span className="text-white/80 font-mono">{todo.due}</span></div>
                     </div>
                     
                     <div className="flex justify-between items-center mt-auto">
                        <div className="flex -space-x-2">
                           {todo.members.map((m, idx) => (
                             <div key={idx} className={`w-7 h-7 rounded-full border-2 border-[#131313] flex items-center justify-center font-bold text-[10px] text-[#131313] z-${10-idx}`} style={{ backgroundColor: ['#5b8cff', '#bbf600', '#ebd356', '#ffb4ab', '#d4bbff', '#f1734f'][idx % 6] }}>
                               {m}
                             </div>
                           ))}
                        </div>
                        <div className="flex gap-2">
                           <button className="w-8 h-8 rounded-full border border-white/10 hover:border-[#5b8cff] hover:text-[#5b8cff] text-[#5b8cff] flex items-center justify-center transition-colors bg-[#5b8cff]/5 shadow-sm">
                             <Eye className="w-3.5 h-3.5" />
                           </button>
                           <button className="w-8 h-8 rounded-full border border-white/10 hover:border-[#ebd356] hover:text-[#ebd356] text-[#ebd356] flex items-center justify-center transition-colors bg-[#ebd356]/5 shadow-sm">
                             <Edit className="w-3.5 h-3.5" />
                           </button>
                        </div>
                     </div>
                   </div>
                 ))}
                 
                 {/* Empty template to match the layout slightly */}
                 <div className="bg-transparent rounded-2xl border border-dashed border-white/10 p-6 flex flex-col items-center justify-center h-full min-h-[260px] opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3">
                       <Plus className="w-5 h-5 text-white/50" />
                    </div>
                    <span className="font-bold text-white/50 text-[14px]">Add New ToDo</span>
                 </div>
              </div>
           </div>

           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#131313] border-t border-white/5 text-[13px] text-white/50">
             <span className="font-medium">Showing 1 to 5 of 5 todos</span>
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

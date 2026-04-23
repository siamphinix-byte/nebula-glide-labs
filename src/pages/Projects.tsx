// Let's modify the Projects.tsx file for exact match.
import React from 'react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import { Download, Upload, Plus, Search, Filter, List as ListIcon, Grid, Eye, Pencil, Trash2 } from 'lucide-react';

const projects = [
  { id: 1, title: 'Security Audit', stage: 'Planning', privacy: 'Private', desc: 'Project description for Security Audit', progress: 58, priority: 'urgent', date: '1/21/2026', clients: 4, members: ['E','D','L'] },
  { id: 2, title: 'Performance Suite', stage: 'Completed', privacy: 'Private', desc: 'Project description for Performance Suite', progress: 100, priority: 'medium', date: '2/24/2026', clients: 3, members: ['S','D'] },
  { id: 3, title: 'Admin Dashboard', stage: 'On Hold', privacy: 'Public', desc: 'Project description for Admin Dashboard', progress: 90, priority: 'urgent', date: '1/14/2026', clients: 1, members: ['S','D','L'] },
  { id: 4, title: 'Payment Integration', stage: 'Planning', privacy: 'Private', desc: 'Project description for Payment Integration', progress: 65, priority: 'high', date: '1/29/2026', clients: 1, members: ['S','R','D'] },
  { id: 5, title: 'AI Chatbot', stage: 'On Hold', privacy: 'Private', desc: 'Project description for AI Chatbot', progress: 73, priority: 'low', date: '2/21/2026', clients: 2, members: ['M','K','D'] },
  { id: 6, title: 'Inventory System', stage: 'On Hold', privacy: 'Private', desc: 'Project description for Inventory System', progress: 69, priority: 'low', date: '1/10/2026', clients: 2, members: ['E','D','J'] },
  { id: 7, title: 'CRM Enhancement', stage: 'Planning', privacy: 'Public', desc: 'Project description for CRM Enhancement', progress: 66, priority: 'urgent', date: '3/7/2026', clients: 2, members: ['S','E','J'] },
  { id: 8, title: 'Data Warehouse', stage: 'Planning', privacy: 'Private', desc: 'Project description for Data Warehouse', progress: 55, priority: 'high', date: '1/21/2026', clients: 4, members: ['S','E','D'] },
  { id: 9, title: 'E-Commerce Platform', stage: 'Completed', privacy: 'Public', desc: 'Project description for E-Commerce Platform', progress: 100, priority: 'high', date: '2/27/2026', clients: 3, members: ['A','M','C'] },
  { id: 10, title: 'Mobile Banking App', stage: 'Completed', privacy: 'Public', desc: 'Project description for Mobile Banking App', progress: 100, priority: 'high', date: '1/23/2026', clients: 3, members: ['S','J','R'] },
  { id: 11, title: 'Customer Portal', stage: 'Active', privacy: 'Private', desc: 'Project description for Customer Portal', progress: 72, priority: 'medium', date: '1/14/2026', clients: 3, members: ['M','E','J'] },
  { id: 12, title: 'API Gateway', stage: 'On Hold', privacy: 'Private', desc: 'Project description for API Gateway', progress: 77, priority: 'high', date: '3/12/2026', clients: 3, members: ['S','J','J'] },
];

const priorityColors = {
  'urgent': 'text-[#ffb4ab] bg-[#ffb4ab]/10 border border-[#ffb4ab]/20',
  'high': 'text-[#d4bbff] bg-[#d4bbff]/10 border border-[#d4bbff]/20',
  'medium': 'text-[#ebd356] bg-[#ebd356]/10 border border-[#ebd356]/20',
  'low': 'text-[#bbf600] bg-[#bbf600]/10 border border-[#bbf600]/20'
};

const stageColors = {
  'Planning': 'text-[#9fa9ff] bg-[#9fa9ff]/10 border border-[#9fa9ff]/20',
  'Completed': 'text-[#d4bbff] bg-[#d4bbff]/10 border border-[#d4bbff]/20',
  'On Hold': 'text-[#ebd356] bg-[#ebd356]/10 border border-[#ebd356]/20',
  'Active': 'text-[#bbf600] bg-[#bbf600]/10 border border-[#bbf600]/20'
};

export function Projects() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24">
      
      {/* Header */}
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Projects</h1>
          <div className="flex flex-wrap items-center gap-3">
             <button className="bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
               <Download className="w-4 h-4" /> Export
             </button>
             <button className="bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
               <Upload className="w-4 h-4" /> Import
             </button>
             <button className="bg-[#bbf600] hover:bg-[#bbf600]/90 text-[#131313] px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(187,246,0,0.2)]">
               <Plus className="w-4 h-4" /> Add Project
             </button>
          </div>
        </div>
      </Reveal>

      {/* KPI Stats */}
      <Reveal delay={0.1}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 p-4 grid grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-white/5 shadow-xl gap-y-4 lg:gap-y-0">
           <div className="p-2 sm:p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-[#9fa9ff]">13</span>
             <span className="text-[12px] text-white/50 mt-1 font-medium">Total Projects</span>
           </div>
           <div className="p-2 sm:p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-[#bbf600]">1</span>
             <span className="text-[12px] text-white/50 mt-1 font-medium">Active</span>
           </div>
           <div className="p-2 sm:p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-[#9fa9ff]">3</span>
             <span className="text-[12px] text-white/50 mt-1 font-medium">Completed</span>
           </div>
           <div className="p-2 sm:p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-[#ebd356]">4</span>
             <span className="text-[12px] text-white/50 mt-1 font-medium">On Hold</span>
           </div>
           <div className="p-2 sm:p-4 flex flex-col items-center justify-center text-center col-span-2 lg:col-span-1">
             <span className="text-3xl font-bold text-[#ffb4ab]">8</span>
             <span className="text-[12px] text-white/50 mt-1 font-medium">High Priority</span>
           </div>
        </div>
      </Reveal>

      {/* Toolbar */}
      <Reveal delay={0.2}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#1c1b1b] p-4 rounded-2xl border border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
             <div className="relative w-full sm:w-auto">
               <Search className="w-4 h-4 absolute left-4 top-1/2 -mt-2 text-white/40" />
               <input type="text" placeholder="Search projects..." className="pl-11 pr-4 py-2 w-full sm:w-[260px] bg-[#131313] border border-white/10 rounded-xl text-[14px] focus:outline-none focus:border-[#bbf600] text-white transition-colors" />
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
                    <option>24</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/50">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </Reveal>

      {/* Grid */}
      <Reveal delay={0.3}>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div key={p.id} className="bg-[#1c1b1b] border border-white/5 p-6 rounded-[1.5rem] flex flex-col hover:border-white/20 transition-all duration-300 group shadow-lg">
              
              <div className="flex justify-between items-start mb-4 gap-2">
                 <h3 className="font-bold text-white text-[16px] truncate max-w-[120px] tracking-tight">{p.title}</h3>
                 <div className="flex gap-1.5 shrink-0">
                   <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${stageColors[p.stage as keyof typeof stageColors]}`}>{p.stage}</span>
                   <span className="text-[10px] px-2.5 py-0.5 rounded-full border border-white/20 text-white/70 font-bold uppercase tracking-wider">{p.privacy}</span>
                 </div>
              </div>
              
              <p className="text-[13px] text-white/40 mb-6 leading-relaxed flex-1">{p.desc}</p>
              
              <div className="mt-auto space-y-5">
                
                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-[13px] text-white/60 mb-2 font-medium">
                    <span>Progress</span>
                    <span>{p.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                     <div className="h-full bg-[#bbf600] rounded-full" style={{ width: `${p.progress}%` }}></div>
                  </div>
                </div>

                {/* Priority & Date */}
                <div className="flex justify-between items-center text-[12px]">
                  <span className={`font-bold px-2 py-0.5 rounded uppercase tracking-wide ${priorityColors[p.priority as keyof typeof priorityColors]}`}>
                    {p.priority}
                  </span>
                  <span className="text-white/40">{p.date}</span>
                </div>

                {/* Clients & Avatars row */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                   <div className="flex items-center -space-x-2">
                     {p.members.map((m, i) => (
                       <div key={i} className="w-7 h-7 rounded-full border-2 border-[#1c1b1b] bg-[#3a3939] flex items-center justify-center text-[10px] font-bold text-white z-10" style={{ zIndex: 10 - i }}>
                         {m}
                       </div>
                     ))}
                     <div className="w-7 h-7 rounded-full border-2 border-[#1c1b1b] bg-white/10 flex items-center justify-center text-[10px] font-bold text-white/60 z-0">
                       +4
                     </div>
                   </div>
                   <span className="text-[12px] text-white/40 font-medium">{p.clients} clients</span>
                </div>

                {/* Footer action icons - centered exactly */}
                <div className="flex justify-center flex-row gap-5 pt-2">
                   <button className="text-[#9fa9ff] hover:text-white transition-colors" title="View"><Eye className="w-4 h-4" /></button>
                   <button className="text-[#d4bbff] hover:text-white transition-colors" title="Edit"><Pencil className="w-4 h-4" /></button>
                   <button className="text-[#ffb4ab] hover:text-white transition-colors" title="Delete"><Trash2 className="w-4 h-4" /></button>
                </div>

              </div>
            </div>
          ))}
        </StaggerReveal>
      </Reveal>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 bg-[#1c1b1b] p-4 rounded-2xl border border-white/5 text-[13px] text-white/50 shadow-lg">
        <span className="font-medium">Showing 1 to 12 of 13 projects</span>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-[#131313] border border-white/10 hover:bg-white/5 transition-colors font-medium">Previous</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#bbf600] text-[#131313] font-bold">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#131313] border border-white/10 hover:bg-white/5 transition-colors font-medium">2</button>
          <button className="px-3 py-1.5 rounded-lg bg-[#131313] border border-white/10 hover:bg-white/5 transition-colors text-white font-medium">Next</button>
        </div>
      </div>
      
    </div>
  );
}

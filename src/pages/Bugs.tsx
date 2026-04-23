import React from 'react';
import { Reveal } from '../components/GSAPWrapper';
import { Search, Filter, Plus, GripVertical, AlertTriangle, Bug as BugIcon, Pencil, Trash2, Eye } from 'lucide-react';

const columns = [
  { 
    id: 'new', 
    title: 'New', 
    count: 14, 
    color: '#ffb4ab',
    bugs: [
      { id: 1, title: 'File upload fails for large files', desc: 'File uploads over 10MB fa...', priority: 'Critical', severity: 'Major', project: 'Inventory System', assignee: 'D', comments: 2 },
      { id: 2, title: 'Search functionality returns', desc: 'Search ignores filters for...', priority: 'Critical', severity: 'Major', project: 'Inventory System', assignee: 'D', comments: 0 }
    ] 
  },
  { 
    id: 'inprogress', 
    title: 'In Progress', 
    count: 11, 
    color: '#bbf600',
    bugs: [
      { id: 3, title: 'Payment gateway integration error', desc: 'Payment processing fails...', priority: 'Medium', severity: 'Minor', project: 'API Gateway', assignee: 'J', comments: 3 },
      { id: 4, title: 'Email notifications', desc: 'Emails sent twice on creati...', priority: 'Medium', severity: 'Minor', project: 'API Gateway', assignee: 'J', comments: 1 }
    ] 
  },
  { 
    id: 'testing', 
    title: 'Testing', 
    count: 14, 
    color: '#d4bbff',
    bugs: [
      { id: 5, title: 'Database connection timeout', desc: 'Database queries blocke...', priority: 'High', severity: 'Blocker', project: 'AI Chatbot', assignee: 'D', comments: 2 },
      { id: 6, title: 'Login form validation not working', desc: 'Forms skip regex validate...', priority: 'High', severity: 'Blocker', project: 'AI Chatbot', assignee: 'D', comments: 0 }
    ] 
  },
  { 
    id: 'resolved', 
    title: 'Resolved', 
    count: 13, 
    color: '#9fa9ff',
    bugs: [
      { id: 7, title: 'Mobile responsive layout broken', desc: 'Mobile layout breaks on x-a...', priority: 'Low', severity: 'Blocker', project: 'AI Chatbot', assignee: 'A', comments: 2 }
    ] 
  },
  { 
    id: 'closed', 
    title: 'Closed', 
    count: 9, 
    color: '#ffffff',
    bugs: [
      { id: 8, title: 'Mobile responsive layout broken', desc: 'Mobile layout breaks on x-a...', priority: 'Low', severity: 'Blocker', project: 'API Gateway', assignee: 'J', comments: 0 },
      { id: 9, title: 'Payment gateway', desc: 'Gateway timeout handle fix...', priority: 'Low', severity: 'Blocker', project: 'API Gateway', assignee: 'J', comments: 0 }
    ] 
  }
];

const priorityColors = {
  'Critical': 'text-[#ffb4ab] bg-[#ffb4ab]/10 border-[#ffb4ab]/20',
  'High': 'text-[#ffb4ab] bg-[#ffb4ab]/10 border-[#ffb4ab]/20',
  'Medium': 'text-[#bbf600] bg-[#bbf600]/10 border-[#bbf600]/20',
  'Low': 'text-[#9fa9ff] bg-[#9fa9ff]/10 border-[#9fa9ff]/20'
};

const severityColors = {
  'Blocker': 'text-[#ffb4ab] bg-[#ffb4ab]/10 border-[#ffb4ab]/20',
  'Major': 'text-[#d4bbff] bg-[#d4bbff]/10 border-[#d4bbff]/20',
  'Minor': 'text-[#bbf600] bg-[#bbf600]/10 border-[#bbf600]/20',
};

export function Bugs() {
  return (
    <div className="max-w-full h-full flex flex-col space-y-6 pb-6">
      
      {/* Header */}
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Bugs</h1>
          <button className="bg-[#bbf600] hover:bg-[#bbf600]/90 text-[#131313] px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(187,246,0,0.2)]">
            <Plus className="w-4 h-4" /> Report Bug
          </button>
        </div>
      </Reveal>

      {/* KPI Stats */}
      <Reveal delay={0.1}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 p-2 grid grid-cols-2 md:grid-cols-5 divide-x divide-white/5 shadow-xl">
           <div className="p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-[#ffb4ab]">61</span>
             <span className="text-[11px] text-white/50 mt-1 uppercase tracking-widest font-bold">Total Bugs</span>
           </div>
           <div className="p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-[#d4bbff]">14</span>
             <span className="text-[11px] text-white/50 mt-1 uppercase tracking-widest font-bold">New</span>
           </div>
           <div className="p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-white">11</span>
             <span className="text-[11px] text-white/50 mt-1 uppercase tracking-widest font-bold">In Progress</span>
           </div>
           <div className="p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-[#bbf600]">14</span>
             <span className="text-[11px] text-white/50 mt-1 uppercase tracking-widest font-bold">Testing</span>
           </div>
           <div className="p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-[#ffb4ab]">22</span>
             <span className="text-[11px] text-white/50 mt-1 uppercase tracking-widest font-bold">Critical</span>
           </div>
        </div>
      </Reveal>

      {/* Toolbar */}
      <Reveal delay={0.2}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#1c1b1b] p-4 rounded-2xl border border-white/5">
          <div className="flex flex-wrap items-center gap-3">
             <div className="relative">
               <Search className="w-4 h-4 absolute left-3 top-1/2 -mt-2 text-white/40" />
               <input type="text" placeholder="Search bugs..." className="pl-9 pr-4 py-2 w-[220px] bg-[#131313] border border-white/10 rounded-xl text-[13px] focus:outline-none focus:border-[#bbf600] text-white transition-colors" />
             </div>
             <button className="bg-[#bbf600] text-[#131313] px-4 py-2 rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-[#bbf600]/90 transition-all">
               <Search className="w-4 h-4"/> Search
             </button>
             <button className="bg-[#131313] border border-white/10 text-white/80 px-4 py-2 rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
               <Filter className="w-4 h-4"/> Filters
             </button>
          </div>
        </div>
      </Reveal>

      {/* Kanban Board Container */}
      <Reveal delay={0.3}>
        <div className="flex gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full cursor-grab active:cursor-grabbing min-h-[500px]">
          {columns.map((col) => (
            <div key={col.id} className="min-w-[320px] w-[320px] shrink-0 snap-start bg-[#1c1b1b]/50 border border-white/5 rounded-2xl flex flex-col pt-1 overflow-hidden" draggable="true">
              <div className="h-1 w-full bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${col.color}40, transparent)` }}></div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-bold text-white text-[15px]">{col.title}</h3>
                  <span className="text-[11px] font-bold bg-[#131313] border border-white/5 px-2.5 py-1 rounded-lg text-white/50">{col.count}</span>
                </div>
                
                <div className="space-y-4 flex-1">
                  {col.bugs.map((bug) => (
                    <div key={bug.id} className="group bg-[#131313] border border-white/5 hover:border-white/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)] p-4 rounded-xl flex flex-col transition-all cursor-grab active:cursor-grabbing" draggable="true">
                      
                      {/* Card Header & Actions */}
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex gap-2 items-start max-w-[70%]">
                          <GripVertical className="w-3 h-3 mt-1 text-white/20 shrink-0 hidden group-hover:block" />
                          <h4 className="font-bold text-white text-[13px] leading-snug">{bug.title}</h4>
                        </div>
                        <div className="flex gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-[#d4bbff] hover:bg-[#d4bbff]/10 p-1 rounded transition-colors"><Pencil className="w-3.5 h-3.5" /></button>
                          <button className="text-[#ffb4ab] hover:bg-[#ffb4ab]/10 p-1 rounded transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                        </div>
                      </div>
                      
                      <p className="text-[10px] text-white/40 mb-3 ml-0 group-hover:ml-5 transition-all">{bug.desc}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase border ${priorityColors[bug.priority as keyof typeof priorityColors]}`}>
                           {bug.priority}
                        </span>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase border ${severityColors[bug.severity as keyof typeof severityColors]}`}>
                           {bug.severity}
                        </span>
                      </div>

                      {/* Project Link */}
                      <div className="flex items-center gap-2 mb-3 px-2 py-1 bg-white/5 w-max rounded-lg border border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#9fa9ff]"></div>
                        <span className="text-[10px] font-medium text-white/60">{bug.project}</span>
                      </div>

                      {/* Card Footer */}
                      <div className="flex items-center justify-between pt-3 mt-auto border-t border-white/5">
                        <div className="flex items-center gap-2 text-white/50">
                           <div className="w-6 h-6 rounded-full border border-[#131313] bg-[#bbf600]/20 flex items-center justify-center text-[9px] font-bold text-[#bbf600]">
                             {bug.assignee}
                           </div>
                           <span className="text-[11px] font-medium">Daniel Miller</span> {/* Placeholder Name mapping */}
                        </div>
                        
                        {bug.comments > 0 && (
                          <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-lg border border-white/10 text-white/40">
                             <MessageSquareIcon className="w-3 h-3" />
                             <span className="text-[10px] font-bold">{bug.comments}</span>
                          </div>
                        )}
                      </div>
                      
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      
    </div>
  );
}

// Temporary internal component to avoid missing import
function MessageSquareIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

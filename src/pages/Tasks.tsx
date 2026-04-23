import React from 'react';
import { Reveal } from '../components/GSAPWrapper';
import { Search, Filter, Plus, GripVertical, CheckCircle, Clock, AlertTriangle, Bug, List as ListIcon, Eye, Trash2 } from 'lucide-react';

const columns = [
  { 
    id: 'todo', 
    title: 'To Do', 
    count: 12, 
    color: '#ffb4ab',
    tasks: [
      { id: 1, title: 'ui issue fix', priority: 'High', progress: 0, project: 'Security Audit', date: 'No due date', assignee: 'S' },
      { id: 2, title: 'task1', priority: 'Medium', progress: 0, project: 'Analytics System', date: 'No due date', assignee: 'S' }
    ] 
  },
  { 
    id: 'inprogress', 
    title: 'In Progress', 
    count: 4, 
    color: '#bbf600',
    tasks: [
      { id: 3, title: 'Code Review Process', priority: 'High', progress: 41, project: 'Customer Portal', date: '4/28/2026', assignee: 'J' },
      { id: 4, title: 'Feature Enhancement', priority: 'Critical', progress: 60, project: 'Mobile App', date: '5/10/2026', assignee: 'D' }
    ] 
  },
  { 
    id: 'review', 
    title: 'Review', 
    count: 14, 
    color: '#d4bbff',
    tasks: [
      { id: 5, title: 'bug fix', priority: 'Medium', progress: 0, project: 'Security Audit', date: '2/27/2026', assignee: 'S', overdue: true },
      { id: 6, title: 'Code Review Process', priority: 'Critical', progress: 82, project: 'API Gateway', date: '9/7/2026', assignee: 'J' }
    ] 
  },
  { 
    id: 'blocked', 
    title: 'Blocked', 
    count: 2, 
    color: '#9fa9ff',
    tasks: [
      { id: 7, title: 'Database Migration', priority: 'Critical', progress: 12, project: 'Data Warehouse', date: '3/15/2026', assignee: 'E', overdue: true }
    ] 
  },
  { 
    id: 'done', 
    title: 'Done', 
    count: 26, 
    color: '#ffffff',
    tasks: [
      { id: 8, title: 'Landing Page Setup', priority: 'Low', progress: 100, project: 'Marketing Site', date: '1/5/2026', assignee: 'M' },
      { id: 9, title: 'Auth Implementation', priority: 'High', progress: 100, project: 'Customer Portal', date: '2/10/2026', assignee: 'L' }
    ] 
  }
];

const priorityColors = {
  'Critical': 'text-[#ffb4ab] bg-[#ffb4ab]/10 border-[#ffb4ab]/20',
  'High': 'text-[#d4bbff] bg-[#d4bbff]/10 border-[#d4bbff]/20',
  'Medium': 'text-[#bbf600] bg-[#bbf600]/10 border-[#bbf600]/20',
  'Low': 'text-white/60 bg-white/5 border-white/10'
};

export function Tasks() {
  return (
    <div className="max-w-full h-full flex flex-col space-y-6 pb-6">
      
      {/* Header */}
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Tasks</h1>
          <button className="bg-[#bbf600] hover:bg-[#bbf600]/90 text-[#131313] px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(187,246,0,0.2)]">
            <Plus className="w-4 h-4" /> Create Task
          </button>
        </div>
      </Reveal>

      {/* KPI Stats */}
      <Reveal delay={0.1}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 p-2 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 shadow-xl">
           <div className="p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-white">58</span>
             <span className="text-[11px] text-white/50 mt-1 uppercase tracking-widest font-bold">Total Tasks</span>
           </div>
           <div className="p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-[#bbf600]">51</span>
             <span className="text-[11px] text-white/50 mt-1 uppercase tracking-widest font-bold">Assigned</span>
           </div>
           <div className="p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-[#ffb4ab]">17</span>
             <span className="text-[11px] text-white/50 mt-1 uppercase tracking-widest font-bold">Overdue</span>
           </div>
           <div className="p-4 flex flex-col items-center justify-center text-center">
             <span className="text-3xl font-bold text-[#d4bbff]">31</span>
             <span className="text-[11px] text-white/50 mt-1 uppercase tracking-widest font-bold">High Priority</span>
           </div>
        </div>
      </Reveal>

      {/* Toolbar */}
      <Reveal delay={0.2}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#1c1b1b] p-4 rounded-2xl border border-white/5">
          <div className="flex flex-wrap items-center gap-3">
             <div className="relative">
               <Search className="w-4 h-4 absolute left-3 top-1/2 -mt-2 text-white/40" />
               <input type="text" placeholder="Search tasks..." className="pl-9 pr-4 py-2 w-[220px] bg-[#131313] border border-white/10 rounded-xl text-[13px] focus:outline-none focus:border-[#bbf600] text-white transition-colors" />
             </div>
             <button className="bg-[#bbf600] text-[#131313] px-4 py-2 rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-[#bbf600]/90 transition-all">
               <Search className="w-4 h-4"/> Search
             </button>
             <button className="bg-[#131313] border border-white/10 text-white/80 px-4 py-2 rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
               <Filter className="w-4 h-4"/> Filters
             </button>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex bg-[#131313] border border-white/10 rounded-xl p-1">
               <button className="p-1.5 w-8 h-8 flex justify-center items-center rounded-lg text-white/40 hover:text-white transition-colors"><ListIcon className="w-4 h-4" /></button>
               <button className="p-1.5 w-8 h-8 flex justify-center items-center rounded-lg bg-[#1c1b1b] text-[#bbf600] shadow-sm"><GripVertical className="w-4 h-4" /></button>
             </div>
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
                  {col.tasks.map((task) => (
                    <div key={task.id} className="group bg-[#131313] border border-white/5 hover:border-white/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)] p-4 rounded-xl flex flex-col transition-all cursor-grab active:cursor-grabbing" draggable="true">
                      
                      {/* Card Header */}
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-white text-[13px] leading-snug truncate pr-2">{task.title}</h4>
                        <div className="flex gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-[#bbf600] hover:bg-[#bbf600]/10 p-1 rounded transition-colors"><Eye className="w-3.5 h-3.5" /></button>
                          <button className="text-[#ffb4ab] hover:bg-[#ffb4ab]/10 p-1 rounded transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                        </div>
                      </div>

                      {/* Tags & Desc */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                           <AlertTriangle className="w-2.5 h-2.5 inline mr-1 -mt-0.5" />
                           {task.priority}
                        </span>
                      </div>

                      {/* Progress */}
                      <div className="mb-4">
                        <div className="flex justify-between text-[10px] font-bold text-white/50 mb-1.5">
                          <span>Progress</span>
                          <span className={task.progress > 0 ? "text-[#bbf600]" : ""}>{task.progress}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-[#bbf600] rounded-full" style={{ width: `${task.progress}%` }}></div>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="flex items-center justify-between pt-3 mt-auto border-t border-white/5">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] text-white/40 truncate max-w-[120px]">{task.project}</span>
                          <span className={`text-[10px] font-mono ${task.overdue ? 'text-[#ffb4ab] bg-[#ffb4ab]/10 px-1.5 py-0.5 rounded inline-flex items-center gap-1 w-max' : 'text-white/30'}`}>
                            {task.overdue && <Bug className="w-3 h-3" />}
                            {task.date}
                          </span>
                        </div>
                        <div className="w-7 h-7 rounded-full border-2 border-[#131313] bg-[#3a3939] flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                          {task.assignee}
                        </div>
                      </div>
                      
                    </div>
                  ))}
                  <button className="w-full py-2.5 border border-dashed border-white/10 hover:border-white/30 hover:bg-white/5 rounded-xl text-white/40 hover:text-white transition-all text-xs font-bold flex justify-center items-center gap-2">
                    <Plus className="w-3.5 h-3.5" /> Add Task
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      
    </div>
  );
}

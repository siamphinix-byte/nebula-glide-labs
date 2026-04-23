import React from 'react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import { Plus, GripVertical, Settings, Bug as BugIcon, Pencil, Trash2 } from 'lucide-react';

const statuses = [
  { id: 1, order: 1, name: 'New', color: '#ffb4ab', isDefault: true, count: 178 },
  { id: 2, order: 2, name: 'In Progress', color: '#bbf600', isDefault: false, count: 157 },
  { id: 3, order: 3, name: 'Testing', color: '#d4bbff', isDefault: false, count: 180 },
  { id: 4, order: 4, name: 'Resolved', color: '#9fa9ff', isDefault: false, count: 184 },
  { id: 5, order: 5, name: 'Closed', color: '#ffffff', isDefault: false, count: 129 },
];

export function BugStatuses() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-6 pb-24">
      
      {/* Header */}
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Bug Status</h1>
          <button className="bg-[#bbf600] hover:bg-[#bbf600]/90 text-[#131313] px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(187,246,0,0.2)]">
            <Plus className="w-4 h-4" /> Add Status
          </button>
        </div>
      </Reveal>

      {/* KPI Stats */}
      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           {/* Stat 1 */}
           <div className="bg-[#1c1b1b] border border-white/5 p-6 rounded-2xl flex items-center justify-between group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#9fa9ff]/10 rounded-full blur-[30px] -mr-10 -mt-10" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#9fa9ff]/10 flex items-center justify-center text-[#9fa9ff] border border-[#9fa9ff]/20">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/50 mb-1">Total Statuses</h4>
                  <span className="text-3xl font-bold text-white">5</span>
                </div>
              </div>
           </div>

           {/* Stat 2 */}
           <div className="bg-[#1c1b1b] border border-white/5 p-6 rounded-2xl flex items-center justify-between group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#bbf600]/10 rounded-full blur-[30px] -mr-10 -mt-10" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#bbf600]/10 flex items-center justify-center text-[#bbf600] border border-[#bbf600]/20">
                  <BugIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/50 mb-1">Total Bugs</h4>
                  <span className="text-3xl font-bold text-white">828</span>
                </div>
              </div>
           </div>

           {/* Stat 3 */}
           <div className="bg-[#1c1b1b] border border-white/5 p-6 rounded-2xl flex items-center justify-between group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4bbff]/10 rounded-full blur-[30px] -mr-10 -mt-10" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#d4bbff]/10 flex items-center justify-center text-[#d4bbff] border border-[#d4bbff]/20">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/50 mb-1">Default Status</h4>
                  <span className="text-2xl font-bold text-white">New</span>
                </div>
              </div>
           </div>

           {/* Stat 4 */}
           <div className="bg-[#1c1b1b] border border-white/5 p-6 rounded-2xl flex items-center justify-between group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffb4ab]/10 rounded-full blur-[30px] -mr-10 -mt-10" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#ffb4ab]/10 flex items-center justify-center text-[#ffb4ab] border border-[#ffb4ab]/20">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/50 mb-1">Avg Bugs/Status</h4>
                  <span className="text-3xl font-bold text-white">166</span>
                </div>
              </div>
           </div>

        </div>
      </Reveal>

      {/* List Layout */}
      <Reveal delay={0.2}>
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-4 pl-2">
            <h2 className="text-lg font-bold text-white">Bug Workflow Status</h2>
            <span className="text-[10px] font-bold uppercase tracking-widest bg-[#1c1b1b] border border-white/10 px-2 py-1 rounded-md text-white/40">Drag to reorder</span>
          </div>

          <StaggerReveal className="space-y-3">
            {statuses.map((status) => (
              <div key={status.id} className="group bg-[#1c1b1b] border border-white/5 hover:border-white/20 p-4 rounded-2xl flex items-center justify-between transition-all duration-300 cursor-grab active:cursor-grabbing hover:shadow-[0_5px_25px_rgba(0,0,0,0.5)]" draggable="true">
                 <div className="flex items-center gap-6 flex-1">
                    <button className="text-white/20 hover:text-white/80 cursor-grab active:cursor-grabbing transition-colors hidden sm:block">
                      <GripVertical className="w-5 h-5" />
                    </button>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/40 w-16">
                      Order: {status.order}
                    </span>
                    <div className="flex items-center gap-3 min-w-[150px]">
                      <div className="w-3 h-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]" style={{ backgroundColor: status.color }}></div>
                      <span className="font-bold text-white text-[15px]">{status.name}</span>
                    </div>
                    {status.isDefault && (
                      <span className="text-[10px] bg-white/10 text-white/80 border border-white/20 px-2 py-0.5 rounded-full font-bold uppercase">
                        Default
                      </span>
                    )}
                 </div>

                 <div className="flex items-center gap-8 pr-2">
                    <div className="text-center">
                      <span className="block text-lg font-bold text-white leading-none">{status.count}</span>
                      <span className="text-[10px] text-white/40 font-medium">bugs</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-[#bbf600] bg-[#bbf600]/10 hover:bg-[#bbf600]/20 p-2 rounded-xl transition-colors"><Pencil className="w-4 h-4" /></button>
                      <button className="text-[#ffb4ab] bg-[#ffb4ab]/10 hover:bg-[#ffb4ab]/20 p-2 rounded-xl transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                 </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </Reveal>
      
    </div>
  );
}

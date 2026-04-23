import React from 'react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import { Search, Filter, Plus, User, Users, Eye, Edit, Trash2 } from 'lucide-react';

const notes = [
  { id: 1, title: 'Learning & Improvement', by: 'Sarah Johnson', date: '1/1/2026', content: 'Topics to revise this week: Laravel middleware vs guard...', type: 'Personal', color: '#5b8cff' },
  { id: 2, title: 'Shared Credentials & Access Info', by: 'WorkDo', date: '1/1/2026', content: 'Content: \nStaging Server: Access via...', type: 'Shared', color: '#f1734f' },
  { id: 3, title: 'Common RTL Issues & Fixes', by: 'WorkDo', date: '1/1/2026', content: 'This note documents common RTL-related issues...', type: 'Shared', color: '#bbf600' },
  { id: 4, title: 'Team Deployment Checklist', by: 'WorkDo', date: '1/1/2026', content: 'Before deploying to production, make sure the...', type: 'Shared', color: '#d4bbff' }
];

export function Notes() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full">
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-[26px] font-bold tracking-tight text-white">Notes</h1>
          <button className="bg-[#bbf600] text-[#131313] px-5 py-2.5 rounded-xl text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-[#bbf600]/90 transition-all shadow-[0_0_15px_rgba(187, 246, 0,0.3)]">
            <Plus className="w-4 h-4"/> Create Note
          </button>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
         <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-white/5 pb-6 gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/5 bg-[#1c1b1b] rounded-2xl border shadow-2xl p-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5b8cff] via-[#bbf600] to-[#d4bbff] opacity-50"></div>
            <div className="flex flex-col justify-center items-center text-center p-6">
               <span className="text-4xl font-black text-[#5b8cff] tracking-tight mb-2">4</span>
               <span className="text-[13px] font-bold text-white/50 tracking-wide uppercase">Total Notes</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-6">
               <span className="text-4xl font-black text-white tracking-tight mb-2">1</span>
               <span className="text-[13px] font-bold text-white/50 tracking-wide uppercase">Personal</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-6">
               <span className="text-4xl font-black text-white tracking-tight mb-2">3</span>
               <span className="text-[13px] font-bold text-white/50 tracking-wide uppercase">Shared</span>
            </div>
         </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl mt-6">
           {/* Top controls */}
           <div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
                 <div className="relative w-full sm:w-auto">
                   <Search className="w-4 h-4 absolute left-4 top-1/2 -mt-2 text-white/40" />
                   <input type="text" placeholder="Search notes..." className="pl-11 pr-4 py-2 w-full sm:w-[280px] bg-[#131313] border border-white/10 rounded-xl text-[14px] focus:outline-none focus:border-[#bbf600] text-white transition-colors" />
                 </div>
                 <button className="bg-[#bbf600] text-[#131313] px-5 py-2 w-full sm:w-auto justify-center rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-[#bbf600]/90 transition-all shadow-[0_0_15px_rgba(187, 246, 0,0.2)]">
                   <Search className="w-4 h-4"/> Search
                 </button>
                 <button className="bg-[#131313] border border-white/10 text-white/80 px-4 py-2 w-full sm:w-auto justify-center rounded-xl text-[13px] font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
                   <Filter className="w-4 h-4"/> Filters
                 </button>
              </div>
              <div className="flex items-center gap-4 justify-end w-full lg:w-auto">
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

           {/* Notes section */}
           <div className="p-6 pt-8">
              <div className="flex items-center gap-3 mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                 <h2 className="text-xl font-bold text-white tracking-tight">All Notes</h2>
                 <span className="bg-white/10 text-white px-2.5 py-0.5 rounded-full text-[12px] font-bold block">{notes.length}</span>
              </div>
              
              <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {notes.map((note) => (
                   <div key={note.id} className="bg-[#131313] rounded-2xl border border-white/5 p-6 flex flex-col hover:border-white/20 transition-all shadow-md group">
                     <div className="flex justify-between items-start mb-6">
                        <div className="flex gap-3">
                           <div className="w-3 h-3 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: note.color, boxShadow: `0 0 10px ${note.color}` }}></div>
                           <h3 className="font-bold text-white text-[16px] leading-tight pr-2">{note.title}</h3>
                        </div>
                        {note.type === 'Personal' ? (
                          <User className="w-5 h-5 text-white/30 shrink-0" />
                        ) : (
                          <Users className="w-5 h-5 text-[#5b8cff] shrink-0" />
                        )}
                     </div>
                     
                     <div className="text-[11px] font-medium text-white/40 mb-4 pb-4 border-b border-white/5">
                        By <span className="text-white/80">{note.by}</span> <span className="mx-1">•</span> <span className="font-mono">{note.date}</span>
                     </div>
                     
                     <p className="text-[13px] text-white/60 leading-relaxed mb-6 h-12 line-clamp-2">
                        {note.content}
                     </p>
                     
                     <div className="flex justify-between items-center mt-auto">
                        <span className="px-3 py-1 rounded text-[11px] font-bold tracking-wider" style={{ 
                          backgroundColor: note.type === 'Personal' ? 'rgba(255,255,255,0.05)' : 'rgba(187, 246, 0,0.1)', 
                          color: note.type === 'Personal' ? 'rgba(255,255,255,0.6)' : '#bbf600',
                          border: `1px solid ${note.type === 'Personal' ? 'rgba(255,255,255,0.1)' : 'rgba(187, 246, 0,0.2)'}`
                        }}>
                          {note.type}
                        </span>
                        
                        <div className="flex gap-2">
                           <button className="w-8 h-8 rounded-full border border-white/10 text-white/50 hover:border-[#5b8cff] hover:text-[#5b8cff] hover:bg-[#5b8cff]/10 flex items-center justify-center transition-colors">
                             <Eye className="w-4 h-4" />
                           </button>
                           <button className="w-8 h-8 rounded-full border border-white/10 text-white/50 hover:border-[#ebd356] hover:text-[#ebd356] hover:bg-[#ebd356]/10 flex items-center justify-center transition-colors">
                             <Edit className="w-4 h-4" />
                           </button>
                           <button className="w-8 h-8 rounded-full border border-white/10 text-white/50 hover:border-[#f1734f] hover:text-[#f1734f] hover:bg-[#f1734f]/10 flex items-center justify-center transition-colors">
                             <Trash2 className="w-4 h-4" />
                           </button>
                        </div>
                     </div>
                   </div>
                 ))}
              </StaggerReveal>
           </div>

           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#131313] border-t border-white/5 text-[13px] text-white/50 rounded-b-2xl">
             <span className="font-medium">Showing 1 to 4 of 4 notes</span>
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

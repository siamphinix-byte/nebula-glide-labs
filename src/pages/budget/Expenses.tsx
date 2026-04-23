import React from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { Search, Filter, Eye, Edit, Trash2, Calendar, FileText, CheckCircle, XCircle, Plus, Copy } from 'lucide-react';

const expenses = [
  { id: 1, title: 'Application Security Vu...', project: 'Security Audit', amt: '$4,800.00', desc: 'Expense for conducting security vulnerability...', date: '1/25/2026', user: 'WorkDo', tag: 'Development', status: 'Pending', color: '#ebd356' },
  { id: 2, title: 'Payment Gateway Time...', project: 'Payment Integration', amt: '$2,600.00', desc: 'Expense for identifying and fixing timeout issues durin...', date: '1/12/2026', user: 'WorkDo', tag: 'Infrastructure', status: 'Pending', color: '#ebd356' },
  { id: 3, title: 'Payment Gateway Inte...', project: 'Admin Dashboard', amt: '$1,800.00', desc: 'Expense for preparing technical documentation f...', date: '1/2/2026', user: 'WorkDo', tag: 'Documentation', status: 'Pending', color: '#ebd356' },
  { id: 4, title: 'API Performance...', project: 'API Gateway', amt: '$4,200.00', desc: 'Expense for improving API performance, including...', date: '12/5/2025', user: 'WorkDo', tag: 'Development', status: 'Pending', color: '#ebd356' },
  { id: 5, title: 'Code Review...', project: 'Customer Portal', amt: '$1,000.00', desc: 'Expense incurred for team code review meeting,...', date: '1/12/2026', user: 'WorkDo', tag: 'Project Management', status: 'Pending', color: '#ebd356' },
  { id: 6, title: 'Third Party Testi...', project: 'AI Chatbot', amt: '$1,500.00', desc: 'Month Subscribe plan for testing', date: '2/2/2026', user: 'WorkDo', tag: 'Testing & QA', status: 'Pending', color: '#ebd356' },
  { id: 7, title: 'Project Analytics...', project: 'Data Warehouse', amt: '$1,000.00', desc: 'Monthly Subscription for Security and Analytics...', date: '2/5/2026', user: 'WorkDo', tag: 'Development', status: 'Pending', color: '#ebd356' },
  { id: 8, title: 'UI/UX Design Tools', project: 'Analytics System', amt: '$287.00', desc: 'Figma and design collaboration tools', date: '9/18/2025', user: 'David Kim', tag: 'Design & UX', status: 'Approved', color: '#bbf600' },
  { id: 9, title: 'Testing Software', project: 'Analytics System', amt: '$378.00', desc: 'Automated testing and QA tools', date: '9/10/2025', user: 'Matthew Harris', tag: 'Testing & QA', status: 'Approved', color: '#bbf600' },
  { id: 10, title: 'Development IDEs', project: 'Analytics System', amt: '$445.00', desc: 'Annual licenses for development tools and IDEs', date: '10/9/2025', user: 'Lisa Anderson', tag: 'Development', status: 'Rejected', color: '#f1734f' },
  { id: 11, title: 'Performance Tools', project: 'Analytics System', amt: '$546.00', desc: 'Load testing and performance analysis', date: '9/10/2025', user: 'Maria Garcia', tag: 'Testing & QA', status: 'Rejected', color: '#f1734f' },
  { id: 12, title: 'Project Software', project: 'Analytics System', amt: '$192.00', desc: 'Monthly subscription for project management tools', date: '11/8/2025', user: 'Matthew Harris', tag: 'Project Management', status: 'Approved', color: '#bbf600' }
];

export function Expenses() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full">
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Expenses</h1>
          <button className="bg-[#bbf600] text-[#131313] px-5 py-2.5 rounded-xl text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-[#bbf600]/90 transition-all shadow-[0_0_15px_rgba(187, 246, 0,0.3)]">
            <Plus className="w-4 h-4"/> Add Expense
          </button>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
         <div className="grid grid-cols-2 lg:grid-cols-5 border-b border-white/5 pb-6 gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/5 bg-[#1c1b1b] rounded-2xl border shadow-2xl overflow-hidden p-2">
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#5b8cff] tracking-tight mb-2">31</span>
               <span className="text-[13px] font-bold text-white/50">Total Expenses</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#ebd356] tracking-tight mb-2">7</span>
               <span className="text-[13px] font-bold text-white/50">Pending</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#bbf600] tracking-tight mb-2">3</span>
               <span className="text-[13px] font-bold text-white/50">Approved</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#f1734f] tracking-tight mb-2">2</span>
               <span className="text-[13px] font-bold text-white/50">Rejected</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-2xl font-black text-[#d4bbff] tracking-tight mb-2">$18,748.00</span>
               <span className="text-[13px] font-bold text-white/50">Total Amount</span>
            </div>
         </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl overflow-hidden mt-6">
           <div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
                 <div className="relative w-full sm:w-auto">
                   <Search className="w-4 h-4 absolute left-4 top-1/2 -mt-2 text-white/40" />
                   <input type="text" placeholder="Search expenses..." className="pl-11 pr-4 py-2 w-full sm:w-[280px] bg-[#131313] border border-white/10 rounded-xl text-[14px] focus:outline-none focus:border-[#bbf600] text-white transition-colors" />
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

           <div className="p-6">
              <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {expenses.map((e) => (
                   <div key={e.id} className="bg-[#131313] rounded-2xl border border-white/5 p-5 flex flex-col hover:border-white/10 transition-colors shadow-md group">
                     <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-white text-[14px] leading-tight pr-2">{e.title}</h3>
                        <span className="text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-wider shrink-0 border flex items-center gap-1" style={{ color: e.color, backgroundColor: `${e.color}15`, borderColor: `${e.color}25` }}>
                          {e.status === 'Approved' && <CheckCircle className="w-3 h-3" />}
                          {e.status === 'Rejected' && <XCircle className="w-3 h-3" />}
                          {e.status === 'Pending' && <Calendar className="w-3 h-3" />}
                          {e.status}
                        </span>
                     </div>
                     
                     <div className="flex items-center gap-2 mb-3 text-[13px]">
                        <span className="font-bold text-white">{e.amt}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <span className="text-white/40 truncate">{e.project}</span>
                     </div>
                     
                     <p className="text-[12px] text-white/50 leading-relaxed mb-6 h-10 line-clamp-2">{e.desc}</p>
                     
                     <div className="flex justify-between items-center text-[11px] font-bold text-white/50 mb-6 border-b border-white/5 pb-4">
                        <div className="flex items-center gap-1.5 border border-white/10 rounded-lg px-2 py-1 bg-white/5">
                           <Calendar className="w-3.5 h-3.5" />
                           <span className="font-mono">{e.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                           <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: e.color }}></div>
                           <span className="truncate max-w-[80px] text-right">{e.tag}</span>
                        </div>
                     </div>

                     <div className="flex justify-between items-center mt-auto">
                        <div className="flex items-center gap-2">
                           <div className="w-6 h-6 rounded-full bg-[#5b8cff] text-[#131313] flex items-center justify-center font-bold text-[9px]">
                             {e.user.charAt(0)}
                           </div>
                           <span className="text-[12px] font-medium text-white/60">{e.user.split(' ')[0]}</span>
                        </div>
                        <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                           <button className="w-7 h-7 rounded border border-[#5b8cff]/20 text-[#5b8cff] hover:bg-[#5b8cff]/10 flex items-center justify-center transition-colors">
                             <Eye className="w-3.5 h-3.5" />
                           </button>
                           <button className="w-7 h-7 rounded border border-[#ebd356]/20 text-[#ebd356] hover:bg-[#ebd356]/10 flex items-center justify-center transition-colors">
                             <Edit className="w-3.5 h-3.5" />
                           </button>
                           <button className="w-7 h-7 rounded border border-[#bbf600]/20 text-[#bbf600] hover:bg-[#bbf600]/10 flex items-center justify-center transition-colors">
                             <Copy className="w-3.5 h-3.5" />
                           </button>
                           <button className="w-7 h-7 rounded border border-[#f1734f]/20 text-[#f1734f] hover:bg-[#f1734f]/10 flex items-center justify-center transition-colors">
                             <Trash2 className="w-3.5 h-3.5" />
                           </button>
                        </div>
                     </div>
                   </div>
                 ))}
              </StaggerReveal>
           </div>

           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#131313] border-t border-white/5 text-[13px] text-white/50">
             <span className="font-medium">Showing 1 to 12 of 31 expenses</span>
             <div className="flex gap-2">
               <button className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium">Previous</button>
               <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#bbf600] text-[#131313] font-bold shadow-md">1</button>
               <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 border border-white/10 text-white/60 font-bold transition-colors">2</button>
               <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 border border-white/10 text-white/60 font-bold transition-colors">3</button>
               <button className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-medium">Next</button>
             </div>
           </div>

        </div>
      </Reveal>
    </div>
  );
}

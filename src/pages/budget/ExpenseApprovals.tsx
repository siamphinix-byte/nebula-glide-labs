import React from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { Search, Filter, Check, X, AlertCircle } from 'lucide-react';

const approvals = [
  { id: 1, title: 'Application Security Vulnerability Testing', amt: '$4,800.00', project: 'Security Audit', submittedBy: 'WorkDo', date: '1/25/2026', desc: 'Expense for conducting security vulnerability assessment, including code...', tag: 'Development', status: 'Pending Approval', color: '#ebd356' },
  { id: 2, title: 'Payment Gateway Timeout Bug Fix', amt: '$2,600.00', project: 'Payment Integration', submittedBy: 'WorkDo', date: '1/12/2026', desc: 'Expense for identifying and fixing timeout issues during payment processing,...', tag: 'Infrastructure', status: 'Pending Approval', color: '#ebd356' },
  { id: 3, title: 'Payment Gateway Integration Guide Creation', amt: '$1,800.00', project: 'Admin Dashboard', submittedBy: 'WorkDo', date: '1/2/2026', desc: 'Expense for preparing technical documentation for payment gateway...', tag: 'Documentation', status: 'Pending Approval', color: '#ebd356' },
  { id: 4, title: 'API Performance Optimization', amt: '$4,200.00', project: 'API Gateway', submittedBy: 'WorkDo', date: '12/5/2025', desc: 'Expense for improving API performance, including optimization of endpoints,...', tag: 'Development', status: 'Pending Approval', color: '#ebd356' },
  { id: 5, title: 'Code Review Meeting Expense', amt: '$1,000.00', project: 'Customer Portal', submittedBy: 'WorkDo', date: '1/12/2026', desc: 'Expense incurred for team code review meeting, including discussion,...', tag: 'Project Management', status: 'Pending Approval', color: '#ebd356' },
  { id: 6, title: 'Third Party Testing Payment gateways', amt: '$1,500.00', project: 'AI Chatbot', submittedBy: 'WorkDo', date: '2/2/2026', desc: 'Month Subscribe plan for testing', tag: 'Testing & QA', status: 'Pending Approval', color: '#ebd356' },
  { id: 7, title: 'Project Analytics Software', amt: '$1,000.00', project: 'Data Warehouse', submittedBy: 'WorkDo', date: '2/5/2026', desc: 'Monthly Subscription for Security and Analytics software', tag: 'Development', status: 'Pending Approval', color: '#ebd356' },
  { id: 8, title: 'Stock Photos and Assets', amt: '$333.00', project: 'Analytics System', submittedBy: 'Christopher Moore', date: '11/6/2025', desc: 'Premium stock photos and design assets', tag: 'Design & UX', status: 'Pending Approval', color: '#ebd356' },
  { id: 9, title: 'Third-party API Subscription', amt: '$485.00', project: 'Analytics System', submittedBy: 'Alex Thompson', date: '11/7/2025', desc: 'Monthly subscription for external API services', tag: 'Development', status: 'Requires Info', color: '#5b8cff' },
  { id: 10, title: 'Design Software License', amt: '$1,131.00', project: 'Analytics System', submittedBy: 'Christopher Moore', date: '9/8/2025', desc: 'Adobe Creative Suite annual subscription', tag: 'Design & UX', status: 'Requires Info', color: '#5b8cff' },
  { id: 11, title: 'UI/UX Design Tools', amt: '$281.00', project: 'Analytics System', submittedBy: 'Matthew Harris', date: '10/28/2025', desc: 'Figma and design collaboration tools', tag: 'Design & UX', status: 'Requires Info', color: '#5b8cff' },
  { id: 12, title: 'Team Communication Tools', amt: '$81.00', project: 'Analytics System', submittedBy: 'Alex Thompson', date: '9/2/2025', desc: 'Slack premium subscription for team communication', tag: 'Project Management', status: 'Requires Info', color: '#5b8cff' }
];

export function ExpenseApprovals() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full">
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Expense Approvals</h1>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
         <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-white/5 pb-6 gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/5 bg-[#1c1b1b] rounded-2xl border shadow-2xl overflow-hidden p-2">
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#ebd356] tracking-tight mb-2">8</span>
               <span className="text-[13px] font-bold text-white/50">Pending Approval</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#5b8cff] tracking-tight mb-2">4</span>
               <span className="text-[13px] font-bold text-white/50">Requires Info</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-3xl font-black text-[#bbf600] tracking-tight mb-2">0</span>
               <span className="text-[13px] font-bold text-white/50">Approved Today</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-4">
               <span className="text-2xl font-black text-[#d4bbff] tracking-tight mb-2">$17,233.00</span>
               <span className="text-[13px] font-bold text-white/50">Pending Amount</span>
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
                   <button className="p-1.5 w-8 h-8 flex justify-center items-center rounded-lg bg-[#bbf600]/20 text-[#bbf600] shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></button>
                   <button className="p-1.5 w-8 h-8 flex justify-center items-center rounded-lg text-white/40 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></button>
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
              <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {approvals.map((e) => (
                   <div key={e.id} className="bg-[#131313] rounded-2xl border border-white/5 p-6 flex flex-col hover:border-white/10 transition-colors shadow-md group">
                     <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-white text-[15px] leading-tight pr-2 max-w-[75%]">{e.title}</h3>
                        <span className="font-black text-white px-2 rounded tracking-tight text-[16px] shrink-0">
                          {e.amt}
                        </span>
                     </div>
                     
                     <div className="flex flex-wrap items-center mt-2 mb-4 gap-2">
                        <span className="text-[12px] font-medium text-white/60">{e.project}</span>
                        {e.status === 'Pending Approval' ? (
                          <span className="bg-[#ebd356]/10 text-[#ebd356] border border-[#ebd356]/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ml-auto">Pending</span>
                        ) : (
                          <span className="bg-[#5b8cff]/10 text-[#5b8cff] border border-[#5b8cff]/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ml-auto">Requires Info</span>
                        )}
                     </div>

                     <div className="text-[11px] text-white/40 mb-4 font-mono">
                        Submitted by {e.submittedBy} · {e.date}
                     </div>
                     
                     <p className="text-[13px] text-white/50 leading-relaxed mb-6 h-[60px] line-clamp-3">{e.desc}</p>
                     
                     <div className="flex items-center gap-2 mb-6">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/5 border border-white/10 text-white/60">{e.tag}</span>
                     </div>

                     <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#bbf600]/30 text-[#bbf600] bg-[#bbf600]/5 hover:bg-[#bbf600]/10 transition-colors text-[11px] font-bold flex-1 justify-center">
                          <Check className="w-4 h-4" /> Approve
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#f1734f]/30 text-[#f1734f] bg-[#f1734f]/5 hover:bg-[#f1734f]/10 transition-colors text-[11px] font-bold flex-1 justify-center">
                          <X className="w-4 h-4" /> Reject
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#5b8cff]/30 text-[#5b8cff] bg-[#5b8cff]/5 hover:bg-[#5b8cff]/10 transition-colors text-[11px] font-bold">
                          <AlertCircle className="w-4 h-4" />
                        </button>
                     </div>
                   </div>
                 ))}
              </StaggerReveal>
           </div>

           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#131313] border-t border-white/5 text-[13px] text-white/50">
             <span className="font-medium">Showing 1 to 12 of 12 expenses</span>
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

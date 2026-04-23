import React from 'react';
import { Reveal } from '../../components/GSAPWrapper';
import { DollarSign, TrendingUp, CheckCircle, TrendingDown, Eye } from 'lucide-react';

const recentExpenses = [
  { id: 1, title: 'Application Security Vulnerability Testing', project: 'Security Audit', user: 'WorkDo', amt: '$4,800.00', status: 'Pending' },
  { id: 2, title: 'Payment Gateway Timeout Bug Fix', project: 'Payment Integration', user: 'WorkDo', amt: '$2,600.00', status: 'Pending' },
  { id: 3, title: 'Payment Gateway Integration Guide Creation', project: 'Admin Dashboard', user: 'WorkDo', amt: '$1,800.00', status: 'Pending' },
  { id: 4, title: 'API Performance Optimization', project: 'API Gateway', user: 'WorkDo', amt: '$4,200.00', status: 'Pending' },
  { id: 5, title: 'Code Review Meeting Expense', project: 'Customer Portal', user: 'WorkDo', amt: '$1,000.00', status: 'Pending' },
  { id: 6, title: 'Third Party Testing Payment gateways', project: 'AI Chatbot', user: 'WorkDo', amt: '$1,500.00', status: 'Pending' },
];

const topCategories = [
  { id: 1, name: 'Infrastructure', amt: '$2,950.00', total: '$5,098.10', pct: '60%', color: 'bg-[#ebd356]', text: 'I' },
  { id: 2, name: 'Design & UX', amt: '$1,345.00', total: '$7,647.15', pct: '18%', color: 'bg-[#d4bbff]', text: 'D' },
  { id: 3, name: 'Project Management', amt: '$1,112.00', total: '$4,078.48', pct: '28%', color: 'bg-[#ffb4ab]', text: 'P' },
  { id: 4, name: 'Development', amt: '$844.00', total: '$22,941.45', pct: '4%', color: 'bg-[#5b8cff]', text: 'D' },
  { id: 5, name: 'Testing & QA', amt: '$582.00', total: '$6,117.72', pct: '10%', color: 'bg-[#bbf600]', text: 'T' },
];

export function BudgetDashboard() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full">
      
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Budget Dashboard</h1>
        </div>
      </Reveal>

      {/* Stats Cards */}
      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {/* Total Budget */}
           <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl p-6 relative overflow-hidden">
             <div className="flex justify-between items-start mb-2">
                <span className="text-[14px] font-bold text-white/50 tracking-tight">Total Budget</span>
                <div className="w-8 h-8 rounded-full bg-[#5b8cff]/10 flex items-center justify-center text-[#5b8cff]">
                  <DollarSign className="w-4 h-4" />
                </div>
             </div>
             <div className="text-3xl font-black text-[#5b8cff] tracking-tight">$411,813.00</div>
           </div>

           {/* Total Spent */}
           <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl p-6 relative overflow-hidden">
             <div className="flex justify-between items-start mb-2">
                <span className="text-[14px] font-bold text-white/50 tracking-tight">Total Spent</span>
                <div className="w-8 h-8 rounded-full bg-[#bbf600]/10 flex items-center justify-center text-[#bbf600]">
                  <TrendingUp className="w-4 h-4" />
                </div>
             </div>
             <div className="text-3xl font-black text-[#bbf600] tracking-tight">$6,833.00</div>
           </div>

           {/* Remaining Budget */}
           <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl p-6 relative overflow-hidden">
             <div className="flex justify-between items-start mb-2">
                <span className="text-[14px] font-bold text-white/50 tracking-tight">Remaining Budget</span>
                <div className="w-8 h-8 rounded-full bg-[#bbf600]/10 flex items-center justify-center text-[#bbf600]">
                  <CheckCircle className="w-4 h-4" />
                </div>
             </div>
             <div className="text-3xl font-black text-[#bbf600] tracking-tight">$404,980.00</div>
           </div>

           {/* Average Utilization */}
           <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl p-6 relative overflow-hidden">
             <div className="flex justify-between items-start mb-2">
                <span className="text-[14px] font-bold text-white/50 tracking-tight">Average Utilization</span>
                <div className="w-8 h-8 rounded-full bg-[#bbf600]/10 flex items-center justify-center text-[#bbf600]">
                  <TrendingUp className="w-4 h-4" />
                </div>
             </div>
             <div className="text-3xl font-black text-[#bbf600] tracking-tight">1.7%</div>
           </div>

           {/* Active Budgets */}
           <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl p-6 relative overflow-hidden lg:col-span-2">
             <span className="text-[14px] font-bold text-white/50 tracking-tight mb-4 inline-block">Active Budgets</span>
             <div className="flex justify-between items-end">
                <div className="text-5xl font-black text-[#5b8cff] tracking-tight">7</div>
                <span className="bg-[#5b8cff]/10 text-[#5b8cff] text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg border border-[#5b8cff]/20">Active</span>
             </div>
           </div>

           {/* Pending Approvals */}
           <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl p-6 relative overflow-hidden lg:col-span-2">
             <span className="text-[14px] font-bold text-white/50 tracking-tight mb-4 inline-block">Pending Approvals</span>
             <div className="flex justify-between items-end">
                <div className="text-5xl font-black text-[#ebd356] tracking-tight">8</div>
                <span className="bg-[#ebd356]/10 text-[#ebd356] text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg border border-[#ebd356]/20 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg> Pending
                </span>
             </div>
           </div>
        </div>
      </Reveal>

      {/* Bottom Grids */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
         {/* Recent Expenses */}
         <Reveal delay={0.2} className="lg:col-span-2 h-full">
           <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl flex flex-col h-full overflow-hidden">
              <div className="p-6 border-b border-white/5 bg-[#bbf600]/5 flex justify-between items-center">
                 <h2 className="text-lg font-bold text-[#bbf600] flex items-center gap-3">
                   <TrendingUp className="w-5 h-5" /> Recent Expenses
                 </h2>
                 <button className="flex items-center gap-2 text-[#bbf600] hover:text-[#bbf600]/80 bg-[#bbf600]/10 px-3 py-1.5 rounded-lg border border-[#bbf600]/20 text-[12px] font-bold transition-colors">
                   <Eye className="w-3.5 h-3.5" /> View All
                 </button>
              </div>
              <div className="p-6 space-y-4">
                 {recentExpenses.map((exp, i) => (
                   <div key={i} className="flex justify-between items-center p-4 bg-[#131313] border border-white/5 rounded-xl hover:border-white/10 transition-colors">
                      <div className="flex items-start gap-4">
                         <div className="w-10 h-10 rounded-full bg-[#5b8cff]/10 flex items-center justify-center text-[#5b8cff] shrink-0 mt-0.5">
                           <TrendingUp className="w-4 h-4" />
                         </div>
                         <div>
                            <h4 className="font-bold text-white text-[14px] leading-tight mb-1">{exp.title}</h4>
                            <div className="text-[12px] text-white/40">{exp.project} · {exp.user}</div>
                         </div>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                         <div className="font-black text-white text-[15px] mb-1">{exp.amt}</div>
                         <span className="bg-[#ebd356]/10 text-[#ebd356] text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-[#ebd356]/20">
                           {exp.status}
                         </span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
         </Reveal>

         {/* Top Categories */}
         <Reveal delay={0.3} className="h-full">
           <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl flex flex-col h-full overflow-hidden">
              <div className="p-6 border-b border-white/5 bg-[#d4bbff]/5">
                 <h2 className="text-lg font-bold text-[#d4bbff] flex items-center gap-3">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a2 2 0 1 0 4-4Z"/><path d="M3 4h8S3 11 3 14"/></svg> 
                   Top Categories
                 </h2>
              </div>
              <div className="p-6 space-y-6">
                 {topCategories.map((cat, i) => (
                   <div key={i}>
                      <div className="flex justify-between items-center mb-3">
                         <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full ${cat.color} text-[#131313] font-black text-[13px] flex items-center justify-center shadow-lg`}>
                              {cat.text}
                            </div>
                            <div>
                               <div className="font-bold text-white text-[14px]">{cat.name}</div>
                               <div className="text-[11px] text-white/40 mt-0.5">{cat.amt} / {cat.total}</div>
                            </div>
                         </div>
                      </div>
                      <div className="w-full h-1.5 bg-[#131313] rounded-full overflow-hidden border border-white/5 ml-11" style={{ width: 'calc(100% - 44px)' }}>
                         <div className={`h-full ${cat.color} rounded-full`} style={{ width: cat.pct }}></div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
         </Reveal>

      </div>

    </div>
  );
}

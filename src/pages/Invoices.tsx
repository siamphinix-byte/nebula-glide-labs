import React from 'react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import { Search, Filter, Plus, FileText, Download, Eye, Link as LinkIcon, Edit, Trash2, DollarSign, Calendar } from 'lucide-react';

const invoices = [
  { id: 'INV-2025-0020', title: 'Project Milestone 20 - E-Commerce Platform', amount: '$471.50', project: 'Analytics System', client: 'Smart Enterprises', clientInitial: 'S', due: '6/20/2026', status: 'Partial Paid', color: '#f1734f' },
  { id: 'INV-2025-0008', title: 'Development Work - E-Commerce Platform Phase 8', amount: '$910.00', project: 'AI Chatbot', client: 'GlobalTech Industries', clientInitial: 'G', due: '12/8/2026', status: 'Draft', color: '#fff' },
  { id: 'INV-2025-0014', title: 'Development Work - E-Commerce Platform Phase 14', amount: '$1,944.00', project: 'CRM Enhancement', client: 'Smart Enterprises', clientInitial: 'S', due: '11/2/2025', overdueDays: 172, status: 'Draft', color: '#fff' },
  { id: 'INV-2025-0015', title: 'Consulting Services - E-Commerce Platform', amount: '$1,706.10', project: 'Security Audit', client: 'Alpha Technologies', clientInitial: 'A', due: '4/10/2026', overdueDays: 13, status: 'Draft', color: '#fff' },
  
  { id: 'INV-2025-0010', title: 'Development Work - E-Commerce Platform Phase 10', amount: '$976.32', project: 'Customer Portal', client: 'GlobalTech Industries', clientInitial: 'G', due: '3/1/2026', overdueDays: 53, status: 'Sent', color: '#5b8cff' },
  { id: 'INV-2025-0012', title: 'Development Work - E-Commerce Platform Phase 12', amount: '$1,281.50', project: 'CRM Enhancement', client: 'GlobalTech Industries', clientInitial: 'G', due: '11/5/2026', status: 'Sent', color: '#5b8cff' },
  { id: 'INV-2025-0018', title: 'Project Milestone 18 - E-Commerce Platform', amount: '$647.85', project: 'API Gateway', client: 'GlobalTech Industries', clientInitial: 'G', due: '9/2/2026', status: 'Sent', color: '#5b8cff' },
  { id: 'INV-2025-0011', title: 'Monthly Services - E-Commerce Platform', amount: '$2,052.54', project: 'Mobile Banking App', client: 'GlobalTech Industries', clientInitial: 'G', due: '10/25/2025', overdueDays: 180, status: 'Viewed', color: '#fff' },

  { id: 'INV-2025-0016', title: 'Consulting Services - E-Commerce Platform', amount: '$618.20', project: 'Performance Suite', client: 'GlobalTech Industries', clientInitial: 'G', due: '4/5/2026', overdueDays: 18, status: 'Partial Paid', color: '#f1734f' },
  { id: 'INV-2025-0017', title: 'Monthly Services - E-Commerce Platform', amount: '$1,123.00', project: 'Payment Integration', client: 'Innovate Solutions', clientInitial: 'I', due: '11/9/2026', status: 'Partial Paid', color: '#f1734f' },
  { id: 'INV-2025-0003', title: 'Project Milestone 3 - E-Commerce Platform', amount: '$509.60', project: 'Mobile Banking App', client: 'Alpha Technologies', clientInitial: 'A', due: '4/2/2026', overdueDays: 21, status: 'Draft', color: '#fff' },
  { id: 'INV-2025-0002', title: 'Development Work - E-Commerce Platform Phase 2', amount: '$771.10', project: 'Admin Dashboard', client: 'Future Systems', clientInitial: 'F', due: '12/23/2026', status: 'Sent', color: '#5b8cff' }
];

export function Invoices() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full">
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-[26px] font-bold tracking-tight text-white">Invoices</h1>
          <div className="flex items-center gap-3">
             <button className="bg-[#131313] border border-white/10 text-white/80 px-4 py-2.5 rounded-xl text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all shadow-sm">
               <Download className="w-4 h-4"/> Export
             </button>
             <button className="bg-[#bbf600] text-[#131313] px-5 py-2.5 rounded-xl text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-[#bbf600]/90 transition-all shadow-[0_0_15px_rgba(187, 246, 0,0.3)]">
               <Plus className="w-4 h-4"/> Create Invoice
             </button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
         <div className="grid grid-cols-2 lg:grid-cols-5 border-b border-white/5 pb-6 gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/5 bg-[#1c1b1b] rounded-2xl border shadow-2xl p-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#bbf600] opacity-50"></div>
            <div className="flex flex-col justify-center items-center text-center p-6">
               <span className="text-4xl font-black text-[#5b8cff] tracking-tight mb-2">15</span>
               <span className="text-[13px] font-bold text-white/50 tracking-wide uppercase">Total Invoices</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-6">
               <span className="text-4xl font-black text-[#ebd356] tracking-tight mb-2">5</span>
               <span className="text-[13px] font-bold text-white/50 tracking-wide uppercase">Pending</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-6">
               <span className="text-4xl font-black text-[#bbf600] tracking-tight mb-2">0</span>
               <span className="text-[13px] font-bold text-white/50 tracking-wide uppercase">Paid</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-6">
               <span className="text-4xl font-black text-[#f1734f] tracking-tight mb-2">0</span>
               <span className="text-[13px] font-bold text-white/50 tracking-wide uppercase">Overdue</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-6">
               <span className="text-3xl font-black text-[#d4bbff] tracking-tight mb-2">$13,011.71</span>
               <span className="text-[13px] font-bold text-white/50 tracking-wide uppercase">Total Value</span>
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
                   <input type="text" placeholder="Search invoices..." className="pl-11 pr-4 py-2 w-full sm:w-[280px] bg-[#131313] border border-white/10 rounded-xl text-[14px] focus:outline-none focus:border-[#bbf600] text-white transition-colors" />
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

           {/* Invoices Grid */}
           <div className="p-6">
              <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                 {invoices.map((inv, idx) => (
                   <div key={idx} className="bg-[#131313] rounded-2xl border border-white/5 p-6 flex flex-col hover:border-white/20 transition-all shadow-md group">
                     <div className="flex justify-between items-start mb-4">
                        <h3 className="font-bold text-white text-[15px] truncate">{inv.id}</h3>
                        <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider shrink-0 border" style={{ 
                          color: inv.color === '#fff' ? 'rgba(255,255,255,0.6)' : inv.color,
                          backgroundColor: inv.color === '#fff' ? 'rgba(255,255,255,0.05)' : `${inv.color}15`,
                          borderColor: inv.color === '#fff' ? 'rgba(255,255,255,0.1)' : `${inv.color}25`
                        }}>
                           {inv.status === 'Draft' && <span className="text-[#f1734f] font-black w-3 h-3 inline-flex relative -top-px mr-1">⚠</span>}
                           {inv.status}
                        </span>
                     </div>
                     
                     <div className="flex gap-2">
                        <FileText className="w-4 h-4 text-white/30 shrink-0 mt-0.5" />
                        <p className="text-[13px] text-white/80 font-medium leading-snug h-[40px] line-clamp-2 mb-4">{inv.title}</p>
                     </div>
                     
                     <div className="space-y-3 mb-6 flex-1">
                        <div className="flex justify-between text-[13px]">
                           <span className="text-white/40">Amount:</span>
                           <span className="font-bold text-white">{inv.amount}</span>
                        </div>
                        <div className="flex justify-between text-[13px]">
                           <span className="text-white/40">Project:</span>
                           <span className="font-medium text-white/80 text-right truncate pl-4 max-w-[150px]">{inv.project}</span>
                        </div>
                        <div className="flex justify-between items-center text-[13px]">
                           <span className="text-white/40">Client:</span>
                           <div className="flex items-center gap-2 max-w-[150px]">
                              <div className="w-5 h-5 rounded-full bg-white/10 text-white font-bold text-[9px] flex items-center justify-center shrink-0">
                                {inv.clientInitial}
                              </div>
                              <span className="font-medium text-white/80 truncate">{inv.client}</span>
                           </div>
                        </div>
                     </div>
                     
                     <div className="flex justify-between items-center text-[11px] font-mono border-t border-white/5 pt-4 mb-4">
                        <div className="flex items-center gap-1.5 min-h-[16px]">
                           <Calendar className="w-3.5 h-3.5 text-white/40" /> 
                           <span className="text-white/60">Due: {inv.due}</span>
                        </div>
                        {inv.overdueDays && (
                           <span className="text-[#f1734f] font-bold">{inv.overdueDays} days overdue</span>
                        )}
                     </div>

                     <div className="flex justify-between items-center mt-auto">
                        <div className="flex gap-2">
                           {inv.status === 'Sent' || inv.status === 'Viewed' || inv.status === 'Partial Paid' ? (
                              <button className="w-8 h-8 rounded-full border border-white/10 text-[#5b8cff] hover:bg-[#5b8cff]/10 flex items-center justify-center transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                           ) : (
                              <button className="w-8 h-8 rounded-full border border-white/10 text-[#5b8cff] hover:bg-[#5b8cff]/10 flex items-center justify-center transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                           )}
                           
                           {inv.status === 'Draft' && (
                              <button className="w-8 h-8 rounded-full border border-white/10 text-[#ebd356] hover:bg-[#ebd356]/10 flex items-center justify-center transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                           )}
                           {inv.status === 'Draft' && (
                              <button className="w-8 h-8 rounded-full border border-white/10 text-[#f1734f] hover:bg-[#f1734f]/10 flex items-center justify-center transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                           )}
                           
                           <button className="w-8 h-8 rounded-full border border-[#d4bbff]/20 text-[#d4bbff] hover:bg-[#d4bbff]/10 flex items-center justify-center transition-colors">
                             <LinkIcon className="w-4 h-4" />
                           </button>
                        </div>
                        
                        {(inv.status === 'Sent' || inv.status === 'Partially Paid' || inv.status === 'Viewed') && (
                           <button className="w-8 h-8 rounded-full bg-[#bbf600]/10 text-[#bbf600] border border-[#bbf600]/20 flex items-center justify-center hover:bg-[#bbf600]/20 transition-all font-bold">
                             <DollarSign className="w-4 h-4" />
                           </button>
                        )}
                     </div>
                   </div>
                 ))}
              </StaggerReveal>
           </div>

           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#131313] border-t border-white/5 text-[13px] text-white/50 rounded-b-2xl">
             <span className="font-medium">Showing 1 to 12 of 15 invoices</span>
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

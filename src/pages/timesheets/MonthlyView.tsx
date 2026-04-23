import React from 'react';
import { Reveal } from '../../components/GSAPWrapper';
import { Calendar as CalendarIcon, Clock, ChevronRight, ChevronLeft } from 'lucide-react';

const projectStats = [
  { name: 'Analytics System', total: '420.0h', pct: '89%', billable: '328.0h', non: '92.0h', w: '89%' },
  { name: 'Security Audit', total: '25.1h', pct: '5%', billable: '25.1h', non: '0.0h', w: '5%' },
  { name: 'Performance Suite', total: '3.5h', pct: '1%', billable: '3.5h', non: '0.0h', w: '1%' },
  { name: 'Admin Dashboard', total: '-2.0h', pct: '-0%', billable: '-2.0h', non: '0.0h', w: '0%', isNeg: true },
  { name: 'Payment Integration', total: '2.0h', pct: '0%', billable: '2.0h', non: '0.0h', w: '1%' },
  { name: 'AI Chatbot', total: '9.0h', pct: '2%', billable: '9.0h', non: '0.0h', w: '2%' },
  { name: 'Inventory System', total: '3.0h', pct: '1%', billable: '3.0h', non: '0.0h', w: '1%' },
  { name: 'CRM Enhancement', total: '2.0h', pct: '0%', billable: '2.0h', non: '0.0h', w: '1%' },
  { name: 'Data Warehouse', total: '2.0h', pct: '0%', billable: '2.0h', non: '0.0h', w: '1%' },
  { name: 'Mobile Banking App', total: '1.0h', pct: '0%', billable: '1.0h', non: '0.0h', w: '1%' },
  { name: 'Customer Portal', total: '4.0h', pct: '1%', billable: '4.0h', non: '0.0h', w: '1%' },
  { name: 'API Gateway', total: '4.0h', pct: '1%', billable: '4.0h', non: '0.0h', w: '1%' },
];

const weeklyStats = [
  { w: 'Week 1/4 - 5/4', entries: 0, total: '0.0h', billable: '0.0h billable' },
  { w: 'Week 8/4 - 12/4', entries: 0, total: '0.0h', billable: '0.0h billable' },
  { w: 'Week 15/4 - 19/4', entries: 0, total: '0.0h', billable: '0.0h billable' },
  { w: 'Week 22/4 - 26/4', entries: 0, total: '0.0h', billable: '0.0h billable' },
  { w: 'Week 29/4 - 30/4', entries: 0, total: '0.0h', billable: '0.0h billable' },
];

export function MonthlyView() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24">
      
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Monthly View</h1>
        </div>
      </Reveal>

      {/* Navigator */}
      <Reveal delay={0.1}>
        <div className="bg-[#1c1b1b] p-4 sm:p-6 rounded-2xl border border-white/5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
             <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-[#131313] hover:bg-white/5 text-white/60 transition-colors">
               <ChevronLeft className="w-5 h-5"/>
             </button>
             <h2 className="text-xl font-bold text-white flex items-center gap-3 tracking-tight">
               April 2026 
               <span className="bg-[#bbf600]/20 text-[#bbf600] text-[10px] uppercase font-black px-2 py-0.5 rounded-lg border border-[#bbf600]/30">Current Month</span>
             </h2>
             <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-[#131313] hover:bg-white/5 text-white/60 transition-colors">
               <ChevronRight className="w-5 h-5"/>
             </button>
          </div>
        </div>
      </Reveal>

      {/* KPI Stats */}
      <Reveal delay={0.2}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
           <div className="bg-[#1c1b1b] p-5 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-center">
             <div className="flex items-center gap-2 text-[#9fa9ff] mb-2 font-bold text-[13px]">
               <Clock className="w-4 h-4" /> Total Hours
             </div>
             <span className="text-3xl font-black text-[#9fa9ff] tracking-tight">473.6h</span>
             <span className="text-white/30 text-[10px] font-medium mt-1">22.6h avg/day</span>
           </div>
           <div className="bg-[#1c1b1b] p-5 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-center">
             <div className="flex items-center gap-2 text-[#bbf600] mb-2 font-bold text-[13px]">
               <CalendarIcon className="w-4 h-4" /> Billable Hours
             </div>
             <span className="text-3xl font-black text-[#bbf600] tracking-tight">381.6h</span>
             <span className="text-white/30 text-[10px] font-medium mt-1">81% of total</span>
           </div>
           <div className="bg-[#1c1b1b] p-5 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-center">
             <div className="flex items-center gap-2 text-[#d4bbff] mb-2 font-bold text-[13px]">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> Entries
             </div>
             <span className="text-3xl font-black text-[#d4bbff] tracking-tight">179</span>
             <span className="text-white/30 text-[10px] font-medium mt-1">21 working days</span>
           </div>
           <div className="bg-[#1c1b1b] p-5 rounded-2xl border border-white/5 shadow-lg flex flex-col justify-center">
             <div className="flex items-center gap-2 text-[#eb7146] mb-2 font-bold text-[13px]">
               Utilization
             </div>
             <span className="text-3xl font-black text-[#eb7146] tracking-tight">282%</span>
             <span className="text-white/30 text-[10px] font-medium mt-1">Based on 8h/day</span>
           </div>
        </div>
      </Reveal>

      {/* Breakdowns */}
      <Reveal delay={0.3}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Project Breakdown */}
          <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Project Breakdown</h3>
            <div className="space-y-6">
              {projectStats.map((p, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[14px] font-bold text-white">{p.name}</span>
                    <span className="text-[13px] text-white/50">{p.total} ({p.pct})</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#131313] rounded-full overflow-hidden mb-2 border border-white/5">
                     <div className={`h-full ${p.isNeg ? 'bg-[#ffb4ab]' : 'bg-[#1b5df3]'} rounded-full`} style={{ width: p.w }}></div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-white/40 uppercase tracking-widest font-bold">
                     <span>Billable: {p.billable}</span>
                     <span>Non-billable: {p.non}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Breakdown */}
          <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Weekly Breakdown</h3>
            <div className="space-y-4">
              {weeklyStats.map((w, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-xl border border-white/5 bg-[#131313] hover:bg-white/5 transition-colors">
                  <div>
                    <div className="text-[14px] font-bold text-white mb-1 tracking-tight">{w.w}</div>
                    <div className="text-[11px] text-white/40">{w.entries} entries</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[15px] font-bold text-[#bbf600]">{w.total}</div>
                    <div className="text-[11px] text-[#bbf600] font-medium">{w.billable}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Reveal>

    </div>
  );
}

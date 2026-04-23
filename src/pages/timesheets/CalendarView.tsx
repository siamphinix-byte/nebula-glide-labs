import React from 'react';
import { Reveal } from '../../components/GSAPWrapper';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Padding for calendar
const generateCalendar = () => {
  const dates = [];
  let dayCounter = 30; // Prev month padding
  for (let i = 0; i < 2; i++) {
    dates.push({ date: dayCounter++, active: false });
  }
  
  for (let i = 1; i <= 30; i++) {
    const isTarget = i === 23;
    dates.push({ date: i, active: true, target: isTarget });
  }
  
  dayCounter = 1; // Next month padding
  while (dates.length < 35) {
     dates.push({ date: dayCounter++, active: false });
  }
  return dates;
};

export function CalendarView() {
  const calendarDates = generateCalendar();

  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full">
      
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">Calendar View</h1>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl p-6 min-h-[600px] flex flex-col">
           
           <div className="flex items-center gap-4 mb-8">
             <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-[#131313] hover:bg-white/5 text-white/60 transition-colors shrink-0">
               <ChevronLeft className="w-5 h-5"/>
             </button>
             <h2 className="text-2xl font-black text-white tracking-tight">April 2026</h2>
             <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-[#131313] hover:bg-white/5 text-white/60 transition-colors shrink-0">
               <ChevronRight className="w-5 h-5"/>
             </button>
           </div>

           <div className="flex-1 flex flex-col">
             {/* Header */}
             <div className="grid grid-cols-7 mb-4">
               {days.map((d, i) => (
                 <div key={i} className="text-center text-[12px] font-bold text-white/50 uppercase tracking-widest">{d}</div>
               ))}
             </div>
             
             {/* Grid */}
             <div className="flex-1 grid grid-cols-7 gap-3">
               {calendarDates.map((d, i) => (
                 <div 
                   key={i} 
                   className={`rounded-2xl border flex flex-col p-3 transition-colors ${
                     d.target ? 'border-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.15)] bg-[#131313]/50 relative z-10 scale-[1.02]' : 
                     (d.active ? 'border-white/5 bg-[#131313] hover:border-white/20' : 'border-transparent bg-[#131313]/30 opacity-50')
                   }`}
                 >
                   <span className={`text-[13px] font-medium mb-2 ${d.target ? 'text-white font-bold' : (d.active ? 'text-white/70' : 'text-white/30')}`}>
                     {d.date}
                   </span>
                 </div>
               ))}
             </div>
           </div>
           
        </div>
      </Reveal>

    </div>
  );
}

import React from 'react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const calendarDays = [
  { date: 29, prevMonth: true }, { date: 30, prevMonth: true }, { date: 31, prevMonth: true }, { date: 1 }, { date: 2 }, { date: 3 }, { date: 4 },
  { date: 5 }, { date: 6 }, { date: 7 }, { date: 8 }, { date: 9 }, { date: 10 }, { date: 11 },
  { date: 12 }, { date: 13 }, { date: 14 }, { date: 15 }, { date: 16 }, { date: 17 }, { date: 18 },
  { date: 19 }, { date: 20 }, { date: 21 }, { date: 22 }, { date: 23 }, { date: 24 }, { date: 25 },
  { date: 26 }, { date: 27 }, { date: 28 }, { date: 29 }, { date: 30 }, { date: 1, nextMonth: true }, { date: 2, nextMonth: true },
  { date: 3, nextMonth: true }, { date: 4, nextMonth: true }, { date: 5, nextMonth: true }, { date: 6, nextMonth: true }, { date: 7, nextMonth: true }, { date: 8, nextMonth: true }, { date: 9, nextMonth: true }
];

const events = [
  { title: 'Documentation Update', startCol: 1, endCol: 3, row: 1, bg: 'bg-[#f1734f]' },
  { title: 'Frontend Component...', startCol: 7, endCol: 8, row: 1, bg: 'bg-[#f1734f]' },
  { title: 'Frontend Component Creation', startCol: 1, endCol: 3, row: 2, bg: 'bg-[#f1734f]' },
  { title: 'Training Session', startCol: 7, endCol: 8, row: 2, bg: 'bg-[#5b8cff]' },
  { title: 'Feature Enhancement', startCol: 1, endCol: 5, row: 3, bg: 'bg-[#f1734f]' },
  { title: 'Code Review Process', startCol: 4, endCol: 8, row: 4, bg: 'bg-[#ebd356]', textDark: true }, // Changed color from screenshot orange to #ebd356 to look better in dark mode
  { title: 'Documentation Update', startCol: 1, endCol: 3, row: 5, bg: 'bg-[#f1734f]' },
  { title: 'Frontend Component...', startCol: 7, endCol: 8, row: 5, bg: 'bg-[#f1734f]' },
  { title: 'Frontend Component Creation', startCol: 1, endCol: 3, row: 6, bg: 'bg-[#f1734f]' },
  { title: 'Training Session', startCol: 7, endCol: 8, row: 6, bg: 'bg-[#5b8cff]' },
  { title: 'Feature Enhancement', startCol: 1, endCol: 5, row: 7, bg: 'bg-[#f1734f]' },
  { title: 'Code Review Process', startCol: 4, endCol: 8, row: 8, bg: 'bg-[#ebd356]', textDark: true },
  { title: 'Code Review Process', startCol: 1, endCol: 3, row: 9, bg: 'bg-[#ebd356]', textDark: true },
  { title: 'Bug Fix Implementation', startCol: 3, endCol: 8, row: 10, bg: 'bg-[#f1734f]' }
];

export function AppCalendar() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full">
      <Reveal direction="down">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-[26px] font-bold tracking-tight text-white">Calendar</h1>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 shadow-2xl p-6 mb-6 overflow-x-auto min-w-[800px]">
           <div className="flex justify-end items-center mb-6 gap-6">
              <div className="flex items-center gap-4 text-[12px] font-bold">
                 <div className="flex items-center gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-[#5b8cff]"></div> <span className="text-white/80">Zoom Meetings</span>
                 </div>
                 <div className="flex items-center gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-[#bbf600]"></div> <span className="text-white/80">Google Meetings</span>
                 </div>
                 <div className="flex items-center gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-[#f1734f]"></div> <span className="text-white/80">Tasks</span>
                 </div>
              </div>
           </div>

           <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2">
                 <div className="flex bg-[#131313] border border-white/10 rounded-lg overflow-hidden">
                    <button className="px-3 py-1.5 hover:bg-white/10 border-r border-white/10 text-white transition-colors">
                       <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="px-3 py-1.5 hover:bg-white/10 text-white transition-colors">
                       <ChevronRight className="w-4 h-4" />
                    </button>
                 </div>
                 <button className="px-4 py-1.5 bg-[#5b8cff]/10 text-[#5b8cff] border border-[#5b8cff]/20 rounded-lg text-[13px] font-bold hover:bg-[#5b8cff]/20 transition-colors">
                   today
                 </button>
              </div>

              <h2 className="text-[22px] font-bold text-white tracking-tight">April 2026</h2>

              <div className="flex bg-[#131313] border border-white/10 rounded-lg overflow-hidden">
                 <button className="px-5 py-1.5 bg-white/10 text-white text-[13px] font-bold border-r border-white/10 transition-colors">
                    month
                 </button>
                 <button className="px-5 py-1.5 hover:bg-white/5 text-white/60 text-[13px] font-bold border-r border-white/10 transition-colors">
                    week
                 </button>
                 <button className="px-5 py-1.5 hover:bg-white/5 text-white/60 text-[13px] font-bold transition-colors">
                    day
                 </button>
              </div>
           </div>

           {/* Calendar Grid */}
           <div className="border border-white/10 rounded-xl overflow-hidden bg-[#131313]">
              {/* Header Days */}
              <div className="grid grid-cols-7 border-b border-white/10 bg-[#1c1b1b]">
                 {daysOfWeek.map((day, i) => (
                    <div key={i} className="py-3 text-center text-[13px] font-bold text-white border-r border-white/10 last:border-0">
                       {day}
                    </div>
                 ))}
              </div>

              {/* Rows */}
              <div className="grid grid-cols-7 relative auto-rows-[120px]">
                 {/* Empty Cells for Borders */}
                 {calendarDays.map((d, i) => (
                    <div key={i} className="border-r border-b border-white/10 relative p-2 overflow-hidden h-[120px]">
                       <span className={`text-[14px] font-bold absolute top-2 right-3 ${d.prevMonth || d.nextMonth ? 'text-white/20' : 'text-white/60'}`}>
                          {d.date}
                       </span>
                    </div>
                 ))}

                 {/* Absolute Events Layer over the Grid */}
                 {events.map((ev, i) => (
                    <div 
                      key={i} 
                      className={`absolute h-6 rounded px-2 text-[11px] font-bold truncate flex items-center shadow-md ${ev.bg} ${ev.textDark ? 'text-[#131313]' : 'text-white'} border border-black/10 transition-transform hover:scale-[1.02] cursor-pointer hover:z-10 z-[5]`}
                      style={{
                         top: `${Math.floor((ev.row - 1) / 2) * 120 + 28 + ((ev.row - 1) % 2) * 28}px`,
                         left: `calc(${(ev.startCol - 1)} * (100% / 7) + 4px)`,
                         width: `calc(${(ev.endCol - ev.startCol)} * (100% / 7) - 8px)`
                      }}
                    >
                      {ev.title}
                    </div>
                 ))}
                 
                 {/* Fake '+1 more' tags */}
                 <div className="absolute text-[10px] font-bold text-white/40 cursor-pointer hover:text-white" style={{ top: `${5 * 120 + 24 + 14}px`, left: `calc(5 * (100% / 7) + 24px)` }}>+1 more</div>
                 <div className="absolute text-[10px] font-bold text-white/40 cursor-pointer hover:text-white" style={{ top: `${5 * 120 + 24 + 14}px`, left: `calc(6 * (100% / 7) + 24px)` }}>+1 more</div>
              </div>
           </div>
        </div>
      </Reveal>
    </div>
  );
}

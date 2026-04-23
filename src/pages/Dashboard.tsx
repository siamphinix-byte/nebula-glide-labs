import React, { useState } from 'react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import { 
  ArrowUpRight, Plus, ChevronRight, CheckCircle2, Edit3, 
  FileText, UserPlus, FileCheck, MoreHorizontal, Calendar,
  Clock, DownloadCloud, DollarSign, Target, Activity
} from 'lucide-react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, 
  BarChart, Bar, Tooltip as RechartsTooltip, CartesianGrid, XAxis 
} from 'recharts';
import { useNavigate } from 'react-router-dom';

const progressData = [
  { name: 'Completed', value: 68, color: '#bbf600' },
  { name: 'In Progress', value: 15, color: '#1e6047' },
  { name: 'Pending', value: 17, color: 'url(#stripes)' }
];

const teamData = [
  { name: 'Sarah Jenkins', role: 'GitHub Project Repository', status: 'Completed', statusColor: 'bg-[#bbf600]/10 text-[#bbf600] border-[#bbf600]/20', initial: 'SJ', avatarBg: 'bg-[#bbf600]' },
  { name: 'Marcus Chen', role: 'Develop Search & Filter', status: 'Pending', statusColor: 'bg-[#f1734f]/10 text-[#f1734f] border-[#f1734f]/20', initial: 'MC', avatarBg: 'bg-[#5b8cff]' },
  { name: 'Alex Rivera', role: 'Database Architecture', status: 'In Progress', statusColor: 'bg-[#ebd356]/10 text-[#ebd356] border-[#ebd356]/20', initial: 'AR', avatarBg: 'bg-[#ebd356]' }
];

const timelineData = [
  { title: 'Staging Env Updated', date: 'Due date: Nov 24, 2026', icon: <FileCheck className="w-4 h-4 text-[#bbf600]" />, type: 'Updated', status: 'completed' },
  { title: 'Design Review Added', date: 'Due date: Nov 28, 2026', icon: <Edit3 className="w-4 h-4 text-white" />, type: 'Added', status: 'pending' },
  { title: 'Invoice #1042 Paid', date: 'Due date: Dec 5, 2026', icon: <FileText className="w-4 h-4 text-[#bbf600]" />, type: 'Paid', status: 'completed' }
];

const miniHoursData = [ {v:10}, {v:25}, {v:15}, {v:30}, {v:28}, {v:45}, {v:55} ];
const miniCostData = [ {v:400}, {v:300}, {v:600}, {v:800}, {v:500}, {v:900}, {v:1000} ];

export function Dashboard() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredPie, setHoveredPie] = useState<number | null>(null);

  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full font-sans">
      
      {/* Header Area */}
      <Reveal direction="down">
        <div className="mb-8 bg-[#1c1b1b] border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
           <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#bbf600]/5 to-transparent pointer-events-none"></div>
           
           <div className="relative z-10">
               <div className="flex items-center gap-2 text-[12px] font-bold text-white/40 mb-2 uppercase tracking-widest">
                  <button onClick={() => navigate('/app/projects')} className="hover:text-white transition-colors">Projects</button>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[#bbf600]">Brand Website Redesign</span>
               </div>
               
               <div className="flex flex-wrap items-center gap-4">
                  <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white m-0 flex items-center gap-3">
                     Brand Website Redesign
                  </h1>
                  <span className="bg-[#bbf600]/10 border border-[#bbf600]/20 text-[#bbf600] font-bold text-[11px] px-3 py-1.5 rounded-full tracking-wider uppercase flex items-center gap-1.5 shadow-[0_0_15px_rgba(187, 246, 0,0.15)]">
                     <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bbf600] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#bbf600]"></span>
                     </span>
                     In Progress
                  </span>
               </div>
           </div>

           <div className="flex items-center gap-3 relative z-10">
              <button 
                onClick={() => navigate('/app/projects')}
                className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-4 py-2.5 rounded-xl font-bold text-[13px] transition-all flex items-center gap-2"
              >
                Settings
              </button>
              <button 
                onClick={() => navigate('/app/projects')}
                className="bg-[#bbf600] hover:bg-[#bbf600]/90 text-[#131313] px-5 py-2.5 rounded-xl font-bold text-[13px] transition-all shadow-[0_0_20px_rgba(187, 246, 0,0.3)] hover:shadow-[0_0_25px_rgba(187, 246, 0,0.4)] flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> Add Task
              </button>
           </div>
        </div>
      </Reveal>

      {/* Row 1: Premium Stat Cards */}
      <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         
         {/* Hours Logged */}
         <div className="bg-gradient-to-br from-[#1c1b1b] to-[#131313] rounded-2xl border border-white/5 p-6 shadow-xl hover:border-white/10 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#bbf600]/10 rounded-full blur-2xl group-hover:bg-[#bbf600]/20 transition-all"></div>
            <div className="flex justify-between items-start mb-6 relative z-10">
               <div className="flex items-center gap-2 text-white/50">
                  <Clock className="w-4 h-4 group-hover:text-[#bbf600] transition-colors" />
                  <span className="text-[13px] font-bold uppercase tracking-wider">Hours Logged</span>
               </div>
               <button className="w-7 h-7 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:bg-[#bbf600] hover:text-[#131313] hover:border-[#bbf600] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
               </button>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-4 items-end">
               <div>
                  <div className="text-4xl font-black text-white tracking-tighter mb-1 relative">
                    240<span className="text-[18px] text-white/30 font-bold ml-1">/350</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#bbf600]">+12 hrs this week</div>
               </div>
               <div className="h-12 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={miniHoursData}>
                        <defs>
                           <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#bbf600" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#bbf600" stopOpacity={0}/>
                           </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="v" stroke="#bbf600" strokeWidth={2} fillOpacity={1} fill="url(#colorHours)" />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
            </div>
         </div>

         {/* Files Shared */}
         <div className="bg-gradient-to-br from-[#1c1b1b] to-[#131313] rounded-2xl border border-white/5 p-6 shadow-xl hover:border-white/10 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#5b8cff]/10 rounded-full blur-2xl group-hover:bg-[#5b8cff]/20 transition-all"></div>
            <div className="flex justify-between items-start mb-6 relative z-10">
               <div className="flex items-center gap-2 text-white/50">
                  <DownloadCloud className="w-4 h-4 group-hover:text-[#5b8cff] transition-colors" />
                  <span className="text-[13px] font-bold uppercase tracking-wider">Files Shared</span>
               </div>
               <button className="w-7 h-7 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:bg-[#5b8cff] hover:text-white hover:border-[#5b8cff] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
               </button>
            </div>
            <div className="relative z-10 flex justify-between items-end">
               <div className="text-4xl font-black text-white tracking-tighter mb-1">
                 42
               </div>
               <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/5 flex items-center justify-center text-[10px] font-bold text-white shadow-xl rotate-[-5deg]">PNG</div>
                  <div className="w-8 h-8 rounded-lg bg-[#5b8cff]/20 border border-[#5b8cff]/20 flex items-center justify-center text-[10px] font-bold text-[#5b8cff] shadow-xl z-10">PDF</div>
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/5 flex items-center justify-center text-[10px] font-bold text-white shadow-xl rotate-[5deg] z-20">FIG</div>
               </div>
            </div>
         </div>

         {/* Cost to Date */}
         <div className="bg-gradient-to-br from-[#1c1b1b] to-[#131313] rounded-2xl border border-white/5 p-6 shadow-xl hover:border-white/10 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#ebd356]/10 rounded-full blur-2xl group-hover:bg-[#ebd356]/20 transition-all"></div>
            <div className="flex justify-between items-start mb-6 relative z-10">
               <div className="flex items-center gap-2 text-white/50">
                  <DollarSign className="w-4 h-4 group-hover:text-[#ebd356] transition-colors" />
                  <span className="text-[13px] font-bold uppercase tracking-wider">Cost to Date</span>
               </div>
               <button className="w-7 h-7 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:bg-[#ebd356] hover:text-[#131313] hover:border-[#ebd356] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
               </button>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-4 items-end">
               <div>
                  <div className="text-4xl font-black text-white tracking-tighter mb-1">
                    $45.2<span className="text-[18px] text-white/30 font-bold">k</span>
                  </div>
                  <div className="text-[11px] font-bold text-white/40">From $60k budget</div>
               </div>
               <div className="h-10 w-full opacity-80 group-hover:opacity-100 transition-opacity">
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={miniCostData}>
                        <Bar dataKey="v" fill="#ebd356" radius={[2, 2, 0, 0]} />
                     </BarChart>
                  </ResponsiveContainer>
               </div>
            </div>
         </div>

         {/* Next Milestone */}
         <div className="bg-[#bbf600] rounded-2xl border border-[#bbf600] p-6 shadow-[0_0_30px_rgba(187, 246, 0,0.15)] group flex flex-col justify-between relative overflow-hidden cursor-pointer">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
            <div className="flex justify-between items-start mb-6 relative z-10">
               <div className="flex items-center gap-2 text-[#131313]/60">
                  <Target className="w-4 h-4" />
                  <span className="text-[13px] font-bold uppercase tracking-wider">Next Milestone</span>
               </div>
               <div className="w-7 h-7 rounded-full bg-[#131313]/10 flex items-center justify-center text-[#131313]/70 group-hover:bg-[#131313] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
               </div>
            </div>
            <div className="relative z-10">
               <div className="text-[28px] font-black text-[#131313] tracking-tight leading-none mb-2 hover:underline decoration-2 underline-offset-4">
                 Beta Release
               </div>
               <div className="flex items-center gap-2 text-[12px] font-bold text-[#131313]/70 pt-1">
                 <Calendar className="w-3.5 h-3.5" /> Oct 24, 2026
               </div>
            </div>
         </div>

      </StaggerReveal>

      {/* Row 2: Deep Analytics & Team Control */}
      <Reveal delay={0.2}>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[320px]">
            
            {/* Advanced Progress Analytics */}
            <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 p-6 md:p-8 flex flex-col shadow-xl relative overflow-hidden group">
               <h3 className="font-bold text-[16px] text-white flex items-center justify-between mb-8">
                  <span>Project Progress Topology</span>
                  <button className="text-[12px] text-white/40 hover:text-white transition-colors font-medium cursor-pointer">Detailed Report</button>
               </h3>
               
               <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 h-full">
                  <div className="w-full lg:w-1/2 flex flex-col justify-center h-full relative group-hover:scale-105 transition-transform duration-500">
                     <div className="relative h-[200px] w-[200px] mx-auto flex items-end justify-center">
                        <ResponsiveContainer width="100%" height={240} className="absolute bottom-[-20px]">
                           <PieChart>
                              <defs>
                                <pattern id="stripes" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                                  <rect width="8" height="8" fill="#131313" />
                                  <line x1="0" y1="0" x2="0" y2="8" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.15" />
                                </pattern>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                  <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#bbf600" floodOpacity="0.5" />
                                </filter>
                              </defs>
                              <Pie
                                 data={progressData}
                                 cx="50%"
                                 cy="100%"
                                 startAngle={180}
                                 endAngle={0}
                                 innerRadius="75%"
                                 outerRadius="100%"
                                 paddingAngle={3}
                                 dataKey="value"
                                 stroke="none"
                                 cornerRadius={6}
                                 onMouseEnter={(_, index) => setHoveredPie(index)}
                                 onMouseLeave={() => setHoveredPie(null)}
                                 style={{ transition: 'all 0.3s ease' }}
                              >
                                 {progressData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} style={{ opacity: hoveredPie === null || hoveredPie === index ? 1 : 0.4 }} />
                                 ))}
                              </Pie>
                           </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute bottom-3 text-center w-full flex flex-col items-center">
                           <span className="text-5xl font-black text-white leading-none tracking-tighter">68%</span>
                           <span className="text-[11px] font-bold tracking-widest uppercase text-white/30 mt-2">Completion</span>
                        </div>
                     </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-8">
                     {[
                       { label: 'Completed', val: '68%', color: '#bbf600' },
                       { label: 'In Progress', val: '15%', color: '#1e6047' },
                       { label: 'Pending Block', val: '17%', color: 'url(#stripes)', pattern: true }
                     ].map((item, i) => (
                       <div 
                         key={i} 
                         className="flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer"
                         onMouseEnter={() => setHoveredPie(i)}
                         onMouseLeave={() => setHoveredPie(null)}
                       >
                          <div className="flex items-center gap-3">
                             {item.pattern ? (
                                <div className="w-3.5 h-3.5 rounded-md overflow-hidden relative" style={{ background: item.color }}>
                                   <div className="absolute inset-0 bg-[#131313] opacity-30"></div>
                                   <svg width="100%" height="100%"><rect width="100%" height="100%" fill={item.color}/></svg>
                                </div>
                             ) : (
                                <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}`}}></div>
                             )}
                             <span className="text-[13px] font-bold text-white/80">{item.label}</span>
                          </div>
                          <span className="font-mono text-[12px] font-bold text-white/50">{item.val}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Team Collaboration Command Center */}
            <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 p-6 md:p-8 flex flex-col h-full shadow-xl relative">
               <div className="absolute top-0 left-0 w-full h-[60px] bg-gradient-to-b from-[#bbf600]/5 to-transparent rounded-t-2xl pointer-events-none"></div>
               
               <div className="flex items-center justify-between mb-6 relative z-10">
                  <div>
                    <h3 className="font-bold text-[16px] text-white">Team Operations</h3>
                    <p className="text-[12px] text-white/40 mt-1">Cross-functional task distribution</p>
                  </div>
                  <button className="bg-[#131313] border border-white/10 text-white hover:bg-white/10 px-4 py-2 rounded-xl text-[12px] font-bold flex items-center gap-2 transition-all shadow-sm">
                     <Plus className="w-3.5 h-3.5 text-[#bbf600]" /> Add Member
                  </button>
               </div>
               
               <div className="flex-1 flex flex-col justify-start gap-3 overflow-y-auto pr-2 custom-scrollbar">
                  {teamData.map((member, i) => (
                     <div key={i} className="flex items-center justify-between gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group">
                        <div className="flex items-center gap-3.5">
                           <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[13px] shadow-lg ${member.avatarBg} relative`}>
                              {member.initial}
                              {member.status === 'Completed' && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#1c1b1b] rounded-full flex items-center justify-center"><div className="w-2.5 h-2.5 rounded-full bg-[#bbf600]"></div></div>}
                           </div>
                           <div className="flex flex-col">
                              <span className="font-bold text-[13px] text-white/90 group-hover:text-white transition-colors">{member.name}</span>
                              <span className="text-[11px] font-medium text-white/40 group-hover:text-white/60 transition-colors line-clamp-1">{member.role}</span>
                           </div>
                        </div>
                        <div className="flex items-center gap-3">
                           <span className={`px-2.5 py-1 rounded-md border text-[10px] font-bold uppercase tracking-wider ${member.statusColor}`}>
                              {member.status}
                           </span>
                           <button className="w-8 h-8 rounded-lg bg-[#131313] border border-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors opacity-0 group-hover:opacity-100 hidden sm:flex">
                             <MoreHorizontal className="w-4 h-4" />
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </Reveal>

      {/* Row 3: Live Feed Logs */}
      <Reveal delay={0.4}>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* System Timeline */}
            <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 p-6 md:p-8 shadow-xl min-h-[400px]">
               <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                  <h3 className="font-bold text-[16px] text-white flex items-center gap-2">
                     <Activity className="w-4 h-4 text-[#bbf600]" /> System Event Log
                  </h3>
                  <div className="flex items-center gap-2 bg-[#131313] p-1 rounded-lg border border-white/5">
                     {['All', 'Alerts'].map(filter => (
                        <button 
                           key={filter}
                           onClick={() => setActiveFilter(filter)}
                           className={`px-3 py-1.5 rounded-md text-[11px] font-bold transition-all ${activeFilter === filter ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/80'}`}
                        >
                           {filter}
                        </button>
                     ))}
                  </div>
               </div>
               
               <div className="relative pl-6 space-y-8 mt-4">
                  <div className="absolute left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#1d3126] via-white/5 to-transparent"></div>
                  
                  {timelineData.map((item, i) => (
                     <div key={i} className="flex relative items-start gap-6 group cursor-pointer">
                        <div className={`relative z-10 w-10 h-10 rounded-2xl bg-[#131313] border border-white/5 flex items-center justify-center shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110 ${item.status === 'completed' ? 'shadow-[0_0_15px_rgba(187, 246, 0,0.15)] group-hover:border-[#bbf600]/50' : 'group-hover:border-white/20'}`}>
                           {item.icon}
                           {item.status === 'completed' && <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#1c1b1b] flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#bbf600]"></div></div>}
                        </div>
                        <div className="flex flex-col pt-1.5 flex-1 border-b border-white/5 pb-6 group-hover:border-white/10 transition-colors">
                           <span className="text-[14px] font-bold text-white/90 mb-1 group-hover:text-white transition-colors">
                              {item.title.replace(item.type, '')}
                              <span className={item.type === 'Updated' || item.type === 'Added' || item.type === 'Paid' ? 'text-[#bbf600]' : 'text-white'}>
                                 {item.type}
                              </span>
                           </span>
                           <span className="text-[12px] text-white/40 font-mono mt-1 flex items-center gap-2">
                             <Clock className="w-3 h-3" /> {item.date}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Action Items List */}
            <div className="bg-[#1c1b1b] rounded-2xl border border-white/5 p-6 md:p-8 shadow-xl min-h-[400px] flex flex-col relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
               
               <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5 relative z-10">
                  <h3 className="font-bold text-[16px] text-white">Pending Action Items</h3>
                  <button className="text-[12px] font-bold text-[#bbf600] flex items-center gap-1 hover:underline">
                     Resolve All <ArrowUpRight className="w-3 h-3" />
                  </button>
               </div>
               
               <div className="space-y-4 relative z-10">
                  {[
                    { title: 'Invoice #1042 Review', sub: 'Finance Department', time: '10:30 PM', icon: <DollarSign className="w-4 h-4 text-[#ebd356]" />, alert: true },
                    { title: 'Approve PR #104', sub: 'GitHub Project Repository', time: '12:00 PM', icon: <UserPlus className="w-4 h-4 text-[#5b8cff]" />, alert: false },
                    { title: 'Design Handoff Sign-off', sub: 'Product Team', time: '02:30 PM', icon: <CheckCircle2 className="w-4 h-4 text-[#bbf600]" />, alert: false }
                  ].map((item, i) => (
                     <div key={i} className="flex items-center justify-between gap-4 p-4 rounded-xl bg-[#131313] border border-white/5 hover:border-white/20 transition-all cursor-pointer group shadow-sm hover:shadow-lg hover:-translate-y-0.5 duration-300">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-white/10 transition-colors relative">
                              {item.icon}
                              {item.alert && <span className="absolute -top-1 -right-1 flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f1734f] opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-[#f1734f] border border-[#131313]"></span></span>}
                           </div>
                           <div className="flex flex-col gap-1">
                              <span className="text-[14px] font-bold text-white group-hover:text-[#bbf600] transition-colors">
                                 {item.title}
                              </span>
                              <span className="text-[11px] text-white/50 font-medium">{item.sub}</span>
                           </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                           <span className="text-[11px] font-mono font-medium text-white/40">{item.time}</span>
                           <button className="text-[10px] uppercase tracking-wider font-bold text-white/30 group-hover:text-white/80 transition-colors px-2 py-1 rounded border border-white/5 group-hover:border-white/20 hover:bg-white/10">Action</button>
                        </div>
                     </div>
                  ))}
               </div>
               
               <button className="mt-auto w-full py-4 border-t border-white/5 text-center text-[12px] font-bold text-white/50 hover:text-white hover:bg-white/5 transition-all w-[calc(100%+48px)] -ml-6 -mb-8 relative z-10">
                 View Historical Records
               </button>
            </div>

         </div>
      </Reveal>

    </div>
  );
}

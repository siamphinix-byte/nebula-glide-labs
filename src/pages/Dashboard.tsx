import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import {
  Activity,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  DollarSign,
  DownloadCloud,
  FileCheck,
  FileText,
  MoreHorizontal,
  Plus,
  Target,
  UserPlus,
  Zap,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { useNavigate } from 'react-router-dom';

const progressData = [
  { name: 'Completed', value: 68, color: 'var(--color-brand-secondary)', patterned: false },
  { name: 'In Progress', value: 15, color: 'var(--color-brand-teal)', patterned: false },
  { name: 'Pending', value: 17, color: 'var(--color-brand-primary)', patterned: true },
];

const statCards = [
  {
    title: 'Hours Logged',
    value: '240',
    sub: '/350 target',
    delta: '+12 hrs this week',
    icon: Clock,
    tone: 'secondary',
    chart: 'hours',
  },
  {
    title: 'Files Shared',
    value: '42',
    sub: 'assets synced',
    delta: '9 updated today',
    icon: DownloadCloud,
    tone: 'primary',
    chart: 'files',
  },
  {
    title: 'Cost to Date',
    value: '$45.2k',
    sub: 'of $60k budget',
    delta: '75% allocated',
    icon: DollarSign,
    tone: 'teal',
    chart: 'cost',
  },
];

const teamData = [
  {
    name: 'Sarah Jenkins',
    role: 'GitHub Project Repository',
    status: 'Completed',
    initial: 'SJ',
    avatarTone: 'bg-[var(--color-brand-secondary)]',
    statusTone: 'bg-[var(--color-brand-secondary)]/10 text-[var(--color-brand-secondary)] border-[var(--color-brand-secondary)]/20',
  },
  {
    name: 'Marcus Chen',
    role: 'Develop Search & Filter',
    status: 'Pending',
    initial: 'MC',
    avatarTone: 'bg-[var(--color-brand-primary)]',
    statusTone: 'bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] border-[var(--color-brand-primary)]/20',
  },
  {
    name: 'Alex Rivera',
    role: 'Database Architecture',
    status: 'In Progress',
    initial: 'AR',
    avatarTone: 'bg-[var(--color-brand-teal)]',
    statusTone: 'bg-[var(--color-brand-teal)]/10 text-[var(--color-brand-teal)] border-[var(--color-brand-teal)]/20',
  },
];

const timelineData = [
  { title: 'Staging Env Updated', date: 'Nov 24, 2026', icon: FileCheck, type: 'Updated', status: 'completed' },
  { title: 'Design Review Added', date: 'Nov 28, 2026', icon: Activity, type: 'Added', status: 'pending' },
  { title: 'Invoice #1042 Paid', date: 'Dec 5, 2026', icon: FileText, type: 'Paid', status: 'completed' },
  { title: 'QA Automation Triggered', date: 'Dec 8, 2026', icon: Zap, type: 'Triggered', status: 'pending' },
];

const actionItems = [
  { title: 'Invoice #1042 Review', sub: 'Finance Department', time: '10:30 PM', icon: DollarSign, alert: true },
  { title: 'Approve PR #104', sub: 'GitHub Project Repository', time: '12:00 PM', icon: UserPlus, alert: false },
  { title: 'Design Handoff Sign-off', sub: 'Product Team', time: '02:30 PM', icon: CheckCircle2, alert: false },
];

const miniHoursData = [{ v: 10 }, { v: 25 }, { v: 15 }, { v: 30 }, { v: 28 }, { v: 45 }, { v: 55 }];
const miniCostData = [{ v: 400 }, { v: 300 }, { v: 600 }, { v: 800 }, { v: 500 }, { v: 900 }, { v: 1000 }];
const velocityData = [{ v: 30 }, { v: 40 }, { v: 38 }, { v: 52 }, { v: 56 }, { v: 64 }, { v: 70 }];

export function Dashboard() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredPie, setHoveredPie] = useState<number | null>(null);

  const filteredTimeline = useMemo(
    () => (activeFilter === 'Alerts' ? timelineData.filter((item) => item.status !== 'completed') : timelineData),
    [activeFilter],
  );

  return (
    <div className="max-w-[1400px] mx-auto space-y-6 pb-24 h-full font-sans animate-fade-in">
      <Reveal direction="down">
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5 md:p-6 shadow-2xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_10%,rgba(122,60,245,0.18),transparent_38%),radial-gradient(circle_at_100%_100%,rgba(28,219,186,0.12),transparent_40%)]" />
          <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/55">
              <span className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-white/70">Dashboard</span>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="rounded-md border border-[var(--color-brand-secondary)]/25 bg-[var(--color-brand-secondary)]/10 px-2.5 py-1 text-[var(--color-brand-secondary)]">
                Operational View
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate('/app/projects')}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-white/10"
              >
                Open Projects
              </button>
              <button
                onClick={() => navigate('/app/projects')}
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-brand-primary)]/45 bg-[var(--color-brand-primary)]/20 px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-[var(--color-brand-primary)]/30"
              >
                <Plus className="h-4 w-4 text-[var(--color-brand-secondary)]" /> Add Task
              </button>
            </div>
          </div>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          const toneClass =
            card.tone === 'secondary'
              ? 'text-[var(--color-brand-secondary)]'
              : card.tone === 'teal'
                ? 'text-[var(--color-brand-teal)]'
                : 'text-[var(--color-brand-primary)]';

          return (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-6 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/5 blur-2xl transition-all duration-300 group-hover:bg-white/10" />
              <div className="relative z-10 mb-6 flex items-start justify-between">
                <div className="flex items-center gap-2 text-white/55">
                  <Icon className={`h-4 w-4 ${toneClass}`} />
                  <span className="text-[13px] font-bold uppercase tracking-wider">{card.title}</span>
                </div>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/15 hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
              <div className="relative z-10 space-y-1">
                <div className="text-4xl font-black tracking-tighter text-white">
                  {card.value} <span className="text-base font-bold text-white/35">{card.sub}</span>
                </div>
                <p className={`text-[11px] font-bold ${toneClass}`}>{card.delta}</p>
              </div>

              {card.chart === 'hours' && (
                <div className="relative z-10 mt-5 h-12 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={miniHoursData}>
                      <defs>
                        <linearGradient id="hoursGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-brand-secondary)" stopOpacity={0.45} />
                          <stop offset="100%" stopColor="var(--color-brand-secondary)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Tooltip
                        cursor={false}
                        contentStyle={{
                          backgroundColor: 'var(--color-brand-bg)',
                          borderColor: 'rgba(255,255,255,0.12)',
                          borderRadius: '10px',
                          color: 'white',
                          fontSize: '12px',
                        }}
                      />
                      <Area type="monotone" dataKey="v" stroke="var(--color-brand-secondary)" strokeWidth={2} fill="url(#hoursGradient)" dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}

              {card.chart === 'cost' && (
                <div className="relative z-10 mt-5 h-12 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={miniCostData}>
                      <Tooltip
                        cursor={{ fill: 'rgba(255,255,255,0.06)' }}
                        contentStyle={{
                          backgroundColor: 'var(--color-brand-bg)',
                          borderColor: 'rgba(255,255,255,0.12)',
                          borderRadius: '10px',
                          color: 'white',
                          fontSize: '12px',
                        }}
                      />
                      <Bar dataKey="v" fill="var(--color-brand-teal)" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}

              {card.chart === 'files' && (
                <div className="relative z-10 mt-5 flex items-center justify-end gap-2">
                  {['PNG', 'PDF', 'FIG'].map((type) => (
                    <div
                      key={type}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-[10px] font-bold text-white"
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </article>
          );
        })}

        <article className="group relative overflow-hidden rounded-2xl border border-[var(--color-brand-primary)]/30 bg-[var(--color-brand-primary)]/20 p-6 shadow-xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--color-brand-primary)]/30 via-transparent to-[var(--color-brand-teal)]/10" />
          <div className="relative z-10 mb-6 flex items-start justify-between">
            <div className="flex items-center gap-2 text-white/80">
              <Target className="h-4 w-4 text-[var(--color-brand-secondary)]" />
              <span className="text-[13px] font-bold uppercase tracking-wider">Next Milestone</span>
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white hover:text-[var(--color-brand-bg)]">
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <p className="text-[30px] font-black leading-none tracking-tight text-white">Beta Release</p>
          <p className="mt-3 flex items-center gap-2 text-[12px] font-bold text-white/75">
            <Calendar className="h-3.5 w-3.5" /> Oct 24, 2026
          </p>
          <div className="mt-5 h-12 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={velocityData}>
                <defs>
                  <linearGradient id="velocityGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-brand-primary)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--color-brand-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area dataKey="v" stroke="var(--color-brand-primary)" strokeWidth={2} fill="url(#velocityGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </article>
      </StaggerReveal>

      <Reveal delay={0.2}>
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_1fr]">
          <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-6 md:p-8 shadow-xl">
            <header className="mb-8 flex items-center justify-between">
              <h2 className="text-[16px] font-bold text-white">Project Progress Topology</h2>
              <button className="text-[12px] font-medium text-white/50 transition-colors hover:text-white">Detailed Report</button>
            </header>

            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="relative mx-auto flex h-[220px] w-[220px] items-end justify-center">
                <ResponsiveContainer width="100%" height={240} className="absolute bottom-[-14px]">
                  <PieChart>
                    <defs>
                      <pattern id="progressStripes" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                        <rect width="8" height="8" fill="var(--color-brand-bg)" />
                        <line x1="0" y1="0" x2="0" y2="8" stroke="white" strokeWidth="1" strokeOpacity="0.25" />
                      </pattern>
                    </defs>
                    <Pie
                      data={progressData}
                      cx="50%"
                      cy="100%"
                      startAngle={180}
                      endAngle={0}
                      innerRadius="74%"
                      outerRadius="100%"
                      paddingAngle={3}
                      dataKey="value"
                      stroke="none"
                      cornerRadius={6}
                      onMouseEnter={(_, index) => setHoveredPie(index)}
                      onMouseLeave={() => setHoveredPie(null)}
                    >
                      {progressData.map((entry, index) => (
                        <Cell
                          key={entry.name}
                          fill={entry.patterned ? 'url(#progressStripes)' : entry.color}
                          opacity={hoveredPie === null || hoveredPie === index ? 1 : 0.35}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute bottom-4 text-center">
                  <p className="text-5xl font-black leading-none tracking-tighter text-white">68%</p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">Completion</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-center gap-4 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                {progressData.map((item, i) => (
                  <div
                    key={item.name}
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-transparent bg-white/0 p-3 transition-all hover:border-white/10 hover:bg-white/5"
                    onMouseEnter={() => setHoveredPie(i)}
                    onMouseLeave={() => setHoveredPie(null)}
                  >
                    <div className="flex items-center gap-3">
                      {item.patterned ? (
                        <span className="h-3.5 w-3.5 rounded-full border border-white/20 bg-[repeating-linear-gradient(45deg,rgba(122,60,245,0.95)_0px,rgba(122,60,245,0.95)_3px,rgba(122,60,245,0.25)_3px,rgba(122,60,245,0.25)_6px)]" />
                      ) : (
                        <span className="h-3.5 w-3.5 rounded-full" style={{ background: item.color }} />
                      )}
                      <span className="text-[13px] font-bold text-white/85">{item.name}</span>
                    </div>
                    <span className="text-[12px] font-semibold text-white/55">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-6 md:p-8 shadow-xl">
            <header className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-[16px] font-bold text-white">Team Operations</h2>
                <p className="mt-1 text-[12px] text-white/45">Cross-functional task distribution</p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-[12px] font-bold text-white transition-colors hover:bg-white/10">
                <Plus className="h-3.5 w-3.5 text-[var(--color-brand-secondary)]" /> Add Member
              </button>
            </header>

            <div className="space-y-3">
              {teamData.map((member) => (
                <div
                  key={member.name}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`relative flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-bold text-[var(--color-brand-bg)] ${member.avatarTone}`}>
                      {member.initial}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-white">{member.name}</p>
                      <p className="line-clamp-1 text-[11px] font-medium text-white/50">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`rounded-md border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${member.statusTone}`}>
                      {member.status}
                    </span>
                    <button className="hidden h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition-colors hover:bg-white/10 hover:text-white sm:flex">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </Reveal>

      <Reveal delay={0.3}>
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-6 md:p-8 shadow-xl">
            <header className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="flex items-center gap-2 text-[16px] font-bold text-white">
                <Activity className="h-4 w-4 text-[var(--color-brand-secondary)]" /> System Event Log
              </h2>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[var(--color-brand-bg)] p-1">
                {['All', 'Alerts'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-md px-3 py-1.5 text-[11px] font-bold transition-all ${
                      activeFilter === filter ? 'bg-white/10 text-white' : 'text-white/45 hover:text-white/80'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </header>

            <div className="relative space-y-7 pl-6">
              <div className="absolute bottom-3 left-[38px] top-4 w-px bg-gradient-to-b from-[var(--color-brand-secondary)]/30 via-white/15 to-transparent" />
              {filteredTimeline.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={`${item.title}-${item.date}`} className="group relative flex items-start gap-5">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[var(--color-brand-bg)] text-white shadow-lg transition-all group-hover:scale-105 group-hover:border-white/20">
                      <Icon className="h-4 w-4 text-[var(--color-brand-secondary)]" />
                    </div>
                    <div className="flex-1 border-b border-white/10 pb-5 pt-1 group-last:border-b-0">
                      <p className="text-[14px] font-bold text-white/90">
                        {item.title} <span className="text-[var(--color-brand-secondary)]">{item.type}</span>
                      </p>
                      <p className="mt-1 flex items-center gap-2 text-[12px] text-white/45">
                        <Clock className="h-3 w-3" /> Due date: {item.date}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-6 md:p-8 shadow-xl">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-brand-primary)]/10 via-transparent to-transparent" />
            <header className="relative z-10 mb-8 flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="text-[16px] font-bold text-white">Pending Action Items</h2>
              <button className="flex items-center gap-1 text-[12px] font-bold text-[var(--color-brand-secondary)] transition-opacity hover:opacity-80">
                Resolve All <ArrowUpRight className="h-3 w-3" />
              </button>
            </header>

            <div className="relative z-10 space-y-4">
              {actionItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-white/10 bg-[var(--color-brand-bg)] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--color-brand-secondary)]">
                        <Icon className="h-4 w-4" />
                        {item.alert && (
                          <span className="absolute -right-1 -top-1 flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-brand-primary)] opacity-70" />
                            <span className="relative inline-flex h-3 w-3 rounded-full border border-[var(--color-brand-bg)] bg-[var(--color-brand-primary)]" />
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="text-[14px] font-bold text-white transition-colors group-hover:text-[var(--color-brand-secondary)]">{item.title}</p>
                        <p className="text-[11px] font-medium text-white/50">{item.sub}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-[11px] font-medium text-white/45">{item.time}</span>
                      <button className="rounded border border-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white/40 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white">
                        Action
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="relative z-10 mt-6 w-full rounded-xl border border-white/10 py-3 text-center text-[12px] font-bold text-white/60 transition-all hover:bg-white/5 hover:text-white">
              View Historical Records
            </button>
          </article>
        </section>
      </Reveal>
    </div>
  );
}

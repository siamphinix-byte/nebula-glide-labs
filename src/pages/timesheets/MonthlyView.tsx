import React, { useMemo, useState } from 'react';
import { Reveal } from '../../components/GSAPWrapper';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, TrendingUp } from 'lucide-react';
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type ProjectStat = {
  name: string;
  total: number;
  billable: number;
};

type MonthData = {
  label: string;
  workingDays: number;
  projects: ProjectStat[];
  weekly: { label: string; entries: number; total: number; billable: number }[];
};

const monthlyData: MonthData[] = [
  {
    label: 'March 2026',
    workingDays: 22,
    projects: [
      { name: 'Analytics System', total: 402.4, billable: 320.2 },
      { name: 'Security Audit', total: 34.1, billable: 31.5 },
      { name: 'Payment Integration', total: 16.2, billable: 13.2 },
      { name: 'AI Chatbot', total: 12.8, billable: 11.2 },
      { name: 'Customer Portal', total: 8.1, billable: 6.9 },
    ],
    weekly: [
      { label: 'Week 1', entries: 42, total: 108.4, billable: 88.2 },
      { label: 'Week 2', entries: 39, total: 97.3, billable: 77.5 },
      { label: 'Week 3', entries: 48, total: 115.1, billable: 89.2 },
      { label: 'Week 4', entries: 34, total: 93.8, billable: 74.1 },
    ],
  },
  {
    label: 'April 2026',
    workingDays: 21,
    projects: [
      { name: 'Analytics System', total: 420.0, billable: 328.0 },
      { name: 'Security Audit', total: 25.1, billable: 25.1 },
      { name: 'Performance Suite', total: 13.5, billable: 11.5 },
      { name: 'Admin Dashboard', total: 12.0, billable: 9.0 },
      { name: 'Payment Integration', total: 9.0, billable: 8.0 },
      { name: 'AI Chatbot', total: 9.0, billable: 9.0 },
      { name: 'Inventory System', total: 7.0, billable: 7.0 },
      { name: 'CRM Enhancement', total: 6.0, billable: 4.0 },
      { name: 'Data Warehouse', total: 6.0, billable: 5.0 },
      { name: 'Mobile Banking App', total: 4.0, billable: 3.0 },
      { name: 'Customer Portal', total: 4.0, billable: 4.0 },
      { name: 'API Gateway', total: 4.0, billable: 3.0 },
    ],
    weekly: [
      { label: 'Week 1', entries: 37, total: 101.5, billable: 83.2 },
      { label: 'Week 2', entries: 41, total: 112.4, billable: 90.1 },
      { label: 'Week 3', entries: 46, total: 119.2, billable: 97.5 },
      { label: 'Week 4', entries: 33, total: 95.5, billable: 74.8 },
      { label: 'Week 5', entries: 22, total: 44.9, billable: 36.0 },
    ],
  },
  {
    label: 'May 2026',
    workingDays: 22,
    projects: [
      { name: 'Analytics System', total: 388.3, billable: 300.1 },
      { name: 'Security Audit', total: 21.7, billable: 20.2 },
      { name: 'AI Chatbot', total: 14.5, billable: 13.4 },
      { name: 'Customer Portal', total: 12.8, billable: 11.5 },
      { name: 'API Gateway', total: 9.2, billable: 8.0 },
    ],
    weekly: [
      { label: 'Week 1', entries: 35, total: 96.4, billable: 74.3 },
      { label: 'Week 2', entries: 40, total: 108.7, billable: 86.1 },
      { label: 'Week 3', entries: 44, total: 114.5, billable: 92.7 },
      { label: 'Week 4', entries: 39, total: 105.2, billable: 80.9 },
    ],
  },
];

const formatHours = (value: number) => `${value.toFixed(1)}h`;

export function MonthlyView() {
  const [monthIndex, setMonthIndex] = useState(1);
  const [search, setSearch] = useState('');

  const currentMonth = monthlyData[monthIndex];

  const filteredProjects = useMemo(
    () => currentMonth.projects.filter((project) => project.name.toLowerCase().includes(search.toLowerCase())),
    [currentMonth.projects, search],
  );

  const totalHours = useMemo(() => currentMonth.projects.reduce((sum, project) => sum + project.total, 0), [currentMonth.projects]);
  const billableHours = useMemo(
    () => currentMonth.projects.reduce((sum, project) => sum + project.billable, 0),
    [currentMonth.projects],
  );
  const entries = useMemo(() => currentMonth.weekly.reduce((sum, week) => sum + week.entries, 0), [currentMonth.weekly]);
  const avgDay = totalHours / currentMonth.workingDays;
  const utilization = Math.round((avgDay / 8) * 100);
  const billableRate = totalHours > 0 ? Math.round((billableHours / totalHours) * 100) : 0;

  const pieData = [
    { name: 'Billable', value: Number(billableHours.toFixed(1)), fill: 'var(--color-brand-teal)' },
    { name: 'Non-Billable', value: Number((totalHours - billableHours).toFixed(1)), fill: 'var(--color-brand-primary)' },
  ];

  return (
    <div className="mx-auto max-w-[1400px] space-y-6 pb-24 font-sans animate-fade-in">
      <Reveal direction="down">
        <div className="mb-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-black tracking-tight text-white">Monthly View</h1>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-4 shadow-xl md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMonthIndex((prev) => Math.max(0, prev - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[var(--color-brand-bg)] text-white/70 transition-colors hover:bg-white/10 disabled:opacity-30"
              disabled={monthIndex === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
              {currentMonth.label}
              {monthIndex === 1 && (
                <span className="rounded-full border border-[var(--color-brand-teal)]/35 bg-[var(--color-brand-teal)]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-brand-teal)]">
                  Current Month
                </span>
              )}
            </h2>
            <button
              onClick={() => setMonthIndex((prev) => Math.min(monthlyData.length - 1, prev + 1))}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[var(--color-brand-bg)] text-white/70 transition-colors hover:bg-white/10 disabled:opacity-30"
              disabled={monthIndex === monthlyData.length - 1}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter projects"
            className="w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-[var(--color-brand-primary)] md:w-[260px]"
          />
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-2 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5 shadow-lg">
            <div className="mb-2 flex items-center gap-2 text-[13px] font-bold text-[var(--color-brand-secondary)]">
              <Clock className="h-4 w-4" /> Total Hours
            </div>
            <p className="text-4xl font-black tracking-tight text-white">{formatHours(totalHours)}</p>
            <p className="mt-1 text-[11px] text-white/45">{avgDay.toFixed(1)}h avg/day</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5 shadow-lg">
            <div className="mb-2 flex items-center gap-2 text-[13px] font-bold text-[var(--color-brand-teal)]">
              <CalendarIcon className="h-4 w-4" /> Billable Hours
            </div>
            <p className="text-4xl font-black tracking-tight text-[var(--color-brand-teal)]">{formatHours(billableHours)}</p>
            <p className="mt-1 text-[11px] text-white/45">{billableRate}% of total</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5 shadow-lg">
            <div className="mb-2 flex items-center gap-2 text-[13px] font-bold text-[var(--color-brand-primary)]">
              <TrendingUp className="h-4 w-4" /> Entries
            </div>
            <p className="text-4xl font-black tracking-tight text-[var(--color-brand-primary)]">{entries}</p>
            <p className="mt-1 text-[11px] text-white/45">{currentMonth.workingDays} working days</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5 shadow-lg">
            <div className="mb-2 text-[13px] font-bold text-[var(--color-brand-secondary)]">Utilization</div>
            <p className="text-4xl font-black tracking-tight text-[var(--color-brand-secondary)]">{utilization}%</p>
            <p className="mt-1 text-[11px] text-white/45">Based on 8h/day</p>
          </article>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-6 shadow-2xl">
            <h3 className="mb-4 text-3xl font-black tracking-tight text-white">Project Breakdown</h3>
            <div className="mb-5 h-[190px] rounded-xl border border-white/10 bg-[var(--color-brand-bg)]/50 p-3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={filteredProjects.slice(0, 6).map((project) => ({ name: project.name.split(' ')[0], total: project.total }))}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} />
                  <Tooltip
                    cursor={{ fill: 'rgba(255,255,255,.04)' }}
                    contentStyle={{ backgroundColor: 'var(--color-brand-bg)', borderColor: 'rgba(255,255,255,.15)', borderRadius: 10, color: 'white' }}
                  />
                  <Bar dataKey="total" radius={[6, 6, 0, 0]} fill="var(--color-brand-primary)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="max-h-[620px] space-y-5 overflow-y-auto pr-1">
              {filteredProjects.map((project) => {
                const share = totalHours > 0 ? Math.max(1, Math.round((project.total / totalHours) * 100)) : 0;
                const nonBillable = Math.max(0, project.total - project.billable);
                return (
                  <article key={project.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[15px] font-bold text-white">{project.name}</span>
                      <span className="text-[13px] text-white/55">
                        {formatHours(project.total)} ({share}%)
                      </span>
                    </div>
                    <div className="mb-2 h-2 overflow-hidden rounded-full border border-white/10 bg-[var(--color-brand-bg)]">
                      <div className="h-full rounded-full bg-[var(--color-brand-primary)]" style={{ width: `${share}%` }} />
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-white/45">
                      <span>Billable: {formatHours(project.billable)}</span>
                      <span>Non-billable: {formatHours(nonBillable)}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-6 shadow-2xl">
            <h3 className="mb-4 text-3xl font-black tracking-tight text-white">Weekly Breakdown</h3>
            <div className="mb-4 h-[220px] rounded-xl border border-white/10 bg-[var(--color-brand-bg)]/50 p-3">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} dataKey="value" innerRadius={45} outerRadius={70} paddingAngle={5} stroke="none">
                    {pieData.map((part) => (
                      <Cell key={part.name} fill={part.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: 'var(--color-brand-bg)', borderColor: 'rgba(255,255,255,.15)', borderRadius: 10, color: 'white' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              {currentMonth.weekly.map((week) => (
                <article
                  key={week.label}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-[var(--color-brand-bg)]/60 p-4 transition-colors hover:bg-white/5"
                >
                  <div>
                    <p className="text-[16px] font-bold tracking-tight text-white">{week.label}</p>
                    <p className="text-[12px] text-white/45">{week.entries} entries</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[20px] font-black text-[var(--color-brand-secondary)]">{formatHours(week.total)}</p>
                    <p className="text-[12px] font-semibold text-[var(--color-brand-teal)]">{formatHours(week.billable)} billable</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </Reveal>
    </div>
  );
}

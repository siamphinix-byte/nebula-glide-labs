import React, { useEffect, useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import {
  Check,
  Clock3,
  Edit,
  Filter,
  Grid,
  List,
  Pause,
  Play,
  Plus,
  Search,
  Send,
  TimerReset,
  Trash2,
  User,
} from 'lucide-react';
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type TimesheetStatus = 'Draft' | 'Submitted' | 'Approved';

type TimesheetRow = {
  id: number;
  weekOf: string;
  status: TimesheetStatus;
  user: string;
  totalHrs: number;
  billableHrs: number;
  period: string;
  entries: number;
};

const initialTimesheets: TimesheetRow[] = [
  { id: 1, weekOf: '3/8/2026', status: 'Submitted', user: 'WorkDo', totalHrs: 1, billableHrs: 1, period: '3/8/2026 - 3/9/2026', entries: 1 },
  { id: 2, weekOf: '2/24/2026', status: 'Draft', user: 'WorkDo', totalHrs: 3, billableHrs: 3, period: '2/24/2026 - 3/6/2026', entries: 2 },
  { id: 3, weekOf: '2/24/2026', status: 'Draft', user: 'WorkDo', totalHrs: 4, billableHrs: 4, period: '2/24/2026 - 2/27/2026', entries: 2 },
  { id: 4, weekOf: '3/8/2026', status: 'Submitted', user: 'WorkDo', totalHrs: 4, billableHrs: 4, period: '3/8/2026 - 3/10/2026', entries: 2 },
  { id: 5, weekOf: '2/24/2026', status: 'Draft', user: 'WorkDo', totalHrs: 1, billableHrs: 1, period: '2/24/2026 - 2/27/2026', entries: 1 },
  { id: 6, weekOf: '2/28/2026', status: 'Draft', user: 'WorkDo', totalHrs: 2, billableHrs: 2, period: '2/28/2026 - 3/1/2026', entries: 2 },
  { id: 7, weekOf: '3/15/2026', status: 'Draft', user: 'WorkDo', totalHrs: 2, billableHrs: 2, period: '3/15/2026 - 3/16/2026', entries: 1 },
  { id: 8, weekOf: '3/13/2026', status: 'Draft', user: 'WorkDo', totalHrs: 3, billableHrs: 3, period: '3/13/2026 - 3/14/2026', entries: 1 },
  { id: 9, weekOf: '2/26/2026', status: 'Draft', user: 'WorkDo', totalHrs: 2, billableHrs: 2, period: '2/26/2026 - 2/28/2026', entries: 3 },
  { id: 10, weekOf: '2/26/2026', status: 'Approved', user: 'WorkDo', totalHrs: 7.5, billableHrs: 7.5, period: '2/26/2026 - 2/28/2026', entries: 4 },
  { id: 11, weekOf: '2/28/2026', status: 'Approved', user: 'WorkDo', totalHrs: 5.25, billableHrs: 5.25, period: '2/28/2026 - 3/1/2026', entries: 2 },
  { id: 12, weekOf: '3/2/2026', status: 'Draft', user: 'WorkDo', totalHrs: 2.5, billableHrs: 2.5, period: '3/2/2026 - 3/2/2026', entries: 1 },
];

const weeklyTrend = [
  { week: 'W1', hours: 22 },
  { week: 'W2', hours: 31 },
  { week: 'W3', hours: 28 },
  { week: 'W4', hours: 35 },
  { week: 'W5', hours: 39 },
  { week: 'W6', hours: 33 },
];

const projects = ['Website Redesign', 'Admin Portal', 'Mobile App', 'Landing Optimization'];
const tasks = ['UI Build', 'Frontend Integration', 'Testing', 'Content Updates'];

const statusFill: Record<TimesheetStatus, string> = {
  Draft: 'var(--color-brand-primary)',
  Submitted: 'var(--color-brand-secondary)',
  Approved: 'var(--color-brand-teal)',
};

const statusPill: Record<TimesheetStatus, string> = {
  Draft: 'border-white/15 bg-white/5 text-white/70',
  Submitted: 'border-[var(--color-brand-secondary)]/20 bg-[var(--color-brand-secondary)]/10 text-[var(--color-brand-secondary)]',
  Approved: 'border-[var(--color-brand-teal)]/20 bg-[var(--color-brand-teal)]/10 text-[var(--color-brand-teal)]',
};

const toHourText = (value: number) => `${value.toFixed(2)}h`;
const toClock = (seconds: number) => {
  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, '0');
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${h}:${m}:${s}`;
};

export function Timesheets() {
  const [timesheets, setTimesheets] = useState<TimesheetRow[]>(initialTimesheets);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | TimesheetStatus>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [perPage, setPerPage] = useState(12);
  const [page, setPage] = useState(1);

  const [selectedProject, setSelectedProject] = useState('');
  const [selectedTask, setSelectedTask] = useState('');
  const [workNote, setWorkNote] = useState('');
  const [elapsed, setElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (!timerRunning) return;
    const interval = window.setInterval(() => setElapsed((prev) => prev + 1), 1000);
    return () => window.clearInterval(interval);
  }, [timerRunning]);

  const filtered = useMemo(() => {
    return timesheets.filter((row) => {
      const matchesStatus = statusFilter === 'All' || row.status === statusFilter;
      const term = query.toLowerCase();
      const matchesSearch =
        row.weekOf.toLowerCase().includes(term) ||
        row.user.toLowerCase().includes(term) ||
        row.period.toLowerCase().includes(term) ||
        row.status.toLowerCase().includes(term);
      return matchesStatus && matchesSearch;
    });
  }, [query, statusFilter, timesheets]);

  const paged = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page, perPage]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));

  useEffect(() => {
    setPage(1);
  }, [query, statusFilter, perPage]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const totalTimesheets = timesheets.length;
  const draftCount = timesheets.filter((t) => t.status === 'Draft').length;
  const submittedCount = timesheets.filter((t) => t.status === 'Submitted').length;
  const approvedCount = timesheets.filter((t) => t.status === 'Approved').length;
  const weekHours = timesheets.reduce((sum, t) => sum + t.totalHrs, 0);

  const statusChartData = [
    { name: 'Draft', value: draftCount, fill: statusFill.Draft },
    { name: 'Submitted', value: submittedCount, fill: statusFill.Submitted },
    { name: 'Approved', value: approvedCount, fill: statusFill.Approved },
  ];

  const canStart = selectedProject && selectedTask && workNote.trim().length > 0;

  const handleStartStop = () => {
    if (!timerRunning && !canStart) return;
    setTimerRunning((prev) => !prev);
  };

  const handleSaveTimerAsDraft = () => {
    if (elapsed === 0) return;
    const newHours = Number((elapsed / 3600).toFixed(2));
    setTimesheets((prev) => [
      {
        id: prev.length + 100,
        weekOf: new Date().toLocaleDateString(),
        status: 'Draft',
        user: 'WorkDo',
        totalHrs: newHours,
        billableHrs: newHours,
        period: `${new Date().toLocaleDateString()} - ${new Date().toLocaleDateString()}`,
        entries: 1,
      },
      ...prev,
    ]);
    setTimerRunning(false);
    setElapsed(0);
    setWorkNote('');
  };

  const handleSubmit = (id: number) => {
    setTimesheets((prev) => prev.map((row) => (row.id === id ? { ...row, status: 'Submitted' } : row)));
  };

  const handleDelete = (id: number) => {
    setTimesheets((prev) => prev.filter((row) => row.id !== id));
  };

  return (
    <div className="mx-auto max-w-[1400px] space-y-6 pb-24 font-sans animate-fade-in">
      <Reveal direction="down">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white">Timesheets</h1>
            <p className="mt-1 text-sm text-white/55">Track work time, submit logs, and monitor utilization.</p>
          </div>
          <button
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-brand-secondary)]/35 bg-[var(--color-brand-secondary)] px-5 py-2.5 text-sm font-bold text-[var(--color-brand-bg)] transition-all hover:scale-[1.02] hover:bg-[var(--color-brand-secondary)]/90"
            onClick={handleSaveTimerAsDraft}
          >
            <Plus className="h-4 w-4" /> Save Timer as Draft
          </button>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <section className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-4 shadow-xl lg:grid-cols-5">
          {[{ label: 'Total Timesheets', value: totalTimesheets, color: 'text-[var(--color-brand-primary)]' },
            { label: 'Draft', value: draftCount, color: 'text-white' },
            { label: 'Submitted', value: submittedCount, color: 'text-[var(--color-brand-secondary)]' },
            { label: 'Approved', value: approvedCount, color: 'text-[var(--color-brand-teal)]' },
            { label: 'Total Hours', value: `${weekHours.toFixed(1)}h`, color: 'text-[var(--color-brand-primary)] col-span-2 lg:col-span-1' }].map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-white/5 bg-black/10 p-4 text-center">
              <p className={`text-3xl font-black tracking-tight ${kpi.color}`}>{kpi.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/55">{kpi.label}</p>
            </div>
          ))}
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.3fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-lg font-bold text-white"><Clock3 className="h-5 w-5 text-[var(--color-brand-secondary)]" /> Timer</h2>
              <span className="font-mono text-2xl font-bold tracking-[0.15em] text-white">{toClock(elapsed)}</span>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
              <div className="relative">
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--color-brand-primary)]"
                >
                  <option value="">Select project *</option>
                  {projects.map((project) => (
                    <option key={project} value={project}>{project}</option>
                  ))}
                </select>
                <ChevronIcon />
              </div>
              <div className="relative">
                <select
                  value={selectedTask}
                  onChange={(e) => setSelectedTask(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--color-brand-primary)]"
                >
                  <option value="">Select task *</option>
                  {tasks.map((task) => (
                    <option key={task} value={task}>{task}</option>
                  ))}
                </select>
                <ChevronIcon />
              </div>
              <input
                value={workNote}
                onChange={(e) => setWorkNote(e.target.value)}
                placeholder="What are you working on?"
                className="rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[var(--color-brand-primary)]"
              />
              <div className="flex items-center gap-2">
                <button
                  onClick={handleStartStop}
                  disabled={!timerRunning && !canStart}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--color-brand-teal)]/40 bg-[var(--color-brand-teal)]/20 px-4 py-3 text-sm font-bold text-[var(--color-brand-teal)] transition-all hover:scale-[1.02] hover:bg-[var(--color-brand-teal)]/30 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {timerRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />} {timerRunning ? 'Pause' : 'Start'}
                </button>
                <button
                  onClick={() => {
                    setTimerRunning(false);
                    setElapsed(0);
                  }}
                  className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  title="Reset timer"
                >
                  <TimerReset className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5 shadow-xl">
            <header className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/75">Status Distribution</h3>
              <span className="text-xs text-white/45">Detailed Report</span>
            </header>
            <div className="grid grid-cols-[130px_1fr] items-center gap-3">
              <div className="h-[130px] w-[130px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={statusChartData} dataKey="value" innerRadius={38} outerRadius={58} paddingAngle={4} stroke="none">
                      {statusChartData.map((entry) => (
                        <Cell key={entry.name} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'var(--color-brand-bg)',
                        borderColor: 'rgba(255,255,255,0.15)',
                        borderRadius: '10px',
                        color: 'white',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {statusChartData.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-white/75">
                      <span>{item.name}</span>
                      <span>{item.value}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10">
                      <div className="h-1.5 rounded-full" style={{ width: `${Math.max(8, (item.value / totalTimesheets) * 100)}%`, backgroundColor: item.fill }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5 shadow-xl">
          <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative w-full sm:w-[280px]">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search timesheets..."
                  className="w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] py-2.5 pl-10 pr-4 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[var(--color-brand-primary)]"
                />
              </div>
              <div className="relative">
                <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as 'All' | TimesheetStatus)}
                  className="appearance-none rounded-xl border border-white/15 bg-[var(--color-brand-bg)] py-2.5 pl-10 pr-10 text-sm text-white outline-none transition-colors focus:border-[var(--color-brand-primary)]"
                >
                  <option value="All">All Status</option>
                  <option value="Draft">Draft</option>
                  <option value="Submitted">Submitted</option>
                  <option value="Approved">Approved</option>
                </select>
                <ChevronIcon small />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex rounded-xl border border-white/15 bg-[var(--color-brand-bg)] p-1">
                <button
                  onClick={() => setViewMode('list')}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-[var(--color-brand-primary)] text-white' : 'text-white/55 hover:text-white'
                  }`}
                  title="List view"
                >
                  <List className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-[var(--color-brand-secondary)] text-[var(--color-brand-bg)]' : 'text-white/55 hover:text-white'
                  }`}
                  title="Grid view"
                >
                  <Grid className="h-4 w-4" />
                </button>
              </div>
              <label className="flex items-center gap-2 text-xs font-semibold text-white/55">
                Per Page:
                <div className="relative">
                  <select
                    value={perPage}
                    onChange={(e) => setPerPage(Number(e.target.value))}
                    className="appearance-none rounded-xl border border-white/15 bg-[var(--color-brand-bg)] py-1.5 pl-3 pr-8 text-sm text-white outline-none transition-colors focus:border-[var(--color-brand-primary)]"
                  >
                    <option value={6}>6</option>
                    <option value={12}>12</option>
                    <option value={18}>18</option>
                  </select>
                  <ChevronIcon small />
                </div>
              </label>
            </div>
          </div>

          <div className="mb-4 h-[180px] rounded-xl border border-white/10 bg-[var(--color-brand-bg)]/50 p-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyTrend}>
                <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 12 }} />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{
                    backgroundColor: 'var(--color-brand-bg)',
                    borderColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '10px',
                    color: 'white',
                  }}
                />
                <Bar dataKey="hours" fill="var(--color-brand-primary)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <StaggerReveal className={viewMode === 'grid' ? 'grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3' : 'space-y-3'}>
            {paged.map((t) => (
              <article
                key={t.id}
                className={`group rounded-2xl border border-white/10 bg-[var(--color-brand-bg)]/55 p-5 transition-all duration-300 hover:border-white/20 ${
                  viewMode === 'list' ? 'flex flex-col gap-3 md:flex-row md:items-center md:justify-between' : ''
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="truncate text-xl font-bold tracking-tight text-white">Week of {t.weekOf}</h3>
                    <span className={`rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${statusPill[t.status]}`}>{t.status}</span>
                  </div>
                  <p className="mb-3 flex items-center gap-2 text-sm text-white/50"><User className="h-4 w-4" /> {t.user}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between text-white/70"><span>Total Hours</span><span className="font-bold text-white">{toHourText(t.totalHrs)}</span></div>
                    <div className="flex items-center justify-between"><span className="text-white/70">Billable Hours</span><span className="font-bold text-[var(--color-brand-teal)]">{toHourText(t.billableHrs)}</span></div>
                    <div className="flex items-center justify-between text-white/55"><span>Period</span><span>{t.period}</span></div>
                    <div className="flex items-center justify-between text-white/55"><span>Entries</span><span>{t.entries}</span></div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4 md:mt-0 md:min-w-[180px] md:border-t-0 md:pt-0">
                  <div className="flex items-center gap-2">
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--color-brand-secondary)] transition-colors hover:bg-white/10" title="Edit">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--color-brand-primary)] transition-colors hover:bg-white/10"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  {t.status === 'Draft' ? (
                    <button
                      onClick={() => handleSubmit(t.id)}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-secondary)]/35 bg-[var(--color-brand-secondary)] px-3.5 py-1.5 text-xs font-bold text-[var(--color-brand-bg)] transition-all hover:scale-[1.02]"
                    >
                      <Send className="h-3.5 w-3.5" /> Submit
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-brand-teal)]/25 bg-[var(--color-brand-teal)]/10 px-3 py-1 text-xs font-bold text-[var(--color-brand-teal)]">
                      <Check className="h-3.5 w-3.5" /> Active
                    </span>
                  )}
                </div>
              </article>
            ))}
          </StaggerReveal>

          <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-xl border border-white/10 bg-[var(--color-brand-bg)]/50 px-4 py-3 text-sm text-white/55 sm:flex-row sm:items-center">
            <span>
              Showing {(page - 1) * perPage + (paged.length ? 1 : 0)} to {(page - 1) * perPage + paged.length} of {filtered.length} timesheets
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-white transition-colors hover:bg-white/10"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .slice(0, 5)
                .map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`h-8 w-8 rounded-lg border text-sm font-bold transition-colors ${
                      page === n
                        ? 'border-[var(--color-brand-secondary)] bg-[var(--color-brand-secondary)] text-[var(--color-brand-bg)]'
                        : 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-white transition-colors hover:bg-white/10"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

const ChevronIcon = ({ small }: { small?: boolean }) => (
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white/45">
    <svg className={`fill-current ${small ? 'h-3.5 w-3.5' : 'h-4 w-4'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
    </svg>
  </div>
);

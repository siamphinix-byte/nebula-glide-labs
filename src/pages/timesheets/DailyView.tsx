import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import {
  Calendar as CalendarIcon,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Edit,
  Filter,
  Plus,
  Search,
  Trash2,
} from 'lucide-react';
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type Entry = {
  id: number;
  date: string;
  project: string;
  task: string;
  hours: number;
  billable: boolean;
};

const initialEntries: Entry[] = [
  { id: 1, date: '3/8/2026', project: 'Security Audit', task: 'Security Vulnerability Assessment', hours: 1, billable: true },
  { id: 2, date: '2/24/2026', project: 'Analytics System', task: 'Third-party Integration', hours: 2, billable: true },
  { id: 3, date: '2/24/2026', project: 'Analytics System', task: 'Bug Fix Implementation', hours: 1, billable: true },
  { id: 4, date: '2/24/2026', project: 'API Gateway', task: 'Bug Fix Implementation', hours: 1, billable: true },
  { id: 5, date: '2/24/2026', project: 'API Gateway', task: 'Payment Gateway Integration', hours: 3, billable: true },
  { id: 6, date: '2/24/2026', project: 'API Gateway', task: 'Bug Fix Implementation', hours: 1, billable: false },
  { id: 7, date: '2/24/2026', project: 'API Gateway', task: 'Payment Gateway Integration', hours: 3, billable: true },
  { id: 8, date: '3/8/2026', project: 'Customer Portal', task: 'Third-party Integration', hours: 1, billable: true },
  { id: 9, date: '3/8/2026', project: 'Customer Portal', task: 'Security Vulnerability Assessment', hours: 3, billable: true },
  { id: 10, date: '2/24/2026', project: 'Mobile Banking App', task: 'API Endpoint Development', hours: 1, billable: true },
  { id: 11, date: '2/28/2026', project: 'Data Warehouse', task: 'Security Vulnerability Assessment', hours: 1, billable: false },
  { id: 12, date: '2/28/2026', project: 'Data Warehouse', task: 'Data Migration Script', hours: 1, billable: true },
];

const dailyTrend = [
  { slot: '09:00', hours: 1 },
  { slot: '11:00', hours: 2 },
  { slot: '13:00', hours: 1.5 },
  { slot: '15:00', hours: 3 },
  { slot: '17:00', hours: 2.5 },
  { slot: '19:00', hours: 1 },
];

const formatHours = (h: number) => `${h.toFixed(2)}h`;

export function DailyView() {
  const [entries, setEntries] = useState<Entry[]>(initialEntries);
  const [query, setQuery] = useState('');
  const [showBillableOnly, setShowBillableOnly] = useState(false);
  const [currentDate, setCurrentDate] = useState('04/23/2026');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const filtered = useMemo(() => {
    return entries.filter((entry) => {
      const term = query.toLowerCase();
      const hit =
        entry.project.toLowerCase().includes(term) ||
        entry.task.toLowerCase().includes(term) ||
        entry.date.toLowerCase().includes(term);
      return hit && (!showBillableOnly || entry.billable);
    });
  }, [entries, query, showBillableOnly]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paged = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page, perPage]);

  const totalHours = filtered.reduce((sum, e) => sum + e.hours, 0);
  const billableHours = filtered.filter((e) => e.billable).reduce((sum, e) => sum + e.hours, 0);
  const utilization = totalHours > 0 ? Math.round((totalHours / 8) * 100) : 0;
  const billableRate = totalHours > 0 ? Math.round((billableHours / totalHours) * 100) : 0;

  const projectHours = useMemo(() => {
    const map = new Map<string, number>();
    filtered.forEach((entry) => {
      map.set(entry.project, (map.get(entry.project) || 0) + entry.hours);
    });
    return [...map.entries()].map(([project, hours]) => ({ project, hours })).slice(0, 5);
  }, [filtered]);

  const billableBreakdown = [
    { name: 'Billable', value: billableHours, color: 'var(--color-brand-teal)' },
    { name: 'Non-Billable', value: Math.max(totalHours - billableHours, 0), color: 'var(--color-brand-primary)' },
  ];

  const toggleSelectRow = (id: number) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const allVisibleSelected = paged.length > 0 && paged.every((row) => selectedIds.includes(row.id));
  const toggleSelectAllVisible = () => {
    setSelectedIds((prev) => {
      if (allVisibleSelected) return prev.filter((id) => !paged.some((row) => row.id === id));
      const toAdd = paged.map((row) => row.id).filter((id) => !prev.includes(id));
      return [...prev, ...toAdd];
    });
  };

  const markSelected = (billable: boolean) => {
    if (!selectedIds.length) return;
    setEntries((prev) => prev.map((e) => (selectedIds.includes(e.id) ? { ...e, billable } : e)));
  };

  const deleteEntry = (id: number) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
    setSelectedIds((prev) => prev.filter((x) => x !== id));
  };

  const addEntry = () => {
    const next: Entry = {
      id: Date.now(),
      date: '4/23/2026',
      project: 'Website Operations',
      task: 'Daily QA & Content Review',
      hours: 1,
      billable: true,
    };
    setEntries((prev) => [next, ...prev]);
  };

  return (
    <div className="mx-auto max-w-[1400px] space-y-6 pb-24 font-sans animate-fade-in">
      <Reveal direction="down">
        <div className="mb-1 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-black tracking-tight text-white">Daily View</h1>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => markSelected(true)}
              className="rounded-full border border-[var(--color-brand-teal)]/35 bg-[var(--color-brand-teal)]/15 px-4 py-2 text-[13px] font-bold text-[var(--color-brand-teal)] transition-colors hover:bg-[var(--color-brand-teal)]/25"
            >
              Mark Billable
            </button>
            <button
              onClick={() => markSelected(false)}
              className="rounded-full border border-[var(--color-brand-primary)]/35 bg-[var(--color-brand-primary)]/15 px-4 py-2 text-[13px] font-bold text-[var(--color-brand-primary)] transition-colors hover:bg-[var(--color-brand-primary)]/25"
            >
              Mark Non-Billable
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-4 shadow-xl md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[var(--color-brand-bg)] text-white/70 transition-colors hover:bg-white/10">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-bold text-white">
              Thursday, April 23, 2026{' '}
              <span className="ml-2 rounded-full border border-[var(--color-brand-teal)]/30 bg-[var(--color-brand-teal)]/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--color-brand-teal)]">
                Today
              </span>
            </h2>
            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[var(--color-brand-bg)] text-white/70 transition-colors hover:bg-white/10">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              value={currentDate}
              onChange={(e) => setCurrentDate(e.target.value)}
              className="w-48 rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-4 py-3 text-sm font-medium text-white outline-none focus:border-[var(--color-brand-primary)]"
            />
            <CalendarIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
          </div>
        </div>
      </Reveal>

      <StaggerReveal className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5">
          <p className="mb-2 flex items-center gap-2 text-[13px] font-bold text-[var(--color-brand-secondary)]"><Clock className="h-4 w-4" /> Total Hours</p>
          <p className="text-4xl font-black tracking-tight text-white">{formatHours(totalHours)}</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5">
          <p className="mb-2 flex items-center gap-2 text-[13px] font-bold text-[var(--color-brand-teal)]"><CalendarIcon className="h-4 w-4" /> Billable Hours</p>
          <p className="text-4xl font-black tracking-tight text-[var(--color-brand-teal)]">{formatHours(billableHours)}</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5">
          <p className="mb-2 text-[13px] font-bold text-[var(--color-brand-primary)]">Entries</p>
          <p className="text-4xl font-black tracking-tight text-[var(--color-brand-primary)]">{filtered.length}</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5">
          <p className="mb-2 text-[13px] font-bold text-[var(--color-brand-secondary)]">Utilization</p>
          <p className="text-4xl font-black tracking-tight text-[var(--color-brand-secondary)]">{utilization}%</p>
          <p className="mt-1 text-[11px] text-white/45">Based on 8h day</p>
        </article>
      </StaggerReveal>

      <Reveal delay={0.2}>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] shadow-2xl">
          <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 p-6 md:flex-row md:items-center">
            <h2 className="flex items-center gap-3 text-2xl font-black tracking-tight text-white">
              <span className="inline-block h-7 w-1.5 rounded-full bg-[var(--color-brand-primary)]" />
              Time Entries
            </h2>
            <button
              onClick={addEntry}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-secondary)]/35 bg-[var(--color-brand-secondary)] px-5 py-2.5 text-[13px] font-bold text-[var(--color-brand-bg)] transition-all hover:scale-[1.02]"
            >
              <Plus className="h-4 w-4" /> Add Entry
            </button>
          </div>

          <div className="flex flex-col gap-4 border-b border-white/10 bg-[var(--color-brand-bg)]/60 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative w-full sm:w-[280px]">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search entries..."
                  className="w-full rounded-xl border border-white/15 bg-[var(--color-brand-surface)] px-10 py-2.5 text-sm text-white outline-none placeholder:text-white/35 focus:border-[var(--color-brand-primary)]"
                />
              </div>
              <button
                onClick={() => setShowBillableOnly((v) => !v)}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-[13px] font-bold transition-colors ${
                  showBillableOnly
                    ? 'border-[var(--color-brand-teal)]/35 bg-[var(--color-brand-teal)]/15 text-[var(--color-brand-teal)]'
                    : 'border-white/15 bg-[var(--color-brand-surface)] text-white/80 hover:bg-white/10'
                }`}
              >
                <Filter className="h-4 w-4" /> {showBillableOnly ? 'Billable Only' : 'All Entries'}
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/45">
              Per Page:
              <select
                value={perPage}
                onChange={(e) => {
                  setPerPage(Number(e.target.value));
                  setPage(1);
                }}
                className="rounded-xl border border-white/15 bg-[var(--color-brand-surface)] px-3 py-1.5 text-sm text-white outline-none"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 p-6 xl:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl border border-white/10 bg-[var(--color-brand-bg)]/45 p-5">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="flex items-center gap-3 text-lg font-bold text-white">
                  <span className="inline-block h-6 w-1.5 rounded-full bg-[var(--color-brand-secondary)]" /> Time Summary
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-brand-teal)]/25 bg-[var(--color-brand-teal)]/10 px-3 py-1 text-xs font-bold text-[var(--color-brand-teal)]">
                  <CheckCircle2 className="h-3.5 w-3.5" /> {billableRate >= 90 ? 'Strong Billable Mix' : 'Review Billable Split'}
                </span>
              </div>

              <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-[var(--color-brand-surface)] p-4">
                  <p className="text-[11px] uppercase tracking-wider text-white/45">Total Hours</p>
                  <p className="mt-1 text-3xl font-black text-white">{formatHours(totalHours)}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-[var(--color-brand-surface)] p-4">
                  <p className="text-[11px] uppercase tracking-wider text-white/45">Billable Hours</p>
                  <p className="mt-1 text-3xl font-black text-[var(--color-brand-teal)]">{formatHours(billableHours)}</p>
                </div>
              </div>

              <div className="mb-3 flex items-center justify-between text-sm font-bold text-white">
                <span>Billable Rate</span>
                <span>{billableRate}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full border border-white/10 bg-[var(--color-brand-surface)]">
                <div className="h-full rounded-full bg-[var(--color-brand-teal)] transition-all duration-500" style={{ width: `${billableRate}%` }} />
              </div>
              <p className="mt-2 text-center text-xs font-semibold text-white/40">
                {billableHours.toFixed(1)}h / {totalHours.toFixed(1)}h
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="h-[210px] rounded-2xl border border-white/10 bg-[var(--color-brand-bg)]/45 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/55">Daily Hour Trend</p>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dailyTrend}>
                    <XAxis dataKey="slot" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} />
                    <Tooltip
                      cursor={{ fill: 'rgba(255,255,255,.05)' }}
                      contentStyle={{ backgroundColor: 'var(--color-brand-bg)', borderColor: 'rgba(255,255,255,.15)', borderRadius: 10, color: 'white' }}
                    />
                    <Bar dataKey="hours" radius={[5, 5, 0, 0]} fill="var(--color-brand-primary)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="h-[210px] rounded-2xl border border-white/10 bg-[var(--color-brand-bg)]/45 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/55">Billable Breakdown</p>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={billableBreakdown} dataKey="value" innerRadius={45} outerRadius={65} paddingAngle={5} stroke="none">
                      {billableBreakdown.map((slice) => (
                        <Cell key={slice.name} fill={slice.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: 'var(--color-brand-bg)', borderColor: 'rgba(255,255,255,.15)', borderRadius: 10, color: 'white' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="px-6 pb-6">
            <div className="overflow-x-auto rounded-xl border border-white/10 bg-[var(--color-brand-bg)]/40">
              <table className="w-full min-w-[900px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 text-[10px] uppercase tracking-widest text-white/45">
                    <th className="w-12 p-4">
                      <button
                        onClick={toggleSelectAllVisible}
                        className={`flex h-4 w-4 items-center justify-center rounded border ${
                          allVisibleSelected ? 'border-[var(--color-brand-teal)] bg-[var(--color-brand-teal)]/20' : 'border-white/25'
                        }`}
                      >
                        {allVisibleSelected && <Check className="h-3 w-3 text-[var(--color-brand-teal)]" />}
                      </button>
                    </th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Project</th>
                    <th className="p-4">Task</th>
                    <th className="p-4">Hours</th>
                    <th className="p-4">Billable</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-[13px]">
                  {paged.map((row) => {
                    const selected = selectedIds.includes(row.id);
                    return (
                      <tr key={row.id} className="border-b border-white/10 transition-colors hover:bg-white/5">
                        <td className="p-4">
                          <button
                            onClick={() => toggleSelectRow(row.id)}
                            className={`flex h-4 w-4 items-center justify-center rounded border ${
                              selected ? 'border-[var(--color-brand-teal)] bg-[var(--color-brand-teal)]/20' : 'border-white/25'
                            }`}
                          >
                            {selected && <Check className="h-3 w-3 text-[var(--color-brand-teal)]" />}
                          </button>
                        </td>
                        <td className="p-4 text-white/70">{row.date}</td>
                        <td className="p-4 font-semibold text-white">{row.project}</td>
                        <td className="p-4 text-white/65">{row.task}</td>
                        <td className="p-4 font-medium text-[var(--color-brand-secondary)]">{formatHours(row.hours)}</td>
                        <td className="p-4">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                              row.billable
                                ? 'border-[var(--color-brand-teal)]/25 bg-[var(--color-brand-teal)]/10 text-[var(--color-brand-teal)]'
                                : 'border-[var(--color-brand-primary)]/25 bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)]'
                            }`}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-current" />
                            {row.billable ? 'Billable' : 'Non-Billable'}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <button className="text-[var(--color-brand-secondary)] transition-opacity hover:opacity-80" title="Edit">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button onClick={() => deleteEntry(row.id)} className="text-[var(--color-brand-primary)] transition-opacity hover:opacity-80" title="Delete">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 bg-[var(--color-brand-bg)]/60 p-6 text-[13px] text-white/55 sm:flex-row">
            <span>
              Showing {(page - 1) * perPage + (paged.length ? 1 : 0)} to {(page - 1) * perPage + paged.length} of {filtered.length} entries
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="rounded-lg border border-white/15 px-3 py-1.5 transition-colors hover:bg-white/10"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .slice(0, 6)
                .map((num) => (
                  <button
                    key={num}
                    onClick={() => setPage(num)}
                    className={`h-8 w-8 rounded-lg border text-sm font-bold transition-colors ${
                      page === num
                        ? 'border-[var(--color-brand-secondary)] bg-[var(--color-brand-secondary)] text-[var(--color-brand-bg)]'
                        : 'border-white/15 hover:bg-white/10'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="rounded-lg border border-white/15 px-3 py-1.5 transition-colors hover:bg-white/10"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

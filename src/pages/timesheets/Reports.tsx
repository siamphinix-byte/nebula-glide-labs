import React, { useMemo, useState } from 'react';
import { Reveal } from '../../components/GSAPWrapper';
import {
  BarChart3,
  Calendar as CalendarIcon,
  CircleDollarSign,
  Clock3,
  Download,
  RefreshCw,
  Users,
} from 'lucide-react';
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type ReportItem = {
  id: number;
  date: string;
  project: string;
  member: string;
  hours: number;
  billable: boolean;
  rate: number;
};

const reportSeed: ReportItem[] = [
  { id: 1, date: '2026-03-24', project: 'Analytics System', member: 'Michael Chen', hours: 7.5, billable: true, rate: 85 },
  { id: 2, date: '2026-03-26', project: 'Analytics System', member: 'Sarah Johnson', hours: 6.25, billable: true, rate: 92 },
  { id: 3, date: '2026-03-29', project: 'Customer Portal', member: 'Michael Chen', hours: 3.5, billable: false, rate: 80 },
  { id: 4, date: '2026-04-01', project: 'Security Audit', member: 'Priya S.', hours: 8, billable: true, rate: 105 },
  { id: 5, date: '2026-04-03', project: 'Security Audit', member: 'Sarah Johnson', hours: 4.5, billable: true, rate: 98 },
  { id: 6, date: '2026-04-09', project: 'API Gateway', member: 'Ivan Wu', hours: 5, billable: false, rate: 88 },
  { id: 7, date: '2026-04-12', project: 'API Gateway', member: 'Priya S.', hours: 7.25, billable: true, rate: 102 },
  { id: 8, date: '2026-04-15', project: 'Customer Portal', member: 'Sarah Johnson', hours: 6, billable: true, rate: 94 },
  { id: 9, date: '2026-04-18', project: 'Customer Portal', member: 'Michael Chen', hours: 4.75, billable: true, rate: 85 },
  { id: 10, date: '2026-04-21', project: 'Analytics System', member: 'Ivan Wu', hours: 5.5, billable: true, rate: 90 },
  { id: 11, date: '2026-04-22', project: 'Security Audit', member: 'Priya S.', hours: 2, billable: false, rate: 105 },
  { id: 12, date: '2026-04-23', project: 'API Gateway', member: 'Sarah Johnson', hours: 6.5, billable: true, rate: 98 },
];

const formatHours = (hours: number) => `${hours.toFixed(1)}h`;
const formatMoney = (amount: number) => `$${amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

export function Reports() {
  const [project, setProject] = useState('All Projects');
  const [member, setMember] = useState('All Members');
  const [startDate, setStartDate] = useState('2026-03-24');
  const [endDate, setEndDate] = useState('2026-04-23');
  const [billableOnly, setBillableOnly] = useState(false);
  const [generated, setGenerated] = useState(false);

  const projectOptions = useMemo(() => ['All Projects', ...new Set(reportSeed.map((item) => item.project))], []);
  const memberOptions = useMemo(() => ['All Members', ...new Set(reportSeed.map((item) => item.member))], []);

  const filteredReport = useMemo(() => {
    return reportSeed.filter((item) => {
      const inProject = project === 'All Projects' || item.project === project;
      const inMember = member === 'All Members' || item.member === member;
      const inRange = item.date >= startDate && item.date <= endDate;
      const inBillable = !billableOnly || item.billable;
      return inProject && inMember && inRange && inBillable;
    });
  }, [project, member, startDate, endDate, billableOnly]);

  const visibleRows = generated ? filteredReport : [];
  const totalHours = visibleRows.reduce((sum, row) => sum + row.hours, 0);
  const billableHours = visibleRows.filter((row) => row.billable).reduce((sum, row) => sum + row.hours, 0);
  const totalAmount = visibleRows.reduce((sum, row) => sum + (row.billable ? row.hours * row.rate : 0), 0);

  const projectChart = useMemo(() => {
    const totals = new Map<string, number>();
    visibleRows.forEach((row) => totals.set(row.project, (totals.get(row.project) || 0) + row.hours));
    return Array.from(totals.entries()).map(([name, hours]) => ({ name, hours }));
  }, [visibleRows]);

  const memberChart = useMemo(() => {
    const totals = new Map<string, number>();
    visibleRows.forEach((row) => totals.set(row.member, (totals.get(row.member) || 0) + row.hours));
    return Array.from(totals.entries()).map(([name, value]) => ({ name, value }));
  }, [visibleRows]);

  const billableChart = [
    { name: 'Billable', value: billableHours, fill: 'var(--color-brand-teal)' },
    { name: 'Non-billable', value: Math.max(0, totalHours - billableHours), fill: 'var(--color-brand-primary)' },
  ];

  const handleReset = () => {
    setProject('All Projects');
    setMember('All Members');
    setStartDate('2026-03-24');
    setEndDate('2026-04-23');
    setBillableOnly(false);
    setGenerated(false);
  };

  const handleExport = () => {
    if (!visibleRows.length) return;
    const csvRows = [
      ['Date', 'Project', 'Member', 'Hours', 'Billable', 'Rate', 'Amount'],
      ...visibleRows.map((row) => [
        row.date,
        row.project,
        row.member,
        row.hours.toString(),
        row.billable ? 'Yes' : 'No',
        row.rate.toString(),
        row.billable ? (row.rate * row.hours).toFixed(2) : '0.00',
      ]),
    ];

    const blob = new Blob([csvRows.map((line) => line.join(',')).join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'timesheet-report.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto h-full max-w-[1400px] space-y-6 pb-24">
      <Reveal direction="down">
        <h1 className="mb-2 text-3xl font-black tracking-tight text-white">Reports</h1>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-6 shadow-2xl">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-black tracking-tight text-white">
            <BarChart3 className="h-5 w-5 text-[var(--color-brand-secondary)]" /> Report Filters
          </h2>

          <div className="mb-5 grid grid-cols-1 gap-4 lg:grid-cols-4">
            <label className="text-sm font-semibold text-white/80">
              Project
              <select
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 py-2.5 text-sm text-white outline-none focus:border-[var(--color-brand-primary)]"
              >
                {projectOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="text-sm font-semibold text-white/80">
              Member
              <select
                value={member}
                onChange={(e) => setMember(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 py-2.5 text-sm text-white outline-none focus:border-[var(--color-brand-primary)]"
              >
                {memberOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="text-sm font-semibold text-white/80">
              Start Date
              <div className="relative mt-1">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 py-2.5 pr-9 text-sm text-white outline-none focus:border-[var(--color-brand-primary)]"
                />
                <CalendarIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
              </div>
            </label>

            <label className="text-sm font-semibold text-white/80">
              End Date
              <div className="relative mt-1">
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 py-2.5 pr-9 text-sm text-white outline-none focus:border-[var(--color-brand-primary)]"
                />
                <CalendarIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
              </div>
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 rounded-full border border-white/15 bg-[var(--color-brand-bg)] px-3 py-2 text-xs font-bold uppercase tracking-wide text-white/75">
              <input type="checkbox" checked={billableOnly} onChange={(e) => setBillableOnly(e.target.checked)} />
              Billable only
            </label>
            <button
              onClick={() => setGenerated(true)}
              className="rounded-full bg-[var(--color-brand-secondary)] px-6 py-2.5 text-sm font-black text-[var(--color-brand-bg)] transition-transform hover:scale-[1.02]"
            >
              Generate Report
            </button>
            <button
              onClick={handleReset}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[var(--color-brand-bg)] text-white/70 transition-colors hover:bg-white/10"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
            <button
              onClick={handleExport}
              disabled={!visibleRows.length}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-[var(--color-brand-bg)] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white/80 disabled:opacity-40"
            >
              <Download className="h-4 w-4" /> Export CSV
            </button>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.18}>
        <section className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-6 shadow-2xl">
          <h2 className="mb-5 text-2xl font-black tracking-tight text-white">Report Results</h2>

          {!generated ? (
            <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-[var(--color-brand-bg)]/40 p-10 text-center">
              <Clock3 className="mb-4 h-10 w-10 text-[var(--color-brand-primary)]" />
              <p className="text-lg font-bold text-white">Generate a report to view summary and charts.</p>
              <p className="mt-1 text-sm text-white/55">Use filters above to refine project, member, and date range.</p>
            </div>
          ) : (
            <>
              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-bg)] p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/55">Total Hours</p>
                  <p className="text-3xl font-black text-[var(--color-brand-primary)]">{formatHours(totalHours)}</p>
                </article>
                <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-bg)] p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/55">Billable Hours</p>
                  <p className="text-3xl font-black text-[var(--color-brand-teal)]">{formatHours(billableHours)}</p>
                </article>
                <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-bg)] p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/55">Total Amount</p>
                  <p className="text-3xl font-black text-[var(--color-brand-secondary)]">{formatMoney(totalAmount)}</p>
                </article>
                <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-bg)] p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/55">Entries</p>
                  <p className="text-3xl font-black text-white">{visibleRows.length}</p>
                </article>
              </div>

              <div className="mb-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
                <article className="h-[260px] rounded-2xl border border-white/10 bg-[var(--color-brand-bg)] p-4 xl:col-span-2">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/55">Project Progress Topology</p>
                  <ResponsiveContainer width="100%" height="88%">
                    <BarChart data={projectChart}>
                      <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,.5)', fontSize: 11 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,.5)', fontSize: 11 }} />
                      <Tooltip
                        cursor={{ fill: 'rgba(255,255,255,.04)' }}
                        contentStyle={{ backgroundColor: 'var(--color-brand-surface)', borderColor: 'rgba(255,255,255,.2)', borderRadius: 10, color: 'white' }}
                      />
                      <Bar dataKey="hours" radius={[8, 8, 0, 0]} fill="var(--color-brand-primary)" />
                    </BarChart>
                  </ResponsiveContainer>
                </article>

                <article className="h-[260px] rounded-2xl border border-white/10 bg-[var(--color-brand-bg)] p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/55">Billing Mix</p>
                  <ResponsiveContainer width="100%" height="88%">
                    <PieChart>
                      <Pie data={billableChart} innerRadius={46} outerRadius={72} dataKey="value" paddingAngle={4} stroke="none">
                        {billableChart.map((entry) => (
                          <Cell key={entry.name} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ backgroundColor: 'var(--color-brand-surface)', borderColor: 'rgba(255,255,255,.2)', borderRadius: 10, color: 'white' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </article>
              </div>

              <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-bg)] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/55">Member Workload</p>
                  <Users className="h-4 w-4 text-white/55" />
                </div>
                <div className="space-y-2">
                  {memberChart.map((item) => {
                    const percentage = totalHours ? (item.value / totalHours) * 100 : 0;
                    return (
                      <div key={item.name}>
                        <div className="mb-1 flex items-center justify-between text-sm text-white/80">
                          <span>{item.name}</span>
                          <span>{formatHours(item.value)}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full rounded-full bg-[var(--color-brand-teal)]" style={{ width: `${percentage}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>

              {!!visibleRows.length && (
                <article className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-brand-bg)]">
                  <table className="w-full min-w-[680px] text-sm">
                    <thead className="border-b border-white/10 bg-white/5">
                      <tr className="text-left text-xs uppercase tracking-wider text-white/55">
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Project</th>
                        <th className="px-4 py-3">Member</th>
                        <th className="px-4 py-3">Hours</th>
                        <th className="px-4 py-3">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {visibleRows.map((row) => (
                        <tr key={row.id} className="border-b border-white/5 text-white/80 last:border-b-0">
                          <td className="px-4 py-3">{row.date}</td>
                          <td className="px-4 py-3">{row.project}</td>
                          <td className="px-4 py-3">{row.member}</td>
                          <td className="px-4 py-3">{formatHours(row.hours)}</td>
                          <td className="px-4 py-3">{row.billable ? formatMoney(row.rate * row.hours) : '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </article>
              )}
            </>
          )}
        </section>
      </Reveal>
    </div>
  );
}

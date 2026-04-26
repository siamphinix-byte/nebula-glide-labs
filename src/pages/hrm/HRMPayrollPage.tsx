import { CheckCheck, DollarSign, Search } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { sectionCardClassName } from './HRMShared';
import { payrollApprovals, payrollSummary, type PayrollStatus } from './hrmData';
import { HRMHorizontalScroll } from './HRMHorizontalScroll';

export function HRMPayrollPage() {
  const [query, setQuery] = useState('');
  const [rows, setRows] = useState(payrollApprovals);
  const [statusFilter, setStatusFilter] = useState<PayrollStatus | 'All'>('All');

  const filteredRows = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return rows.filter((row) => {
      const queryMatch = !normalized || row.employee.toLowerCase().includes(normalized) || row.id.toLowerCase().includes(normalized);
      const statusMatch = statusFilter === 'All' || row.status === statusFilter;
      return queryMatch && statusMatch;
    });
  }, [rows, query, statusFilter]);

  const totalDisbursed = filteredRows.filter((row) => row.status === 'Paid').reduce((acc, row) => acc + row.net, 0);

  const approvePayroll = (id: string) => {
    setRows((prev) => prev.map((row) => (row.id === id ? { ...row, status: 'Paid' as PayrollStatus } : row)));
  };

  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={sectionCardClassName()}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Payroll Operations</h1>
              <p className="mt-1 text-sm text-white/60">Track payroll disbursement, pending approvals, and monthly distribution.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10">
              <DollarSign className="h-4 w-4 text-brand-secondary" /> Run Payroll
            </button>
          </div>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_1fr]">
        <article className={sectionCardClassName()}>
          <h2 className="mb-4 text-lg font-semibold text-white">Monthly Paid vs Pending</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={payrollSummary}>
                <CartesianGrid stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-brand-bg)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '10px',
                    color: 'white',
                  }}
                />
                <Bar dataKey="paid" fill="var(--color-brand-teal)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pending" fill="var(--color-brand-primary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
        <article className={sectionCardClassName('space-y-4')}>
          <p className="text-xs uppercase tracking-wide text-white/50">Total Disbursed</p>
          <p className="text-4xl font-bold text-white">${totalDisbursed.toLocaleString()}</p>
          <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
            {(['All', 'Paid', 'Pending'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`flex-1 rounded-md px-2 py-2 text-xs ${statusFilter === status ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'}`}
              >
                {status}
              </button>
            ))}
          </div>
        </article>
      </StaggerReveal>

      <Reveal>
        <section className={sectionCardClassName('space-y-4')}>
          <label className="flex max-w-md items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3">
            <Search className="h-4 w-4 text-white/50" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by employee or payroll id"
              className="h-11 w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </label>

          <HRMHorizontalScroll>
            <table className="w-full min-w-[860px] text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/55">
                  <th className="px-3 py-3">Payroll</th>
                  <th className="px-3 py-3">Employee</th>
                  <th className="px-3 py-3">Month</th>
                  <th className="px-3 py-3">Gross</th>
                  <th className="px-3 py-3">Net</th>
                  <th className="px-3 py-3">Status</th>
                  <th className="px-3 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row) => (
                  <tr key={row.id} className="border-b border-white/5">
                    <td className="px-3 py-3 text-white/80">{row.id}</td>
                    <td className="px-3 py-3">
                      <p className="font-semibold text-white">{row.employee}</p>
                      <p className="text-xs text-white/50">{row.department}</p>
                    </td>
                    <td className="px-3 py-3 text-white/75">{row.month}</td>
                    <td className="px-3 py-3 text-white/75">${row.gross.toLocaleString()}</td>
                    <td className="px-3 py-3 font-semibold text-brand-teal">${row.net.toLocaleString()}</td>
                    <td className="px-3 py-3">
                      <span className={`inline-flex rounded-full border px-2 py-1 text-xs ${row.status === 'Paid' ? 'border-brand-teal/30 bg-brand-teal/20 text-brand-teal' : 'border-brand-primary/30 bg-brand-primary/20 text-brand-primary'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <button
                        onClick={() => approvePayroll(row.id)}
                        className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 transition-colors hover:bg-white/10"
                      >
                        <CheckCheck className="h-3 w-3" /> Approve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </HRMHorizontalScroll>
        </section>
      </Reveal>
    </div>
  );
}
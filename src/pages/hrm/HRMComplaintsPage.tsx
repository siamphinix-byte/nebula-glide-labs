import { CheckCheck, Search, X } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { complaints, type ComplaintStatus } from './hrmData';
import { HRMHorizontalScroll } from './HRMHorizontalScroll';
import { sectionCardClassName } from './HRMShared';

function complaintStatusClassName(status: ComplaintStatus) {
  if (status === 'Resolved') return 'border-brand-teal/30 bg-brand-teal/20 text-brand-teal';
  if (status === 'In Review') return 'border-brand-primary/30 bg-brand-primary/20 text-brand-primary';
  if (status === 'Open') return 'border-brand-secondary/30 bg-brand-secondary/20 text-brand-secondary';
  return 'border-white/20 bg-white/10 text-white/80';
}

export function HRMComplaintsPage() {
  const [query, setQuery] = useState('');
  const [rows, setRows] = useState(complaints);
  const [statusFilter, setStatusFilter] = useState<ComplaintStatus | 'All'>('All');

  const filteredRows = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return rows.filter((row) => {
      const queryMatch =
        !normalized ||
        row.employee.toLowerCase().includes(normalized) ||
        row.id.toLowerCase().includes(normalized) ||
        row.category.toLowerCase().includes(normalized);
      const statusMatch = statusFilter === 'All' || row.status === statusFilter;
      return queryMatch && statusMatch;
    });
  }, [rows, query, statusFilter]);

  const updateStatus = (id: string, status: ComplaintStatus) => {
    setRows((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
  };

  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={sectionCardClassName()}>
          <h1 className="text-2xl font-bold text-white">Manage Complaints</h1>
          <p className="mt-1 text-sm text-white/60">Track complaint investigations with transparent status progression.</p>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <article className={sectionCardClassName('p-4')}><p className="text-xs text-white/50">Total</p><p className="mt-2 text-3xl font-bold text-white">{rows.length}</p></article>
        <article className={sectionCardClassName('p-4')}><p className="text-xs text-white/50">Open</p><p className="mt-2 text-3xl font-bold text-brand-secondary">{rows.filter((r) => r.status === 'Open').length}</p></article>
        <article className={sectionCardClassName('p-4')}><p className="text-xs text-white/50">In Review</p><p className="mt-2 text-3xl font-bold text-brand-primary">{rows.filter((r) => r.status === 'In Review').length}</p></article>
        <article className={sectionCardClassName('p-4')}><p className="text-xs text-white/50">Resolved</p><p className="mt-2 text-3xl font-bold text-brand-teal">{rows.filter((r) => r.status === 'Resolved').length}</p></article>
      </StaggerReveal>

      <Reveal>
        <section className={sectionCardClassName('space-y-4')}>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.4fr_1fr]">
            <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3">
              <Search className="h-4 w-4 text-white/50" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search complaint id, employee, category" className="h-11 w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none" />
            </label>
            <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
              {(['All', 'Open', 'In Review', 'Resolved', 'Closed'] as const).map((status) => (
                <button key={status} onClick={() => setStatusFilter(status)} className={`flex-1 rounded-md px-2 py-2 text-xs ${statusFilter === status ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'}`}>
                  {status}
                </button>
              ))}
            </div>
          </div>

          <HRMHorizontalScroll>
            <table className="w-full min-w-[960px] text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/55">
                  <th className="px-3 py-3">Complaint</th><th className="px-3 py-3">Employee</th><th className="px-3 py-3">Category</th><th className="px-3 py-3">Priority</th><th className="px-3 py-3">Status</th><th className="px-3 py-3">Assigned</th><th className="px-3 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row) => (
                  <tr key={row.id} className="border-b border-white/5">
                    <td className="px-3 py-3 text-white/80">{row.id}<p className="text-xs text-white/50">{row.reportedOn}</p></td>
                    <td className="px-3 py-3 text-white">{row.employee}<p className="text-xs text-white/50">{row.department}</p></td>
                    <td className="px-3 py-3 text-white/75">{row.category}</td>
                    <td className="px-3 py-3 text-white/75">{row.priority}</td>
                    <td className="px-3 py-3"><span className={`inline-flex rounded-full border px-2 py-1 text-xs ${complaintStatusClassName(row.status)}`}>{row.status}</span></td>
                    <td className="px-3 py-3 text-white/75">{row.assignee}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateStatus(row.id, 'Resolved')} className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-xs text-white/80 hover:bg-white/10"><CheckCheck className="h-3 w-3" /> Resolve</button>
                        <button onClick={() => updateStatus(row.id, 'Closed')} className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-xs text-white/80 hover:bg-white/10"><X className="h-3 w-3" /> Close</button>
                      </div>
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

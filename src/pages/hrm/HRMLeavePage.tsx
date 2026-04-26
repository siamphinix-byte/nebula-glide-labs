import { CheckCheck, Clock3, Search, X } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { leaveRequests, type LeaveStatus } from './hrmData';
import { HRMHorizontalScroll } from './HRMHorizontalScroll';
import { sectionCardClassName, statusPillClassName } from './HRMShared';

const leaveBalances = [
  { type: 'Annual', total: 16, used: 7 },
  { type: 'Casual', total: 10, used: 4 },
  { type: 'Sick', total: 12, used: 3 },
  { type: 'Personal', total: 6, used: 2 },
];

export function HRMLeavePage() {
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<LeaveStatus | 'All'>('All');
  const [items, setItems] = useState(leaveRequests);

  const filteredRequests = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return items.filter((item) => {
      const queryMatch =
        normalized.length === 0 ||
        item.employee.toLowerCase().includes(normalized) ||
        item.department.toLowerCase().includes(normalized) ||
        item.id.toLowerCase().includes(normalized);
      const statusMatch = statusFilter === 'All' || item.status === statusFilter;
      return queryMatch && statusMatch;
    });
  }, [items, query, statusFilter]);

  const updateStatus = (id: string, status: LeaveStatus) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
  };

  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={sectionCardClassName()}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Leave Management</h1>
              <p className="mt-1 text-sm text-white/60">Track requests, approve or reject applications, and monitor leave balances.</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80">
              <Clock3 className="h-4 w-4 text-brand-secondary" />
              {filteredRequests.length} active requests
            </div>
          </div>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {leaveBalances.map((balance) => {
          const remaining = Math.max(balance.total - balance.used, 0);
          const percent = (remaining / balance.total) * 100;
          return (
            <article key={balance.type} className={sectionCardClassName('p-4')}>
              <p className="text-sm font-semibold text-white/80">{balance.type} Leave</p>
              <p className="mt-2 text-3xl font-bold text-white">{remaining}</p>
              <p className="text-xs text-white/50">Remaining out of {balance.total}</p>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-brand-primary" style={{ width: `${percent}%` }} />
              </div>
            </article>
          );
        })}
      </StaggerReveal>

      <Reveal>
        <section className={sectionCardClassName('space-y-4')}>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.3fr_1fr]">
            <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3">
              <Search className="h-4 w-4 text-white/50" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by employee, department, or request id"
                className="h-11 w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </label>
            <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
              {(['All', 'Pending', 'Approved', 'Rejected'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`flex-1 rounded-md px-2 py-2 text-xs ${statusFilter === status ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'}`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <HRMHorizontalScroll>
            <table className="w-full min-w-[860px] text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/55">
                  <th className="px-3 py-3">Request</th>
                  <th className="px-3 py-3">Employee</th>
                  <th className="px-3 py-3">Type</th>
                  <th className="px-3 py-3">Duration</th>
                  <th className="px-3 py-3">Status</th>
                  <th className="px-3 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((request) => (
                  <tr key={request.id} className="border-b border-white/5">
                    <td className="px-3 py-3 text-white/80">{request.id}</td>
                    <td className="px-3 py-3">
                      <p className="font-semibold text-white">{request.employee}</p>
                      <p className="text-xs text-white/50">{request.department}</p>
                    </td>
                    <td className="px-3 py-3 text-white/75">{request.type}</td>
                    <td className="px-3 py-3 text-white/75">{request.from} to {request.to} ({request.days}d)</td>
                    <td className="px-3 py-3">
                      <span className={`inline-flex rounded-full border px-2 py-1 text-xs ${statusPillClassName(request.status)}`}>
                        {request.status}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateStatus(request.id, 'Approved')}
                          className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-xs text-white/80 hover:bg-white/10"
                        >
                          <CheckCheck className="h-3 w-3" /> Approve
                        </button>
                        <button
                          onClick={() => updateStatus(request.id, 'Rejected')}
                          className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-xs text-white/80 hover:bg-white/10"
                        >
                          <X className="h-3 w-3" /> Reject
                        </button>
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
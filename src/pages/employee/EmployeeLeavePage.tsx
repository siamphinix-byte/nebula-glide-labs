import { CalendarPlus2 } from 'lucide-react';
import React, { useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { leaveRequests } from './employeeData';
import { employeeInputClass, employeePageClass, employeePrimaryButtonClass, employeeSectionClass, employeeStatusPill, employeeSubtitleClass, employeeTextareaClass, employeeTitleClass } from './employeeShared';

export function EmployeeLeavePage() {
  const [type, setType] = useState('Annual Leave');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submitRequest = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1800);
    setFrom('');
    setTo('');
    setReason('');
  };

  return (
    <div className={employeePageClass}>
      <Reveal direction="down">
        <section className={employeeSectionClass()}>
          <h1 className={employeeTitleClass}>Leave Management</h1>
          <p className={employeeSubtitleClass}>Create leave requests and monitor approval status.</p>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-6 xl:grid-cols-[1.1fr_1.4fr]">
        <section className={employeeSectionClass()}>
          <h2 className="mb-3 text-lg font-semibold text-white">Request Leave</h2>
          <form onSubmit={submitRequest} className="space-y-3">
            <select value={type} onChange={(e) => setType(e.target.value)} className={employeeInputClass}>
              <option className="bg-brand-bg">Annual Leave</option>
              <option className="bg-brand-bg">Sick Leave</option>
              <option className="bg-brand-bg">Personal Leave</option>
            </select>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} className={employeeInputClass} required />
              <input type="date" value={to} onChange={(e) => setTo(e.target.value)} className={employeeInputClass} required />
            </div>
            <textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Reason for leave" className={employeeTextareaClass} required />
            <button type="submit" className={employeePrimaryButtonClass}>
              <CalendarPlus2 className="h-4 w-4" /> Submit Request
            </button>
            {submitted && <p className="text-xs text-brand-teal">Leave request submitted.</p>}
          </form>
        </section>

        <section className={employeeSectionClass()}>
          <h2 className="mb-3 text-lg font-semibold text-white">Request History</h2>
          <div className="space-y-3">
            {leaveRequests.map((request) => (
              <article key={request.id} className="rounded-xl border border-white/10 bg-brand-bg/55 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{request.type}</p>
                  <span className={`inline-flex rounded-full px-2 py-1 text-xs ${employeeStatusPill(request.status)}`}>{request.status}</span>
                </div>
                <p className="mt-1 text-xs text-white/55">{request.from} → {request.to} · {request.days} day(s)</p>
                <p className="mt-1 text-xs text-white/60">{request.reason}</p>
              </article>
            ))}
          </div>
        </section>
      </StaggerReveal>
    </div>
  );
}

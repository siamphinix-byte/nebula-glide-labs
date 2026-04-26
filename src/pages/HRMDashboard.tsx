import { ArrowRight, BadgeDollarSign, Building2, CalendarClock, ClipboardCheck, ShieldCheck, Users } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';

const hrmSections = [
  {
    title: 'Employees',
    description: 'Manage employee directory, profile snapshots, and workforce filters.',
    to: '/app/hrm/employees',
    icon: Users,
  },
  {
    title: 'Leave',
    description: 'Review leave requests, update status, and track leave balances.',
    to: '/app/hrm/leave',
    icon: CalendarClock,
  },
  {
    title: 'Attendance',
    description: 'Monitor attendance trend and detailed daily check-in records.',
    to: '/app/hrm/attendance',
    icon: ClipboardCheck,
  },
  {
    title: 'Departments',
    description: 'Track team structures, utilization, and hiring demand by department.',
    to: '/app/hrm/departments',
    icon: Building2,
  },
  {
    title: 'Shifts',
    description: 'Configure working shifts and toggle night rotation policies.',
    to: '/app/hrm/shifts',
    icon: CalendarClock,
  },
  {
    title: 'Payroll',
    description: 'Review payroll approvals and monthly paid vs pending status.',
    to: '/app/hrm/payroll',
    icon: BadgeDollarSign,
  },
  {
    title: 'Payslips',
    description: 'Generate and download employee payslips by payroll cycle.',
    to: '/app/hrm/payslips',
    icon: ClipboardCheck,
  },
  {
    title: 'Roles',
    description: 'Manage role-based permissions and membership allocation.',
    to: '/app/hrm/roles',
    icon: ShieldCheck,
  },
];

export function Dashboard() {
  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className="rounded-2xl border border-white/10 bg-brand-surface p-5 shadow-2xl">
          <h1 className="text-2xl font-bold text-white">HRM Console</h1>
          <p className="mt-1 text-sm text-white/60">
            Unified workforce operations inside the executive dashboard hierarchy.
          </p>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {hrmSections.map((section) => {
          const Icon = section.icon;
          return (
            <article key={section.title} className="rounded-xl border border-white/10 bg-brand-surface p-5 transition-colors hover:border-white/20">
              <div className="mb-3 flex items-center justify-between">
                <Icon className="h-5 w-5 text-brand-primary" />
                <span className="text-xs text-white/50">HRM</span>
              </div>
              <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              <p className="mt-1 text-sm text-white/60">{section.description}</p>
              <Link
                to={section.to}
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/85 transition-colors hover:bg-white/10"
              >
                Open Section <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          );
        })}
      </StaggerReveal>

      <Reveal>
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {[
            { label: 'Total Workforce', value: '120', meta: '+6 this quarter' },
            { label: 'Pending Leaves', value: '4', meta: 'Needs approval' },
            { label: 'Open Roles', value: '7', meta: 'Across departments' },
          ].map((item) => (
            <article key={item.label} className="rounded-xl border border-white/10 bg-brand-surface p-4">
              <p className="text-xs uppercase tracking-wide text-white/50">{item.label}</p>
              <p className="mt-2 text-3xl font-bold text-white">{item.value}</p>
              <p className="text-xs text-white/55">{item.meta}</p>
            </article>
          ))}
        </section>
      </Reveal>
    </div>
  );
}
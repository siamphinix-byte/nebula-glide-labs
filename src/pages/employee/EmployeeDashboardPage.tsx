import { CalendarCheck2, ChartNoAxesCombined, ListChecks, Timer } from 'lucide-react';
import React from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { employeeSummary, employeeTasks, leaveRequests, attendanceLog } from './employeeData';
import { employeeSectionClass, employeeStatusPill } from './employeeShared';

export function EmployeeDashboardPage() {
  const completed = employeeTasks.filter((task) => task.status === 'Completed').length;
  const pendingLeaves = leaveRequests.filter((item) => item.status === 'Pending').length;
  const presentDays = attendanceLog.filter((item) => item.status === 'Present').length;

  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={employeeSectionClass()}>
          <h1 className="text-2xl font-bold text-foreground">Employee Dashboard</h1>
          <p className="mt-1 text-sm text-foreground/60">Welcome back, {employeeSummary.name}. Your personal workspace is isolated from executive operations.</p>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Open Tasks', value: employeeTasks.length, icon: ListChecks },
          { label: 'Completed', value: completed, icon: ChartNoAxesCombined },
          { label: 'Pending Leave', value: pendingLeaves, icon: CalendarCheck2 },
          { label: 'Present Days', value: presentDays, icon: Timer },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.label} className={employeeSectionClass('transition-colors hover:bg-brand-muted/40')}>
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-wide text-foreground/55">{item.label}</p>
                <Icon className="h-4 w-4 text-brand-primary" />
              </div>
              <p className="mt-2 text-3xl font-bold text-foreground">{item.value}</p>
            </article>
          );
        })}
      </StaggerReveal>

      <StaggerReveal className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <section className={employeeSectionClass()}>
          <h2 className="mb-4 text-lg font-semibold text-foreground">My Priority Tasks</h2>
          <div className="space-y-3">
            {employeeTasks.slice(0, 3).map((task) => (
              <article key={task.id} className="rounded-lg border border-border bg-brand-muted/50 p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-foreground">{task.title}</p>
                  <span className={`inline-flex rounded-full px-2 py-1 text-xs ${employeeStatusPill(task.status)}`}>{task.status}</span>
                </div>
                <p className="mt-1 text-xs text-foreground/55">{task.project} · Due {task.dueDate}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={employeeSectionClass()}>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Attendance Snapshot</h2>
          <div className="space-y-3">
            {attendanceLog.slice(0, 3).map((log) => (
              <article key={log.id} className="flex items-center justify-between rounded-lg border border-border bg-brand-muted/50 p-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground">{log.date}</p>
                  <p className="text-xs text-foreground/55">{log.checkIn} → {log.checkOut}</p>
                </div>
                <span className={`inline-flex rounded-full px-2 py-1 text-xs ${employeeStatusPill(log.status)}`}>{log.status}</span>
              </article>
            ))}
          </div>
        </section>
      </StaggerReveal>
    </div>
  );
}

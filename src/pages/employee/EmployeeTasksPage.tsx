import { CheckCircle2, Filter } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { employeeTasks, type EmployeeTaskStatus } from './employeeData';
import { employeeSectionClass, employeeStatusPill } from './employeeShared';

export function EmployeeTasksPage() {
  const [status, setStatus] = useState<EmployeeTaskStatus | 'All'>('All');
  const [tasks, setTasks] = useState(employeeTasks);

  const filtered = useMemo(() => {
    if (status === 'All') return tasks;
    return tasks.filter((task) => task.status === status);
  }, [status, tasks]);

  const markCompleted = (id: string) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, status: 'Completed' as EmployeeTaskStatus } : task)));
  };

  return (
    <div className="mx-auto max-w-[1200px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={employeeSectionClass()}>
          <h1 className="text-2xl font-bold text-foreground">My Tasks</h1>
          <p className="mt-1 text-sm text-foreground/60">Track assignments and update progress from your employee workspace.</p>
        </section>
      </Reveal>

      <Reveal>
        <section className={employeeSectionClass('flex flex-wrap items-center gap-2')}>
          <Filter className="h-4 w-4 text-foreground/50" />
          {(['All', 'Pending', 'In Progress', 'Completed'] as const).map((value) => (
            <button
              key={value}
              onClick={() => setStatus(value)}
              className={`rounded-lg border px-3 py-2 text-xs font-semibold ${status === value ? 'border-border bg-brand-primary text-primary-foreground' : 'border-border bg-brand-muted text-foreground/70 hover:text-foreground'}`}
            >
              {value}
            </button>
          ))}
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4">
        {filtered.map((task) => (
          <article key={task.id} className={employeeSectionClass()}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-base font-semibold text-foreground">{task.title}</p>
                <p className="mt-1 text-xs text-foreground/55">{task.project} · Due {task.dueDate} · {task.priority} priority</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`inline-flex rounded-full px-2 py-1 text-xs ${employeeStatusPill(task.status)}`}>{task.status}</span>
                {task.status !== 'Completed' && (
                  <button onClick={() => markCompleted(task.id)} className="inline-flex items-center gap-1 rounded-lg border border-border bg-brand-muted px-3 py-2 text-xs font-semibold text-foreground/85 hover:bg-brand-muted/70">
                    <CheckCircle2 className="h-4 w-4" /> Complete
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </StaggerReveal>
    </div>
  );
}

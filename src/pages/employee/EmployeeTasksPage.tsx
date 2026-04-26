import { CheckCircle2, Filter } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { employeeTasks, type EmployeeTaskStatus } from './employeeData';
import { employeePageClass, employeeSectionClass, employeeStatusPill, employeeSubtitleClass, employeeTitleClass } from './employeeShared';

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
    <div className={employeePageClass}>
      <Reveal direction="down">
        <section className={employeeSectionClass()}>
          <h1 className={employeeTitleClass}>My Tasks</h1>
          <p className={employeeSubtitleClass}>Track assignments and update progress from your employee workspace.</p>
        </section>
      </Reveal>

      <Reveal>
        <section className={employeeSectionClass('flex flex-wrap items-center gap-2')}>
          <Filter className="h-4 w-4 text-white/50" />
          {(['All', 'Pending', 'In Progress', 'Completed'] as const).map((value) => (
            <button
              key={value}
              onClick={() => setStatus(value)}
              className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 ${status === value ? 'border-brand-primary/35 bg-brand-primary text-white' : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}`}
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
                <p className="text-base font-semibold text-white">{task.title}</p>
                <p className="mt-1 text-xs text-white/55">{task.project} · Due {task.dueDate} · {task.priority} priority</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`inline-flex rounded-full px-2 py-1 text-xs ${employeeStatusPill(task.status)}`}>{task.status}</span>
                {task.status !== 'Completed' && (
                  <button onClick={() => markCompleted(task.id)} className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/85 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40">
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

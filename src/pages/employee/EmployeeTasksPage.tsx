import { CheckCircle2, Filter, Plus } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { employeeTasks, type EmployeeTaskStatus } from './employeeData';
import { employeeGhostButtonClass, employeePageClass, employeePrimaryButtonClass, employeeSectionClass, employeeStatusPill, employeeSubtitleClass, employeeTitleClass } from './employeeShared';

export function EmployeeTasksPage() {
  const [status, setStatus] = useState<EmployeeTaskStatus | 'All'>('All');
  const [tasks, setTasks] = useState(employeeTasks);
  const [boardView, setBoardView] = useState<'List' | 'Board'>('List');

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
        <section className={employeeSectionClass('flex flex-wrap items-start justify-between gap-3')}>
          <div>
            <h1 className={employeeTitleClass}>My Tasks</h1>
            <p className={employeeSubtitleClass}>Track assignments and update progress from your employee workspace.</p>
          </div>
          <button className={employeePrimaryButtonClass}>
            <Plus className="h-4 w-4" /> Add Task
          </button>
        </section>
      </Reveal>

      <Reveal>
        <section className={employeeSectionClass('flex flex-wrap items-center justify-between gap-2')}>
          <div className="flex flex-wrap items-center gap-2">
          <Filter className="h-4 w-4 text-white/50" />
          {(['All', 'Pending', 'In Progress', 'Review', 'Blocked', 'Completed'] as const).map((value) => (
            <button
              key={value}
              onClick={() => setStatus(value)}
              className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 ${status === value ? 'border-brand-primary/35 bg-brand-primary text-white' : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'}`}
            >
              {value}
            </button>
          ))}
          </div>
          <div className="flex items-center gap-2">
            {(['List', 'Board'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setBoardView(mode)}
                className={`${employeeGhostButtonClass} px-3 py-2 text-xs ${boardView === mode ? 'border-brand-primary/40 bg-brand-primary/20 text-white' : ''}`}
              >
                {mode}
              </button>
            ))}
          </div>
        </section>
      </Reveal>

      {boardView === 'List' ? (
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
      ) : (
        <StaggerReveal className="grid grid-cols-1 gap-4 xl:grid-cols-4">
          {(['Pending', 'In Progress', 'Review', 'Blocked'] as EmployeeTaskStatus[]).map((column) => (
            <section key={column} className={employeeSectionClass('p-4')}>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-white">{column}</h2>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/65">
                  {tasks.filter((task) => task.status === column).length}
                </span>
              </div>
              <div className="space-y-3">
                {tasks.filter((task) => task.status === column).map((task) => (
                  <article key={task.id} className="rounded-xl border border-white/10 bg-brand-bg/55 p-3">
                    <p className="text-sm font-semibold text-white">{task.title}</p>
                    <p className="mt-1 text-xs text-white/55">{task.project} · Due {task.dueDate}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </StaggerReveal>
      )}
    </div>
  );
}

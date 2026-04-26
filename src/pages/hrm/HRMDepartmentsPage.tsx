import { Building2, Layers, UsersRound } from 'lucide-react';
import React from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { departments } from './hrmData';
import { sectionCardClassName } from './HRMShared';

export function HRMDepartmentsPage() {
  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={sectionCardClassName()}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Department & Team Structure</h1>
              <p className="mt-1 text-sm text-white/60">Organize departments, monitor utilization, and track open role demand.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 hover:bg-white/10">
              <Layers className="h-4 w-4 text-brand-primary" /> Team hierarchy synced
            </button>
          </div>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {departments.map((department) => (
          <article key={department.id} className={sectionCardClassName('space-y-4')}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg font-semibold text-white">{department.name}</p>
                <p className="text-xs text-white/55">Lead: {department.lead}</p>
              </div>
              <Building2 className="h-4 w-4 text-brand-primary" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <p className="text-xs text-white/45">Members</p>
                <p className="text-xl font-bold text-white">{department.members}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <p className="text-xs text-white/45">Open Roles</p>
                <p className="text-xl font-bold text-white">{department.openRoles}</p>
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-xs text-white/60">
                <span className="inline-flex items-center gap-1"><UsersRound className="h-3.5 w-3.5" /> Utilization</span>
                <span>{department.utilization}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-brand-primary" style={{ width: `${department.utilization}%` }} />
              </div>
            </div>

            <button className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85 transition-colors hover:bg-white/10">
              View Team Members
            </button>
          </article>
        ))}
      </StaggerReveal>
    </div>
  );
}
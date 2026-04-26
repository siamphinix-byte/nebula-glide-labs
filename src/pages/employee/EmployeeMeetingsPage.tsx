import { CalendarClock, Copy, ExternalLink, PlayCircle, Plus, Video } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { employeeMeetings } from './employeeData';
import { employeeGhostButtonClass, employeePageClass, employeePrimaryButtonClass, employeeSectionClass, employeeStatusPill, employeeSubtitleClass, employeeTitleClass } from './employeeShared';

export function EmployeeMeetingsPage() {
  const [filter, setFilter] = useState<'All' | 'Scheduled' | 'Live' | 'Completed' | 'Draft'>('All');

  const meetings = useMemo(() => {
    if (filter === 'All') return employeeMeetings;
    return employeeMeetings.filter((meeting) => meeting.status === filter);
  }, [filter]);

  const stats = useMemo(() => ({
    total: employeeMeetings.length,
    live: employeeMeetings.filter((meeting) => meeting.status === 'Live').length,
    scheduled: employeeMeetings.filter((meeting) => meeting.status === 'Scheduled').length,
    completed: employeeMeetings.filter((meeting) => meeting.status === 'Completed').length,
  }), []);

  return (
    <div className={employeePageClass}>
      <Reveal direction="down">
        <section className={employeeSectionClass('flex flex-wrap items-start justify-between gap-3')}>
          <div>
            <h1 className={employeeTitleClass}>Meetings</h1>
            <p className={employeeSubtitleClass}>Manage all employee meeting sessions, links, and agenda status.</p>
          </div>
          <button className={employeePrimaryButtonClass}>
            <Plus className="h-4 w-4" /> New Meeting
          </button>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {[
          { label: 'Total', value: stats.total, icon: Video },
          { label: 'Live', value: stats.live, icon: PlayCircle },
          { label: 'Scheduled', value: stats.scheduled, icon: CalendarClock },
          { label: 'Completed', value: stats.completed, icon: ExternalLink },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.label} className={employeeSectionClass('p-4')}>
              <div className="flex items-center justify-between text-white/55">
                <p className="text-xs uppercase tracking-wide">{item.label}</p>
                <Icon className="h-4 w-4 text-brand-primary" />
              </div>
              <p className="mt-2 text-2xl font-bold text-white">{item.value}</p>
            </article>
          );
        })}
      </StaggerReveal>

      <Reveal>
        <section className={employeeSectionClass('space-y-4')}>
          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'Scheduled', 'Live', 'Completed', 'Draft'] as const).map((value) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`${employeeGhostButtonClass} px-3 py-1.5 text-xs ${filter === value ? 'border-brand-primary/40 bg-brand-primary/20 text-white' : ''}`}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/55">
                  <th className="px-3 py-3">Meeting</th>
                  <th className="px-3 py-3">Date & Time</th>
                  <th className="px-3 py-3">Duration</th>
                  <th className="px-3 py-3">Project</th>
                  <th className="px-3 py-3">Status</th>
                  <th className="px-3 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {meetings.map((meeting) => (
                  <tr key={meeting.id} className="border-b border-white/10 align-top transition-colors hover:bg-white/5">
                    <td className="px-3 py-3">
                      <p className="font-semibold text-white">{meeting.title}</p>
                      <p className="mt-1 text-xs text-white/55">Host: {meeting.host}</p>
                      <p className="mt-1 text-xs text-white/50">{meeting.agenda}</p>
                    </td>
                    <td className="px-3 py-3 text-white/80">{meeting.dateTime}</td>
                    <td className="px-3 py-3 text-white/80">{meeting.duration}</td>
                    <td className="px-3 py-3 text-white/80">{meeting.project}</td>
                    <td className="px-3 py-3"><span className={`inline-flex rounded-full px-2 py-1 text-xs ${employeeStatusPill(meeting.status)}`}>{meeting.status}</span></td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/75 transition-colors hover:bg-white/10" aria-label="Copy join link">
                          <Copy className="h-3.5 w-3.5" />
                        </button>
                        <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/75 transition-colors hover:bg-white/10" aria-label="Open meeting">
                          <ExternalLink className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
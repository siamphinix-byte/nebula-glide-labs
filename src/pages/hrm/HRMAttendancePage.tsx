import { CalendarDays } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Reveal, StaggerReveal } from '@/components/GSAPWrapper';
import { attendanceLog, attendanceOverview, type AttendanceStatus } from './hrmData';
import { sectionCardClassName, statusPillClassName } from './HRMShared';

export function HRMAttendancePage() {
  const [statusFilter, setStatusFilter] = useState<AttendanceStatus | 'All'>('All');

  const filteredLog = useMemo(() => {
    if (statusFilter === 'All') {
      return attendanceLog;
    }
    return attendanceLog.filter((item) => item.status === statusFilter);
  }, [statusFilter]);

  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={sectionCardClassName()}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Attendance Overview</h1>
              <p className="mt-1 text-sm text-white/60">Monitor attendance patterns and review daily employee check-in status.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 hover:bg-white/10">
              <CalendarDays className="h-4 w-4 text-brand-primary" />
              Current Week Snapshot
            </button>
          </div>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Present', value: 81, tone: 'text-brand-teal' },
          { label: 'Late', value: 7, tone: 'text-brand-secondary' },
          { label: 'Remote', value: 9, tone: 'text-brand-primary' },
          { label: 'Absent', value: 3, tone: 'text-white/80' },
        ].map((item) => (
          <article key={item.label} className={sectionCardClassName('p-4')}>
            <p className="text-sm text-white/70">{item.label}</p>
            <p className={`mt-2 text-3xl font-bold ${item.tone}`}>{item.value}</p>
          </article>
        ))}
      </StaggerReveal>

      <Reveal>
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_1fr]">
          <article className={sectionCardClassName()}>
            <h2 className="mb-4 text-lg font-semibold text-white">Weekly Attendance Trend</h2>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attendanceOverview}>
                  <CartesianGrid stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="day" stroke="rgba(255,255,255,0.6)" />
                  <YAxis stroke="rgba(255,255,255,0.6)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--color-brand-bg)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '10px',
                      color: 'white',
                    }}
                  />
                  <Bar dataKey="present" fill="var(--color-brand-teal)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="remote" fill="var(--color-brand-primary)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="late" fill="var(--color-brand-secondary)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="absent" fill="rgba(255,255,255,0.4)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className={sectionCardClassName()}>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Daily Log</h2>
              <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
                {(['All', 'Present', 'Late', 'Remote', 'Absent'] as const).map((value) => (
                  <button
                    key={value}
                    onClick={() => setStatusFilter(value)}
                    className={`rounded-md px-2 py-1 text-xs ${statusFilter === value ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'}`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              {filteredLog.map((item) => (
                <div key={item.id} className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs ${statusPillClassName(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-white/55">{item.department} · {item.id}</p>
                  <p className="mt-2 text-xs text-white/70">Check In: {item.checkIn} · Check Out: {item.checkOut}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </Reveal>
    </div>
  );
}
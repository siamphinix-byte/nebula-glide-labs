import { ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react';
import React from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { employeeCalendarEvents } from './employeeData';
import { employeeGhostButtonClass, employeePageClass, employeeSectionClass, employeeSubtitleClass, employeeTitleClass } from './employeeShared';

export function EmployeeCalendarPage() {
  return (
    <div className={employeePageClass}>
      <Reveal direction="down">
        <section className={employeeSectionClass('flex flex-wrap items-start justify-between gap-3')}>
          <div>
            <h1 className={employeeTitleClass}>Calendar</h1>
            <p className={employeeSubtitleClass}>Track schedules, sessions, and upcoming employee events in one place.</p>
          </div>
          <div className="flex items-center gap-2">
            <button className={`${employeeGhostButtonClass} h-9 w-9 justify-center p-0`} aria-label="Previous month">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className={`${employeeGhostButtonClass} px-3 py-2 text-xs`}>Today</button>
            <button className={`${employeeGhostButtonClass} h-9 w-9 justify-center p-0`} aria-label="Next month">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-6 xl:grid-cols-[1.35fr_1fr]">
        <section className={employeeSectionClass()}>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">May 2026</h2>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <CalendarDays className="h-4 w-4 text-brand-primary" />
              <span>Month view</span>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-xs text-white/45">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="rounded-lg border border-transparent py-2">{day}</div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }).map((_, index) => {
              const day = index - 3;
              const inMonth = day > 0 && day <= 31;
              const selected = day === 2 || day === 5 || day === 6;
              return (
                <div
                  key={index}
                  className={`h-16 rounded-lg border p-2 text-xs transition-colors ${inMonth ? 'border-white/10 bg-brand-bg/55 text-white/80 hover:bg-white/5' : 'border-transparent bg-transparent text-white/25'} ${selected ? 'border-brand-primary/40 bg-brand-primary/20 text-white' : ''}`}
                >
                  {inMonth ? day : ''}
                </div>
              );
            })}
          </div>
        </section>

        <section className={employeeSectionClass()}>
          <h2 className="mb-4 text-lg font-semibold text-white">Upcoming</h2>
          <div className="space-y-3">
            {employeeCalendarEvents.map((event) => (
              <article key={event.id} className="rounded-xl border border-white/10 bg-brand-bg/55 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{event.title}</p>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70">{event.source}</span>
                </div>
                <p className="mt-1 text-xs text-white/55">{event.date} · {event.time}</p>
              </article>
            ))}
          </div>
        </section>
      </StaggerReveal>
    </div>
  );
}
import { Clock3, Moon, Plus, Search } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { sectionCardClassName } from './HRMShared';
import { shifts } from './hrmData';
import { HRMHorizontalScroll } from './HRMHorizontalScroll';

export function HRMShiftsPage() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState(shifts);

  const filteredShifts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return items;
    return items.filter((shift) => shift.name.toLowerCase().includes(normalized) || shift.id.toLowerCase().includes(normalized));
  }, [items, query]);

  const toggleNight = (id: string) => {
    setItems((prev) => prev.map((shift) => (shift.id === id ? { ...shift, isNight: !shift.isNight } : shift)));
  };

  const nightCount = filteredShifts.filter((shift) => shift.isNight).length;

  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={sectionCardClassName()}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Shift Configuration</h1>
              <p className="mt-1 text-sm text-white/60">Create and maintain shift windows across departments and operations.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10">
              <Plus className="h-4 w-4 text-brand-secondary" /> New Shift
            </button>
          </div>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className={sectionCardClassName('p-4')}>
          <p className="text-xs uppercase tracking-wide text-white/50">Total Active Shifts</p>
          <p className="mt-2 text-3xl font-bold text-white">{filteredShifts.length}</p>
        </article>
        <article className={sectionCardClassName('p-4')}>
          <p className="text-xs uppercase tracking-wide text-white/50">Night Rotations</p>
          <p className="mt-2 text-3xl font-bold text-brand-primary">{nightCount}</p>
        </article>
        <article className={sectionCardClassName('p-4')}>
          <p className="text-xs uppercase tracking-wide text-white/50">Policy Status</p>
          <p className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-brand-teal">
            <Clock3 className="h-4 w-4" /> Compliant
          </p>
        </article>
      </StaggerReveal>

      <Reveal>
        <section className={sectionCardClassName('space-y-4')}>
          <label className="flex max-w-md items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3">
            <Search className="h-4 w-4 text-white/50" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search shift by name or id"
              className="h-11 w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </label>

          <HRMHorizontalScroll>
            <table className="w-full min-w-[860px] text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/55">
                  <th className="px-3 py-3">Shift</th>
                  <th className="px-3 py-3">Start</th>
                  <th className="px-3 py-3">End</th>
                  <th className="px-3 py-3">Night</th>
                  <th className="px-3 py-3">Created By</th>
                  <th className="px-3 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredShifts.map((shift) => (
                  <tr key={shift.id} className="border-b border-white/5">
                    <td className="px-3 py-3">
                      <p className="font-semibold text-white">{shift.name}</p>
                      <p className="text-xs text-white/50">{shift.id}</p>
                    </td>
                    <td className="px-3 py-3 text-white/75">{shift.start}</td>
                    <td className="px-3 py-3 text-white/75">{shift.end}</td>
                    <td className="px-3 py-3">
                      <button
                        onClick={() => toggleNight(shift.id)}
                        className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs transition-colors ${
                          shift.isNight
                            ? 'border-brand-primary/40 bg-brand-primary/20 text-brand-primary'
                            : 'border-white/20 bg-white/5 text-white/70'
                        }`}
                      >
                        <Moon className="h-3 w-3" /> {shift.isNight ? 'Enabled' : 'Off'}
                      </button>
                    </td>
                    <td className="px-3 py-3 text-white/75">{shift.createdBy}</td>
                    <td className="px-3 py-3">
                      <button className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80 transition-colors hover:bg-white/10">
                        Edit Shift
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </HRMHorizontalScroll>
        </section>
      </Reveal>
    </div>
  );
}
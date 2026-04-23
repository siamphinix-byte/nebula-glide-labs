import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, Plus, X, Pencil, Check } from 'lucide-react';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

type TimeEntry = {
  project: string;
  task: string;
  date: string;
  mode: 'duration' | 'range';
  hours: number;
  description: string;
  billable: boolean;
};

const projectOptions = ['Analytics System', 'Security Audit', 'API Gateway', 'Customer Portal'];
const taskOptions = ['Bug Fix Implementation', 'Third-party Integration', 'QA Review', 'Payment Integration'];

const toDateKey = (date: Date) => date.toISOString().split('T')[0];

const buildCalendar = (monthDate: Date) => {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const cells: { date: Date; inCurrentMonth: boolean }[] = [];

  for (let i = firstDay - 1; i >= 0; i -= 1) {
    cells.push({ date: new Date(year, month - 1, prevMonthDays - i), inCurrentMonth: false });
  }

  for (let d = 1; d <= daysInMonth; d += 1) {
    cells.push({ date: new Date(year, month, d), inCurrentMonth: true });
  }

  while (cells.length % 7 !== 0 || cells.length < 35) {
    const nextDate = cells.length - (firstDay + daysInMonth) + 1;
    cells.push({ date: new Date(year, month + 1, nextDate), inCurrentMonth: false });
  }

  return cells;
};

export function CalendarView() {
  const [viewMonth, setViewMonth] = useState(new Date(2026, 3, 1));
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [editingEntryIndex, setEditingEntryIndex] = useState<number | null>(null);
  const [editingDraft, setEditingDraft] = useState<{ task: string; description: string; hours: number }>({
    task: '',
    description: '',
    hours: 0,
  });
  const [entriesByDate, setEntriesByDate] = useState<Record<string, TimeEntry[]>>({
    '2026-04-23': [
      {
        project: 'Analytics System',
        task: 'Third-party Integration',
        date: '04/23/2026',
        mode: 'duration',
        hours: 8,
        description: 'API integration testing and review.',
        billable: true,
      },
    ],
  });

  const [form, setForm] = useState<TimeEntry>({
    project: 'Analytics System',
    task: 'Bug Fix Implementation',
    date: '04/23/2026',
    mode: 'duration',
    hours: 8,
    description: '',
    billable: true,
  });

  const cells = useMemo(() => buildCalendar(viewMonth), [viewMonth]);

  const allEntries = useMemo(() => Object.values(entriesByDate).flat(), [entriesByDate]);
  const totalHours = allEntries.reduce((sum, entry) => sum + entry.hours, 0);
  const billableHours = allEntries.filter((entry) => entry.billable).reduce((sum, entry) => sum + entry.hours, 0);
  const nonBillableHours = Math.max(0, totalHours - billableHours);
  const selectedEntries = selectedDate ? entriesByDate[selectedDate] || [] : [];
  const recentEntries = allEntries.slice(-5).reverse();

  const handleOpenModal = (dateObj: Date) => {
    const key = toDateKey(dateObj);
    const uiDate = dateObj.toLocaleDateString('en-US');
    setSelectedDate(key);
    setForm((prev) => ({ ...prev, date: uiDate }));
    setOpenModal(true);
  };

  const handleAddEntry = () => {
    if (!selectedDate || !form.project || !form.task || !form.hours) return;
    setEntriesByDate((prev) => ({
      ...prev,
      [selectedDate]: [...(prev[selectedDate] || []), form],
    }));
    setOpenModal(false);
    setForm((prev) => ({ ...prev, description: '', hours: 8 }));
  };

  const handleStartEdit = (index: number) => {
    const current = selectedEntries[index];
    if (!current) return;
    setEditingEntryIndex(index);
    setEditingDraft({
      task: current.task,
      description: current.description,
      hours: current.hours,
    });
  };

  const handleSaveEdit = () => {
    if (!selectedDate || editingEntryIndex === null) return;
    setEntriesByDate((prev) => {
      const dayEntries = [...(prev[selectedDate] || [])];
      const existing = dayEntries[editingEntryIndex];
      if (!existing) return prev;
      dayEntries[editingEntryIndex] = {
        ...existing,
        task: editingDraft.task,
        description: editingDraft.description,
        hours: editingDraft.hours,
      };
      return { ...prev, [selectedDate]: dayEntries };
    });
    setEditingEntryIndex(null);
  };

  const handleCancelEdit = () => {
    setEditingEntryIndex(null);
  };

  const monthLabel = viewMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="mx-auto max-w-[1400px] space-y-6 pb-24 h-full font-sans animate-fade-in">
      <Reveal direction="down">
        <div className="mb-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-black tracking-tight text-white">Calendar View</h1>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-6 shadow-2xl">
          <div className="mb-6 flex items-center gap-4">
            <button
              onClick={() => setViewMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[var(--color-brand-bg)] text-white/70 transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h2 className="text-4xl font-black tracking-tight text-white">{monthLabel}</h2>
            <button
              onClick={() => setViewMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[var(--color-brand-bg)] text-white/70 transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-4 grid grid-cols-7">
            {days.map((day) => (
              <div key={day} className="text-center text-xs font-bold uppercase tracking-wider text-white/50">
                {day}
              </div>
            ))}
          </div>

          <StaggerReveal className="grid grid-cols-7 gap-3">
            {cells.map((cell) => {
              const key = toDateKey(cell.date);
              const dayEntries = entriesByDate[key] || [];
              const isSelected = selectedDate === key;

              return (
                <article
                  key={key}
                  onClick={() => setSelectedDate(key)}
                  className={`group min-h-[120px] rounded-2xl border p-2.5 transition-all ${
                    cell.inCurrentMonth
                      ? 'cursor-pointer border-white/10 bg-[var(--color-brand-bg)] hover:border-white/20'
                      : 'border-white/5 bg-[var(--color-brand-bg)]/30 opacity-60'
                  } ${isSelected ? 'border-[var(--color-brand-primary)]/45 shadow-[0_0_0_1px_var(--color-brand-primary)]' : ''}`}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className={`text-sm font-bold ${cell.inCurrentMonth ? 'text-white/85' : 'text-white/35'}`}>{cell.date.getDate()}</span>
                    {cell.inCurrentMonth && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(cell.date);
                        }}
                        className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs transition-all ${
                          isSelected
                            ? 'border-[var(--color-brand-secondary)]/40 bg-[var(--color-brand-secondary)]/15 text-[var(--color-brand-secondary)]'
                            : 'border-white/15 text-white/45 opacity-0 group-hover:opacity-100'
                        }`}
                        title="Add entry"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>

                  <div className="space-y-1">
                    {dayEntries.slice(0, 2).map((entry, i) => (
                      <div key={`${key}-${i}`} className="truncate rounded-md bg-[var(--color-brand-primary)]/15 px-2 py-1 text-[10px] font-semibold text-[var(--color-brand-primary)]">
                        {entry.project} · {entry.hours}h
                      </div>
                    ))}
                    {dayEntries.length > 2 && <p className="text-[10px] font-semibold text-white/45">+{dayEntries.length - 2} more</p>}
                  </div>
                </article>
              );
            })}
          </StaggerReveal>
        </div>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <section className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-4 xl:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wider text-white/55">Selected Day Snapshot</p>
              <p className="text-xs font-semibold text-white/45">{selectedDate ? new Date(selectedDate).toLocaleDateString('en-US') : 'No day selected'}</p>
            </div>

            {selectedEntries.length ? (
              <div className="space-y-3">
                {selectedEntries.map((entry, idx) => (
                  <article key={`${entry.project}-${idx}`} className="rounded-xl border border-white/10 bg-[var(--color-brand-bg)] p-3">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <p className="truncate text-sm font-bold text-white">{entry.project}</p>
                      <div className="flex items-center gap-2">
                        {editingEntryIndex === idx ? (
                          <input
                            type="number"
                            min={0.25}
                            step={0.25}
                            value={editingDraft.hours}
                            onChange={(event) => setEditingDraft((prev) => ({ ...prev, hours: Number(event.target.value) }))}
                            className="w-20 rounded-lg border border-white/15 bg-[var(--color-brand-surface)] px-2 py-1 text-[10px] font-bold text-white outline-none focus:border-[var(--color-brand-primary)]"
                          />
                        ) : (
                          <span className="rounded-full border border-[var(--color-brand-primary)]/35 bg-[var(--color-brand-primary)]/10 px-2 py-1 text-[10px] font-bold text-[var(--color-brand-primary)]">
                            {entry.hours}h
                          </span>
                        )}
                        {editingEntryIndex === idx ? (
                          <>
                            <button
                              onClick={handleSaveEdit}
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-[var(--color-brand-teal)]/30 bg-[var(--color-brand-teal)]/10 text-[var(--color-brand-teal)] transition-colors hover:bg-[var(--color-brand-teal)]/20"
                              title="Save"
                            >
                              <Check className="h-3.5 w-3.5" />
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white/70 transition-colors hover:bg-white/10"
                              title="Cancel"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => handleStartEdit(idx)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white/70 transition-colors hover:bg-white/10"
                            title="Edit entry"
                          >
                            <Pencil className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                    {editingEntryIndex === idx ? (
                      <>
                        <input
                          value={editingDraft.task}
                          onChange={(event) => setEditingDraft((prev) => ({ ...prev, task: event.target.value }))}
                          className="w-full rounded-lg border border-white/15 bg-[var(--color-brand-surface)] px-2.5 py-1.5 text-xs text-white outline-none focus:border-[var(--color-brand-primary)]"
                        />
                        <textarea
                          value={editingDraft.description}
                          onChange={(event) => setEditingDraft((prev) => ({ ...prev, description: event.target.value }))}
                          className="mt-2 h-16 w-full rounded-lg border border-white/15 bg-[var(--color-brand-surface)] px-2.5 py-1.5 text-xs text-white outline-none focus:border-[var(--color-brand-primary)]"
                        />
                      </>
                    ) : (
                      <>
                        <p className="text-xs text-white/60">{entry.task}</p>
                        {entry.description && <p className="mt-2 text-xs text-white/45">{entry.description}</p>}
                      </>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-white/15 bg-[var(--color-brand-bg)]/50 px-4 py-8 text-center text-sm text-white/55">
                No entries for this date yet. Click + on a day to add one.
              </div>
            )}
          </section>

          <section className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/55">Timesheet Summary</p>
            <div className="space-y-2">
              <article className="rounded-xl border border-white/10 bg-[var(--color-brand-bg)] px-3 py-2">
                <p className="text-[11px] text-white/50">Total Hours</p>
                <p className="text-lg font-black text-[var(--color-brand-primary)]">{totalHours.toFixed(1)}h</p>
              </article>
              <article className="rounded-xl border border-white/10 bg-[var(--color-brand-bg)] px-3 py-2">
                <p className="text-[11px] text-white/50">Billable</p>
                <p className="text-lg font-black text-[var(--color-brand-teal)]">{billableHours.toFixed(1)}h</p>
              </article>
              <article className="rounded-xl border border-white/10 bg-[var(--color-brand-bg)] px-3 py-2">
                <p className="text-[11px] text-white/50">Non-Billable</p>
                <p className="text-lg font-black text-white">{nonBillableHours.toFixed(1)}h</p>
              </article>
            </div>

            <p className="mb-2 mt-4 text-xs font-bold uppercase tracking-wider text-white/55">Recent Entries</p>
            <div className="space-y-2">
              {recentEntries.map((entry, idx) => (
                <div key={`${entry.date}-${idx}`} className="rounded-xl border border-white/10 bg-[var(--color-brand-bg)] px-3 py-2">
                  <p className="truncate text-xs font-semibold text-white/80">{entry.project}</p>
                  <p className="text-[11px] text-white/45">{entry.date} · {entry.hours}h</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Reveal>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4">
          <div className="w-full max-w-[640px] rounded-2xl border border-white/15 bg-[var(--color-brand-surface)] p-6 shadow-2xl animate-enter">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-3xl font-black tracking-tight text-white">
                <Clock className="h-6 w-6 text-[var(--color-brand-secondary)]" /> Add Time Entry
              </h3>
              <button onClick={() => setOpenModal(false)} className="text-white/45 transition-colors hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="text-sm font-semibold text-white/80">
                Project *
                <select
                  value={form.project}
                  onChange={(e) => setForm((prev) => ({ ...prev, project: e.target.value }))}
                  className="mt-1 w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 py-2.5 text-white outline-none focus:border-[var(--color-brand-primary)]"
                >
                  {projectOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label className="text-sm font-semibold text-white/80">
                Task
                <select
                  value={form.task}
                  onChange={(e) => setForm((prev) => ({ ...prev, task: e.target.value }))}
                  className="mt-1 w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 py-2.5 text-white outline-none focus:border-[var(--color-brand-primary)]"
                >
                  {taskOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label className="text-sm font-semibold text-white/80 md:col-span-2">
                Date *
                <div className="relative mt-1">
                  <input
                    value={form.date}
                    onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
                    className="w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 py-2.5 pr-10 text-white outline-none focus:border-[var(--color-brand-primary)]"
                  />
                  <CalendarIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
                </div>
              </label>

              <div className="md:col-span-2 flex items-center gap-6 text-white/80">
                <label className="flex items-center gap-2 text-sm font-semibold">
                  <input
                    type="radio"
                    checked={form.mode === 'duration'}
                    onChange={() => setForm((prev) => ({ ...prev, mode: 'duration' }))}
                  />
                  Duration
                </label>
                <label className="flex items-center gap-2 text-sm font-semibold">
                  <input
                    type="radio"
                    checked={form.mode === 'range'}
                    onChange={() => setForm((prev) => ({ ...prev, mode: 'range' }))}
                  />
                  Start/End Times
                </label>
              </div>

              <label className="text-sm font-semibold text-white/80 md:col-span-2">
                Hours *
                <input
                  type="number"
                  min={0.25}
                  step={0.25}
                  value={form.hours}
                  onChange={(e) => setForm((prev) => ({ ...prev, hours: Number(e.target.value) }))}
                  className="mt-1 w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 py-2.5 text-white outline-none focus:border-[var(--color-brand-primary)]"
                />
              </label>

              <label className="text-sm font-semibold text-white/80 md:col-span-2">
                Description
                <textarea
                  value={form.description}
                  onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="What did you work on?"
                  className="mt-1 h-24 w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 py-2.5 text-white outline-none placeholder:text-white/35 focus:border-[var(--color-brand-primary)]"
                />
              </label>

              <label className="md:col-span-2 flex items-center gap-2 text-sm font-semibold text-white/85">
                <input
                  type="checkbox"
                  checked={form.billable}
                  onChange={(e) => setForm((prev) => ({ ...prev, billable: e.target.checked }))}
                />
                Billable
              </label>
            </div>

            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEntry}
                className="rounded-xl border border-[var(--color-brand-secondary)]/35 bg-[var(--color-brand-secondary)] px-5 py-2.5 text-sm font-bold text-[var(--color-brand-bg)] transition-all hover:scale-[1.02]"
              >
                Add Entry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

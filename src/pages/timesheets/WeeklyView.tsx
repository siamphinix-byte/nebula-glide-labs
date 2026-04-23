import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, Lock, Plus, Search } from 'lucide-react';
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type DayEntry = { proj: string; hrs: number; locked: boolean; billable: boolean };
type DayCard = { total: number; billable: number; entries: DayEntry[]; more: number };

const baseWeekStart = new Date('2026-04-20T00:00:00');

const initialCards: DayCard[] = Array.from({ length: 7 }, (_, i) => ({
  total: 6 + (i % 3),
  billable: 4.5 + (i % 2),
  entries: [
    { proj: 'Analytics QA Review', hrs: 1, locked: i % 2 === 0, billable: true },
    { proj: 'Integration Sync', hrs: 2, locked: true, billable: true },
    { proj: 'Bug Fix Implementation', hrs: 1, locked: false, billable: i !== 5 },
  ],
  more: 8 + i,
}));

const formatHours = (v: number) => `${v.toFixed(1)}h`;

export function WeeklyView() {
  const [weekStart, setWeekStart] = useState(baseWeekStart);
  const [dayCards, setDayCards] = useState<DayCard[]>(initialCards);
  const [activeDay, setActiveDay] = useState(3);
  const [search, setSearch] = useState('');
  const [lockedOnly, setLockedOnly] = useState(false);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const weekDates = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => {
        const date = new Date(weekStart);
        date.setDate(weekStart.getDate() + i);
        return {
          day: date.toLocaleDateString('en-US', { weekday: 'short' }),
          date: date.getDate(),
          isToday: i === 3,
        };
      }),
    [weekStart],
  );

  const rangeLabel = `${weekStart.toLocaleDateString('en-US')} - ${new Date(
    weekStart.getFullYear(),
    weekStart.getMonth(),
    weekStart.getDate() + 6,
  ).toLocaleDateString('en-US')}`;

  const totalHours = dayCards.reduce((sum, d) => sum + d.total, 0);
  const billableHours = dayCards.reduce((sum, d) => sum + d.billable, 0);
  const totalEntries = dayCards.reduce((sum, d) => sum + d.entries.length + d.more, 0);
  const avgDay = totalHours / 7;

  const barData = weekDates.map((d, i) => ({ day: d.day, hours: Number(dayCards[i].total.toFixed(2)) }));
  const pieData = [
    { name: 'Billable', value: Number(billableHours.toFixed(2)), color: 'var(--color-brand-teal)' },
    { name: 'Non-Billable', value: Number(Math.max(totalHours - billableHours, 0).toFixed(2)), color: 'var(--color-brand-primary)' },
  ];

  const changeWeek = (days: number) => {
    const next = new Date(weekStart);
    next.setDate(next.getDate() + days);
    setWeekStart(next);
  };

  const addEntryToDay = (index: number) => {
    setDayCards((prev) =>
      prev.map((day, i) =>
        i === index
          ? {
              ...day,
              total: day.total + 1,
              billable: day.billable + 1,
              entries: [{ proj: 'Client Review Sync', hrs: 1, locked: false, billable: true }, ...day.entries],
            }
          : day,
      ),
    );
  };

  return (
    <div className="mx-auto max-w-[1400px] space-y-6 pb-24 font-sans animate-fade-in">
      <Reveal direction="down">
        <div className="mb-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-black tracking-tight text-white">Weekly View</h1>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-4 shadow-xl md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => changeWeek(-7)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[var(--color-brand-bg)] text-white/70 transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-bold tracking-tight text-white">{rangeLabel}</h2>
            <button
              onClick={() => changeWeek(7)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[var(--color-brand-bg)] text-white/70 transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <button
            onClick={() => setWeekStart(baseWeekStart)}
            className="rounded-full border border-[var(--color-brand-primary)]/35 bg-[var(--color-brand-primary)]/15 px-4 py-2.5 text-[13px] font-bold text-[var(--color-brand-primary)] transition-colors hover:bg-[var(--color-brand-primary)]/25"
          >
            Current Week
          </button>
        </div>
      </Reveal>

      <StaggerReveal className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5">
          <p className="mb-2 flex items-center gap-2 text-[13px] font-bold text-[var(--color-brand-secondary)]"><Clock className="h-4 w-4" /> Total Hours</p>
          <p className="text-4xl font-black tracking-tight text-white">{formatHours(totalHours)}</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5">
          <p className="mb-2 flex items-center gap-2 text-[13px] font-bold text-[var(--color-brand-teal)]"><CalendarIcon className="h-4 w-4" /> Billable Hours</p>
          <p className="text-4xl font-black tracking-tight text-[var(--color-brand-teal)]">{formatHours(billableHours)}</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5">
          <p className="mb-2 text-[13px] font-bold text-[var(--color-brand-primary)]">Entries</p>
          <p className="text-4xl font-black tracking-tight text-[var(--color-brand-primary)]">{totalEntries}</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-5">
          <p className="mb-2 text-[13px] font-bold text-[var(--color-brand-secondary)]">Avg/Day</p>
          <p className="text-4xl font-black tracking-tight text-[var(--color-brand-secondary)]">{formatHours(avgDay)}</p>
        </article>
      </StaggerReveal>

      <Reveal delay={0.18}>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.3fr_1fr]">
          <div className="h-[220px] rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wider text-white/55">Weekly Hour Topology</p>
              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-2 py-1 text-xs text-white/70">
                <Search className="h-3.5 w-3.5" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Filter entries"
                  className="w-[110px] bg-transparent outline-none placeholder:text-white/35"
                />
              </div>
            </div>
            <ResponsiveContainer width="100%" height="88%">
              <BarChart data={barData}>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,.04)' }}
                  contentStyle={{ backgroundColor: 'var(--color-brand-bg)', borderColor: 'rgba(255,255,255,.15)', borderRadius: 10, color: 'white' }}
                />
                <Bar dataKey="hours" radius={[6, 6, 0, 0]} fill="var(--color-brand-primary)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="h-[220px] rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/55">Billable Split</p>
            <ResponsiveContainer width="100%" height="88%">
              <PieChart>
                <Pie data={pieData} dataKey="value" innerRadius={45} outerRadius={68} paddingAngle={4} stroke="none">
                  {pieData.map((slice) => (
                    <Cell key={slice.name} fill={slice.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: 'var(--color-brand-bg)', borderColor: 'rgba(255,255,255,.15)', borderRadius: 10, color: 'white' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.26}>
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-6 shadow-2xl">
          <div className="mb-4 flex items-center gap-3">
            <button
              onClick={() => setLockedOnly((prev) => !prev)}
              className={`rounded-full border px-3 py-1.5 text-xs font-bold transition-colors ${
                lockedOnly
                  ? 'border-[var(--color-brand-secondary)]/30 bg-[var(--color-brand-secondary)]/15 text-[var(--color-brand-secondary)]'
                  : 'border-white/15 bg-[var(--color-brand-bg)] text-white/70 hover:bg-white/10'
              }`}
            >
              {lockedOnly ? 'Locked Only' : 'All Entries'}
            </button>
          </div>

          <StaggerReveal className="flex min-w-[960px] gap-4">
            {dayCards.map((card, i) => {
              const filteredEntries = card.entries.filter(
                (entry) => (!lockedOnly || entry.locked) && entry.proj.toLowerCase().includes(search.toLowerCase()),
              );
              const visibleEntries = expanded[i] ? filteredEntries : filteredEntries.slice(0, 3);
              const extra = Math.max(filteredEntries.length - 3 + card.more, 0);

              return (
                <article
                  key={i}
                  className={`flex flex-1 flex-col overflow-hidden rounded-2xl border bg-[var(--color-brand-bg)] transition-all ${
                    activeDay === i
                      ? 'border-[var(--color-brand-primary)]/55 shadow-[0_0_0_1px_var(--color-brand-primary)]'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => setActiveDay(i)}
                    className="border-b border-white/10 p-4 text-center"
                  >
                    <p className="text-[13px] font-bold uppercase tracking-wider text-white/50">{weekDates[i].day}</p>
                    <p className="mt-1 flex items-center justify-center gap-2 text-3xl font-black text-white">
                      {weekDates[i].date}
                      {weekDates[i].isToday && (
                        <span className="rounded-full border border-[var(--color-brand-secondary)]/30 bg-[var(--color-brand-secondary)]/15 px-2 py-0.5 text-[9px] uppercase tracking-wide text-[var(--color-brand-secondary)]">
                          Today
                        </span>
                      )}
                    </p>
                    <p className="mt-2 text-4xl font-black tracking-tight text-[var(--color-brand-primary)]">{formatHours(card.total)}</p>
                    <p className="text-xs font-semibold text-[var(--color-brand-teal)]">{formatHours(card.billable)} billable</p>
                  </button>

                  <div className="flex-1 space-y-2 p-3">
                    {visibleEntries.map((entry, j) => (
                      <div key={j} className="rounded-xl border border-white/10 bg-[var(--color-brand-surface)] p-3">
                        <p className="truncate text-[12px] font-bold text-white">{entry.proj}</p>
                        <div className="mt-1 flex items-center justify-between text-[11px]">
                          <span className="font-medium text-[var(--color-brand-secondary)]">{formatHours(entry.hrs)}</span>
                          <span className={`inline-flex items-center gap-1 ${entry.locked ? 'text-[var(--color-brand-secondary)]' : 'text-white/35'}`}>
                            <Lock className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    ))}

                    {extra > 0 && (
                      <button
                        onClick={() => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))}
                        className="w-full py-1 text-center text-[11px] font-semibold text-white/45 transition-colors hover:text-white/70"
                      >
                        {expanded[i] ? 'Show less' : `+${extra} more`}
                      </button>
                    )}
                  </div>

                  <div className="border-t border-white/10 bg-[var(--color-brand-surface)] p-3">
                    <button
                      onClick={() => addEntryToDay(i)}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 py-2 text-[12px] font-bold text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <Plus className="h-4 w-4" /> Add
                    </button>
                  </div>
                </article>
              );
            })}
          </StaggerReveal>
        </div>
      </Reveal>
    </div>
  );
}

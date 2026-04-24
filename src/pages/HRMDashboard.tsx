import React, { useMemo, useState } from 'react';
import {
  BellRing,
  Building2,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Dot,
  Megaphone,
  UserCheck,
  UserMinus,
  Users,
} from 'lucide-react';
import { Bar, BarChart, CartesianGrid, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';

type LeaveType = 'Annual' | 'Casual' | 'Sick';
type LeaveStatus = 'Approved' | 'Pending' | 'Rejected';
type CalendarMode = 'month' | 'week' | 'day';

const departmentData = [
  { name: 'Sales & Marketing', office: 'Main Office', count: 17 },
  { name: 'Operations', office: 'Main Office', count: 10 },
  { name: 'Customer Service', office: 'Main Office', count: 13 },
  { name: 'Research & Development', office: 'Downtown Branch', count: 9 },
  { name: 'Quality Assurance', office: 'Downtown Branch', count: 10 },
  { name: 'Legal & Compliance', office: 'Downtown Branch', count: 5 },
];

const employeesOnLeave = [
  { id: 'EMP2061001', name: 'Robert Taylor', type: 'Annual' as LeaveType, days: 1 },
  { id: 'EMP2061002', name: 'Christopher Lee', type: 'Casual' as LeaveType, days: 1 },
  { id: 'EMP2061003', name: 'Ariana Wilson', type: 'Sick' as LeaveType, days: 2 },
  { id: 'EMP2061004', name: 'Mila Davis', type: 'Annual' as LeaveType, days: 3 },
];

const missingAttendanceSeed = [
  { id: 'EMP2062001', name: 'John Smith' },
  { id: 'EMP2062002', name: 'Michael Brown' },
  { id: 'EMP2062003', name: 'David Wilson' },
  { id: 'EMP2062004', name: 'Robert Taylor' },
];

const leaveApplications = [
  { name: 'Mark Allen', leave: 'Sick Leave', status: 'Approved' as LeaveStatus, from: '2025-10-17', to: '2025-10-20' },
  { name: 'Daniel Thompson', leave: 'Study Leave', status: 'Approved' as LeaveStatus, from: '2025-10-06', to: '2025-10-07' },
  { name: 'Daniel Thompson', leave: 'Personal Leave', status: 'Pending' as LeaveStatus, from: '2025-10-01', to: '2025-10-01' },
  { name: 'Nora Jenkins', leave: 'Sick Leave', status: 'Rejected' as LeaveStatus, from: '2025-10-03', to: '2025-10-03' },
];

const announcementsSeed = [
  {
    title: 'Company Social Responsibility Initiative',
    description: 'Community outreach program encouraging volunteerism and charitable contributions.',
    date: '2026-01-02',
  },
  {
    title: 'Workplace Safety Inspection Schedule',
    description: 'Regular inspections ensuring safety standards and hazard identification across all work areas.',
    date: '2025-12-24',
  },
  {
    title: 'Q4 Benefits Enrollment Window',
    description: 'Open enrollment starts next Monday. Review updated medical and family plans before submission.',
    date: '2025-12-18',
  },
];

const calendarEvents = [
  { date: '2026-04-08', label: 'Team Briefing' },
  { date: '2026-04-15', label: 'Technical Audit' },
  { date: '2026-04-21', label: 'Staff Birthday' },
];

const attendanceTrend = [
  { day: 'Mon', present: 97, absent: 3 },
  { day: 'Tue', present: 95, absent: 5 },
  { day: 'Wed', present: 96, absent: 4 },
  { day: 'Thu', present: 98, absent: 2 },
  { day: 'Fri', present: 94, absent: 6 },
];

function getCalendarCells(viewDate: Date) {
  const firstOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const startDay = firstOfMonth.getDay();
  const gridStart = new Date(firstOfMonth);
  gridStart.setDate(firstOfMonth.getDate() - startDay);

  return Array.from({ length: 42 }, (_, i) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + i);
    return date;
  });
}

export function Dashboard() {
  const [viewDate, setViewDate] = useState(new Date(2026, 3, 1));
  const [calendarMode, setCalendarMode] = useState<CalendarMode>('month');
  const [leaveFilter, setLeaveFilter] = useState<LeaveType | 'All'>('All');
  const [applicationFilter, setApplicationFilter] = useState<LeaveStatus | 'All'>('All');
  const [missingAttendance, setMissingAttendance] = useState(missingAttendanceSeed);
  const [announcements, setAnnouncements] = useState(announcementsSeed);
  const [lastAction, setLastAction] = useState('Dashboard ready');
  const [totalEmployees, setTotalEmployees] = useState(10);
  const [presentToday, setPresentToday] = useState(10);
  const [onLeaveCount, setOnLeaveCount] = useState(4);

  const absentToday = Math.max(totalEmployees - presentToday - onLeaveCount, 0);

  const statCards = [
    { label: 'Total Employees', value: totalEmployees, hint: 'Active employees', icon: Users, tone: 'text-[var(--color-brand-primary)]' },
    { label: 'Present Today', value: presentToday, hint: 'Attendance rate healthy', icon: UserCheck, tone: 'text-[var(--color-brand-teal)]' },
    { label: 'Absent Today', value: absentToday, hint: 'Track by shift manager', icon: UserMinus, tone: 'text-[var(--color-brand-secondary)]' },
    { label: 'On Leave', value: onLeaveCount, hint: 'Pending approvals visible', icon: CalendarDays, tone: 'text-[var(--color-brand-primary)]' },
  ];

  const pieData = [
    { name: 'Present', value: presentToday, fill: 'var(--color-brand-teal)' },
    { name: 'On Leave', value: onLeaveCount, fill: 'var(--color-brand-primary)' },
    { name: 'Absent', value: absentToday || 1, fill: 'var(--color-brand-secondary)' },
  ];

  const sortedDepartments = useMemo(() => [...departmentData].sort((a, b) => b.count - a.count), []);

  const filteredLeave = useMemo(
    () => (leaveFilter === 'All' ? employeesOnLeave : employeesOnLeave.filter((item) => item.type === leaveFilter)),
    [leaveFilter],
  );

  const filteredApplications = useMemo(
    () =>
      applicationFilter === 'All'
        ? leaveApplications
        : leaveApplications.filter((application) => application.status === applicationFilter),
    [applicationFilter],
  );

  const calendarCells = useMemo(() => getCalendarCells(viewDate), [viewDate]);
  const monthTitle = viewDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const quickActions = [
    {
      title: 'Add New Employee',
      run: () => {
        setTotalEmployees((prev) => prev + 1);
        setPresentToday((prev) => prev + 1);
        setLastAction('New employee added to active headcount');
      },
    },
    {
      title: 'Mark Attendance',
      run: () => {
        setPresentToday((prev) => Math.min(prev + 1, totalEmployees));
        setLastAction('Attendance register synced for current shift');
      },
    },
    {
      title: 'Apply for Leave',
      run: () => {
        setOnLeaveCount((prev) => prev + 1);
        setLastAction('Leave request added to approval queue');
      },
    },
    {
      title: 'Process Payroll',
      run: () => setLastAction('Payroll processing queued for finance review'),
    },
    {
      title: 'Create Promotion',
      run: () => setLastAction('Promotion workflow opened for HR admin'),
    },
    {
      title: 'Create Resignation',
      run: () => {
        setTotalEmployees((prev) => Math.max(prev - 1, 1));
        setPresentToday((prev) => Math.max(prev - 1, 0));
        setLastAction('Resignation record drafted and sent for approval');
      },
    },
  ];

  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className="rounded-2xl border border-white/10 bg-brand-surface p-5 shadow-2xl">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">HRM Dashboard</h1>
              <p className="mt-1 text-sm text-white/60">Real-time visibility for people operations, leave, and attendance.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80">{lastAction}</div>
          </div>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.label} className="rounded-xl border border-white/10 bg-brand-surface p-5 transition-all hover:border-white/20">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-white/75">{card.label}</p>
                <Icon className={`h-4 w-4 ${card.tone}`} />
              </div>
              <p className="text-4xl font-bold text-white">{card.value}</p>
              <p className="mt-1 text-xs text-white/55">{card.hint}</p>
            </article>
          );
        })}
      </StaggerReveal>

      <Reveal>
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <article className="rounded-xl border border-white/10 bg-brand-surface p-5">
            <header className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
                <Building2 className="h-4 w-4 text-[var(--color-brand-primary)]" /> Department Distribution
              </h2>
              <span className="text-xs text-white/60">Across branches</span>
            </header>
            <div className="space-y-3">
              {sortedDepartments.map((dept) => (
                <div key={dept.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-white/85">{dept.name} ({dept.office})</span>
                    <span className="font-semibold text-white">{dept.count}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-[var(--color-brand-primary)]" style={{ width: `${Math.min((dept.count / 20) * 100, 100)}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-white/10 bg-brand-surface p-5">
            <header className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Quick Actions</h2>
              <Clock3 className="h-4 w-4 text-[var(--color-brand-secondary)]" />
            </header>
            <div className="grid grid-cols-1 gap-2">
              {quickActions.map((action) => (
                <button
                  key={action.title}
                  onClick={action.run}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-medium text-white/90 transition-all hover:border-white/20 hover:bg-white/10"
                >
                  {action.title}
                </button>
              ))}
            </div>
          </article>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <article className="rounded-xl border border-white/10 bg-brand-surface p-5">
            <header className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Employees on Leave</h2>
              <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
                {(['All', 'Annual', 'Casual', 'Sick'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setLeaveFilter(filter)}
                    className={`rounded-md px-2 py-1 text-xs ${leaveFilter === filter ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </header>
            <div className="space-y-2">
              {filteredLeave.map((employee) => (
                <div key={employee.id} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                  <div>
                    <p className="text-sm font-semibold text-white">{employee.name}</p>
                    <p className="text-xs text-white/55">{employee.type} Leave</p>
                  </div>
                  <span className="text-xs font-semibold text-white/75">{employee.days} day{employee.days > 1 ? 's' : ''}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-white/10 bg-brand-surface p-5">
            <header className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Missing Attendance Today</h2>
              <BellRing className="h-4 w-4 text-[var(--color-brand-secondary)]" />
            </header>
            <div className="space-y-2">
              {missingAttendance.map((employee) => (
                <div key={employee.id} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                  <div>
                    <p className="text-sm font-semibold text-white">{employee.name}</p>
                    <p className="text-xs text-white/55">{employee.id}</p>
                  </div>
                  <button
                    onClick={() => {
                      setMissingAttendance((prev) => prev.filter((item) => item.id !== employee.id));
                      setLastAction(`Reminder sent to ${employee.name}`);
                    }}
                    className="rounded-md border border-white/10 px-2 py-1 text-xs text-white/80 transition-colors hover:bg-white/10"
                  >
                    Mark Reminded
                  </button>
                </div>
              ))}
            </div>
          </article>
        </section>
      </Reveal>

      <Reveal delay={0.15}>
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.7fr_1fr]">
          <article className="rounded-xl border border-white/10 bg-brand-surface p-5">
            <header className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="text-lg font-semibold text-white">Events & Holidays Calendar</h2>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
                  <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))} className="rounded-md p-1.5 text-white/80 hover:bg-white/10"><ChevronLeft className="h-4 w-4" /></button>
                  <button onClick={() => setViewDate(new Date())} className="rounded-md px-3 py-1 text-xs text-white/80 hover:bg-white/10">Today</button>
                  <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))} className="rounded-md p-1.5 text-white/80 hover:bg-white/10"><ChevronRight className="h-4 w-4" /></button>
                </div>
                <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
                  {(['month', 'week', 'day'] as const).map((mode) => (
                    <button key={mode} onClick={() => setCalendarMode(mode)} className={`rounded-md px-3 py-1 text-xs uppercase ${calendarMode === mode ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'}`}>
                      {mode}
                    </button>
                  ))}
                </div>
              </div>
            </header>

            <p className="mb-3 text-center text-2xl font-bold text-white">{monthTitle}</p>

            {calendarMode === 'month' && (
              <div className="grid grid-cols-7 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="bg-brand-bg px-2 py-2 text-center text-xs font-semibold text-white/70">{day}</div>
                ))}
                {calendarCells.map((cell) => {
                  const inMonth = cell.getMonth() === viewDate.getMonth();
                  const iso = `${cell.getFullYear()}-${String(cell.getMonth() + 1).padStart(2, '0')}-${String(cell.getDate()).padStart(2, '0')}`;
                  const event = calendarEvents.find((entry) => entry.date === iso);
                  return (
                    <div key={iso} className={`min-h-24 bg-brand-bg p-2 ${!inMonth ? 'opacity-35' : ''}`}>
                      <p className="text-xs font-medium text-white/80">{cell.getDate()}</p>
                      {event && <p className="mt-2 truncate rounded bg-[var(--color-brand-primary)]/20 px-1.5 py-0.5 text-[10px] text-white">{event.label}</p>}
                    </div>
                  );
                })}
              </div>
            )}

            {calendarMode !== 'month' && (
              <div className="space-y-2">
                {calendarEvents.map((event) => (
                  <div key={event.date} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                    <p className="text-sm text-white">{event.label}</p>
                    <span className="text-xs text-white/65">{event.date}</span>
                  </div>
                ))}
              </div>
            )}
          </article>

          <div className="space-y-6">
            <article className="rounded-xl border border-white/10 bg-brand-surface p-5">
              <header className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Recent Leave Applications</h2>
                <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
                  {(['All', 'Approved', 'Pending', 'Rejected'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => setApplicationFilter(status)}
                      className={`rounded-md px-2 py-1 text-[11px] ${applicationFilter === status ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'}`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </header>
              <div className="space-y-2">
                {filteredApplications.map((application) => (
                  <div key={`${application.name}-${application.from}`} className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-white">{application.name} - {application.leave}</p>
                      <span className="rounded-full border border-white/15 px-2 py-0.5 text-xs text-white/80">{application.status}</span>
                    </div>
                    <p className="mt-1 text-xs text-white/55">{application.from} to {application.to}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-xl border border-white/10 bg-brand-surface p-5">
              <header className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
                <Megaphone className="h-4 w-4 text-[var(--color-brand-primary)]" /> Announcements
              </header>
              <div className="space-y-2">
                {announcements.map((announcement) => (
                  <div key={announcement.title} className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <p className="text-sm font-semibold text-white">{announcement.title}</p>
                    <p className="mt-1 text-xs text-white/60">{announcement.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[11px] text-white/50">{announcement.date}</span>
                      <button
                        onClick={() => {
                          setAnnouncements((prev) => prev.filter((item) => item.title !== announcement.title));
                          setLastAction(`Announcement marked done: ${announcement.title}`);
                        }}
                        className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-[11px] text-white/80 hover:bg-white/10"
                      >
                        <Check className="h-3 w-3" /> Mark Read
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <article className="rounded-xl border border-white/10 bg-brand-surface p-5">
            <h2 className="mb-4 text-lg font-semibold text-white">Attendance Trend</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attendanceTrend}>
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
                  <Bar dataKey="absent" fill="var(--color-brand-secondary)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className="rounded-xl border border-white/10 bg-brand-surface p-5">
            <h2 className="mb-4 text-lg font-semibold text-white">Headcount Breakdown</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={68} outerRadius={95} paddingAngle={3} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--color-brand-bg)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '10px',
                      color: 'white',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-4">
              {pieData.map((item) => (
                <div key={item.name} className="flex items-center gap-1 text-xs text-white/70">
                  <Dot className="h-5 w-5" style={{ color: item.fill }} /> {item.name}
                </div>
              ))}
            </div>
          </article>
        </section>
      </Reveal>
    </div>
  );
}
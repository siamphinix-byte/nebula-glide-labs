import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import {
  BarChart3,
  CalendarPlus,
  Copy,
  PieChart as PieChartIcon,
  Play,
  Plus,
  Search,
  Video,
} from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type MeetingProvider = 'Zoom' | 'Google Meet';
type MeetingStatus = 'Scheduled' | 'Live' | 'Completed';

type Meeting = {
  id: number;
  topic: string;
  desc: string;
  status: MeetingStatus;
  date: string;
  time: string;
  duration: number;
  project: string;
  provider: MeetingProvider;
};

const seedMeetings: Meeting[] = [
  { id: 1, topic: 'Weekly Team Standup', desc: 'Progress updates, blockers, and weekly priorities.', status: 'Scheduled', date: '2026-10-16', time: '14:29', duration: 60, project: 'Analytics System', provider: 'Zoom' },
  { id: 2, topic: 'Project Planning Session', desc: 'Milestone planning and risk mapping for next sprint.', status: 'Scheduled', date: '2026-09-16', time: '14:29', duration: 60, project: 'Inventory System', provider: 'Zoom' },
  { id: 3, topic: 'Client Review Meeting', desc: 'Client checkpoint for current delivery status.', status: 'Scheduled', date: '2026-08-16', time: '14:28', duration: 180, project: 'AI Chatbot', provider: 'Zoom' },
  { id: 4, topic: 'Monthly Business Review', desc: 'Business KPIs and strategic adjustment review.', status: 'Scheduled', date: '2026-05-20', time: '14:26', duration: 125, project: 'Payment', provider: 'Zoom' },
  { id: 5, topic: 'Training Session', desc: 'Tooling and workflow training for the delivery team.', status: 'Scheduled', date: '2026-04-11', time: '14:25', duration: 60, project: 'Admin Dashboard', provider: 'Zoom' },
  { id: 6, topic: 'Product Demo', desc: 'Feature demo for stakeholder and feedback collection.', status: 'Scheduled', date: '2026-03-20', time: '14:25', duration: 180, project: 'Performance Suite', provider: 'Zoom' },
  { id: 7, topic: 'Quarterly Planning', desc: 'Quarter planning across product and delivery tracks.', status: 'Scheduled', date: '2026-01-18', time: '14:24', duration: 120, project: 'Analytics System', provider: 'Zoom' },
  { id: 8, topic: 'Project Planning Session', desc: 'Scope review and timeline refinement with dev leads.', status: 'Scheduled', date: '2025-12-18', time: '14:00', duration: 60, project: 'Security Audit', provider: 'Google Meet' },
  { id: 9, topic: 'Client Review Meeting', desc: 'Delivery review with client decision points.', status: 'Scheduled', date: '2025-12-19', time: '11:00', duration: 45, project: 'Performance Suite', provider: 'Google Meet' },
  { id: 10, topic: 'Sprint Retrospective', desc: 'Retrospective and process improvement discussions.', status: 'Scheduled', date: '2025-12-20', time: '16:00', duration: 60, project: 'Admin Dashboard', provider: 'Google Meet' },
  { id: 11, topic: 'Technical Discussion', desc: 'Architecture deep dive and implementation constraints.', status: 'Scheduled', date: '2025-12-21', time: '10:30', duration: 90, project: 'Payment Integration', provider: 'Google Meet' },
  { id: 12, topic: 'Monthly Business Review', desc: 'Monthly portfolio performance and focus priorities.', status: 'Scheduled', date: '2025-12-23', time: '15:00', duration: 120, project: 'Cloud Migration', provider: 'Google Meet' },
  { id: 13, topic: 'Training Session', desc: 'Guided walkthrough on updated project governance.', status: 'Scheduled', date: '2025-12-24', time: '13:00', duration: 75, project: 'Legacy Modernization', provider: 'Google Meet' },
  { id: 14, topic: 'Product Demo', desc: 'Demo session focused on release candidate scope.', status: 'Scheduled', date: '2025-12-26', time: '12:00', duration: 45, project: 'AI Chatbot', provider: 'Google Meet' },
  { id: 15, topic: 'One-on-One Meeting', desc: 'Performance and growth planning sync.', status: 'Scheduled', date: '2025-12-28', time: '17:00', duration: 30, project: 'Inventory System', provider: 'Google Meet' },
  { id: 16, topic: 'Quarterly Planning', desc: 'Quarter objectives and ownership planning.', status: 'Scheduled', date: '2025-12-30', time: '09:30', duration: 180, project: 'Mobile Banking App', provider: 'Google Meet' },
];

export function Meetings() {
  const [meetings, setMeetings] = useState(seedMeetings);
  const [search, setSearch] = useState('');
  const [providerFilter, setProviderFilter] = useState<'All' | MeetingProvider>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | MeetingStatus>('All');
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'schedule'>('create');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [form, setForm] = useState<Omit<Meeting, 'id'>>({
    topic: '',
    desc: '',
    status: 'Scheduled',
    date: '2026-04-24',
    time: '10:00',
    duration: 60,
    project: '',
    provider: 'Zoom',
  });

  const filteredMeetings = useMemo(() => {
    const q = search.trim().toLowerCase();
    return meetings
      .filter((item) => {
        const providerOk = providerFilter === 'All' || item.provider === providerFilter;
        const statusOk = statusFilter === 'All' || item.status === statusFilter;
        const searchOk =
          !q ||
          item.topic.toLowerCase().includes(q) ||
          item.project.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q);
        return providerOk && statusOk && searchOk;
      })
      .sort((a, b) => `${b.date}${b.time}`.localeCompare(`${a.date}${a.time}`));
  }, [meetings, search, providerFilter, statusFilter]);

  const total = meetings.length;
  const zoomCount = meetings.filter((m) => m.provider === 'Zoom').length;
  const googleCount = meetings.filter((m) => m.provider === 'Google Meet').length;
  const scheduledCount = meetings.filter((m) => m.status === 'Scheduled').length;

  const providerChart = [
    { name: 'Zoom', count: zoomCount },
    { name: 'Google', count: googleCount },
  ];

  const statusChart = [
    { name: 'Scheduled', value: meetings.filter((m) => m.status === 'Scheduled').length, fill: 'var(--color-brand-secondary)' },
    { name: 'Live', value: meetings.filter((m) => m.status === 'Live').length, fill: 'var(--color-brand-teal)' },
    { name: 'Completed', value: meetings.filter((m) => m.status === 'Completed').length, fill: 'var(--color-brand-primary)' },
  ];

  const openModal = (mode: 'create' | 'schedule') => {
    setModalMode(mode);
    setShowModal(true);
  };

  const handleCreate = () => {
    if (!form.topic || !form.project || !form.date || !form.time) return;
    const newMeeting: Meeting = {
      ...form,
      id: meetings.length ? Math.max(...meetings.map((m) => m.id)) + 1 : 1,
      status: modalMode === 'schedule' ? 'Scheduled' : form.status,
    };
    setMeetings((prev) => [newMeeting, ...prev]);
    setShowModal(false);
    setForm((prev) => ({ ...prev, topic: '', desc: '', project: '', duration: 60 }));
  };

  const copyJoinUrl = async (meetingId: number) => {
    const url = `https://meet.company.app/join/${meetingId}`;
    await navigator.clipboard.writeText(url);
    setCopiedId(meetingId);
    setTimeout(() => setCopiedId(null), 1200);
  };

  return (
    <div className="mx-auto h-full max-w-[1400px] space-y-6 pb-24">
      <Reveal direction="down">
        <div className="mb-2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl font-black tracking-tight text-white">Meetings</h1>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => openModal('create')}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-brand-primary)]/35 bg-[var(--color-brand-primary)]/15 px-4 py-2.5 text-sm font-bold text-[var(--color-brand-primary)] transition-colors hover:bg-[var(--color-brand-primary)]/25"
            >
              <Plus className="h-4 w-4" /> Create Meeting
            </button>
            <button
              onClick={() => openModal('schedule')}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-brand-secondary)]/30 bg-[var(--color-brand-secondary)] px-4 py-2.5 text-sm font-bold text-[var(--color-brand-bg)] transition-transform hover:scale-[1.02]"
            >
              <CalendarPlus className="h-4 w-4" /> Schedule Meeting
            </button>
          </div>
        </div>
      </Reveal>

      <StaggerReveal className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-4">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-white/55">Total Meetings</p>
          <p className="text-3xl font-black text-white">{total}</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-4">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-white/55">Zoom</p>
          <p className="text-3xl font-black text-[var(--color-brand-primary)]">{zoomCount}</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-4">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-white/55">Google Meet</p>
          <p className="text-3xl font-black text-[var(--color-brand-teal)]">{googleCount}</p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-4">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-white/55">Scheduled</p>
          <p className="text-3xl font-black text-[var(--color-brand-secondary)]">{scheduledCount}</p>
        </article>
      </StaggerReveal>

      <Reveal delay={0.12}>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <section className="h-[220px] rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/55">
              <BarChart3 className="h-4 w-4 text-[var(--color-brand-primary)]" /> Provider Distribution
            </div>
            <ResponsiveContainer width="100%" height="88%">
              <BarChart data={providerChart}>
                <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,.5)', fontSize: 11 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,.5)', fontSize: 11 }} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--color-brand-bg)', borderColor: 'rgba(255,255,255,.15)', borderRadius: 10, color: 'white' }} />
                <Bar dataKey="count" radius={[8, 8, 0, 0]} fill="var(--color-brand-primary)" />
              </BarChart>
            </ResponsiveContainer>
          </section>

          <section className="h-[220px] rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] p-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/55">
              <PieChartIcon className="h-4 w-4 text-[var(--color-brand-secondary)]" /> Meeting Status
            </div>
            <ResponsiveContainer width="100%" height="88%">
              <PieChart>
                <Pie data={statusChart} dataKey="value" innerRadius={44} outerRadius={70} paddingAngle={4} stroke="none">
                  {statusChart.map((slice) => (
                    <Cell key={slice.name} fill={slice.fill} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'var(--color-brand-bg)', borderColor: 'rgba(255,255,255,.15)', borderRadius: 10, color: 'white' }} />
              </PieChart>
            </ResponsiveContainer>
          </section>
        </div>
      </Reveal>

      <Reveal delay={0.18}>
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-brand-surface)] shadow-2xl">
          <div className="flex flex-col gap-3 border-b border-white/10 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <div className="relative w-full sm:max-w-[260px]">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search meetings"
                  className="h-10 w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] pl-10 pr-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[var(--color-brand-primary)]"
                />
              </div>
              <select
                value={providerFilter}
                onChange={(e) => setProviderFilter(e.target.value as 'All' | MeetingProvider)}
                className="h-10 rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 text-sm text-white outline-none focus:border-[var(--color-brand-primary)]"
              >
                <option value="All">All Providers</option>
                <option value="Zoom">Zoom</option>
                <option value="Google Meet">Google Meet</option>
              </select>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as 'All' | MeetingStatus)}
                className="h-10 rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 text-sm text-white outline-none focus:border-[var(--color-brand-primary)]"
              >
                <option value="All">All Status</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Live">Live</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left text-sm">
              <thead className="border-b border-white/10 bg-white/5">
                <tr className="text-xs uppercase tracking-wider text-white/50">
                  <th className="px-4 py-3">Meeting</th>
                  <th className="px-4 py-3">Provider</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Date & Time</th>
                  <th className="px-4 py-3">Duration</th>
                  <th className="px-4 py-3">Project</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMeetings.map((meeting) => (
                  <tr key={meeting.id} className="border-b border-white/5 text-white/85 transition-colors hover:bg-white/[0.03]">
                    <td className="px-4 py-3">
                      <p className="font-bold text-white">{meeting.topic}</p>
                      <p className="max-w-[360px] truncate text-xs text-white/45">{meeting.desc}</p>
                    </td>
                    <td className="px-4 py-3 text-white/75">{meeting.provider}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full border border-[var(--color-brand-primary)]/25 bg-[var(--color-brand-primary)]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--color-brand-primary)]">
                        {meeting.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white/75">{meeting.date} · {meeting.time}</td>
                    <td className="px-4 py-3 text-white/65">{meeting.duration} min</td>
                    <td className="px-4 py-3 text-white/75">{meeting.project}</td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => copyJoinUrl(meeting.id)}
                          className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-[var(--color-brand-bg)] px-2.5 py-1.5 text-xs font-bold text-white/75 transition-colors hover:bg-white/10"
                        >
                          <Copy className="h-3.5 w-3.5" /> {copiedId === meeting.id ? 'Copied' : 'Join URL'}
                        </button>
                        <button className="inline-flex items-center gap-1 rounded-lg border border-[var(--color-brand-secondary)]/35 bg-[var(--color-brand-secondary)]/90 px-2.5 py-1.5 text-xs font-bold text-[var(--color-brand-bg)] transition-colors hover:bg-[var(--color-brand-secondary)]">
                          <Play className="h-3.5 w-3.5" /> Start
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

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4">
          <div className="w-full max-w-[640px] rounded-2xl border border-white/15 bg-[var(--color-brand-surface)] p-6 shadow-2xl animate-enter">
            <h3 className="mb-4 flex items-center gap-2 text-2xl font-black text-white">
              <Video className="h-5 w-5 text-[var(--color-brand-secondary)]" />
              {modalMode === 'create' ? 'Create Meeting' : 'Schedule Meeting'}
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="text-sm font-semibold text-white/80 md:col-span-2">
                Topic *
                <input
                  value={form.topic}
                  onChange={(e) => setForm((prev) => ({ ...prev, topic: e.target.value }))}
                  className="mt-1 h-10 w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 text-white outline-none focus:border-[var(--color-brand-primary)]"
                />
              </label>

              <label className="text-sm font-semibold text-white/80 md:col-span-2">
                Description
                <textarea
                  value={form.desc}
                  onChange={(e) => setForm((prev) => ({ ...prev, desc: e.target.value }))}
                  className="mt-1 h-20 w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 py-2 text-white outline-none focus:border-[var(--color-brand-primary)]"
                />
              </label>

              <label className="text-sm font-semibold text-white/80">
                Provider
                <select
                  value={form.provider}
                  onChange={(e) => setForm((prev) => ({ ...prev, provider: e.target.value as MeetingProvider }))}
                  className="mt-1 h-10 w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 text-white outline-none focus:border-[var(--color-brand-primary)]"
                >
                  <option value="Zoom">Zoom</option>
                  <option value="Google Meet">Google Meet</option>
                </select>
              </label>

              <label className="text-sm font-semibold text-white/80">
                Project *
                <input
                  value={form.project}
                  onChange={(e) => setForm((prev) => ({ ...prev, project: e.target.value }))}
                  className="mt-1 h-10 w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 text-white outline-none focus:border-[var(--color-brand-primary)]"
                />
              </label>

              <label className="text-sm font-semibold text-white/80">
                Date *
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
                  className="mt-1 h-10 w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 text-white outline-none focus:border-[var(--color-brand-primary)]"
                />
              </label>

              <label className="text-sm font-semibold text-white/80">
                Time *
                <input
                  type="time"
                  value={form.time}
                  onChange={(e) => setForm((prev) => ({ ...prev, time: e.target.value }))}
                  className="mt-1 h-10 w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 text-white outline-none focus:border-[var(--color-brand-primary)]"
                />
              </label>

              <label className="text-sm font-semibold text-white/80">
                Duration (min)
                <input
                  type="number"
                  min={15}
                  step={15}
                  value={form.duration}
                  onChange={(e) => setForm((prev) => ({ ...prev, duration: Number(e.target.value) }))}
                  className="mt-1 h-10 w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 text-white outline-none focus:border-[var(--color-brand-primary)]"
                />
              </label>

              {modalMode === 'create' && (
                <label className="text-sm font-semibold text-white/80">
                  Status
                  <select
                    value={form.status}
                    onChange={(e) => setForm((prev) => ({ ...prev, status: e.target.value as MeetingStatus }))}
                    className="mt-1 h-10 w-full rounded-xl border border-white/15 bg-[var(--color-brand-bg)] px-3 text-white outline-none focus:border-[var(--color-brand-primary)]"
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Live">Live</option>
                    <option value="Completed">Completed</option>
                  </select>
                </label>
              )}
            </div>

            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className="rounded-xl border border-[var(--color-brand-secondary)]/35 bg-[var(--color-brand-secondary)] px-5 py-2.5 text-sm font-bold text-[var(--color-brand-bg)] transition-transform hover:scale-[1.02]"
              >
                {modalMode === 'create' ? 'Create' : 'Schedule'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import { Megaphone, Search } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { HRMHorizontalScroll } from './HRMHorizontalScroll';
import { sectionCardClassName } from './HRMShared';
import { announcements, type AnnouncementStatus } from './hrmData';

function announcementStatusClassName(status: AnnouncementStatus) {
  if (status === 'Published') return 'border-brand-teal/30 bg-brand-teal/20 text-brand-teal';
  if (status === 'Scheduled') return 'border-brand-primary/30 bg-brand-primary/20 text-brand-primary';
  return 'border-white/20 bg-white/10 text-white/80';
}

export function HRMAnnouncementsPage() {
  const [query, setQuery] = useState('');
  const [rows, setRows] = useState(announcements);
  const [statusFilter, setStatusFilter] = useState<AnnouncementStatus | 'All'>('All');

  const filteredRows = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return rows.filter((row) => {
      const queryMatch = !normalized || row.title.toLowerCase().includes(normalized) || row.id.toLowerCase().includes(normalized) || row.category.toLowerCase().includes(normalized);
      const statusMatch = statusFilter === 'All' || row.status === statusFilter;
      return queryMatch && statusMatch;
    });
  }, [rows, query, statusFilter]);

  const updateStatus = (id: string, status: AnnouncementStatus) => {
    setRows((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
  };

  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={sectionCardClassName()}>
          <h1 className="text-2xl font-bold text-white">Manage Announcements</h1>
          <p className="mt-1 text-sm text-white/60">Publish internal updates with audience-level targeting and engagement tracking.</p>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className={sectionCardClassName('p-4')}><p className="text-xs text-white/50">Published</p><p className="mt-2 text-3xl font-bold text-brand-teal">{rows.filter((r) => r.status === 'Published').length}</p></article>
        <article className={sectionCardClassName('p-4')}><p className="text-xs text-white/50">Scheduled</p><p className="mt-2 text-3xl font-bold text-brand-primary">{rows.filter((r) => r.status === 'Scheduled').length}</p></article>
        <article className={sectionCardClassName('p-4')}><p className="text-xs text-white/50">Avg Engagement</p><p className="mt-2 text-3xl font-bold text-white">{Math.round(rows.reduce((a, b) => a + b.engagement, 0) / rows.length)}%</p></article>
      </StaggerReveal>

      <Reveal>
        <section className={sectionCardClassName('space-y-4')}>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.4fr_1fr]">
            <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3"><Search className="h-4 w-4 text-white/50" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by title, category, or id" className="h-11 w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none" /></label>
            <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1">{(['All', 'Draft', 'Scheduled', 'Published'] as const).map((status) => (<button key={status} onClick={() => setStatusFilter(status)} className={`flex-1 rounded-md px-2 py-2 text-xs ${statusFilter === status ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'}`}>{status}</button>))}</div>
          </div>

          <HRMHorizontalScroll>
            <table className="w-full min-w-[920px] text-sm">
              <thead><tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/55"><th className="px-3 py-3">Announcement</th><th className="px-3 py-3">Audience</th><th className="px-3 py-3">Category</th><th className="px-3 py-3">Published On</th><th className="px-3 py-3">Status</th><th className="px-3 py-3">Engagement</th><th className="px-3 py-3">Actions</th></tr></thead>
              <tbody>
                {filteredRows.map((row) => (
                  <tr key={row.id} className="border-b border-white/5">
                    <td className="px-3 py-3 text-white">{row.title}<p className="text-xs text-white/50">{row.id}</p></td>
                    <td className="px-3 py-3 text-white/75">{row.audience}</td>
                    <td className="px-3 py-3 text-white/75">{row.category}</td>
                    <td className="px-3 py-3 text-white/75">{row.publishedOn}</td>
                    <td className="px-3 py-3"><span className={`inline-flex rounded-full border px-2 py-1 text-xs ${announcementStatusClassName(row.status)}`}>{row.status}</span></td>
                    <td className="px-3 py-3 text-white/75">{row.engagement}%</td>
                    <td className="px-3 py-3"><div className="flex items-center gap-2"><button onClick={() => updateStatus(row.id, 'Scheduled')} className="rounded-md border border-white/10 px-2 py-1 text-xs text-white/80 hover:bg-white/10">Schedule</button><button onClick={() => updateStatus(row.id, 'Published')} className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-xs text-white/80 hover:bg-white/10"><Megaphone className="h-3 w-3" /> Publish</button></div></td>
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

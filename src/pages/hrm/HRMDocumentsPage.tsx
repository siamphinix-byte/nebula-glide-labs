import { Download, FileArchive, Search } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { HRMHorizontalScroll } from './HRMHorizontalScroll';
import { sectionCardClassName } from './HRMShared';
import { hrmDocuments } from './hrmData';

export function HRMDocumentsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'All' | 'Policy' | 'Onboarding' | 'Termination' | 'Disciplinary' | 'Leave'>('All');
  const [rows, setRows] = useState(hrmDocuments);

  const filteredRows = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return rows.filter((row) => {
      const queryMatch = !normalized || row.name.toLowerCase().includes(normalized) || row.id.toLowerCase().includes(normalized) || row.owner.toLowerCase().includes(normalized);
      const categoryMatch = category === 'All' || row.category === category;
      return queryMatch && categoryMatch;
    });
  }, [rows, query, category]);

  const downloadDoc = (id: string) => {
    setRows((prev) => prev.map((row) => (row.id === id ? { ...row, downloads: row.downloads + 1 } : row)));
  };

  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={sectionCardClassName()}>
          <h1 className="text-2xl font-bold text-white">Manage Documents</h1>
          <p className="mt-1 text-sm text-white/60">Centralized repository for HR policies, onboarding, and compliance documents.</p>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className={sectionCardClassName('p-4')}><p className="text-xs text-white/50">Total Files</p><p className="mt-2 text-3xl font-bold text-white">{rows.length}</p></article>
        <article className={sectionCardClassName('p-4')}><p className="text-xs text-white/50">Total Downloads</p><p className="mt-2 text-3xl font-bold text-brand-primary">{rows.reduce((a, b) => a + b.downloads, 0)}</p></article>
        <article className={sectionCardClassName('p-4')}><p className="text-xs text-white/50">Unique Categories</p><p className="mt-2 text-3xl font-bold text-brand-secondary">{new Set(rows.map((row) => row.category)).size}</p></article>
      </StaggerReveal>

      <Reveal>
        <section className={sectionCardClassName('space-y-4')}>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.4fr_1fr]">
            <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3"><Search className="h-4 w-4 text-white/50" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by file name, id, owner" className="h-11 w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none" /></label>
            <select value={category} onChange={(e) => setCategory(e.target.value as typeof category)} className="h-11 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white focus:outline-none">
              {(['All', 'Policy', 'Onboarding', 'Termination', 'Disciplinary', 'Leave'] as const).map((option) => (
                <option key={option} value={option} className="bg-brand-bg text-white">{option}</option>
              ))}
            </select>
          </div>

          <HRMHorizontalScroll>
            <table className="w-full min-w-[940px] text-sm">
              <thead><tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/55"><th className="px-3 py-3">Document</th><th className="px-3 py-3">Category</th><th className="px-3 py-3">Owner</th><th className="px-3 py-3">Access</th><th className="px-3 py-3">Updated On</th><th className="px-3 py-3">Downloads</th><th className="px-3 py-3">Action</th></tr></thead>
              <tbody>
                {filteredRows.map((row) => (
                  <tr key={row.id} className="border-b border-white/5">
                    <td className="px-3 py-3 text-white"><p className="inline-flex items-center gap-2"><FileArchive className="h-4 w-4 text-brand-primary" />{row.name}</p><p className="text-xs text-white/50">{row.id}</p></td>
                    <td className="px-3 py-3 text-white/75">{row.category}</td>
                    <td className="px-3 py-3 text-white/75">{row.owner}</td>
                    <td className="px-3 py-3 text-white/75">{row.access}</td>
                    <td className="px-3 py-3 text-white/75">{row.updatedOn}</td>
                    <td className="px-3 py-3 text-white/75">{row.downloads}</td>
                    <td className="px-3 py-3"><button onClick={() => downloadDoc(row.id)} className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-xs text-white/80 hover:bg-white/10"><Download className="h-3 w-3" /> Download</button></td>
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

import { Download, FileText, Search } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { sectionCardClassName } from './HRMShared';
import { payslips } from './hrmData';
import { HRMHorizontalScroll } from './HRMHorizontalScroll';

export function HRMPayslipsPage() {
  const [query, setQuery] = useState('');
  const [month, setMonth] = useState<'All' | 'Oct 2026' | 'Sep 2026'>('All');
  const [downloaded, setDownloaded] = useState<string[]>([]);

  const filteredPayslips = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return payslips.filter((item) => {
      const queryMatch = !normalized || item.employee.toLowerCase().includes(normalized) || item.id.toLowerCase().includes(normalized);
      const monthMatch = month === 'All' || item.month === month;
      return queryMatch && monthMatch;
    });
  }, [query, month]);

  const totalNet = filteredPayslips.reduce((sum, item) => sum + item.net, 0);

  const handleDownload = (id: string) => {
    setDownloaded((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={sectionCardClassName()}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Payslip Library</h1>
              <p className="mt-1 text-sm text-white/60">Generate and retrieve salary slips by month and department.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10">
              <FileText className="h-4 w-4 text-brand-primary" /> Generate Payslip
            </button>
          </div>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_auto]">
        <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3">
          <Search className="h-4 w-4 text-white/50" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by employee or payslip id"
            className="h-11 w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
          />
        </label>
        <select
          value={month}
          onChange={(event) => setMonth(event.target.value as typeof month)}
          className="h-11 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white focus:outline-none"
        >
          {(['All', 'Oct 2026', 'Sep 2026'] as const).map((option) => (
            <option key={option} value={option} className="bg-brand-bg text-white">
              {option}
            </option>
          ))}
        </select>
        <div className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-4 text-xs font-semibold text-white/80">
          Net Total: ${totalNet.toLocaleString()}
        </div>
      </StaggerReveal>

      <Reveal>
        <section className={sectionCardClassName()}>
          <HRMHorizontalScroll>
            <table className="w-full min-w-[860px] text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/55">
                  <th className="px-3 py-3">Payslip</th>
                  <th className="px-3 py-3">Employee</th>
                  <th className="px-3 py-3">Department</th>
                  <th className="px-3 py-3">Month</th>
                  <th className="px-3 py-3">Gross</th>
                  <th className="px-3 py-3">Net</th>
                  <th className="px-3 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPayslips.map((item) => (
                  <tr key={item.id} className="border-b border-white/5">
                    <td className="px-3 py-3 text-white/80">{item.id}</td>
                    <td className="px-3 py-3">
                      <p className="font-semibold text-white">{item.employee}</p>
                      <p className="text-xs text-white/50">{item.role}</p>
                    </td>
                    <td className="px-3 py-3 text-white/75">{item.department}</td>
                    <td className="px-3 py-3 text-white/75">{item.month}</td>
                    <td className="px-3 py-3 text-white/75">${item.gross.toLocaleString()}</td>
                    <td className="px-3 py-3 font-semibold text-brand-secondary">${item.net.toLocaleString()}</td>
                    <td className="px-3 py-3">
                      <button
                        onClick={() => handleDownload(item.id)}
                        className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs transition-colors ${
                          downloaded.includes(item.id)
                            ? 'border-brand-teal/30 bg-brand-teal/20 text-brand-teal'
                            : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
                        }`}
                      >
                        <Download className="h-3 w-3" /> {downloaded.includes(item.id) ? 'Downloaded' : 'Download PDF'}
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
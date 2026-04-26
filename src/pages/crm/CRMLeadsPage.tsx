import { ArrowUpRight, Filter, Plus, Search } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { HRMHorizontalScroll } from '../hrm/HRMHorizontalScroll';
import { crmLeads, type Lead, type LeadStage } from './crmData';
import { crmSectionCardClassName, crmStagePillClassName } from './CRMShared';

const sourceOptions = ['All', ...new Set(crmLeads.map((lead) => lead.source))];
const stageOptions: Array<'All' | LeadStage> = ['All', 'New', 'Qualified', 'Proposal Sent', 'Negotiation', 'Won', 'Lost'];

export function CRMLeadsPage() {
  const [rows, setRows] = useState(crmLeads);
  const [query, setQuery] = useState('');
  const [source, setSource] = useState<(typeof sourceOptions)[number]>('All');
  const [stage, setStage] = useState<(typeof stageOptions)[number]>('All');

  const filteredRows = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return rows.filter((lead) => {
      const queryMatch =
        !normalized ||
        lead.company.toLowerCase().includes(normalized) ||
        lead.contact.toLowerCase().includes(normalized) ||
        lead.id.toLowerCase().includes(normalized);
      const sourceMatch = source === 'All' || lead.source === source;
      const stageMatch = stage === 'All' || lead.stage === stage;
      return queryMatch && sourceMatch && stageMatch;
    });
  }, [rows, query, source, stage]);

  const metrics = useMemo(() => {
    const totalPotential = filteredRows.reduce((sum, lead) => sum + lead.potentialValue, 0);
    const wonCount = filteredRows.filter((lead) => lead.stage === 'Won').length;
    const conversionRate = filteredRows.length ? Math.round((wonCount / filteredRows.length) * 100) : 0;
    return { totalPotential, conversionRate, active: filteredRows.length };
  }, [filteredRows]);

  const promoteLead = (lead: Lead) => {
    const order: LeadStage[] = ['New', 'Qualified', 'Proposal Sent', 'Negotiation', 'Won', 'Lost'];
    const currentIndex = order.indexOf(lead.stage);
    if (lead.stage === 'Won' || lead.stage === 'Lost') return;
    const nextStage = order[Math.min(currentIndex + 1, order.length - 2)];
    setRows((prev) => prev.map((row) => (row.id === lead.id ? { ...row, stage: nextStage } : row)));
  };

  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={crmSectionCardClassName()}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50">CRM Module</p>
              <h1 className="mt-1 text-2xl font-bold text-white">Manage Leads</h1>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/85 transition-colors hover:bg-white/10">
              <Plus className="h-3.5 w-3.5 text-brand-secondary" /> Add New Lead
            </button>
          </div>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className={crmSectionCardClassName()}>
          <p className="text-xs uppercase tracking-wide text-white/50">Conversion Rate</p>
          <p className="mt-2 text-3xl font-bold text-white">{metrics.conversionRate}%</p>
          <div className="mt-3 h-1 rounded-full bg-white/10">
            <div className="h-full rounded-full bg-brand-primary transition-all" style={{ width: `${metrics.conversionRate}%` }} />
          </div>
        </article>
        <article className={crmSectionCardClassName()}>
          <p className="text-xs uppercase tracking-wide text-white/50">Active Leads</p>
          <p className="mt-2 text-3xl font-bold text-white">{metrics.active}</p>
          <p className="mt-1 text-xs text-white/55">Filtered by current search and chips</p>
        </article>
        <article className={crmSectionCardClassName()}>
          <p className="text-xs uppercase tracking-wide text-white/50">Pipeline Value</p>
          <p className="mt-2 text-3xl font-bold text-white">${metrics.totalPotential.toLocaleString()}</p>
          <p className="mt-1 text-xs text-white/55">Potential contract value</p>
        </article>
      </StaggerReveal>

      <Reveal>
        <section className={crmSectionCardClassName('space-y-4')}>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.4fr_1fr_1.2fr]">
            <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3">
              <Search className="h-4 w-4 text-white/50" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by company, contact, or lead id"
                className="h-11 w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3">
              <Filter className="h-4 w-4 text-white/50" />
              <select value={source} onChange={(event) => setSource(event.target.value as (typeof sourceOptions)[number])} className="h-11 w-full bg-transparent text-sm text-white focus:outline-none">
                {sourceOptions.map((option) => (
                  <option key={option} value={option} className="bg-brand-bg text-white">{option}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
              {stageOptions.slice(0, 4).map((chip) => (
                <button key={chip} onClick={() => setStage(chip)} className={`flex-1 rounded-md px-2 py-2 text-xs transition-colors ${stage === chip ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'}`}>
                  {chip}
                </button>
              ))}
            </div>
          </div>

          <HRMHorizontalScroll>
            <table className="w-full min-w-[980px] text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/55">
                  <th className="px-3 py-3">Lead</th>
                  <th className="px-3 py-3">Interest</th>
                  <th className="px-3 py-3">Source</th>
                  <th className="px-3 py-3">Stage</th>
                  <th className="px-3 py-3">Tasks</th>
                  <th className="px-3 py-3">Follow-up</th>
                  <th className="px-3 py-3">Assigned</th>
                  <th className="px-3 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((lead) => (
                  <tr key={lead.id} className="border-b border-white/5 transition-colors hover:bg-white/5">
                    <td className="px-3 py-3">
                      <p className="font-semibold text-white">{lead.company}</p>
                      <p className="text-xs text-white/50">{lead.contact} · {lead.id}</p>
                    </td>
                    <td className="px-3 py-3 text-white/75">{lead.interest}</td>
                    <td className="px-3 py-3 text-white/75">{lead.source}</td>
                    <td className="px-3 py-3">
                      <span className={`inline-flex rounded-full border px-2 py-1 text-xs ${crmStagePillClassName(lead.stage)}`}>{lead.stage}</span>
                    </td>
                    <td className="px-3 py-3 text-white/80">{lead.tasksDone}/{lead.tasksTotal}</td>
                    <td className="px-3 py-3 text-white/75">{lead.followUp}</td>
                    <td className="px-3 py-3 text-white/75">{lead.assignee}</td>
                    <td className="px-3 py-3">
                      <button onClick={() => promoteLead(lead)} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/85 transition-all hover:bg-white/10 hover:translate-x-0.5">
                        Advance <ArrowUpRight className="h-3 w-3" />
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

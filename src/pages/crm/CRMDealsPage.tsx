import { CheckCheck, Plus, Search } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { HRMHorizontalScroll } from '../hrm/HRMHorizontalScroll';
import { crmDeals, type Deal, type DealStage } from './crmData';
import { crmSectionCardClassName, crmStagePillClassName } from './CRMShared';

const stageOptions: Array<'All' | DealStage> = ['All', 'Qualification', 'Nurturing', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'];

export function CRMDealsPage() {
  const [rows, setRows] = useState(crmDeals);
  const [query, setQuery] = useState('');
  const [stage, setStage] = useState<(typeof stageOptions)[number]>('All');

  const filteredRows = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return rows.filter((deal) => {
      const queryMatch =
        !normalized ||
        deal.name.toLowerCase().includes(normalized) ||
        deal.account.toLowerCase().includes(normalized) ||
        deal.id.toLowerCase().includes(normalized);
      const stageMatch = stage === 'All' || deal.stage === stage;
      return queryMatch && stageMatch;
    });
  }, [rows, query, stage]);

  const chartData = useMemo(() => {
    const map = new Map<string, { stage: string; value: number }>();
    filteredRows.forEach((deal) => {
      const current = map.get(deal.stage);
      map.set(deal.stage, { stage: deal.stage, value: (current?.value ?? 0) + deal.value });
    });
    return Array.from(map.values());
  }, [filteredRows]);

  const totals = useMemo(() => {
    const pipelineValue = filteredRows.reduce((sum, row) => sum + row.value, 0);
    const weightedValue = filteredRows.reduce((sum, row) => sum + (row.value * row.probability) / 100, 0);
    return { pipelineValue, weightedValue };
  }, [filteredRows]);

  const closeDeal = (deal: Deal, won: boolean) => {
    setRows((prev) => prev.map((row) => (row.id === deal.id ? { ...row, stage: won ? 'Closed Won' : 'Closed Lost' } : row)));
  };

  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={crmSectionCardClassName()}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50">CRM Module</p>
              <h1 className="mt-1 text-2xl font-bold text-white">Manage Deals</h1>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/85 transition-colors hover:bg-white/10">
              <Plus className="h-3.5 w-3.5 text-brand-secondary" /> New Deal
            </button>
          </div>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-6 xl:grid-cols-[1.3fr_1fr]">
        <article className={crmSectionCardClassName()}>
          <h2 className="mb-4 text-lg font-semibold text-white">Pipeline Value by Stage</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis dataKey="stage" stroke="rgba(255,255,255,0.6)" tick={{ fontSize: 12 }} />
                <YAxis stroke="rgba(255,255,255,0.6)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-brand-bg)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '10px',
                    color: 'white',
                  }}
                  formatter={(value: number) => `$${value.toLocaleString()}`}
                />
                <Bar dataKey="value" fill="var(--color-brand-primary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
        <article className={crmSectionCardClassName('space-y-4')}>
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">Total Pipeline Value</p>
            <p className="mt-2 text-3xl font-bold text-white">${totals.pipelineValue.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">Weighted Forecast</p>
            <p className="mt-2 text-3xl font-bold text-brand-teal">${Math.round(totals.weightedValue).toLocaleString()}</p>
          </div>
          <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
            {stageOptions.slice(0, 4).map((chip) => (
              <button key={chip} onClick={() => setStage(chip)} className={`flex-1 rounded-md px-2 py-2 text-xs transition-colors ${stage === chip ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'}`}>
                {chip}
              </button>
            ))}
          </div>
        </article>
      </StaggerReveal>

      <Reveal>
        <section className={crmSectionCardClassName('space-y-4')}>
          <label className="flex max-w-md items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3">
            <Search className="h-4 w-4 text-white/50" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by deal name, account, or id"
              className="h-11 w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </label>

          <HRMHorizontalScroll>
            <table className="w-full min-w-[980px] text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/55">
                  <th className="px-3 py-3">Deal</th>
                  <th className="px-3 py-3">Account</th>
                  <th className="px-3 py-3">Pipeline</th>
                  <th className="px-3 py-3">Stage</th>
                  <th className="px-3 py-3">Value</th>
                  <th className="px-3 py-3">Probability</th>
                  <th className="px-3 py-3">Tasks</th>
                  <th className="px-3 py-3">Next Step</th>
                  <th className="px-3 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((deal) => (
                  <tr key={deal.id} className="border-b border-white/5 transition-colors hover:bg-white/5">
                    <td className="px-3 py-3">
                      <p className="font-semibold text-white">{deal.name}</p>
                      <p className="text-xs text-white/50">{deal.id} · {deal.owner}</p>
                    </td>
                    <td className="px-3 py-3 text-white/75">{deal.account}</td>
                    <td className="px-3 py-3 text-white/75">{deal.pipeline}</td>
                    <td className="px-3 py-3">
                      <span className={`inline-flex rounded-full border px-2 py-1 text-xs ${crmStagePillClassName(deal.stage)}`}>{deal.stage}</span>
                    </td>
                    <td className="px-3 py-3 font-semibold text-white">${deal.value.toLocaleString()}</td>
                    <td className="px-3 py-3 text-white/75">{deal.probability}%</td>
                    <td className="px-3 py-3 text-white/75">{deal.tasksDone}/{deal.tasksTotal}</td>
                    <td className="px-3 py-3 text-white/75">{deal.nextStep}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1.5">
                        <button onClick={() => closeDeal(deal, true)} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/85 transition-colors hover:bg-white/10">
                          <CheckCheck className="h-3 w-3 text-brand-teal" /> Win
                        </button>
                        <button onClick={() => closeDeal(deal, false)} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/85 transition-colors hover:bg-white/10">
                          Close Lost
                        </button>
                      </div>
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

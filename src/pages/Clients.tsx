import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import { Search, TrendingUp, ArrowRight, Building2, Mail, BriefcaseBusiness } from 'lucide-react';

type ClientStatus = 'active' | 'inactive';

type Client = {
  id: string;
  name: string;
  segment: string;
  email: string;
  plan: 'Enterprise Plus' | 'Scale Tier' | 'Sunsetted';
  spent: string;
  manager: string;
  lastActivity: string;
  status: ClientStatus;
};

const CLIENTS: Client[] = [
  { id: 'NV', name: 'Nova Ventures', segment: 'Series B · Fintech', email: 'billing@novaventures.io', plan: 'Enterprise Plus', spent: '$142,500.00', manager: 'Sarah Kim', lastActivity: '2 hours ago', status: 'active' },
  { id: 'AL', name: 'Aether Labs', segment: 'Seed · Healthtech', email: 'contact@aetherlabs.com', plan: 'Scale Tier', spent: '$24,900.00', manager: 'Daniel Ross', lastActivity: 'Yesterday, 14:22', status: 'active' },
  { id: 'SP', name: 'Solaris Photonics', segment: 'Series A · Clean Energy', email: 'ops@solaris.net', plan: 'Enterprise Plus', spent: '$89,200.00', manager: 'Nina Carter', lastActivity: '3 days ago', status: 'active' },
  { id: 'OG', name: 'Omni Grid', segment: 'Acquired · Logistics', email: 'archived@omnigrid.co', plan: 'Sunsetted', spent: '$310,000.00', manager: 'Unassigned', lastActivity: 'Aug 24, 2026', status: 'inactive' },
  { id: 'LX', name: 'Lumina UX', segment: 'Stealth · AI SaaS', email: 'founders@lumina.ai', plan: 'Scale Tier', spent: '$12,000.00', manager: 'Michael Wong', lastActivity: 'Active now', status: 'active' },
];

export function Clients() {
  const [statusFilter, setStatusFilter] = useState<'all' | ClientStatus>('all');
  const [query, setQuery] = useState('');

  const filteredClients = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CLIENTS.filter((client) => {
      const statusOk = statusFilter === 'all' || client.status === statusFilter;
      const searchOk = !q || client.name.toLowerCase().includes(q) || client.email.toLowerCase().includes(q) || client.segment.toLowerCase().includes(q);
      return statusOk && searchOk;
    });
  }, [statusFilter, query]);

  const activeCount = CLIENTS.filter((item) => item.status === 'active').length;
  const inactiveCount = CLIENTS.length - activeCount;

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-14">
      <Reveal direction="down">
        <section className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white">Client Portfolio</h2>
            <p className="mt-1 text-sm text-white/60">Track project engagement, contract tier, and delivery communication for each client account.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-xl border border-white/10 bg-brand-surface px-4 py-2">
              <p className="text-[11px] uppercase tracking-wider text-white/50">Active Clients</p>
              <p className="text-lg font-bold text-brand-teal">{activeCount}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-brand-surface px-4 py-2">
              <p className="text-[11px] uppercase tracking-wider text-white/50">Inactive Clients</p>
              <p className="text-lg font-bold text-brand-secondary">{inactiveCount}</p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-xl border border-white/10 bg-brand-surface p-4">
          <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by client, segment, or email"
                className="h-10 w-full rounded-lg border border-white/15 bg-brand-bg pl-10 pr-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-brand-primary"
              />
            </div>

            <div className="inline-flex w-fit rounded-lg border border-white/10 bg-brand-bg p-1 text-sm">
              {[
                { key: 'all', label: 'All' },
                { key: 'active', label: 'Active' },
                { key: 'inactive', label: 'Inactive' },
              ].map((option) => (
                <button
                  key={option.key}
                  onClick={() => setStatusFilter(option.key as 'all' | ClientStatus)}
                  className={`rounded-md px-4 py-1.5 font-semibold transition-colors ${statusFilter === option.key ? 'bg-brand-primary text-white' : 'text-white/60 hover:text-white'}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left text-sm">
              <thead className="border-y border-white/10 bg-white/5">
                <tr className="text-xs uppercase tracking-wider text-white/45">
                  <th className="px-4 py-3">Client</th>
                  <th className="px-4 py-3">Account Contact</th>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Spent</th>
                  <th className="px-4 py-3">Manager</th>
                  <th className="px-4 py-3">Last Activity</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client) => (
                  <tr key={client.id} className={`border-b border-white/5 transition-colors hover:bg-white/[0.03] ${client.status === 'inactive' ? 'opacity-65' : ''}`}>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary/20 font-bold text-brand-primary">{client.id}</div>
                        <div>
                          <p className="font-semibold text-white">{client.name}</p>
                          <p className="text-xs text-white/50">{client.segment}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-white/75">{client.email}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                          client.plan === 'Enterprise Plus'
                            ? 'bg-brand-primary/20 text-brand-primary'
                            : client.plan === 'Sunsetted'
                            ? 'bg-brand-secondary/20 text-brand-secondary'
                            : 'bg-brand-teal/20 text-brand-teal'
                        }`}
                      >
                        {client.plan}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-semibold text-white">{client.spent}</td>
                    <td className="px-4 py-4 text-white/70">{client.manager}</td>
                    <td className="px-4 py-4 text-white/65">{client.lastActivity}</td>
                    <td className="px-4 py-4 text-right">
                      <button className="rounded-md border border-white/15 bg-brand-bg px-3 py-1.5 text-xs font-semibold text-white/85 hover:bg-white/10">Open Profile</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <article className="rounded-xl border border-white/10 bg-brand-surface p-5">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/55">
            <TrendingUp className="h-4 w-4 text-brand-secondary" /> Revenue Momentum
          </div>
          <p className="text-3xl font-black text-brand-primary">$284,500</p>
          <p className="mt-2 text-sm text-white/60">12.4% increase in retained monthly billings this quarter.</p>
        </article>

        <article className="rounded-xl border border-white/10 bg-brand-surface p-5">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/55">
            <BriefcaseBusiness className="h-4 w-4 text-brand-teal" /> Upgrade Pipeline
          </div>
          <p className="text-3xl font-black text-brand-teal">3 Accounts</p>
          <p className="mt-2 text-sm text-white/60">Eligible for Enterprise Plus based on current utilization and volume.</p>
        </article>

        <article className="rounded-xl border border-white/10 bg-brand-surface p-5">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/55">
            <Mail className="h-4 w-4 text-brand-primary" /> Next Action
          </div>
          <p className="text-lg font-bold text-white">Client Renewal Sync</p>
          <p className="mt-2 text-sm text-white/60">Prepare Q2 performance deck for scheduled stakeholder reviews.</p>
          <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-primary px-4 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90">
            Review Insights <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </article>
      </StaggerReveal>
    </div>
  );
}

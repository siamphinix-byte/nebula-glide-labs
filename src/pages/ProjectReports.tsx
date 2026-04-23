import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../components/GSAPWrapper';
import { Search, Filter, Eye, Edit, BarChart3, PieChart as PieChartIcon, ChevronDown, X } from 'lucide-react';
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from 'recharts';

type ProjectStatus = 'Planning' | 'Active' | 'Completed' | 'On Hold';

type Project = {
  id: number;
  name: string;
  desc: string;
  start: string;
  due: string;
  members: string[];
  extraMembers: number;
  progress: number;
  status: ProjectStatus;
};

const seedProjects: Project[] = [
  { id: 1, name: 'Security Audit', desc: 'Threat analysis and endpoint hardening plan.', start: '2025-11-12', due: '2026-01-21', members: ['E', 'D', 'L'], extraMembers: 8, progress: 58, status: 'Planning' },
  { id: 2, name: 'Performance Suite', desc: 'Core monitoring, tracing and cache optimization.', start: '2025-11-15', due: '2026-02-24', members: ['S', 'D', 'G'], extraMembers: 2, progress: 100, status: 'Completed' },
  { id: 3, name: 'Admin Dashboard', desc: 'Role-aware KPI panels and workflow widgets.', start: '2025-09-21', due: '2026-01-14', members: ['S', 'D', 'L'], extraMembers: 4, progress: 90, status: 'On Hold' },
  { id: 4, name: 'Payment Integration', desc: 'Invoicing sync, payout routing, and webhook tests.', start: '2025-10-27', due: '2026-01-29', members: ['S', 'R', 'D'], extraMembers: 3, progress: 65, status: 'Planning' },
  { id: 5, name: 'AI Chatbot', desc: 'Support flows with escalation and sentiment tagging.', start: '2025-11-03', due: '2026-02-21', members: ['M', 'K', 'D'], extraMembers: 6, progress: 73, status: 'On Hold' },
  { id: 6, name: 'Inventory System', desc: 'Batch-level stock lifecycle and reorder automation.', start: '2025-10-27', due: '2026-01-10', members: ['E', 'D', 'J'], extraMembers: 6, progress: 69, status: 'On Hold' },
  { id: 7, name: 'CRM Enhancement', desc: 'Lead scoring and retention playbook rollout.', start: '2025-09-26', due: '2026-03-07', members: ['S', 'E', 'J'], extraMembers: 9, progress: 66, status: 'Planning' },
  { id: 8, name: 'Data Warehouse', desc: 'Historical pipeline and cost-tuned query layers.', start: '2025-11-01', due: '2026-01-21', members: ['S', 'E', 'D'], extraMembers: 10, progress: 55, status: 'Planning' },
  { id: 9, name: 'Mobile Banking App', desc: 'Identity checks, transfer security and UX polish.', start: '2025-09-25', due: '2026-01-23', members: ['S', 'J', 'R'], extraMembers: 7, progress: 100, status: 'Completed' },
  { id: 10, name: 'Customer Portal', desc: 'Self-service tickets and account data sync.', start: '2025-10-09', due: '2026-01-14', members: ['M', 'E', 'J'], extraMembers: 7, progress: 72, status: 'Active' },
  { id: 11, name: 'Internal Wiki', desc: 'Documentation migration and indexed search.', start: '2025-10-18', due: '2026-02-10', members: ['I', 'D', 'A'], extraMembers: 3, progress: 48, status: 'Planning' },
  { id: 12, name: 'Billing QA', desc: 'Regression matrix for invoice and tax behavior.', start: '2025-11-22', due: '2026-01-30', members: ['L', 'A', 'E'], extraMembers: 4, progress: 62, status: 'Active' },
];

const statusCycle: Record<ProjectStatus, ProjectStatus> = {
  Planning: 'Active',
  Active: 'On Hold',
  'On Hold': 'Completed',
  Completed: 'Planning',
};

const statusTone: Record<ProjectStatus, string> = {
  Planning: 'text-brand-primary border-brand-primary/30 bg-brand-primary/10',
  Active: 'text-brand-teal border-brand-teal/30 bg-brand-teal/10',
  Completed: 'text-brand-secondary border-brand-secondary/30 bg-brand-secondary/10',
  'On Hold': 'text-white border-white/30 bg-white/10',
};

const initialsTone = ['bg-brand-primary', 'bg-brand-secondary', 'bg-brand-teal'];

export function ProjectReports() {
  const [projects, setProjects] = useState(seedProjects);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | ProjectStatus>('All');
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesQuery =
        !normalized ||
        project.name.toLowerCase().includes(normalized) ||
        project.desc.toLowerCase().includes(normalized);
      const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [projects, query, statusFilter]);

  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / perPage));
  const safePage = Math.min(currentPage, pageCount);
  const paginatedProjects = useMemo(() => {
    const startIndex = (safePage - 1) * perPage;
    return filteredProjects.slice(startIndex, startIndex + perPage);
  }, [filteredProjects, safePage, perPage]);

  const reportStats = useMemo(() => {
    const totalProjects = filteredProjects.length;
    const activeCount = filteredProjects.filter((project) => project.status === 'Active').length;
    const completedCount = filteredProjects.filter((project) => project.status === 'Completed').length;
    const onHoldCount = filteredProjects.filter((project) => project.status === 'On Hold').length;
    const highPriorityCount = filteredProjects.filter(
      (project) => project.progress < 70 && project.status !== 'Completed',
    ).length;

    return {
      totalProjects,
      activeCount,
      completedCount,
      onHoldCount,
      highPriorityCount,
    };
  }, [filteredProjects]);

  const statusChartData = useMemo(() => {
    const statuses: ProjectStatus[] = ['Planning', 'Active', 'Completed', 'On Hold'];
    return statuses.map((status) => ({
      name: status,
      value: filteredProjects.filter((project) => project.status === status).length,
    }));
  }, [filteredProjects]);

  const progressChartData = useMemo(() => {
    return [...filteredProjects]
      .sort((a, b) => b.progress - a.progress)
      .slice(0, 6)
      .map((project) => ({
        name: project.name.length > 12 ? `${project.name.slice(0, 12)}…` : project.name,
        progress: project.progress,
      }));
  }, [filteredProjects]);

  const updateStatus = (id: number) => {
    setProjects((prev) => prev.map((project) => (project.id === id ? { ...project, status: statusCycle[project.status] } : project)));
  };

  const exportCSV = () => {
    if (!filteredProjects.length) return;

    const rows = [
      ['ID', 'Project', 'Description', 'Start Date', 'Due Date', 'Members', 'Progress', 'Status'],
      ...filteredProjects.map((project) => [
        project.id,
        project.name,
        project.desc,
        project.start,
        project.due,
        project.members.join('/'),
        project.progress,
        project.status,
      ]),
    ];

    const blob = new Blob([rows.map((row) => row.join(',')).join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'project-reports.csv';
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const formatDate = (date: string) => new Date(date).toLocaleDateString('en-US');

  return (
    <div className="mx-auto h-full max-w-[1400px] space-y-6 pb-24">
      <Reveal direction="down">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h1 className="text-3xl font-black tracking-tight text-white">Project Reports</h1>
          <button
            onClick={exportCSV}
            className="rounded-xl border border-brand-primary/30 bg-brand-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-brand-primary transition-colors hover:bg-brand-primary/20"
          >
            Export CSV
          </button>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-brand-surface shadow-2xl">
          <div className="grid grid-cols-2 gap-y-4 divide-y divide-white/5 p-2 sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
            <article className="p-4 text-center">
              <p className="mb-1 text-3xl font-black text-brand-primary">{reportStats.totalProjects}</p>
              <p className="text-xs font-bold uppercase tracking-wide text-white/55">Total Projects</p>
            </article>
            <article className="p-4 text-center">
              <p className="mb-1 text-3xl font-black text-brand-teal">{reportStats.activeCount}</p>
              <p className="text-xs font-bold uppercase tracking-wide text-white/55">Active</p>
            </article>
            <article className="p-4 text-center">
              <p className="mb-1 text-3xl font-black text-brand-secondary">{reportStats.completedCount}</p>
              <p className="text-xs font-bold uppercase tracking-wide text-white/55">Completed</p>
            </article>
            <article className="p-4 text-center">
              <p className="mb-1 text-3xl font-black text-white">{reportStats.onHoldCount}</p>
              <p className="text-xs font-bold uppercase tracking-wide text-white/55">On Hold</p>
            </article>
            <article className="p-4 text-center">
              <p className="mb-1 text-3xl font-black text-brand-primary">{reportStats.highPriorityCount}</p>
              <p className="text-xs font-bold uppercase tracking-wide text-white/55">High Priority</p>
            </article>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.15}>
        <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
          <article className="h-[260px] rounded-2xl border border-white/10 bg-brand-surface p-4 xl:col-span-2">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white/55">
              <BarChart3 className="h-4 w-4 text-brand-primary" /> Top Project Progress
            </div>
            <ResponsiveContainer width="100%" height="88%">
              <BarChart data={progressChartData}>
                <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,.55)', fontSize: 11 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,.55)', fontSize: 11 }} />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,.04)' }}
                  contentStyle={{ backgroundColor: 'var(--color-brand-surface)', borderColor: 'rgba(255,255,255,.2)', borderRadius: 10, color: 'white' }}
                />
                <Bar dataKey="progress" radius={[8, 8, 0, 0]} fill="var(--color-brand-primary)" />
              </BarChart>
            </ResponsiveContainer>
          </article>

          <article className="h-[260px] rounded-2xl border border-white/10 bg-brand-surface p-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white/55">
              <PieChartIcon className="h-4 w-4 text-brand-secondary" /> Status Split
            </div>
            <ResponsiveContainer width="100%" height="88%">
              <PieChart>
                <Pie data={statusChartData} dataKey="value" innerRadius={48} outerRadius={72} stroke="none" paddingAngle={4}>
                  {statusChartData.map((entry) => (
                    <Cell
                      key={entry.name}
                      fill={
                        entry.name === 'Active'
                          ? 'var(--color-brand-teal)'
                          : entry.name === 'Completed'
                            ? 'var(--color-brand-secondary)'
                            : entry.name === 'Planning'
                              ? 'var(--color-brand-primary)'
                              : 'rgba(255,255,255,0.45)'
                      }
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: 'var(--color-brand-surface)', borderColor: 'rgba(255,255,255,.2)', borderRadius: 10, color: 'white' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </article>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-brand-surface shadow-2xl">
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 p-4 lg:flex-row lg:items-center">
            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <div className="relative w-full sm:max-w-[320px]">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
                <input
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setCurrentPage(1);
                  }}
                  type="text"
                  placeholder="Search projects..."
                  className="w-full rounded-xl border border-white/15 bg-brand-bg px-9 py-2 text-sm text-white outline-none transition-colors focus:border-brand-primary"
                />
              </div>

              <label className="relative flex w-full items-center sm:w-[170px]">
                <Filter className="pointer-events-none absolute left-3 h-4 w-4 text-white/45" />
                <select
                  value={statusFilter}
                  onChange={(event) => {
                    setStatusFilter(event.target.value as 'All' | ProjectStatus);
                    setCurrentPage(1);
                  }}
                  className="w-full appearance-none rounded-xl border border-white/15 bg-brand-bg px-9 py-2 text-sm text-white outline-none transition-colors focus:border-brand-primary"
                >
                  <option value="All">All Status</option>
                  <option value="Planning">Planning</option>
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                  <option value="On Hold">On Hold</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 h-4 w-4 text-white/45" />
              </label>
            </div>

            <div className="flex items-center justify-end gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-white/45">Per page</span>
              <select
                value={perPage}
                onChange={(event) => {
                  setPerPage(Number(event.target.value));
                  setCurrentPage(1);
                }}
                className="rounded-xl border border-white/15 bg-brand-bg px-3 py-1.5 text-sm text-white outline-none transition-colors focus:border-brand-primary"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={12}>12</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[940px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-white/45">
                  <th className="px-4 py-3 text-center">#</th>
                  <th className="px-4 py-3">Project</th>
                  <th className="px-4 py-3">Start Date</th>
                  <th className="px-4 py-3">Due Date</th>
                  <th className="px-4 py-3">Members</th>
                  <th className="px-4 py-3">Progress</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>

              <StaggerReveal className="contents">
                <tbody>
                  {paginatedProjects.map((project) => (
                    <tr key={project.id} className="border-b border-white/5 transition-colors hover:bg-white/5">
                      <td className="px-4 py-4 text-center font-bold text-white/85">{project.id}</td>
                      <td className="px-4 py-4">
                        <p className="font-bold tracking-tight text-white">{project.name}</p>
                        <p className="mt-1 text-xs text-white/50">{project.desc}</p>
                      </td>
                      <td className="px-4 py-4 font-mono text-white/70">{formatDate(project.start)}</td>
                      <td className="px-4 py-4 font-mono text-white/70">{formatDate(project.due)}</td>
                      <td className="px-4 py-4">
                        <div className="flex -space-x-2">
                          {project.members.map((member, index) => (
                            <div
                              key={`${project.id}-${member}`}
                              className={`flex h-7 w-7 items-center justify-center rounded-full border border-brand-bg text-[10px] font-black text-brand-bg ${initialsTone[index % initialsTone.length]}`}
                            >
                              {member}
                            </div>
                          ))}
                          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-brand-bg text-[10px] font-bold text-white/65">
                            +{project.extraMembers}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-20 overflow-hidden rounded-full bg-white/10">
                            <div className="h-full rounded-full bg-brand-primary" style={{ width: `${project.progress}%` }} />
                          </div>
                          <span className="text-xs font-bold text-white/70">{project.progress}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${statusTone[project.status]}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand-primary/30 bg-brand-primary/10 text-brand-primary transition-colors hover:bg-brand-primary/20"
                            aria-label={`View ${project.name}`}
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => updateStatus(project.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary transition-colors hover:bg-brand-secondary/20"
                            aria-label={`Change status for ${project.name}`}
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </StaggerReveal>
            </table>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 bg-brand-bg/40 p-4 text-sm text-white/55 sm:flex-row">
            <p>
              Showing {(safePage - 1) * perPage + 1} to {Math.min(safePage * perPage, filteredProjects.length)} of {filteredProjects.length} projects
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={safePage === 1}
                className="rounded-lg border border-white/15 px-3 py-1.5 font-semibold text-white/80 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>
              {Array.from({ length: pageCount }).map((_, index) => {
                const page = index + 1;
                const isActive = page === safePage;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`h-8 w-8 rounded-lg border text-sm font-bold transition-colors ${
                      isActive
                        ? 'border-brand-primary bg-brand-primary text-brand-bg'
                        : 'border-white/15 bg-transparent text-white/70 hover:bg-white/10'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(pageCount, prev + 1))}
                disabled={safePage === pageCount}
                className="rounded-lg border border-white/15 px-3 py-1.5 font-semibold text-white/80 transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </Reveal>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <Reveal direction="up" className="w-full max-w-xl">
            <div className="rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-2xl">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-black text-white">{selectedProject.name}</h2>
                  <p className="mt-1 text-sm text-white/60">{selectedProject.desc}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-brand-bg text-white/70 transition-colors hover:bg-white/10"
                  aria-label="Close details"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <article className="rounded-xl border border-white/10 bg-brand-bg p-3">
                  <p className="text-xs uppercase tracking-wide text-white/45">Start Date</p>
                  <p className="mt-1 font-bold text-white">{formatDate(selectedProject.start)}</p>
                </article>
                <article className="rounded-xl border border-white/10 bg-brand-bg p-3">
                  <p className="text-xs uppercase tracking-wide text-white/45">Due Date</p>
                  <p className="mt-1 font-bold text-white">{formatDate(selectedProject.due)}</p>
                </article>
                <article className="rounded-xl border border-white/10 bg-brand-bg p-3">
                  <p className="text-xs uppercase tracking-wide text-white/45">Progress</p>
                  <p className="mt-1 font-bold text-brand-primary">{selectedProject.progress}%</p>
                </article>
                <article className="rounded-xl border border-white/10 bg-brand-bg p-3">
                  <p className="text-xs uppercase tracking-wide text-white/45">Status</p>
                  <p className="mt-1 font-bold text-brand-secondary">{selectedProject.status}</p>
                </article>
              </div>
            </div>
          </Reveal>
        </div>
      )}
    </div>
  );
}
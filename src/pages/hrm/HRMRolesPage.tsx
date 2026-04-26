import { KeyRound, Plus, Search, Trash2 } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { sectionCardClassName } from './HRMShared';
import { roleCatalog } from './hrmData';

export function HRMRolesPage() {
  const [query, setQuery] = useState('');
  const [roles, setRoles] = useState(roleCatalog);

  const filteredRoles = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return roles;
    return roles.filter((role) => role.name.toLowerCase().includes(normalized) || role.key.toLowerCase().includes(normalized));
  }, [roles, query]);

  const removeRole = (id: string) => {
    setRoles((prev) => prev.filter((role) => role.id !== id));
  };

  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={sectionCardClassName()}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Roles & Permissions</h1>
              <p className="mt-1 text-sm text-white/60">Configure role templates and adjust permission boundaries for teams.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition-colors hover:bg-white/10">
              <Plus className="h-4 w-4 text-brand-primary" /> New Role
            </button>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={sectionCardClassName('space-y-4')}>
          <label className="flex max-w-md items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3">
            <Search className="h-4 w-4 text-white/50" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search roles by name or key"
              className="h-11 w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </label>

          <StaggerReveal className="space-y-3">
            {filteredRoles.map((role) => (
              <article key={role.id} className="grid grid-cols-1 gap-4 rounded-xl border border-white/10 bg-white/5 p-4 md:grid-cols-[1.5fr_1fr_auto] md:items-center">
                <div>
                  <h2 className="text-lg font-semibold text-white">{role.name}</h2>
                  <p className="text-sm text-white/55">{role.description}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-white/40">Identifier</p>
                  <p className="font-mono text-xs text-white/75">{role.key}</p>
                </div>
                <div className="flex items-center gap-2 md:justify-end">
                  <span className="inline-flex items-center gap-1 rounded-full border border-brand-primary/30 bg-brand-primary/20 px-2.5 py-1 text-xs text-brand-primary">
                    <KeyRound className="h-3 w-3" /> {role.permissions} perms
                  </span>
                  <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/70">{role.members} members</span>
                  <button
                    onClick={() => removeRole(role.id)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    aria-label={`Delete ${role.name}`}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </StaggerReveal>
        </section>
      </Reveal>
    </div>
  );
}
import { Edit3, Mail, Phone } from 'lucide-react';
import React, { useState } from 'react';
import { Reveal } from '../../components/GSAPWrapper';
import { employeeSummary } from './employeeData';
import { employeeSectionClass } from './employeeShared';

export function EmployeeProfilePage() {
  const [form, setForm] = useState({ phone: employeeSummary.phone, location: employeeSummary.location });
  const [saved, setSaved] = useState(false);

  const onSave = (event: React.FormEvent) => {
    event.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  return (
    <div className="mx-auto max-w-[980px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={employeeSectionClass()}>
          <h1 className="text-2xl font-bold text-foreground">My Profile</h1>
          <p className="mt-1 text-sm text-foreground/60">Manage your personal and contact information.</p>
        </section>
      </Reveal>

      <Reveal>
        <section className={employeeSectionClass()}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-brand-muted/40 p-4">
              <p className="text-xs text-foreground/50">Employee ID</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{employeeSummary.employeeId}</p>
            </div>
            <div className="rounded-lg border border-border bg-brand-muted/40 p-4">
              <p className="text-xs text-foreground/50">Role</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{employeeSummary.role}</p>
            </div>
          </div>

          <form onSubmit={onSave} className="mt-4 space-y-3">
            <label className="block">
              <span className="mb-1 block text-xs text-foreground/55">Email</span>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-brand-muted px-3">
                <Mail className="h-4 w-4 text-foreground/50" />
                <input value={employeeSummary.email} disabled className="h-11 w-full bg-transparent text-sm text-foreground/80" />
              </div>
            </label>
            <label className="block">
              <span className="mb-1 block text-xs text-foreground/55">Phone</span>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-brand-muted px-3">
                <Phone className="h-4 w-4 text-foreground/50" />
                <input value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} className="h-11 w-full bg-transparent text-sm text-foreground focus:outline-none" />
              </div>
            </label>
            <label className="block">
              <span className="mb-1 block text-xs text-foreground/55">Location</span>
              <input value={form.location} onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))} className="h-11 w-full rounded-lg border border-border bg-brand-muted px-3 text-sm text-foreground focus:border-brand-primary/40 focus:outline-none" />
            </label>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg border border-border bg-brand-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
              <Edit3 className="h-4 w-4" /> Save Changes
            </button>
            {saved && <p className="text-xs text-brand-teal">Profile settings saved.</p>}
          </form>
        </section>
      </Reveal>
    </div>
  );
}

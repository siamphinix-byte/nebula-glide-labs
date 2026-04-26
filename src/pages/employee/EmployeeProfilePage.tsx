import { Edit3, Mail, Phone } from 'lucide-react';
import React, { useState } from 'react';
import { Reveal } from '../../components/GSAPWrapper';
import { employeeSummary } from './employeeData';
import { employeeInputClass, employeePageClass, employeePrimaryButtonClass, employeeSectionClass, employeeSubtitleClass, employeeTitleClass } from './employeeShared';

export function EmployeeProfilePage() {
  const [form, setForm] = useState({ phone: employeeSummary.phone, location: employeeSummary.location });
  const [saved, setSaved] = useState(false);

  const onSave = (event: React.FormEvent) => {
    event.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  return (
    <div className={employeePageClass}>
      <Reveal direction="down">
        <section className={employeeSectionClass()}>
          <h1 className={employeeTitleClass}>My Profile</h1>
          <p className={employeeSubtitleClass}>Manage your personal and contact information.</p>
        </section>
      </Reveal>

      <Reveal>
        <section className={employeeSectionClass()}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-brand-bg/55 p-4">
              <p className="text-xs text-white/50">Employee ID</p>
              <p className="mt-1 text-sm font-semibold text-white">{employeeSummary.employeeId}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-brand-bg/55 p-4">
              <p className="text-xs text-white/50">Role</p>
              <p className="mt-1 text-sm font-semibold text-white">{employeeSummary.role}</p>
            </div>
          </div>

          <form onSubmit={onSave} className="mt-4 space-y-3">
            <label className="block">
              <span className="mb-1 block text-xs text-white/55">Email</span>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-brand-bg/60 px-3">
                <Mail className="h-4 w-4 text-white/50" />
                <input value={employeeSummary.email} disabled className="h-11 w-full bg-transparent text-sm text-white/80" />
              </div>
            </label>
            <label className="block">
              <span className="mb-1 block text-xs text-white/55">Phone</span>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-brand-bg/60 px-3">
                <Phone className="h-4 w-4 text-white/50" />
                <input value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} className="h-11 w-full bg-transparent text-sm text-white focus:outline-none" />
              </div>
            </label>
            <label className="block">
              <span className="mb-1 block text-xs text-white/55">Location</span>
              <input value={form.location} onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))} className={employeeInputClass} />
            </label>
            <button type="submit" className={employeePrimaryButtonClass}>
              <Edit3 className="h-4 w-4" /> Save Changes
            </button>
            {saved && <p className="text-xs text-brand-teal">Profile settings saved.</p>}
          </form>
        </section>
      </Reveal>
    </div>
  );
}

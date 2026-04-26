import React, { useState } from 'react';
import { Reveal } from '../../components/GSAPWrapper';
import { employeeSectionClass } from './employeeShared';

export function EmployeeSettingsPage() {
  const [settings, setSettings] = useState({
    emailAlerts: true,
    taskReminders: true,
    weeklyDigest: false,
    darkMode: true,
  });

  const toggle = (key: keyof typeof settings) => setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="mx-auto max-w-[980px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={employeeSectionClass()}>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="mt-1 text-sm text-foreground/60">Control personal notifications and workspace preferences.</p>
        </section>
      </Reveal>

      <Reveal>
        <section className={employeeSectionClass('space-y-3')}>
          {[
            { key: 'emailAlerts', label: 'Email alerts' },
            { key: 'taskReminders', label: 'Task reminders' },
            { key: 'weeklyDigest', label: 'Weekly digest' },
            { key: 'darkMode', label: 'Dark mode' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between rounded-lg border border-border bg-brand-muted/40 px-4 py-3">
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              <button
                onClick={() => toggle(item.key as keyof typeof settings)}
                className={`h-7 w-12 rounded-full border border-border p-1 transition-colors ${settings[item.key as keyof typeof settings] ? 'bg-brand-primary/30' : 'bg-brand-bg'}`}
                aria-label={`Toggle ${item.label}`}
              >
                <span className={`block h-5 w-5 rounded-full bg-foreground transition-transform ${settings[item.key as keyof typeof settings] ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>
          ))}
        </section>
      </Reveal>
    </div>
  );
}

import React, { useState } from 'react';
import { Reveal } from '../../components/GSAPWrapper';
import { employeePageClass, employeeSectionClass, employeeSubtitleClass, employeeTitleClass } from './employeeShared';

export function EmployeeSettingsPage() {
  const [settings, setSettings] = useState({
    emailAlerts: true,
    taskReminders: true,
    weeklyDigest: false,
    darkMode: true,
  });

  const toggle = (key: keyof typeof settings) => setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className={employeePageClass}>
      <Reveal direction="down">
        <section className={employeeSectionClass()}>
          <h1 className={employeeTitleClass}>Settings</h1>
          <p className={employeeSubtitleClass}>Control personal notifications and workspace preferences.</p>
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
            <div key={item.key} className="flex items-center justify-between rounded-xl border border-white/10 bg-brand-bg/55 px-4 py-3">
              <p className="text-sm font-medium text-white">{item.label}</p>
              <button
                onClick={() => toggle(item.key as keyof typeof settings)}
                className={`h-7 w-12 rounded-full border border-white/10 p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 ${settings[item.key as keyof typeof settings] ? 'bg-brand-primary/30' : 'bg-brand-bg'}`}
                aria-label={`Toggle ${item.label}`}
              >
                <span className={`block h-5 w-5 rounded-full bg-white transition-transform ${settings[item.key as keyof typeof settings] ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>
          ))}
        </section>
      </Reveal>
    </div>
  );
}

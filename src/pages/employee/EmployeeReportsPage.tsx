import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { monthlyPerformance } from './employeeData';
import { employeePageClass, employeeSectionClass, employeeSubtitleClass, employeeTitleClass } from './employeeShared';

export function EmployeeReportsPage() {
  return (
    <div className={employeePageClass}>
      <Reveal direction="down">
        <section className={employeeSectionClass()}>
          <h1 className={employeeTitleClass}>Reports</h1>
          <p className={employeeSubtitleClass}>Monthly productivity and attendance insights for employee self-tracking.</p>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className={employeeSectionClass()}>
          <h2 className="mb-4 text-lg font-semibold text-white">Completed Tasks by Month</h2>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.12)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.75)" />
                <YAxis stroke="rgba(255,255,255,0.75)" />
                <Tooltip contentStyle={{ background: 'var(--color-brand-bg)', border: '1px solid rgba(255,255,255,0.12)', color: 'white' }} />
                <Bar dataKey="completedTasks" fill="var(--color-brand-primary)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className={employeeSectionClass()}>
          <h2 className="mb-4 text-lg font-semibold text-white">Attendance % by Month</h2>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.12)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.75)" />
                <YAxis stroke="rgba(255,255,255,0.75)" domain={[80, 100]} />
                <Tooltip contentStyle={{ background: 'var(--color-brand-bg)', border: '1px solid rgba(255,255,255,0.12)', color: 'white' }} />
                <Bar dataKey="attendance" fill="var(--color-brand-teal)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </StaggerReveal>
    </div>
  );
}

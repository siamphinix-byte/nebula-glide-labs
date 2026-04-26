import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { monthlyPerformance } from './employeeData';
import { employeeSectionClass } from './employeeShared';

export function EmployeeReportsPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={employeeSectionClass()}>
          <h1 className="text-2xl font-bold text-foreground">Reports</h1>
          <p className="mt-1 text-sm text-foreground/60">Monthly productivity and attendance insights for employee self-tracking.</p>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className={employeeSectionClass()}>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Completed Tasks by Month</h2>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', color: 'hsl(var(--foreground))' }} />
                <Bar dataKey="completedTasks" fill="hsl(var(--brand-primary))" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className={employeeSectionClass()}>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Attendance % by Month</h2>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" domain={[80, 100]} />
                <Tooltip contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', color: 'hsl(var(--foreground))' }} />
                <Bar dataKey="attendance" fill="hsl(var(--brand-teal))" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </StaggerReveal>
    </div>
  );
}

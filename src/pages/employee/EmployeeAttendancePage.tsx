import React from 'react';
import { Reveal } from '../../components/GSAPWrapper';
import { attendanceLog } from './employeeData';
import { employeeSectionClass, employeeStatusPill } from './employeeShared';

export function EmployeeAttendancePage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={employeeSectionClass()}>
          <h1 className="text-2xl font-bold text-foreground">Attendance</h1>
          <p className="mt-1 text-sm text-foreground/60">Daily check-in/check-out history and attendance status.</p>
        </section>
      </Reveal>

      <Reveal>
        <section className={employeeSectionClass('overflow-hidden')}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-foreground/55">
                  <th className="px-3 py-3">Date</th>
                  <th className="px-3 py-3">Check In</th>
                  <th className="px-3 py-3">Check Out</th>
                  <th className="px-3 py-3">Working Hours</th>
                  <th className="px-3 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceLog.map((log) => (
                  <tr key={log.id} className="border-b border-border/60">
                    <td className="px-3 py-3 text-foreground">{log.date}</td>
                    <td className="px-3 py-3 text-foreground/80">{log.checkIn}</td>
                    <td className="px-3 py-3 text-foreground/80">{log.checkOut}</td>
                    <td className="px-3 py-3 text-foreground/80">{log.workHours}</td>
                    <td className="px-3 py-3"><span className={`inline-flex rounded-full px-2 py-1 text-xs ${employeeStatusPill(log.status)}`}>{log.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

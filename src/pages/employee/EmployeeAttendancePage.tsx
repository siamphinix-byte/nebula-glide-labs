import React from 'react';
import { Reveal } from '../../components/GSAPWrapper';
import { attendanceLog } from './employeeData';
import { employeePageClass, employeeSectionClass, employeeStatusPill, employeeSubtitleClass, employeeTableContainerClass, employeeTitleClass } from './employeeShared';

export function EmployeeAttendancePage() {
  return (
    <div className={employeePageClass}>
      <Reveal direction="down">
        <section className={employeeSectionClass()}>
          <h1 className={employeeTitleClass}>Attendance</h1>
          <p className={employeeSubtitleClass}>Daily check-in/check-out history and attendance status.</p>
        </section>
      </Reveal>

      <Reveal>
        <section className={employeeSectionClass('overflow-hidden')}>
          <div className="overflow-x-auto">
            <div className={employeeTableContainerClass}>
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/55">
                  <th className="px-3 py-3">Date</th>
                  <th className="px-3 py-3">Check In</th>
                  <th className="px-3 py-3">Check Out</th>
                  <th className="px-3 py-3">Working Hours</th>
                  <th className="px-3 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceLog.map((log) => (
                  <tr key={log.id} className="border-b border-white/10 transition-colors hover:bg-white/5">
                    <td className="px-3 py-3 text-white">{log.date}</td>
                    <td className="px-3 py-3 text-white/80">{log.checkIn}</td>
                    <td className="px-3 py-3 text-white/80">{log.checkOut}</td>
                    <td className="px-3 py-3 text-white/80">{log.workHours}</td>
                    <td className="px-3 py-3"><span className={`inline-flex rounded-full px-2 py-1 text-xs ${employeeStatusPill(log.status)}`}>{log.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

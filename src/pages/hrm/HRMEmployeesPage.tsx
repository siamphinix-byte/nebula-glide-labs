import { Search, SlidersHorizontal, UserRound } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Reveal, StaggerReveal } from '../../components/GSAPWrapper';
import { employees, type Employee, type EmployeeStatus } from './hrmData';
import { sectionCardClassName, statusPillClassName } from './HRMShared';

const departmentOptions = ['All', ...new Set(employees.map((employee) => employee.department))];

export function HRMEmployeesPage() {
  const [query, setQuery] = useState('');
  const [department, setDepartment] = useState('All');
  const [status, setStatus] = useState<EmployeeStatus | 'All'>('All');
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(employees[0]?.id ?? '');

  const filteredEmployees = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return employees.filter((employee) => {
      const matchesQuery =
        normalized.length === 0 ||
        employee.name.toLowerCase().includes(normalized) ||
        employee.id.toLowerCase().includes(normalized) ||
        employee.role.toLowerCase().includes(normalized);
      const matchesDepartment = department === 'All' || employee.department === department;
      const matchesStatus = status === 'All' || employee.status === status;
      return matchesQuery && matchesDepartment && matchesStatus;
    });
  }, [query, department, status]);

  const selectedEmployee: Employee =
    filteredEmployees.find((employee) => employee.id === selectedEmployeeId) ?? filteredEmployees[0] ?? employees[0];

  return (
    <div className="mx-auto max-w-[1420px] space-y-6 pb-20 font-sans">
      <Reveal direction="down">
        <section className={sectionCardClassName()}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Employee Directory</h1>
              <p className="mt-1 text-sm text-white/60">Search, filter, and inspect employee records by team and status.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80">
              {filteredEmployees.length} of {employees.length} employees
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={sectionCardClassName()}>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.4fr_1fr_1fr]">
            <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3">
              <Search className="h-4 w-4 text-white/50" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name, id, or role"
                className="h-11 w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3">
              <SlidersHorizontal className="h-4 w-4 text-white/50" />
              <select
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
                className="h-11 w-full bg-transparent text-sm text-white focus:outline-none"
              >
                {departmentOptions.map((option) => (
                  <option key={option} value={option} className="bg-brand-bg text-white">
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
              {(['All', 'Active', 'Remote', 'On Leave', 'Probation'] as const).map((value) => (
                <button
                  key={value}
                  onClick={() => setStatus(value)}
                  className={`flex-1 rounded-md px-2 py-2 text-xs ${status === value ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'}`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-6 xl:grid-cols-[1.5fr_1fr]">
        <section className={sectionCardClassName('overflow-hidden')}>
          <div className="overflow-auto">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/55">
                  <th className="px-3 py-3">Employee</th>
                  <th className="px-3 py-3">Department</th>
                  <th className="px-3 py-3">Manager</th>
                  <th className="px-3 py-3">Attendance</th>
                  <th className="px-3 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr
                    key={employee.id}
                    onClick={() => setSelectedEmployeeId(employee.id)}
                    className={`cursor-pointer border-b border-white/5 transition-colors hover:bg-white/5 ${selectedEmployee?.id === employee.id ? 'bg-white/5' : ''}`}
                  >
                    <td className="px-3 py-3">
                      <p className="font-semibold text-white">{employee.name}</p>
                      <p className="text-xs text-white/50">{employee.id} · {employee.role}</p>
                    </td>
                    <td className="px-3 py-3 text-white/75">{employee.department}</td>
                    <td className="px-3 py-3 text-white/75">{employee.manager}</td>
                    <td className="px-3 py-3 text-white/80">{employee.attendanceRate}%</td>
                    <td className="px-3 py-3">
                      <span className={`inline-flex rounded-full border px-2 py-1 text-xs ${statusPillClassName(employee.status)}`}>
                        {employee.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={sectionCardClassName()}>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
            <UserRound className="h-4 w-4 text-brand-primary" /> Employee Profile
          </h2>
          <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-xl font-bold text-white">{selectedEmployee.name}</p>
            <p className="text-sm text-white/65">{selectedEmployee.role}</p>
            <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              <p className="text-white/70"><span className="text-white/45">ID:</span> {selectedEmployee.id}</p>
              <p className="text-white/70"><span className="text-white/45">Team:</span> {selectedEmployee.department}</p>
              <p className="text-white/70"><span className="text-white/45">Manager:</span> {selectedEmployee.manager}</p>
              <p className="text-white/70"><span className="text-white/45">Location:</span> {selectedEmployee.location}</p>
              <p className="text-white/70"><span className="text-white/45">Email:</span> {selectedEmployee.email}</p>
              <p className="text-white/70"><span className="text-white/45">Phone:</span> {selectedEmployee.phone}</p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/10 bg-brand-bg p-3">
                <p className="text-xs text-white/45">Attendance Rate</p>
                <p className="text-lg font-bold text-white">{selectedEmployee.attendanceRate}%</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-brand-bg p-3">
                <p className="text-xs text-white/45">Leave Balance</p>
                <p className="text-lg font-bold text-white">{selectedEmployee.leaveBalance} days</p>
              </div>
            </div>
          </div>
        </section>
      </StaggerReveal>
    </div>
  );
}
export type EmployeeTaskStatus = 'Pending' | 'In Progress' | 'Completed';
export type LeaveRequestStatus = 'Pending' | 'Approved' | 'Rejected';
export type AttendanceState = 'Present' | 'Late' | 'Remote' | 'Absent';

export interface EmployeeTask {
  id: string;
  title: string;
  dueDate: string;
  priority: 'Low' | 'Medium' | 'High';
  status: EmployeeTaskStatus;
  project: string;
}

export const employeeSummary = {
  employeeId: 'EMP-2048',
  name: 'Jenna Miller',
  role: 'UI Engineer',
  manager: 'Ariana Wilson',
  team: 'Product Engineering',
  email: 'jenna@brandofriar.com',
  phone: '+1 555-2048',
  location: 'Hybrid - Dhaka',
  joinDate: '2024-08-17',
  leaveBalance: 12,
  attendanceRate: 96,
};

export const employeeTasks: EmployeeTask[] = [
  { id: 'TSK-901', title: 'Polish onboarding flow states', dueDate: '2026-05-01', priority: 'High', status: 'In Progress', project: 'Executive Console' },
  { id: 'TSK-902', title: 'Fix profile form validation hints', dueDate: '2026-05-03', priority: 'Medium', status: 'Pending', project: 'HRM Module' },
  { id: 'TSK-903', title: 'Prepare component handoff notes', dueDate: '2026-04-28', priority: 'Low', status: 'Completed', project: 'Design System' },
  { id: 'TSK-904', title: 'Accessibility pass for dashboard cards', dueDate: '2026-05-06', priority: 'High', status: 'Pending', project: 'Employee Portal' },
];

export const leaveRequests = [
  { id: 'LV-8101', from: '2026-05-12', to: '2026-05-14', days: 3, type: 'Annual Leave', reason: 'Family event', status: 'Pending' as LeaveRequestStatus },
  { id: 'LV-8102', from: '2026-04-08', to: '2026-04-08', days: 1, type: 'Sick Leave', reason: 'Medical consultation', status: 'Approved' as LeaveRequestStatus },
  { id: 'LV-8103', from: '2026-03-18', to: '2026-03-19', days: 2, type: 'Personal Leave', reason: 'Urgent personal work', status: 'Rejected' as LeaveRequestStatus },
];

export const attendanceLog = [
  { id: 'AT-9401', date: '2026-04-21', checkIn: '09:02 AM', checkOut: '06:03 PM', workHours: '8h 31m', status: 'Present' as AttendanceState },
  { id: 'AT-9402', date: '2026-04-22', checkIn: '09:18 AM', checkOut: '06:07 PM', workHours: '8h 05m', status: 'Late' as AttendanceState },
  { id: 'AT-9403', date: '2026-04-23', checkIn: '08:57 AM', checkOut: '05:59 PM', workHours: '8h 42m', status: 'Remote' as AttendanceState },
  { id: 'AT-9404', date: '2026-04-24', checkIn: '-', checkOut: '-', workHours: '0h 00m', status: 'Absent' as AttendanceState },
  { id: 'AT-9405', date: '2026-04-25', checkIn: '08:51 AM', checkOut: '06:01 PM', workHours: '8h 47m', status: 'Present' as AttendanceState },
];

export const monthlyPerformance = [
  { month: 'Jan', completedTasks: 18, attendance: 95 },
  { month: 'Feb', completedTasks: 21, attendance: 97 },
  { month: 'Mar', completedTasks: 24, attendance: 94 },
  { month: 'Apr', completedTasks: 22, attendance: 96 },
  { month: 'May', completedTasks: 25, attendance: 97 },
];

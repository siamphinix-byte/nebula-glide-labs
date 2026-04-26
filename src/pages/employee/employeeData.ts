export type EmployeeTaskStatus = 'Pending' | 'In Progress' | 'Review' | 'Blocked' | 'Completed';
export type LeaveRequestStatus = 'Pending' | 'Approved' | 'Rejected';
export type AttendanceState = 'Present' | 'Late' | 'Remote' | 'Absent';
export type MeetingStatus = 'Scheduled' | 'Live' | 'Completed' | 'Draft';

export interface EmployeeTask {
  id: string;
  title: string;
  dueDate: string;
  priority: 'Low' | 'Medium' | 'High';
  status: EmployeeTaskStatus;
  project: string;
}

export interface EmployeeMeeting {
  id: string;
  title: string;
  project: string;
  dateTime: string;
  duration: string;
  host: string;
  status: MeetingStatus;
  agenda: string;
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
  { id: 'TSK-903', title: 'Prepare component handoff notes', dueDate: '2026-04-28', priority: 'Low', status: 'Review', project: 'Design System' },
  { id: 'TSK-904', title: 'Accessibility pass for dashboard cards', dueDate: '2026-05-06', priority: 'High', status: 'Blocked', project: 'Employee Portal' },
  { id: 'TSK-905', title: 'Finalize icon export set', dueDate: '2026-05-08', priority: 'Low', status: 'Completed', project: 'Media Library' },
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

export const employeeMeetings: EmployeeMeeting[] = [
  {
    id: 'MT-4201',
    title: 'Quarterly Strategic Alignment',
    project: 'Brand Revamp',
    dateTime: '2026-05-02 11:00 AM',
    duration: '45 min',
    host: 'Ariana Wilson',
    status: 'Scheduled',
    agenda: 'Final scope, owners, and timeline risk review.',
  },
  {
    id: 'MT-4202',
    title: 'Design QA Sync',
    project: 'Employee Portal',
    dateTime: '2026-04-29 04:00 PM',
    duration: '30 min',
    host: 'Noah Jones',
    status: 'Live',
    agenda: 'Review defects and validate revised states.',
  },
  {
    id: 'MT-4203',
    title: 'Sprint Retrospective',
    project: 'HRM Module',
    dateTime: '2026-04-24 03:00 PM',
    duration: '60 min',
    host: 'Ariana Wilson',
    status: 'Completed',
    agenda: 'Wins, blockers, and improvement actions.',
  },
  {
    id: 'MT-4204',
    title: 'Cross-team Handoff',
    project: 'Design System',
    dateTime: '2026-05-04 10:30 AM',
    duration: '40 min',
    host: 'Rafi Hossain',
    status: 'Draft',
    agenda: 'Outline handoff checklist and dependency map.',
  },
];

export const employeeCalendarEvents = [
  { id: 'EV-11', title: 'Standup', date: '2026-05-01', time: '09:30 AM', source: 'Internal' },
  { id: 'EV-12', title: 'UI Review', date: '2026-05-02', time: '11:00 AM', source: 'Google Meet' },
  { id: 'EV-13', title: 'Task Planning', date: '2026-05-03', time: '02:30 PM', source: 'Internal' },
  { id: 'EV-14', title: 'Client Demo', date: '2026-05-05', time: '05:00 PM', source: 'Zoom' },
  { id: 'EV-15', title: 'Knowledge Share', date: '2026-05-06', time: '04:00 PM', source: 'Google Meet' },
];

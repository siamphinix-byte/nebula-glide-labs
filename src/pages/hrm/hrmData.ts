export type EmployeeStatus = 'Active' | 'On Leave' | 'Remote' | 'Probation';
export type LeaveStatus = 'Pending' | 'Approved' | 'Rejected';
export type AttendanceStatus = 'Present' | 'Late' | 'Remote' | 'Absent';
export type PayrollStatus = 'Paid' | 'Pending';

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  manager: string;
  status: EmployeeStatus;
  email: string;
  phone: string;
  location: string;
  attendanceRate: number;
  leaveBalance: number;
}

export const employees: Employee[] = [
  {
    id: 'EMP-1012',
    name: 'Ariana Wilson',
    role: 'Product Designer',
    department: 'Design',
    manager: 'Nora Jenkins',
    status: 'Active',
    email: 'ariana@brandofriar.com',
    phone: '+1 555-0112',
    location: 'Dhaka Office',
    attendanceRate: 97,
    leaveBalance: 14,
  },
  {
    id: 'EMP-1044',
    name: 'Christopher Lee',
    role: 'Frontend Engineer',
    department: 'Engineering',
    manager: 'Robert Taylor',
    status: 'Remote',
    email: 'chris@brandofriar.com',
    phone: '+1 555-0144',
    location: 'Remote - Chattogram',
    attendanceRate: 95,
    leaveBalance: 10,
  },
  {
    id: 'EMP-1071',
    name: 'Mila Davis',
    role: 'HR Executive',
    department: 'HR',
    manager: 'Daniel Thompson',
    status: 'On Leave',
    email: 'mila@brandofriar.com',
    phone: '+1 555-0171',
    location: 'Main Office',
    attendanceRate: 93,
    leaveBalance: 6,
  },
  {
    id: 'EMP-1090',
    name: 'David Wilson',
    role: 'QA Analyst',
    department: 'Engineering',
    manager: 'Robert Taylor',
    status: 'Probation',
    email: 'david@brandofriar.com',
    phone: '+1 555-0190',
    location: 'Main Office',
    attendanceRate: 90,
    leaveBalance: 8,
  },
  {
    id: 'EMP-1118',
    name: 'Sophia Martin',
    role: 'Account Manager',
    department: 'Client Success',
    manager: 'John Smith',
    status: 'Active',
    email: 'sophia@brandofriar.com',
    phone: '+1 555-0218',
    location: 'Main Office',
    attendanceRate: 98,
    leaveBalance: 16,
  },
  {
    id: 'EMP-1146',
    name: 'Emma Johnson',
    role: 'People Ops Specialist',
    department: 'HR',
    manager: 'Daniel Thompson',
    status: 'Active',
    email: 'emma@brandofriar.com',
    phone: '+1 555-0246',
    location: 'Main Office',
    attendanceRate: 96,
    leaveBalance: 12,
  },
];

export const leaveRequests = [
  { id: 'LV-2101', employee: 'Mila Davis', department: 'HR', type: 'Annual', from: '2026-04-18', to: '2026-04-21', days: 4, status: 'Approved' as LeaveStatus },
  { id: 'LV-2102', employee: 'David Wilson', department: 'Engineering', type: 'Sick', from: '2026-04-22', to: '2026-04-23', days: 2, status: 'Pending' as LeaveStatus },
  { id: 'LV-2103', employee: 'Christopher Lee', department: 'Engineering', type: 'Casual', from: '2026-04-25', to: '2026-04-25', days: 1, status: 'Rejected' as LeaveStatus },
  { id: 'LV-2104', employee: 'Sophia Martin', department: 'Client Success', type: 'Annual', from: '2026-04-29', to: '2026-05-02', days: 4, status: 'Pending' as LeaveStatus },
  { id: 'LV-2105', employee: 'Ariana Wilson', department: 'Design', type: 'Personal', from: '2026-05-04', to: '2026-05-05', days: 2, status: 'Approved' as LeaveStatus },
];

export const attendanceOverview = [
  { day: 'Mon', present: 82, late: 7, remote: 9, absent: 2 },
  { day: 'Tue', present: 79, late: 8, remote: 10, absent: 3 },
  { day: 'Wed', present: 85, late: 5, remote: 7, absent: 3 },
  { day: 'Thu', present: 81, late: 6, remote: 10, absent: 3 },
  { day: 'Fri', present: 78, late: 9, remote: 9, absent: 4 },
];

export const attendanceLog = [
  { id: 'AT-6001', name: 'Ariana Wilson', department: 'Design', checkIn: '09:01 AM', checkOut: '06:08 PM', status: 'Present' as AttendanceStatus },
  { id: 'AT-6002', name: 'Christopher Lee', department: 'Engineering', checkIn: '09:22 AM', checkOut: '06:17 PM', status: 'Remote' as AttendanceStatus },
  { id: 'AT-6003', name: 'David Wilson', department: 'Engineering', checkIn: '09:37 AM', checkOut: '-', status: 'Late' as AttendanceStatus },
  { id: 'AT-6004', name: 'Mila Davis', department: 'HR', checkIn: '-', checkOut: '-', status: 'Absent' as AttendanceStatus },
  { id: 'AT-6005', name: 'Emma Johnson', department: 'HR', checkIn: '08:56 AM', checkOut: '05:54 PM', status: 'Present' as AttendanceStatus },
];

export const departments = [
  { id: 'D-10', name: 'Engineering', lead: 'Robert Taylor', members: 42, openRoles: 3, utilization: 88 },
  { id: 'D-11', name: 'Design', lead: 'Nora Jenkins', members: 18, openRoles: 1, utilization: 84 },
  { id: 'D-12', name: 'HR', lead: 'Daniel Thompson', members: 14, openRoles: 2, utilization: 79 },
  { id: 'D-13', name: 'Client Success', lead: 'John Smith', members: 25, openRoles: 2, utilization: 91 },
  { id: 'D-14', name: 'Operations', lead: 'Michael Brown', members: 21, openRoles: 1, utilization: 86 },
];

export const shifts = [
  { id: 'SH-301', name: 'Standard Morning', start: '08:00 AM', end: '04:30 PM', isNight: false, createdBy: 'Julian D.' },
  { id: 'SH-302', name: 'Creative Swing', start: '11:00 AM', end: '07:30 PM', isNight: false, createdBy: 'Elena R.' },
  { id: 'SH-303', name: 'Support Night', start: '10:00 PM', end: '06:00 AM', isNight: true, createdBy: 'Mila D.' },
  { id: 'SH-304', name: 'Hybrid Flex', start: '09:30 AM', end: '06:30 PM', isNight: false, createdBy: 'Ariana W.' },
  { id: 'SH-305', name: 'Ops Rotation', start: '06:00 PM', end: '02:00 AM', isNight: true, createdBy: 'Robert T.' },
];

export const payrollSummary = [
  { month: 'Jan', paid: 368, pending: 18 },
  { month: 'Feb', paid: 372, pending: 14 },
  { month: 'Mar', paid: 381, pending: 21 },
  { month: 'Apr', paid: 390, pending: 16 },
  { month: 'May', paid: 401, pending: 12 },
  { month: 'Jun', paid: 407, pending: 11 },
];

export const payrollApprovals = [
  { id: 'PR-901', employee: 'Ariana Wilson', department: 'Design', gross: 8500, net: 7225, month: 'Oct 2026', status: 'Paid' as PayrollStatus },
  { id: 'PR-902', employee: 'Christopher Lee', department: 'Engineering', gross: 9200, net: 8040, month: 'Oct 2026', status: 'Pending' as PayrollStatus },
  { id: 'PR-903', employee: 'Sophia Martin', department: 'Client Success', gross: 7800, net: 6790, month: 'Oct 2026', status: 'Paid' as PayrollStatus },
  { id: 'PR-904', employee: 'Emma Johnson', department: 'HR', gross: 6900, net: 6010, month: 'Oct 2026', status: 'Pending' as PayrollStatus },
];

export const payslips = [
  { id: 'PS-1101', employee: 'Helena Hills', role: 'Senior Designer', department: 'Design', month: 'Oct 2026', gross: 8500, net: 7225 },
  { id: 'PS-1102', employee: 'Julian Wan', role: 'Tech Lead', department: 'Engineering', month: 'Oct 2026', gross: 12000, net: 10200 },
  { id: 'PS-1103', employee: 'Aria Mason', role: 'HR Manager', department: 'HR', month: 'Oct 2026', gross: 7600, net: 6620 },
  { id: 'PS-1104', employee: 'Logan Reed', role: 'Project Manager', department: 'Operations', month: 'Sep 2026', gross: 9800, net: 8330 },
  { id: 'PS-1105', employee: 'Nora Jenkins', role: 'Design Lead', department: 'Design', month: 'Sep 2026', gross: 11100, net: 9435 },
];

export const roleCatalog = [
  { id: 'RL-01', name: 'Administrator', key: 'role_admin_system', description: 'Full system access', permissions: 142, members: 6 },
  { id: 'RL-02', name: 'HR Manager', key: 'role_hr_manager', description: 'Employee and payroll access', permissions: 48, members: 9 },
  { id: 'RL-03', name: 'Project Manager', key: 'role_project_manager', description: 'Project and team assignment control', permissions: 56, members: 12 },
  { id: 'RL-04', name: 'Employee', key: 'role_employee_self', description: 'Default self-service access', permissions: 18, members: 124 },
];
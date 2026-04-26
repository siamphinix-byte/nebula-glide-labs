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

export type ComplaintStatus = 'Open' | 'In Review' | 'Resolved' | 'Closed';
export type WarningStatus = 'Issued' | 'Acknowledged' | 'Escalated' | 'Closed';
export type TerminationStatus = 'Pending Review' | 'Approved' | 'In Offboarding' | 'Completed';
export type AnnouncementStatus = 'Draft' | 'Scheduled' | 'Published';
export type EventStatus = 'Upcoming' | 'Ongoing' | 'Completed' | 'Cancelled';

export const complaints = [
  { id: 'CP-401', employee: 'Mila Davis', department: 'HR', category: 'Workplace Conduct', priority: 'High', status: 'In Review' as ComplaintStatus, reportedOn: '2026-04-14', assignee: 'Emma Johnson' },
  { id: 'CP-402', employee: 'David Wilson', department: 'Engineering', category: 'Policy Violation', priority: 'Medium', status: 'Open' as ComplaintStatus, reportedOn: '2026-04-18', assignee: 'Daniel Thompson' },
  { id: 'CP-403', employee: 'Christopher Lee', department: 'Engineering', category: 'Harassment', priority: 'High', status: 'Resolved' as ComplaintStatus, reportedOn: '2026-04-11', assignee: 'Emma Johnson' },
  { id: 'CP-404', employee: 'Ariana Wilson', department: 'Design', category: 'Payroll Dispute', priority: 'Low', status: 'Closed' as ComplaintStatus, reportedOn: '2026-04-07', assignee: 'Mila Davis' },
  { id: 'CP-405', employee: 'Sophia Martin', department: 'Client Success', category: 'Manager Feedback', priority: 'Medium', status: 'In Review' as ComplaintStatus, reportedOn: '2026-04-20', assignee: 'Daniel Thompson' },
];

export const warnings = [
  { id: 'WR-2201', employee: 'David Wilson', department: 'Engineering', reason: 'Repeated late check-in', severity: 'Medium', status: 'Issued' as WarningStatus, issuedOn: '2026-04-10', reviewer: 'Robert Taylor' },
  { id: 'WR-2202', employee: 'Mila Davis', department: 'HR', reason: 'Policy documentation gap', severity: 'Low', status: 'Acknowledged' as WarningStatus, issuedOn: '2026-04-09', reviewer: 'Daniel Thompson' },
  { id: 'WR-2203', employee: 'Christopher Lee', department: 'Engineering', reason: 'Security protocol bypass', severity: 'High', status: 'Escalated' as WarningStatus, issuedOn: '2026-04-17', reviewer: 'Robert Taylor' },
  { id: 'WR-2204', employee: 'Emma Johnson', department: 'HR', reason: 'Incomplete leave audit', severity: 'Low', status: 'Closed' as WarningStatus, issuedOn: '2026-04-05', reviewer: 'Daniel Thompson' },
];

export const terminations = [
  { id: 'TR-801', employee: 'Liam Scott', department: 'Operations', reason: 'Performance', noticeDate: '2026-04-01', lastWorkingDay: '2026-04-30', status: 'In Offboarding' as TerminationStatus, owner: 'Emma Johnson' },
  { id: 'TR-802', employee: 'Noah Patel', department: 'Engineering', reason: 'Resignation', noticeDate: '2026-04-06', lastWorkingDay: '2026-05-06', status: 'Approved' as TerminationStatus, owner: 'Daniel Thompson' },
  { id: 'TR-803', employee: 'Ava Brooks', department: 'Client Success', reason: 'Policy Breach', noticeDate: '2026-04-13', lastWorkingDay: '2026-04-28', status: 'Pending Review' as TerminationStatus, owner: 'Emma Johnson' },
  { id: 'TR-804', employee: 'Ethan King', department: 'Design', reason: 'Role Redundancy', noticeDate: '2026-03-20', lastWorkingDay: '2026-04-20', status: 'Completed' as TerminationStatus, owner: 'Mila Davis' },
];

export const announcements = [
  { id: 'AN-5101', title: 'AI-generated summaries now available', audience: 'All Employees', category: 'Product Update', publishedOn: '2026-04-19', status: 'Published' as AnnouncementStatus, engagement: 82 },
  { id: 'AN-5102', title: 'Quarterly policy compliance briefing', audience: 'Managers', category: 'Policy', publishedOn: '2026-04-24', status: 'Scheduled' as AnnouncementStatus, engagement: 0 },
  { id: 'AN-5103', title: 'Updated remote work reimbursement flow', audience: 'Remote Teams', category: 'Finance', publishedOn: '2026-04-16', status: 'Published' as AnnouncementStatus, engagement: 74 },
  { id: 'AN-5104', title: 'HR helpdesk SLA improvements', audience: 'All Employees', category: 'Operations', publishedOn: '2026-04-28', status: 'Draft' as AnnouncementStatus, engagement: 0 },
];

export const hrmEvents = [
  { id: 'EV-9301', title: 'Leadership town hall', owner: 'Daniel Thompson', category: 'Townhall', date: '2026-05-02', attendees: 120, status: 'Upcoming' as EventStatus },
  { id: 'EV-9302', title: 'Compliance workshop', owner: 'Emma Johnson', category: 'Training', date: '2026-04-26', attendees: 48, status: 'Ongoing' as EventStatus },
  { id: 'EV-9303', title: 'New hire onboarding week', owner: 'Mila Davis', category: 'Onboarding', date: '2026-04-15', attendees: 36, status: 'Completed' as EventStatus },
  { id: 'EV-9304', title: 'Cross-team policy Q&A', owner: 'Daniel Thompson', category: 'Policy', date: '2026-04-10', attendees: 22, status: 'Cancelled' as EventStatus },
];

export const hrmDocuments = [
  { id: 'DOC-1001', name: 'Employee Code of Conduct.pdf', category: 'Policy', owner: 'HR Team', access: 'Internal', updatedOn: '2026-04-12', downloads: 132 },
  { id: 'DOC-1002', name: 'Onboarding Checklist v3.xlsx', category: 'Onboarding', owner: 'People Ops', access: 'Managers', updatedOn: '2026-04-20', downloads: 76 },
  { id: 'DOC-1003', name: 'Termination Offboarding SOP.docx', category: 'Termination', owner: 'HR Compliance', access: 'HR Only', updatedOn: '2026-04-18', downloads: 41 },
  { id: 'DOC-1004', name: 'Warning Escalation Matrix.pdf', category: 'Disciplinary', owner: 'HR Compliance', access: 'Internal', updatedOn: '2026-04-09', downloads: 64 },
  { id: 'DOC-1005', name: 'Annual Leave Policy 2026.pdf', category: 'Leave', owner: 'People Ops', access: 'All Employees', updatedOn: '2026-03-30', downloads: 201 },
];
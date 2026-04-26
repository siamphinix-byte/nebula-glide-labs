import { cn } from '@/lib/utils';
import type { AttendanceStatus, EmployeeStatus, LeaveStatus } from './hrmData';

export function sectionCardClassName(extra?: string) {
  return cn('rounded-xl border border-white/10 bg-brand-surface p-5', extra);
}

export function statusPillClassName(status: EmployeeStatus | LeaveStatus | AttendanceStatus) {
  switch (status) {
    case 'Approved':
    case 'Active':
    case 'Present':
      return 'bg-brand-teal/20 text-brand-teal border-brand-teal/30';
    case 'Pending':
    case 'On Leave':
    case 'Late':
      return 'bg-brand-secondary/20 text-brand-secondary border-brand-secondary/30';
    case 'Remote':
      return 'bg-brand-primary/20 text-brand-primary border-brand-primary/30';
    case 'Rejected':
    case 'Absent':
      return 'bg-white/10 text-white/80 border-white/20';
    case 'Probation':
      return 'bg-white/10 text-white border-white/20';
    default:
      return 'bg-white/10 text-white/80 border-white/20';
  }
}
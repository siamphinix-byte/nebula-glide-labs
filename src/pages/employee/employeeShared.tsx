import { cn } from '../../lib/utils';

export function employeeSectionClass(extra?: string) {
  return cn('rounded-xl border border-border bg-brand-surface p-5', extra);
}

export function employeeStatusPill(status: string) {
  switch (status) {
    case 'Completed':
    case 'Approved':
    case 'Present':
      return 'border border-brand-teal/30 bg-brand-teal/20 text-brand-teal';
    case 'In Progress':
    case 'Pending':
    case 'Remote':
      return 'border border-brand-primary/30 bg-brand-primary/20 text-brand-primary';
    case 'Late':
      return 'border border-brand-secondary/30 bg-brand-secondary/20 text-brand-secondary';
    default:
      return 'border border-border bg-brand-muted text-foreground/80';
  }
}

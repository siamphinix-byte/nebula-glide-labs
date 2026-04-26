import { cn } from '../../lib/utils';

export const employeePageClass = 'mx-auto max-w-[1420px] space-y-6 pb-24 font-sans';

export const employeeTitleClass = 'text-2xl font-bold text-white';
export const employeeSubtitleClass = 'mt-1 text-sm text-white/60';

export const employeeInputClass =
  'h-11 w-full rounded-xl border border-white/10 bg-brand-bg/60 px-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-brand-primary/40 focus:ring-2 focus:ring-brand-primary/30';

export const employeeTextareaClass =
  'min-h-[110px] w-full rounded-xl border border-white/10 bg-brand-bg/60 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-brand-primary/40 focus:ring-2 focus:ring-brand-primary/30';

export const employeePrimaryButtonClass =
  'inline-flex items-center gap-2 rounded-xl border border-brand-primary/40 bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-primary/90';

export const employeeSecondaryButtonClass =
  'inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10';

export const employeeTableContainerClass = 'overflow-hidden rounded-2xl border border-white/10 bg-brand-surface';

export function employeeSectionClass(extra?: string) {
  return cn('rounded-2xl border border-white/10 bg-brand-surface p-5 shadow-2xl', extra);
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
      return 'border border-white/10 bg-white/5 text-white/80';
  }
}

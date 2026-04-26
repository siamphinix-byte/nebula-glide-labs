import { cn } from '../../lib/utils';
import type { DealStage, LeadStage } from './crmData';

export function crmSectionCardClassName(extra?: string) {
  return cn('rounded-xl border border-white/10 bg-brand-surface p-5', extra);
}

export function crmStagePillClassName(stage: LeadStage | DealStage) {
  if (stage === 'Won' || stage === 'Closed Won') return 'border-brand-teal/30 bg-brand-teal/20 text-brand-teal';
  if (stage === 'Lost' || stage === 'Closed Lost') return 'border-white/20 bg-white/10 text-white/80';
  if (stage === 'Negotiation' || stage === 'Proposal Sent' || stage === 'Proposal') return 'border-brand-primary/30 bg-brand-primary/20 text-brand-primary';
  if (stage === 'Qualified' || stage === 'Nurturing') return 'border-brand-secondary/30 bg-brand-secondary/20 text-brand-secondary';
  return 'border-white/20 bg-white/10 text-white/80';
}

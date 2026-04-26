export type LeadStage = 'New' | 'Qualified' | 'Proposal Sent' | 'Negotiation' | 'Won' | 'Lost';
export type DealStage = 'Qualification' | 'Nurturing' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost';

export interface Lead {
  id: string;
  company: string;
  contact: string;
  source: 'LinkedIn' | 'Referral' | 'Website' | 'Outbound' | 'Event';
  interest: string;
  stage: LeadStage;
  assignee: string;
  followUp: string;
  tasksDone: number;
  tasksTotal: number;
  potentialValue: number;
}

export interface Deal {
  id: string;
  name: string;
  account: string;
  pipeline: 'Marketing' | 'Sales' | 'Enterprise';
  stage: DealStage;
  value: number;
  probability: number;
  owner: string;
  nextStep: string;
  tasksDone: number;
  tasksTotal: number;
}

export const crmLeads: Lead[] = [
  {
    id: 'LD-1101', company: 'Nova Cybernetics', contact: 'Sarah Jenkins', source: 'LinkedIn', interest: 'Enterprise AI cloud migration',
    stage: 'Proposal Sent', assignee: 'Ariana Wilson', followUp: '2026-05-03', tasksDone: 2, tasksTotal: 3, potentialValue: 54000,
  },
  {
    id: 'LD-1102', company: 'Blue Arc Systems', contact: 'Marcus Hill', source: 'Referral', interest: 'CRM modernization rollout',
    stage: 'Qualified', assignee: 'Christopher Lee', followUp: '2026-05-01', tasksDone: 1, tasksTotal: 4, potentialValue: 36000,
  },
  {
    id: 'LD-1103', company: 'Zenith Retail', contact: 'Lina Foster', source: 'Website', interest: 'Multi-store analytics dashboard',
    stage: 'Negotiation', assignee: 'Sophia Martin', followUp: '2026-05-04', tasksDone: 4, tasksTotal: 5, potentialValue: 92000,
  },
  {
    id: 'LD-1104', company: 'Krypton Logistics', contact: 'Neil Cameron', source: 'Outbound', interest: 'Fleet cost optimization workflow',
    stage: 'New', assignee: 'Emma Johnson', followUp: '2026-05-02', tasksDone: 0, tasksTotal: 3, potentialValue: 28000,
  },
  {
    id: 'LD-1105', company: 'Horizon Health', contact: 'Alyssa Reed', source: 'Event', interest: 'Patient onboarding automation',
    stage: 'Won', assignee: 'Mila Davis', followUp: '2026-04-29', tasksDone: 3, tasksTotal: 3, potentialValue: 67000,
  },
];

export const crmDeals: Deal[] = [
  {
    id: 'DL-2101', name: 'Lead Generation Campaign', account: 'Northline Group', pipeline: 'Marketing', stage: 'Qualification',
    value: 38000, probability: 34, owner: 'Christopher Lee', nextStep: 'Discovery call', tasksDone: 0, tasksTotal: 4,
  },
  {
    id: 'DL-2102', name: 'Enterprise SaaS Integration', account: 'Atomix Tech', pipeline: 'Sales', stage: 'Nurturing',
    value: 125500, probability: 62, owner: 'Ariana Wilson', nextStep: 'Security review', tasksDone: 3, tasksTotal: 3,
  },
  {
    id: 'DL-2103', name: 'Account Expansion Program', account: 'Omni Finance', pipeline: 'Enterprise', stage: 'Proposal',
    value: 81400, probability: 58, owner: 'Sophia Martin', nextStep: 'Proposal sign-off', tasksDone: 2, tasksTotal: 5,
  },
  {
    id: 'DL-2104', name: 'Customer Success Revamp', account: 'Bright Labs', pipeline: 'Sales', stage: 'Negotiation',
    value: 46800, probability: 74, owner: 'Emma Johnson', nextStep: 'Pricing alignment', tasksDone: 4, tasksTotal: 6,
  },
  {
    id: 'DL-2105', name: 'Data Platform Migration', account: 'Verve Retail', pipeline: 'Enterprise', stage: 'Closed Won',
    value: 142000, probability: 100, owner: 'Mila Davis', nextStep: 'Implementation kickoff', tasksDone: 5, tasksTotal: 5,
  },
];

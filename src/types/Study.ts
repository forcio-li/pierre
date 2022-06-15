import { Company } from './Company';

export type Study = {
  id: number;
  company: Company;
  label: string;
  details: string[];
  tag: string;
  startDate: Date;
  endDate?: Date;
};

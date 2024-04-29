import { SkillType } from './skillTypes';

export type JobType = {
  id: string;
  description: string;
  name: string;
  skills: SkillType[];
  url: string;
  user_details: string;
};

export type JobFormType = {
  description: string;
  name: string;
  skills: SkillType[];
  url: string;
};

export type JobCreateType = {
  description: string;
  name: string;
  skill_ids: string[];
  url: string;
  user_details: string;
};

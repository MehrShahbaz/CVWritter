import { JobCreateType, JobUpdateType } from 'types/jobTypes';

import baseService from './baseService';

const urls = {
  job: {
    base: '/jobs',
    method: (id: string | number) => `/jobs/${id}`,
  },
  skill: {
    base: '/skills',
    method: (id: string | number) => `/skills/${id}`,
  },
};

export const jobActions = {
  getAllJobs: () => baseService.get(urls.job.base),
  createjob: (data: JobCreateType) => baseService.post(urls.job.base, { job: data }),
  getJob: (id: string) => baseService.get(`${urls.job.base}/${id}`),
  updateJob: (id: string, data: JobUpdateType) => baseService.patch(`${urls.job.base}/${id}`, { job: data }),
};

export const skillActions = {
  getAllSkills: () => baseService.get(urls.skill.base),
  createSkill: (data: string) => baseService.post(urls.skill.base, { skill: { name: data } }),
};

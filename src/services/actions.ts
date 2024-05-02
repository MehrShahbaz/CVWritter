import { JobCreateType, JobUpdateType } from 'types/jobTypes';
import { UserCreateType, UserUpdateType } from 'types/userTypes';

import baseService from './baseService';

const urls = {
  job: {
    base: (userId: string) => `/users/${userId}/jobs`,
    method: (userId: string, id: string) => `/users/${userId}/jobs/${id}`,
  },
  skill: {
    base: '/skills',
    method: (id: string | number) => `/skills/${id}`,
  },
  user: {
    base: '/users',
    method: (id: string | number) => `/users/${id}`,
  },
};

export const jobActions = {
  getAllJobs: (userId: string) => baseService.get(urls.job.base(userId)),
  createjob: (userId: string, data: JobCreateType) => baseService.post(urls.job.base(userId), { job: data }),
  getJob: (userId: string, id: string) => baseService.get(urls.job.method(userId, id)),
  updateJob: (userId: string, id: string, data: JobUpdateType) =>
    baseService.patch(urls.job.method(userId, id), { job: data }),
};

export const skillActions = {
  getAllSkills: () => baseService.get(urls.skill.base),
  createSkill: (data: string) => baseService.post(urls.skill.base, { skill: { name: data } }),
};

export const userActions = {
  getUser: (id: string) => baseService.get(`${urls.user.base}/${id}`),
  createUser: (data: UserCreateType) => baseService.post(urls.user.base, { user: data }),
  updateUser: (userId: string, data: UserUpdateType) => baseService.put(`${urls.user.base}/${userId}`, { user: data }),
};

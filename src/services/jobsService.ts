/* eslint-disable @typescript-eslint/no-explicit-any */
import { JobCreateType, JobType, JobUpdateType } from 'types/jobTypes';

import { errorNotification } from 'helpers/appHelper';

import { jobActions } from './actions';

export const createJob = async (userId: string, data: JobCreateType): Promise<JobType | null> => {
  try {
    const response = await jobActions.createjob(userId, data);
    const responseData: JobType = response.data;

    return responseData;
  } catch (e: any) {
    errorNotification(e, 5000);

    return null;
  }
};

export const getAllJobs = async (userId: string): Promise<JobType[]> => {
  try {
    const response = await jobActions.getAllJobs(userId);

    return response.data.jobs;
  } catch (err: any) {
    errorNotification(err, 5000);

    return [];
  }
};

export const getJob = async (userId: string, jobId: string): Promise<JobType | null> => {
  try {
    const response = await jobActions.getJob(userId, jobId);

    return response.data;
  } catch (err: any) {
    errorNotification(err, 5000);

    return null;
  }
};

export const updateJob = async (userId: string, jobId: string, data: JobUpdateType): Promise<JobType | null> => {
  try {
    const response = await jobActions.updateJob(userId, jobId, data);

    return response.data;
  } catch (err: any) {
    errorNotification(err, 5000);

    return null;
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { JobCreateType, JobType, JobUpdateType } from 'types/jobTypes';

import { errorNotification } from 'helpers/appHelper';

import { jobActions } from './actions';

export const createJob = async (data: JobCreateType): Promise<JobType | null> => {
  try {
    const response = await jobActions.createjob(data);
    const responseData: JobType = response.data;

    return responseData;
  } catch (e: any) {
    errorNotification(e, 5000);

    return null;
  }
};

export const getAllJobs = async (): Promise<JobType[]> => {
  try {
    const response = await jobActions.getAllJobs();

    return response.data.jobs;
  } catch (err: any) {
    errorNotification(err, 5000);

    return [];
  }
};

export const getJob = async (id: string): Promise<JobType | null> => {
  try {
    const response = await jobActions.getJob(id);

    return response.data;
  } catch (err: any) {
    errorNotification(err, 5000);

    return null;
  }
};

export const updateJob = async (id: string, data: JobUpdateType): Promise<JobType | null> => {
  try {
    const response = await jobActions.updateJob(id, data);

    return response.data;
  } catch (err: any) {
    errorNotification(err, 5000);

    return null;
  }
};

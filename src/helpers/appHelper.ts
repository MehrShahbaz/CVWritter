/* eslint-disable @typescript-eslint/no-explicit-any */
import { Store } from 'react-notifications-component';
import { User } from 'firebase/auth';
import { JobType } from 'types/jobTypes';
import { UserCreateType, UserDatatype } from 'types/userTypes';

import { emptyUserDetailsData } from 'constants/jobConstants';

export const isEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

export const chunkArray = (array: string[], n: number): string[][] => {
  const chunkedArray: string[][] = [];
  let index = 0;

  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + n));
    index += n;
  }

  const lastSubarray = chunkedArray[chunkedArray.length - 1];
  const lastSubarrayLength = lastSubarray.length;

  if (lastSubarrayLength < n) {
    const remainingEmptySlots = n - lastSubarrayLength;

    for (let i = 0; i < remainingEmptySlots; i++) {
      lastSubarray.push('');
    }
  }

  return chunkedArray;
};

export const convertDate = (startDate?: string, endDate?: string): string =>
  `${startDate?.length ? startDate : 'Start'} - ${endDate?.length ? endDate : 'End'}`;

export const createUserData = (user: User): UserCreateType => {
  const { personalDetails } = emptyUserDetailsData;
  const tempData = { ...personalDetails, email: user.email || '' };
  const data: UserDatatype = { ...emptyUserDetailsData, personalDetails: tempData };

  return {
    uid: user.uid,
    email: user.email,
    name: '',
    details: JSON.stringify(data),
  };
};

type ShowNotificationProps = {
  title: string;
  type: 'success' | 'danger' | 'info' | 'default' | 'warning';
  message: string;
  duration?: number;
};

export const showNotification = ({ title, type, message, duration }: ShowNotificationProps): void => {
  Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: duration ?? 2000,
      onScreen: true,
    },
  });
};

type ErrorType = {
  error: string;
  exception: string;
  status: number;
};

export const errorNotification = (err: any, duration?: number): void => {
  if (err.response) {
    const data: ErrorType = err.response.data;

    showNotification({ title: data.error || 'Error', type: 'danger', message: data.exception || 'Error', duration });
  } else {
    throw err;
  }
};

export const cvDataString = (jobDescription: string): string => `
You are a professional CV generator tasked with creating a beautifully crafted CV based on the provided layout and a specific job description. Your task is to generate the CV by incorporating the details of the individual's personal information, job details, education, work experience, projects, and skills, as well as extracting relevant skills from the provided job description.

The job description is : ${jobDescription}

Your task is to generate a CV based on this layout and the provided job description. Ensure that the CV includes all necessary details and is well-structured and visually appealing

Give me a JSON String to copy as a response
`;

export const getJobsForToday = (jobTypes: JobType[]): number => {
  const today = new Date();

  today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for accurate comparison

  const data = jobTypes.filter((job) => {
    const createdAtDate = new Date(job.created_at * 1000); // Convert timestamp to milliseconds

    createdAtDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for accurate comparison

    return createdAtDate.getTime() === today.getTime();
  });

  return data.length;
};

export const appliedToday = (createdAt: number): boolean => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  const createdAtDate = new Date(createdAt * 1000);

  createdAtDate.setHours(0, 0, 0, 0);

  return createdAtDate.getTime() === today.getTime();
};

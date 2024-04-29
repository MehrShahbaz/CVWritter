/* eslint-disable @typescript-eslint/no-explicit-any */
import { Store } from 'react-notifications-component';
import { User } from 'firebase/auth';
import { GoogleUserCreateType } from 'types/userTypes';

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

  // Add empty strings to the last subarray to make its length equal to n
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

export const convertDate = (startDate?: string, endDate?: string): string => `${startDate ?? ''} - ${endDate ?? ''}`;

export const createUserData = (user: User): GoogleUserCreateType => ({
  email: user.email,
  emailVerified: user.emailVerified,
  displayName: user.displayName,
  photoURL: user.photoURL,
});

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

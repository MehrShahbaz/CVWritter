/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserCreateType, UserType, UserUpdateType } from 'types/userTypes';

import { errorNotification } from 'helpers/appHelper';

import { userActions } from './actions';

export const createUser = async (args: UserCreateType): Promise<UserCreateType | null> => {
  try {
    const response = await userActions.createUser(args);
    const responseData: UserCreateType = response.data;

    return responseData;
  } catch (e: any) {
    errorNotification(e, 5000);

    return null;
  }
};

export const getUser = async (uid: string): Promise<UserType | null> => {
  try {
    const response = await userActions.getUser(uid);
    const responseData: UserType = response.data;

    return responseData;
  } catch (e: any) {
    errorNotification(e, 5000);

    return null;
  }
};

export const updateUser = async (id: string, data: UserUpdateType): Promise<UserType | null> => {
  try {
    const response = await userActions.updateUser(id, data);
    const responseData: UserType = response.data;

    return responseData;
  } catch (e: any) {
    errorNotification(e, 5000);

    return null;
  }
};

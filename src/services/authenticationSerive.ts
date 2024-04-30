/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseAuth } from 'firebaseConfig/firebaseAuth';
import { LoginType } from 'types/loginTypes';
import { UserCreateType, UserType } from 'types/userTypes';

import { createUserData, errorNotification } from 'helpers/appHelper';
import { getFriendlyMessageFromFirebaseErrorCode } from 'helpers/firebaseHelper';

import { userActions } from './actions';

const provider = new GoogleAuthProvider();

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

export const loginWithEmail = async (args: { type: LoginType; email: string; password: string }): Promise<string> => {
  try {
    if (args.type === 'sign-up') {
      const { user } = await createUserWithEmailAndPassword(firebaseAuth, args.email, args.password);

      createUser(createUserData(user));
    }

    const response = await signInWithEmailAndPassword(firebaseAuth, args.email, args.password);

    return response.user.uid;
  } catch (e: any) {
    console.log(getFriendlyMessageFromFirebaseErrorCode(e));

    return '';
  }
};

export const logout = async (): Promise<void> => {
  try {
    await signOut(firebaseAuth);
  } catch (e: any) {
    console.log(getFriendlyMessageFromFirebaseErrorCode(e));
  }
};

export const loginWithGoogle = async (): Promise<void> => {
  try {
    const result = await signInWithPopup(firebaseAuth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;

    console.log(token);
    console.log({ user });
    console.log({ result });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

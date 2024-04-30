/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseAuth } from 'firebaseConfig/firebaseAuth';
import { LoginType } from 'types/loginTypes';

import { createUserData } from 'helpers/appHelper';
import { getFriendlyMessageFromFirebaseErrorCode } from 'helpers/firebaseHelper';

import { createUser } from './userService';

const provider = new GoogleAuthProvider();

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

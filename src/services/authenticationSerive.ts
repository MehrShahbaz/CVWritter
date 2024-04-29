/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { firebaseAuth } from 'firebaseConfig/firebaseAuth';
import { firebaseDb } from 'firebaseConfig/firebaseDb';
import { GoogleUserCreateType } from 'types/userTypes';

import { createUserData, isEmail } from 'helpers/appHelper';
import { getFriendlyMessageFromFirebaseErrorCode } from 'helpers/firebaseHelper';

const provider = new GoogleAuthProvider();

export const createUser = async (args: GoogleUserCreateType): Promise<void> => {
  try {
    const docRef = await addDoc(collection(firebaseDb, 'users'), args);

    console.log('Document written with ID: ', docRef.id);
  } catch (e: any) {
    console.log(getFriendlyMessageFromFirebaseErrorCode(e));
  }
};

export const loginWithGoogle = async (): Promise<GoogleUserCreateType> => {
  try {
    const result = await signInWithPopup(firebaseAuth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    const data = createUserData(user);

    console.log(token);
    await createUser(data);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loginWithEmail = async (args: {
  type: 'login' | 'sign-up';
  email: string;
  password: string;
}): Promise<void> => {
  try {
    if (!isEmail(args.email)) {
      console.log('Email Errro');

      return;
    }

    if (args.password.length < 6) {
      console.log('Password Error');

      return;
    }

    if (args.type === 'sign-up') {
      const { user } = await createUserWithEmailAndPassword(firebaseAuth, args.email, args.password);

      await createUser(createUserData(user));

      console.log(user);
    }

    await signInWithEmailAndPassword(firebaseAuth, args.email, args.password);
  } catch (e: any) {
    console.log(getFriendlyMessageFromFirebaseErrorCode(e));
  }
};

export const logout = async (): Promise<void> => {
  try {
    await signOut(firebaseAuth);
  } catch (e: any) {
    console.log(getFriendlyMessageFromFirebaseErrorCode(e));
  }
};

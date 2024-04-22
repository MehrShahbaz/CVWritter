/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { isEmail } from 'helpers/appHelper';
import { getFriendlyMessageFromFirebaseErrorCode } from 'helpers/firebaseHelper';

import { firebaseAuth } from '../../firebase/firebaseAuth';

import { showToast } from './toastSlice';

export const loginWithEmail = createAsyncThunk(
  'login',
  async (args: { type: 'login' | 'sign-up'; email: string; password: string }, { dispatch }) => {
    try {
      if (!isEmail(args.email)) {
        dispatch(
          showToast({
            message: 'Enter a valid email',
            type: 'info',
          })
        );

        return;
      }

      if (args.password.length < 6) {
        dispatch(
          showToast({
            message: 'Password should be atleast 6 characters',
            type: 'info',
          })
        );

        return;
      }

      if (args.type === 'sign-up') {
        await createUserWithEmailAndPassword(firebaseAuth, args.email, args.password);
      }

      await signInWithEmailAndPassword(firebaseAuth, args.email, args.password);
    } catch (e: any) {
      dispatch(
        showToast({
          message: getFriendlyMessageFromFirebaseErrorCode(e.code),
          type: 'error',
        })
      );
    }
  }
);

export const logout = createAsyncThunk('logout', async (_, { dispatch }) => {
  try {
    await signOut(firebaseAuth);
  } catch (e: any) {
    dispatch(
      showToast({
        message: getFriendlyMessageFromFirebaseErrorCode(e.code),
        type: 'error',
      })
    );
  }
});

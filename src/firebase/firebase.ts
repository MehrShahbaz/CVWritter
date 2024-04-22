import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

import { firebaseKeys } from 'hooks/envHook';
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: firebaseKeys.apiKey,
  authDomain: firebaseKeys.authDomain,
  projectId: firebaseKeys.projectId,
  storageBucket: firebaseKeys.storageBucket,
  messagingSenderId: firebaseKeys.messagingSenderId,
  appId: firebaseKeys.appId,
  measurementId: firebaseKeys.measurementId,
};

export const firebaseApp = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firebaseApp);

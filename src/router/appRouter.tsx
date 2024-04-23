/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useAuthState } from 'react-firebase-hooks/auth';

// import { firebaseAuth } from '../firebase/firebaseAuth';

import { appRoutes } from './appRoutes/appRoutes';
// import { authRoutes } from './authRoutes/authRoutes';

export const useRouter = (): any =>
  // const [user] = useAuthState(firebaseAuth);

  // if (user) {
  //   return appRoutes;
  // }

  appRoutes;

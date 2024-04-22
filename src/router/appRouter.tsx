/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';

import { selectIsAuthenticated } from '../redux/selectors/authSelector';

import { appRoutes } from './appRoutes/appRoutes';
import { authRoutes } from './authRoutes/authRoutes';

export const useRouter = (): any => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    return appRoutes;
  }

  return authRoutes;
};

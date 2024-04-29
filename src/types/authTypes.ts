import { ReactNode } from 'react';

export type AuthSliceState = {
  isAuthenticated: boolean;
  isAuthLoading: boolean;
};

export type ContextProviderProps = {
  children: ReactNode;
};

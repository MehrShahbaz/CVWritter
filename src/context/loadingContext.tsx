import { createContext, useContext, useState } from 'react';
import { ContextProviderProps } from 'types/authTypes';

interface LoadingContextType {
  isLoading: boolean | null;
  setIsLoading: (data: boolean | null) => void;
}

const LoadingContext = createContext<LoadingContextType | null>(null);

export const LoadingProvider = ({ children }: ContextProviderProps): JSX.Element => {
  const [isLoading, setLoading] = useState<boolean | null>(null);
  const setIsLoading = (willLoad: boolean | null): void => {
    setLoading(willLoad);
  };

  return <LoadingContext.Provider value={{ isLoading, setIsLoading }}>{children}</LoadingContext.Provider>;
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useLoading must be used within a UserProvider');
  }

  return context;
};

import { createContext, ReactNode, useContext, useState } from 'react';

interface LoadingContextType {
  isLoading: boolean | null;
  setIsLoading: (data: boolean | null) => void;
}

const LoadingContext = createContext<LoadingContextType | null>(null);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps): JSX.Element => {
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

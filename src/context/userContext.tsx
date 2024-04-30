import { createContext, useContext, useState } from 'react';
import { ContextProviderProps } from 'types/authTypes';
import { UserType } from 'types/userTypes';

interface UserContextType {
  user: UserType | null;
  isAuthenticated: boolean;
  setIsAuthenticated: (data: boolean) => void;
  setUser: (data: UserType | null) => void;
  unSetUser: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: ContextProviderProps): JSX.Element => {
  const [user, setUserState] = useState<UserType | null>(null);
  const [isAuthenticated, setIsAuthenticatedState] = useState<boolean>(false);
  const setUser = (data: UserType | null): void => {
    setUserState(data);
    setIsAuthenticatedState(true);
  };
  const unSetUser = (): void => {
    setUserState(null);
    setIsAuthenticatedState(false);
  };
  const setIsAuthenticated = (isAllowed: boolean): void => {
    setIsAuthenticatedState(isAllowed);
  };

  return (
    <UserContext.Provider value={{ user, setUser, unSetUser, setIsAuthenticated, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

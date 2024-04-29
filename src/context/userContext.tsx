import { createContext, ReactNode, useContext, useState } from 'react';

export type UserCreateType = {
  email: string;
  emailVerified: boolean;
  displayName: string;
  photoURL?: string;
};

interface UserContextType {
  user: UserCreateType | null;
  setUser: (data: UserCreateType | null) => void;
}

const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps): JSX.Element => {
  const [user, setUserState] = useState<UserCreateType | null>(null);
  const setUser = (data: UserCreateType | null): void => {
    setUserState(data);
  };

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

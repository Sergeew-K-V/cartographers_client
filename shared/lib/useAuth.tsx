import { createContext, useContext } from 'react';

interface IAuthContext {
  token: string;
  login: (token: string, userId: string) => void;
  logout: () => void;
  userId: string | null;
}

export const AuthContext = createContext<IAuthContext>({
  token: '',
  userId: null,
  login: () => undefined,
  logout: () => undefined,
});

export const useAuth = () => useContext(AuthContext);

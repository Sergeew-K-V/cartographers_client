import { createContext, useContext } from 'react';

interface IAuthContext {
  token: string;
  getToken: () => string;
  login: (token: string, userId: string) => void;
  logout: () => void;
  userId: string | null;
}

export const AuthContext = createContext<IAuthContext>({
  token: '',
  userId: null,
  getToken: () => '',
  login: () => undefined,
  logout: () => undefined,
});

export const useAuth = () => useContext(AuthContext);

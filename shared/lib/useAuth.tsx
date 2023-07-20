import { createContext, useContext } from 'react';

interface IAuthContext {
  getToken: () => string;
  getUserId: () => string;
  login: (token: string, userId: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  getToken: () => '',
  getUserId: () => '',
  login: () => undefined,
  logout: () => undefined,
});

export const useAuth = () => useContext(AuthContext);

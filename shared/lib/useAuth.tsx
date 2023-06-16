'use client';

import { useRouter } from 'next/navigation';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

interface IAuthContext {
  token: string;
  login: (token: string, userId: string) => void;
  logout: () => void;
  userId: string | null;
}

const STORAGE_NAME = 'Cartographers-token';
const STORAGE_DATA =
  JSON.parse(localStorage.getItem(STORAGE_NAME) as string) || null;

const AuthContext = createContext<IAuthContext>({
  token: '',
  userId: null,
  login: () => undefined,
  logout: () => undefined,
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();
  const [token, setToken] = useState(
    STORAGE_DATA?.token ? STORAGE_DATA?.token : null
  );
  const [userId, setUserId] = useState<string | null>(
    STORAGE_DATA?.user ? STORAGE_DATA?.user : null
  );

  const login = useCallback(
    (token: string, userId: string) => {
      setToken(token);
      setUserId(userId);
      push('/playground');

      localStorage.setItem(
        STORAGE_NAME,
        JSON.stringify({
          userId,
          token,
        })
      );
    },
    [push]
  );

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    push('/auth/login');

    localStorage.removeItem(STORAGE_NAME);
  }, [push]);

  return (
    <AuthContext.Provider value={{ login, logout, token, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

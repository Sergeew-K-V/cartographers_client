'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useState, useCallback } from 'react';
import { AuthContext } from '@/shared/lib';

const STORAGE_NAME = 'Cartographers-token';
const STORAGE_DATA =
  typeof window !== 'undefined'
    ? JSON.parse(window.localStorage.getItem(STORAGE_NAME) as string)
    : null;

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();
  const [token, setToken] = useState(
    STORAGE_DATA?.token ? STORAGE_DATA?.token : null
  );
  const [userId, setUserId] = useState<string | null>(
    STORAGE_DATA?.user ? STORAGE_DATA?.user : null
  );

  const getToken = () => {
    const user = window.localStorage.getItem(STORAGE_NAME);
    const token = JSON.parse(user as string)?.token;
    return token;
  };

  const login = useCallback(
    (token: string, userId: string) => {
      setToken(token);
      setUserId(userId);
      push('/hub');

      window.localStorage.setItem(
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

    window.localStorage.removeItem(STORAGE_NAME);
  }, [push]);

  return (
    <AuthContext.Provider value={{ login, logout, token, userId, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

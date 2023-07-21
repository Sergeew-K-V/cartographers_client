'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useCallback } from 'react';
import { AuthContext } from '@/shared/lib';

const STORAGE_NAME = 'Cartographers-token';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();

  const getUserId = () => {
    const token = JSON.parse(
      window?.localStorage.getItem(STORAGE_NAME) as string
    )?.userId;
    return token;
  };

  const getToken = () => {
    const token = JSON.parse(
      window?.localStorage.getItem(STORAGE_NAME) as string
    )?.token;
    return token;
  };

  const login = useCallback(
    (token: string, userId: string) => {
      window.localStorage.setItem(
        STORAGE_NAME,
        JSON.stringify({
          userId,
          token,
        })
      );
      push('/hub');
    },
    [push]
  );

  const logout = useCallback(() => {
    push('/auth/login');
    window.localStorage.removeItem(STORAGE_NAME);
  }, [push]);

  return (
    <AuthContext.Provider value={{ login, logout, getToken, getUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

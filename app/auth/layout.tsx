'use client';

import { ReactNode, useEffect } from 'react';
import { useSocket } from '@/shared/lib';
import { AlertList } from '@/shared/ui';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const { socket } = useSocket();

  useEffect(() => {
    socket.disconnect();
  }, []);

  return (
    <>
      <main className="flex items-center min-h-screen p-6 bg-secondary-50">
        {children}
      </main>
      <AlertList />
    </>
  );
};

export default AuthLayout;

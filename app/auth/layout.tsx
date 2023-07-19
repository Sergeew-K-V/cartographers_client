import { ReactNode } from 'react';
import { AlertList } from '@/shared/ui';

const AuthLayout = ({ children }: { children: ReactNode }) => {
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

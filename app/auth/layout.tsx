import { ReactNode } from 'react';
import { AlertList } from '@/shared/ui';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <AlertList />
    </>
  );
};

export default AuthLayout;

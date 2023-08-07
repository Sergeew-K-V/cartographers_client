'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { AlertList } from '@/shared/ui';

function HubLayout({ children }: { children: ReactNode }): JSX.Element {
  const path = usePathname();

  return (
    <>
      <main
        className={
          'p-6 bg-secondary-50 min-h-screen ' +
          (path.includes('/hub/playground') && 'bg-wood-background')
        }
      >
        {children}
      </main>
      <AlertList />
    </>
  );
}

export default HubLayout;

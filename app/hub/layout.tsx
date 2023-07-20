'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { Navbar } from '@/features/hub';
import { AlertList } from '@/shared/ui';
import { ImageCustom } from '@/shared/ui';
import { SocketProvider } from './providers';

function HubLayout({ children }: { children: ReactNode }): JSX.Element {
  const path = usePathname();

  return (
    <SocketProvider>
      <div
        className={
          'w-full z-40 ' + (path === '/hub/playground' ? 'absolute' : ' ')
        }
      >
        <nav className="border-secondary-200 ">
          <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center">
              <ImageCustom
                src="/images/seasons/summer.jpg"
                className="w-8 h-8 mr-3 rounded-full"
                width={100}
                height={100}
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Cartographers
              </span>
            </div>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <Navbar />
            </div>
          </div>
        </nav>
      </div>
      <main
        className={
          'p-6 bg-secondary-50 ' +
          (path !== '/hub/playground'
            ? 'min-h-[calc(100vh-72px)]'
            : 'min-h-screen')
        }
      >
        {children}
      </main>
      <AlertList />
    </SocketProvider>
  );
}

export default HubLayout;

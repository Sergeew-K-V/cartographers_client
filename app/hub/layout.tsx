'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
// import { Navbar } from '@/features/hub';
import { AlertList } from '@/shared/ui';
// import { ImageCustom } from '@/shared/ui';

function HubLayout({ children }: { children: ReactNode }): JSX.Element {
  const path = usePathname();

  return (
    <>
      {/* <div
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
      </div> */}
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

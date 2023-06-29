import { ReactNode } from 'react';
import { Navbar } from '@/features/hub';
import { AlertList } from '@/shared/ui';
import { ImageCustom } from '@/shared/ui';

function HubLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <>
      <div className="absolute w-full z-40">
        <nav className="border-secondary-200 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
      {children}
      <AlertList />
    </>
  );
}

export default HubLayout;

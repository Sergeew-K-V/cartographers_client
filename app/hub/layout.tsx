'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { LinkButton } from '@/shared/ui';

function PlaygroundLayout({ children }: { children: ReactNode }): JSX.Element {
  const pathname = usePathname();
  const isActiveLink = (pathname: string, matchedPath: string) => {
    return pathname === matchedPath
      ? 'md:text-primary-700'
      : 'text-secondary-900';
  };

  return (
    <>
      <div>
        <nav className="bg-white border-secondary-200 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center">
              <Image
                src="/images/seasons/summer.jpeg"
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
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-secondary-100 rounded-lg bg-secondary-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                <li>
                  <LinkButton
                    href="/hub"
                    className={
                      'block py-2 pl-3 pr-4rounded md:bg-transparent md:p-0' +
                      ' ' +
                      `${isActiveLink(pathname, '/hub')}`
                    }
                  >
                    Hub
                  </LinkButton>
                </li>
                <li>
                  <LinkButton
                    href="/hub/playground"
                    className={
                      'block py-2 pl-3 pr-4rounded md:bg-transparent md:p-0' +
                      ' ' +
                      `${isActiveLink(pathname, '/hub/playground')}`
                    }
                  >
                    Playground
                  </LinkButton>
                </li>
                {/* <li>
                  <LinkButton
                    href="/auth/login"
                    className="block py-2 pl-3 pr-4 text-secondary-900 rounded hover:bg-secondary-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0"
                  >
                    Login
                  </LinkButton>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {children}
    </>
  );
}

export default PlaygroundLayout;

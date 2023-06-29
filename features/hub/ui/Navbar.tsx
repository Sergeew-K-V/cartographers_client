'use client';

import { usePathname } from 'next/navigation';
import { useAuth } from '@/shared/lib';
import { LinkButton, Button } from '@/shared/ui';

const Navbar = () => {
  const pathname = usePathname();
  const { logout } = useAuth();
  const isActiveLink = (pathname: string, matchedPath: string) => {
    return pathname === matchedPath
      ? 'md:text-primary-700'
      : 'text-secondary-900';
  };

  return (
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-secondary-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
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
      <li>
        <Button className="primary-button" onClick={() => logout()}>
          Logout
        </Button>
      </li>
    </ul>
  );
};

export default Navbar;

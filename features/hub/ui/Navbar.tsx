'use client';

import { usePathname } from 'next/navigation';
import { useAuth } from '@/shared/lib';
import { LinkButton, Button } from '@/shared/ui';
import NavbarLinkList from '../config';

const Navbar = () => {
  const pathname = usePathname();
  const { logout } = useAuth();
  const isActiveLink = (pathname: string, matchedPath: string) => {
    return pathname === matchedPath
      ? 'md:text-primary-700'
      : 'text-secondary-900';
  };

  return (
    <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-secondary-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
      {NavbarLinkList.map((link) => (
        <li key={link.href}>
          <LinkButton
            href={`/${link.href}`}
            className={
              'navbar-link' + ' ' + `${isActiveLink(pathname, `/${link.href}`)}`
            }
          >
            {link.title}
          </LinkButton>
        </li>
      ))}
      <li>
        <Button className="primary-button" onClick={() => logout()}>
          Logout
        </Button>
      </li>
    </ul>
  );
};

export default Navbar;

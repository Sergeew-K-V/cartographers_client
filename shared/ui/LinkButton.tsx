import Link from 'next/link';
import { ReactNode } from 'react';

interface LinkButtonProps {
  href: string;
  className?: string;
  children: ReactNode;
}

const LinkButton = ({
  children,
  href,
  className,
}: LinkButtonProps): JSX.Element => {
  return (
    <Link
      href={href}
      className={`text-primary-600 py-1 hover:underline ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;

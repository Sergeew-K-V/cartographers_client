import { ReactNode } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.FormEvent | React.MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}

const Button = ({
  children,
  onClick,
  className,
  disabled,
  type,
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type ? type : 'button'}
      className={
        'text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm lg:w-full sm:w-auto px-5 py-2.5 text-center' +
        ' ' +
        (disabled
          ? 'bg-secondary-700 hover:bg-secondary-700 focus:ring-secondary-700'
          : ' ') +
        className
      }
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

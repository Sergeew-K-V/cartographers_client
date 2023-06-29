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
        className +
        ' ' +
        (disabled
          ? 'bg-secondary-700 hover:bg-secondary-700 focus:ring-secondary-700'
          : ' ')
      }
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

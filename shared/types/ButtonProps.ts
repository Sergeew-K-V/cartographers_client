import { FormEvent, ReactNode } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick: (event: FormEvent | React.MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}

export default ButtonProps;

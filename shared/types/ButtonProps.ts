import { ReactNode } from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  className: string;
  children: ReactNode;
}

export default ButtonProps;

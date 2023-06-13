import { ButtonProps } from '../types';

const Button = ({ children, className, type }: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      className={
        'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center' +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;

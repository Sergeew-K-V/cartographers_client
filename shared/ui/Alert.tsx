import { MouseEventHandler } from 'react';

interface AlertProps {
  type: 'danger' | 'success';
  close: MouseEventHandler<SVGSVGElement>;
  text: string;
}

const Alert = ({
  type,
  close,
  text = 'Something seriously bad happened.',
}: AlertProps) => {
  return (
    <div
      className={`border ${
        type === 'danger'
          ? 'bg-danger-100 border-danger-400 text-danger-700'
          : 'bg-success-100 border-success-400 text-success-700'
      } px-2 py-1 m-2 rounded flex items-center justify-between`}
      role="alert"
    >
      <span className="block sm:inline">{text}</span>
      <span className="px-4 py-3">
        <svg
          className={`fill-current h-6 w-6 ${
            type === 'danger' ? 'text-danger-500' : 'text-success-500'
          }`}
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={close}
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
};

export default Alert;

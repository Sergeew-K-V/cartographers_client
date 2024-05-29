'use client';

import { useState } from 'react';

interface InputProps {
  labelText: string;
  name?: string;
  value?: string | null;
  handleChange:
    | ((value: string, fieldName?: string) => void)
    | ((value: string) => void);
  className?: string;
  type?: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  id?: string;
}

const Input = ({
  labelText,
  name,
  handleChange,
  value,
  disabled,
  readonly,
  required,
  type,
  className,
  id,
}: InputProps): JSX.Element => {
  const [focus, setFocus] = useState(false);

  return (
    <div className="relative pb-6">
      <input
        id={id?.toString()}
        type={type ? type : 'text'}
        value={value ? value : ''}
        onChange={(event) => handleChange(event.target.value, name?.toString())}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={
          'bg-secondary-50 outline-none border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] ' +
          (className ? className : '')
        }
      />
      <label
        htmlFor={id?.toString()}
        className={
          'absolute z-50 bg-inherit block text-sm font-medium text-secondary-900 top-0 transition-all duration-300' +
          ' ' +
          (value || focus
            ? '-translate-y-[10px] input-label-pseudo-label after:w-[115%]'
            : 'translate-y-[11px] input-label-pseudo-label after:w-none')
        }
      >
        {labelText}
      </label>
    </div>
  );
};

export default Input;

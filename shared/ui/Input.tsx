import { InputProps } from '../types';

const Input = ({
  labelText,
  name,
  handleChange,
  placeholder,
  value,
  disabled,
  readonly,
  required,
  type,
  className,
}: InputProps): JSX.Element => {
  return (
    <div className="mb-6">
      <label
        htmlFor={name.toString()}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {labelText}
      </label>
      <input
        id={name.toString()}
        type={type ? type : 'text'}
        value={value ? value : ''}
        onChange={(event) => handleChange(event.target.value, name.toString())}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        className={
          'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' +
          (className ? className : '')
        }
      />
    </div>
  );
};

export default Input;

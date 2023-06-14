interface InputProps {
  labelText: string;
  placeholder: string;
  name: string;
  value?: string | null;
  handleChange: (value: string | number, fieldName: string) => void;
  className?: string;
  type?: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
}

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
          'bg-primary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] ' +
          (className ? className : '')
        }
      />
    </div>
  );
};

export default Input;

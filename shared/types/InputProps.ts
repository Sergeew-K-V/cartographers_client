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

export default InputProps;

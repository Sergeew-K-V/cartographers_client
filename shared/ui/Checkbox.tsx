interface CheckboxProps {
  labelText: string;
  className?: string;
}

const Checkbox = ({ labelText, className }: CheckboxProps) => {
  return (
    <>
      <label className="flex items-center">
        <input
          type="checkbox"
          className={`text-primary-600 form-checkbox focus:border-primary-400 focus:outline-none focus:shadow-outline-primary ${className}`}
        />
        <span className="ml-2 text-sm font-medium text-secondary-900">
          {labelText}
        </span>
      </label>
    </>
  );
};

export default Checkbox;

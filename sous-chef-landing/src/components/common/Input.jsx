/**
 * Reusable Input component for forms
 */
const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
  disabled = false,
  error = false,
  className = '',
  ariaLabel,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      required={required}
      disabled={disabled}
      className={`input-field ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''} ${className}`}
      aria-label={ariaLabel}
      aria-invalid={error}
    />
  );
};

export default Input;

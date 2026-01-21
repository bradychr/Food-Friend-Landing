/**
 * Reusable Button component with primary and secondary variants
 */
const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className = '',
  ariaLabel,
}) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${className}`}
      aria-label={ariaLabel}
      aria-busy={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

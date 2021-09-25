import './style.scss';

function TextArea({
  className,
  placeholder,
  name,
  isDisabled,
  value,
  type,
  error,
  register,
}) {
  return (
    <div>
      <textarea
        type={type}
        className={`TextArea ${className || ''}`}
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        {...register(name)}
      />
      {error && <p className="TextArea_errorMessage">{error}</p>}
    </div>
  );
}

export default TextArea;

import './style.scss';

function Input({ placeholder, name, isDisabled, value, type, error, register }) {
  return (
    <div>
      <input
        type={type}
        className="Input"
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        {...register(name)}
      />
      {error && <p className="Input_errorMessage">{error}</p>}
    </div>
  );
}

export default Input;

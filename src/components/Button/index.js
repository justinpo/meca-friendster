import './style.scss';

function Button({ children, isDisabled, type }) {
  return (
    <button className="Button" disabled={isDisabled} type={type}>
      {children}
    </button>
  );
}

export default Button;

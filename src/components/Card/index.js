import './style.scss';

function Card({ children, className, label }) {
  return (
    <div className={`Card ${className || ''}`}>
      {label && (
        <div className="Card_head">
          <p className="Card_label">{label}</p>
        </div>
      )}
      <div className="Card_body">{children}</div>
    </div>
  );
}

export default Card;

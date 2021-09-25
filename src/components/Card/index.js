import './style.scss';

function Card({ children, className, label }) {
  return (
    <div className={`Card ${className || ''}`}>
      <div className="Card_head">
        <p className="Card_label">{label}</p>
      </div>
      {children}
    </div>
  );
}

export default Card;

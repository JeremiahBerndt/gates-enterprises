import './HeaderButton.css';

export default function HeaderButton({ text, icon, handleClick }) {
  return (
    <button
      className={icon ? 'low-button' : 'high-button'}
      onClick={handleClick}
    >
      {icon && <img src={icon} alt={text} />}
      {text}
    </button>
  );
}

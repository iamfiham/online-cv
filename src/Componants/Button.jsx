import "./assets/Components.css";
function Button({ style, children, onClick }) {
  return (
    <button className="Button" style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

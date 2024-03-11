import "./assets/Components.scss";
function Button({ style, children, onClick }) {
  return (
    <button className="Button" style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

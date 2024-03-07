import "./assets/Components.css";
function Button({ style, children }) {
  return (
    <button className="Button" style={style}>
      {children}
    </button>
  );
}

export default Button;

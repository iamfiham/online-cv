import "./assets/Components.scss";

function LinkCard({ children, tag, onClick }) {
  return (
    <div className="link-card">
      <h5>{tag}</h5>
      <a href={onClick} target="_blank">
        <h3>{children}</h3>
      </a>
    </div>
  );
}

export default LinkCard;

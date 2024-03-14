import "./assets/Components.scss";
import { forwardRef } from "react";

const ListMenu = forwardRef(function ListMenu({ positionClass, onClick }, ref) {
  return (
    <div className={`list-menu ${positionClass} `} ref={ref}>
      <li onClick={onClick.email}>Email</li>
      <li onClick={onClick.whatsapp}>Massage</li>
    </div>
  );
});

export default ListMenu;

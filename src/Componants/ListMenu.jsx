import "./assets/Components.scss";
import { forwardRef } from "react";

const ListMenu = forwardRef(function ListMenu({ positionClass, clickAction }, ref) {
  return (
    <div className={`list-menu ${positionClass} `} ref={ref}>
      <li onClick={clickAction}>Email</li>
      <li>Massage</li>
    </div>
  );
});

export default ListMenu;

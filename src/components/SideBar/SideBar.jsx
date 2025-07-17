import avatar from "../../images/Ellipse.18.png";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__header">
        <img className="sidebar__avatar" src={avatar} alt="Sidebar avatar" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </div>
  );
}

export default SideBar;

import "./SideBar.css";
import Header from "../Header/Header";
import avatarDefault from "../../assets/Ellipse 18.png";

function SideBar() {
  const username = "Terrence Tegegne";
  const avatar = avatarDefault;

  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <div className="sidebar__username">{username}</div>
        {avatar ? (
          <img src={avatar} alt="User Avatar" className="sidebar__avatar" />
        ) : (
          <span className="sidebar__avatar sidebar__avatar-name">
            {username?.charAt(0).toUpperCase() || ""}
          </span>
        )}
      </div>
    </aside>
  );
}

export default SideBar;

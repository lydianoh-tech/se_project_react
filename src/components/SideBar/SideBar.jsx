import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import avatar from "../../assets/Ellipse 18.png";

function SideBar() {
  const user = {
    link: (
      <Link to="/">
        name: "Terrence Tegegne", avatar: "/src/assets/Ellipse 18.png", //
        Direct path
      </Link>
    ),
  };

  return (
    <div className="sidebar">
      <div className="sidebar__user">
        <Link to="/">
          <img src={user.avatar} alt={user.name} className="sidebar__avatar" />
          <p className="sidebar__name">{user.name}</p>
        </Link>
      </div>
    </div>
  );
}
export default SideBar;

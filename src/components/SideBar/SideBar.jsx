import React from 'react';
import { Link } from "react-router-dom";
import './SideBar.css';
import avatar from '../../assets/Ellipse 18.png';


function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="User Avatar" />
      <p className="sidebar__username"></p>
      <nav className="sidebar__nav">
        <Link className="sidebar__nav-link" to="/">Home</Link>
        <Link className="sidebar__nav-link" to="/profile">Profile</Link>
      </nav>

    </div>
  );
}
export default SideBar;

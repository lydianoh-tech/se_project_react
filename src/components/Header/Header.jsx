
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import CurrentTemperatureUnitContext from "../CurrentTemperatureUnitContext/CurrentTemperatureUnitContext.jsx";

import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import logo from '/src/assets/Logo.svg';
import userAvatar from '/src/assets/Ellipse 18.png';

function Header(props) {
    const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
    
    const avatar = userAvatar;
    const avatarDefault = userAvatar;
    const header__user_name = "Henry";
    
    return (
        <header className="header">
            <Link to="/" className="header__logo-link">
                <img src={logo} alt="Logo" className="header__logo"/>
            </Link>
            <p className="header__date-and-location">
                {currentDate}, {props.weatherData.city}
            </p>
            <div className="header__elements">
                <ToggleSwitch /> {/* No props needed! */}
                
                <button
                    onClick={props.handleAddClick}
                    type="button"
                    className="header__add-clothes-btn"
                >
                    + Add clothes
                </button>
                <Link to="/profile">
                    <p className="header__username">Terrence Tegegne</p>
                </Link>
            </div>
            
            {avatar ? (
                <img src={avatar || avatarDefault} alt="User Avatar" className="header__avatar"
                 />
                        ) : (
                            <span className="header__avatar header__avatar-name">
                                {header__user_name ? header__user_name.charAt(0).toUpperCase() : 'U'}
                            </span>
                        )}


            
        </header>
    );
};

export default Header;
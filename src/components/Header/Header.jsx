
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import currentTemperatureUnitContext from "../currentTemperatureUnit/currentTemperatureUnit";

import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import logo from '/src/assets/logo.svg';
import userAvatar from '/src/assets/Ellipse 18.png';
import user__name from '../SideBar/SideBar.jsx';




function Header(props) {
    const currentTemperatureUnit = useContext(currentTemperatureUnitContext);
    const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
    
    const avatar = userAvatar;
    const avatarDefault = userAvatar;

    return (
        <header className="header">
            
                <Link to="/" className="header__logo-link">
                    <img src={logo} alt="Logo" className="header__logo"/>
                </Link>
                <p className="header__date-and-location">
                    {currentDate}, {props.weatherData.city}
                </p>
                <div className="header__elements" >
            
            <ToggleSwitch
                currentTemperatureUnit={currentTemperatureUnit}
                handleToggleSwitch={props.handleToggleSwitch}
            />
            
                <button
                    onClick={props.handleAddClick}
                    type="button"
                    className="header__add-clothes-btn"
                >
                    + Add clothes
                </button>
                <Link to="/profile">
                <p className="header__username">Terrence Tegegne</p></Link>

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
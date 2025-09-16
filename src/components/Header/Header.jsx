import "./Header.css";
import React from 'react';
import logo from '/src/assets/logo.svg';
import userAvatar from '/src/assets/Ellipse 18.png'; 
import { getWeather, filterWeatherData } from '../../utils/weatherApi';   


  
function Header(props) {
    const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
    return (
        <header className="header">
            <img src={logo} alt="Logo" />
            <p className="header__date-and-location">
                {currentDate}, {props.weatherData.city}
            </p>
            <button
                onClick={props.handleAddClick}
                type="button"
                className="header__add-clothes-btn"
            >
                + Add clothes
            </button>
            <div className="header__search">
                
            </div>
            <div className="header__user-container">
                
                <p className="header__user-name">User Name</p>
                
            </div>
            <img className="header__user-avatar" src="/src/assets/Ellipse 18.png" alt="User Avatar" />
            
        </header>
    );
}

export default Header;
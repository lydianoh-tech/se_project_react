import React from 'react';
import App from '../App/App';   
import './WeatherCard.css';

function WeatherCard() {
    return (
        <section className="weather__cards">
            <p className="weather__card-temp">75 &deg; F</p>
            <img 
                src="./src/assets/sunny.png" 
                alt="Weather icon" 
                className="weather__card-image" 
            />
        </section>
    );
}

export default WeatherCard;
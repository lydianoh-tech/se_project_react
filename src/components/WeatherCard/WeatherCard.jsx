import React from 'react';
import './WeatherCard.css';
import { defaultWeatherOptions, weatherOptions } from '../../utils/constants';

function WeatherCard({ weatherData }) {
    
    if (!weatherData || !weatherData.condition || typeof weatherData.isDay === "undefined") {
        return (
            <section className="weather__cards">
                <p className="weather__card-temp">-- &deg; F</p>
                <img
                    src={defaultWeatherOptions.day.url}
                    alt="Default weather"
                    className="weather__card-image"
                />
            </section>
        );
    }

    
    const filterOptions = weatherOptions.filter((option) => (
        option.condition === weatherData.condition &&
        option.isDay === weatherData.isDay
    ));

    
    const weatherOption =
        filterOptions.length === 0
            ? defaultWeatherOptions[weatherData.isDay ? 'day' : 'night']
            : filterOptions[0];

    return (
        <section className="weather__cards">
            <p className="weather__card-temp">
                {weatherData.temp?.F ?? 75} &deg; F
            </p>
            <img
                src={weatherOption?.url}
                alt={`Card showing ${weatherData.isDay ? "day" : "night"} time ${weatherData.condition} weather`}
                className="weather__card-image"
            />
        </section>
    );
}

export default WeatherCard;
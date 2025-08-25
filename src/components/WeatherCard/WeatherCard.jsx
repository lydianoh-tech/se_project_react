import React from 'react';
import { defaultWeatherOptions, weatherOptions } from '../../utils/constants';
import './WeatherCard.css';

function WeatherCard({ weatherData }) {
  if (!weatherData || !weatherData.condition || typeof weatherData.isDay === "undefined") {
    return (
      <section className="weather__cards" style={{ position: "relative" }}>
        <p className="weather__card-temp">-- &deg; F</p>
        <img
          src={defaultWeatherOptions.day.url}
          alt="Default weather"
          className="weather__card-image"
        />
      </section>
    );
  }

  const weatherOption = weatherOptions.find(
    option => option.condition === weatherData.condition && option.isDay === weatherData.isDay
  ) || defaultWeatherOptions[weatherData.isDay ? 'day' : 'night'];

  return (
    <section className="weather__cards" style={{ position: "relative" }}>
      <p className="weather__card-temp">
        {weatherData.temp.F}&deg; F
      </p>
      <img
        src={weatherOption.url}
        alt={`${weatherData.isDay ? "Day" : "Night"} ${weatherData.condition}`}
        className="weather__card-image"
      />
    </section>
  );
}

export default WeatherCard;
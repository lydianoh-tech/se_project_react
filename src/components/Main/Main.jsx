import WeatherCard from '../WeatherCard/WeatherCard';
import { defaultClothingItems } from '../../utils/constants';
import ItemCard from '../ItemCard/ItemCard';
import React from 'react';
import './Main.css';

function Main({ weatherData, handleCardClick }) {
    return (
        <main className="main">
            <WeatherCard weatherData={weatherData} />
            <section className="cards">
                <p className="cards__text">
                  Today is {weatherData?.temp?.F ?? 75} &deg; F / You may want to wear:
                </p>
                <ul className="cards__list">
                    {defaultClothingItems
                    .filter(item => item.weather === weatherData?.type)
                    .map((item) => (
                        <ItemCard key={item.id} item={item} onCardClick={handleCardClick} />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;
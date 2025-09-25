import currentTemperatureUnitContext from '../currentTemperatureUnit/currentTemperatureUnit';
import WeatherCard from '../WeatherCard/WeatherCard';
import { defaultClothingItems } from '../../utils/constants';
import ItemCard from '../ItemCard/ItemCard';
import React from 'react';
import './Main.css';

function Main({ weatherData, handleCardClick, clothingItems = [] }) {
    const { currentTemperatureUnit } = React.useContext(currentTemperatureUnitContext);

    return (
        <main className="main">
            <WeatherCard weatherData={weatherData} />
            <section className="cards">
                <p className="cards__text">
                  Today is {weatherData?.temp?.[currentTemperatureUnit]}
      {currentTemperatureUnit} / You may want to wear:
                </p>
                <ul className="cards__list">
                    {clothingItems.filter(item => item.weather === weatherData.condition)
                    .map((item) => (
                        <ItemCard key={item.id} item={item} onCardClick={() => handleCardClick(item)} />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;
import currentTemperatureUnitContext from "../../CurrentTemperatureUnitContext/CurrentTemperatureUnitContext";
import WeatherCard from "../WeatherCard/WeatherCard";

import ItemCard from "../ItemCard/ItemCard";
import React from "react";
import "./Main.css";

function Main({ weatherData, handleCardClick, clothingItems = [] }) {
  const { currentTemperatureUnit } = React.useContext(
    currentTemperatureUnitContext
  );

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData?.temp?.[currentTemperatureUnit]}
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => item.weather === weatherData.type)
            .map((item) => (
              <ItemCard
                key={item._id || item.id}
                item={item}
                onCardClick={onCardClick}
                onDeleteClick={onDeleteClick}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

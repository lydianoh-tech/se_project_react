import WeatherCard from '../WeatherCard/WeatherCard';
import {defaultClothingItems} from '../../utils/constants';
import ItemCard from '../ItemCard/ItemCard';
import React from 'react';
import './Main.css';

function Main() {
    return (
        <main>
            <WeatherCard />
            <section className="cards">
                <p className="cards__text">Today is 75 &deg; F / You may want to wear:</p>
                <ul className="cards__list">{defaultClothingItems.map((item) =>{
                    return (
                        <div key={item._id} className="cards__item">
                            <img src={item.link} alt={item.name} className="cards__image" />
                            <p className="cards__name">{item.name}</p>
                        </div>
                    );
                })}
                </ul>
                
            </section>
        </main>
    );
}

export default Main;
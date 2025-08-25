import React, { useEffect, useState } from 'react';
import { coordinates, APIkey } from '../../utils/constants';
import './App.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import ItemCard from '../ItemCard/ItemCard';
import Header from '../Header/Header';
import ModalWithForm from '../ModalWithForm/ModalWithForm';


import ItemModal from '../ItemModal/ItemModal';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from '../../utils/weatherApi';


function App() {
  const [weatherData, setweatherData] = useState({ type: "", temp: {F:999,C:999}, city:""});
  
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };
  useEffect(() => {
    getWeather(coordinates, APIkey)
  
    .then((data) => { 
      const filteredData = filterWeatherData(data);
      setweatherData(filteredData);
    })
  .catch(console.error);
},[]);

return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main
          weatherData={weatherData}
          setweatherData={setweatherData}
          handleCardClick={handleCardClick}
          isOpen={activeModal === "preview"}
          setIsOpen={(isOpen) => {
            if (!isOpen) {
              closeActiveModal();
            }
          }}
          closeActiveModal={closeActiveModal}
          selectedCard={selectedCard}
         
        />
        <Footer />
      </div>

      {activeModal === "add-garment" && (
        <ModalWithForm
          title="New Garment"
          buttonText="Add Garment"
          isOpen={activeModal === "add-garment"}
          setActiveModal={setActiveModal}
          weatherData={weatherData}
          closeActiveModal={closeActiveModal}
        >
          <label htmlFor="name" className="modal__label">
            Name
            <input type="text" className="modal__input" id="name" name="name" placeholder="Name" required />
          </label>
          <label htmlFor="imageurl" className="modal__label">
            Image URL
            <input type="text" className="modal__input" id="imageurl" name="imageurl" placeholder="Image URL" required />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type</legend>
            <label htmlFor="hot" className="modal__label modal__label-type-radio">
              <input type="radio" className="modal__radio" id="hot" name="weather-type" value="hot" required />
              Hot
            </label>
            <label htmlFor="warm" className="modal__label modal__label-type-radio">
              <input type="radio" className="modal__radio" id="warm" name="weather-type" value="warm" required />
              Warm
            </label>
            <label htmlFor="cold" className="modal__label modal__label-type-radio">
              <input type="radio" className="modal__radio" id="cold" name="weather-type" value="cold" required />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
      )}

      
      {activeModal === "preview" && (
        <ItemModal
          isActiveModal={activeModal === "preview"}
          card={selectedCard}
          onClose={closeActiveModal}
        />
      )}
    </div>
  );
}

export default App;
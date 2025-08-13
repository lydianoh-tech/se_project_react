import React from 'react';
import { coordinates, APIkey } from '../../utils/constants';
import { useEffect, useState } from 'react';

import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm"; 
import ItemModal from '../ItemModal/ItemModal';
import { getWeather, filterWeatherData } from '../../utils/weatherApi';


function App() {
  const [weatherData, setweatherData] = useState({ type: "", temp: {F:999,C:999}, city:""});
  
  const [isActiveModal, setIsActiveModal] = React.useState("");
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleAddClick = () => {
    setIsActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setIsActiveModal("preview");
    setSelectedCard(card);
  };

  const closeActiveModal = () => {
    setIsActiveModal("");
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
          isActiveModal={isActiveModal}
          setIsActiveModal={setIsActiveModal}
          closeActiveModal={closeActiveModal}
          selectedCard={selectedCard}
         
        />
      </div>

      {/* Add Garment Modal */}
      {isActiveModal === "add-garment" && (
        <ModalWithForm
          title="New Garment"
          buttonText="Add Garment"
          isActiveModal={isActiveModal === "add-garment"}
          setIsActiveModal={setIsActiveModal}
          weatherData={weatherData}
          closeActiveModal={closeActiveModal}
        >
          <label htmlFor="name" className="modal__label">
            Name
            <input type="text" className="modal__input" name="name" placeholder="Name" required />
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

      {/* Item Preview Modal */}
      {isActiveModal === "preview" && (
        <ItemModal
          isActiveModal={isActiveModal}
          card={selectedCard}
          onClose={closeActiveModal}
        />
      )}
    </div>
  );
}

export default App;
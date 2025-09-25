import React, { useEffect, useState } from 'react';

import{Route, Routes} from 'react-router-dom';
import { coordinates, APIkey } from '../../utils/constants'; // Use apiKey if that's your export
import './App.css';
import Profile from "../Profile/Profile";
import clothesSection from "../ClothesSection/ClothesSection";
import sidebar from "../SideBar/SideBar";
import WeatherCard from '../WeatherCard/WeatherCard';
import Header from '../Header/Header';
import AddItemModal from '../AddItemModal/AddItemModal';

import ItemModal from '../ItemModal/ItemModal';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from '../../utils/weatherApi';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import currentTemperatureUnitContext from '../CurrentTemperatureUnit/CurrentTemperatureUnit';
import useForm from '../../hooks/useForm';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { defaultClothingItems } from '../../utils/constants';
import { getItems } from '../../utils/api';
function App() {
  const [weatherData, setWeatherData] = useState({ 
    type: "", 
    temp: { F: 999, C: 999 },
    condition: "", 
    isDay: false,
    city: "" });
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === 'F' ? 'C' : 'F');
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const onAddItem = (item) => {
    const newCardData = {
      id: Date.now(), 
      name: item.name,
      imageUrl: item.imageUrl,
      weather: item.weatherType,
    };
    setClothingItems([...clothingItems, newCardData]);
    closeAllModals();
  };

const closeAllModals = () => {
  setActiveModal("");
};
  const handleAddItem = (item) => {
  console.log("New item added:", item);
};

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);
  useEffect(() => {
    getItems()
      .then((data) => {
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
  <currentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
       
        <Routes>
          <Route path="/" element={
            <Main
              weatherData={weatherData}
              onCardClick={handleCardClick}
              clothingItems={clothingItems}
            />
          } />
          <Route path="/profile" element={<Profile
    clothingItems={clothingItems}
    onCardClick={handleCardClick}
    onAddItemClick={handleAddClick}
  />
} />
          <Route path="/weatherData" element={<p>Weather Data</p>} />
          <Route path="/clothesSection" element={<p>Clothing Items</p>} />

           
        </Routes>

        <ModalWithForm
          title="Garment Preview"
          name="preview"
          buttonText="Edit"
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

        <AddItemModal
          title="New garment"
          name="new-card"
          isOpen={activeModal === "add-garment"}
          onAddItem={onAddItem}
          onClose={closeActiveModal}
        />

        {activeModal === "preview" && (
          <ItemModal
            isOpen={activeModal === "preview"}
            card={selectedCard}
            onClose={closeActiveModal}
          />
        )}
      </div>
    </div>
  </currentTemperatureUnitContext.Provider>
);}

export default App;
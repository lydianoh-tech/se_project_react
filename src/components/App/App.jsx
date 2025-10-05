import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import { coordinates, APIkey } from "../../utils/constants"; // Use apiKey if that's your export
import "./App.css";
import Profile from "../Profile/Profile";
import ClothesSection from "../ClothesSection/ClothesSection";
import Sidebar from "../SideBar/SideBar";
import WeatherCard from "../WeatherCard/WeatherCard";
import Header from "../Header/Header";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { deleteItem } from "../../utils/api";
import { postItem } from "../../utils/api";
import ItemModal from "../ItemModal/ItemModal";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import currentTemperatureUnitContext from "../../CurrentTemperatureUnitContext/CurrentTemperatureUnitContext";
import useForm from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { defaultClothingItems } from "../../utils/constants";
import { getItems } from "../../utils/api";
function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    condition: "",
    isDay: false,
    city: "",
  });
  const [currentTemperatureUnit, setcurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);

  const handleToggleSwitchChange = () => {
    setcurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
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

    postItem(newCardData)
      .then((savedItem) => {
        setClothingItems([...clothingItems, savedItem]);
        closeAllModals();
      })
      .catch((error) => {
        console.error("Failed to save item:", error);

        const itemWithId = { ...newCardData, id: Date.now() };
        setClothingItems([...clothingItems, itemWithId]);
        closeAllModals();
      });
  };

  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setActiveModal("delete-confirmation");
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      deleteItem(itemToDelete._id)
        .then(() => {
          setClothingItems(
            clothingItems.filter((item) => item._id !== itemToDelete._id)
          );
          closeAllModals();
          setItemToDelete(null);
        })
        .catch((error) => {
          console.error("Failed to delete item:", error);
        });
    }
  };

  const closeAllModals = () => {
    setActiveModal("");
  };
  const closeActiveModal = () => {
    setActiveModal("");
    setItemToDelete(null);
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
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <currentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  onDeleteClick={handleDeleteClick}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  onCardClick={handleCardClick}
                  onAddItemClick={handleAddClick}
                  onDeleteClick={handleDeleteClick}
                />
              }
            />
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
        </div>
      </div>

      <AddItemModal
        title="New garment"
        name="new-card"
        isOpen={activeModal === "add-garment"}
        onAddItem={onAddItem}
        onClose={closeActiveModal}
      />

      <DeleteConfirmationModal
        isOpen={activeModal === "delete-confirmation"}
        onClose={closeAllModals}
        onConfirm={handleConfirmDelete}
        itemName={itemToDelete?.name}
      />

      {activeModal === "preview" && (
        <ItemModal
          isOpen={activeModal === "preview"}
          card={selectedCard}
          onClose={closeActiveModal}
        />
      )}
    </currentTemperatureUnitContext.Provider>
  );
}
export default App;

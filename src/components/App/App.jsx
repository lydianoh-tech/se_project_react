import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import "./App.css";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";

import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";

import ItemModal from "../ItemModal/ItemModal";
import { getItems, postItem, deleteItem } from "../../utils/api";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import currentTemperatureUnitContext from "../../CurrentTemperatureUnitContext/CurrentTemperatureUnitContext";
import {
  coordinates,
  APIkey,
  defaultClothingItems,
} from "../../utils/constants";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    condition: "",
    isDay: false,
    city: "",
  });
  const [itemToDelete, setItemToDelete] = useState(null);
  const [currentTemperatureUnit, setcurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);

  // Toggle temperature unit
  const handleToggleSwitchChange = () => {
    setcurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  // Open Add Garment modal
  const handleAddClick = () => {
    setActiveModal("add-garment");
    console.log("Getting close to opening the addItemModal");
  };

  // Open Delete Confirmation modal
  const handleDeleteClick = (item) => {
    setActiveModal("delete-confirmation");
    setItemToDelete(item);
  };

  // Confirm deletion and update server
  const handleConfirmDelete = () => {
    if (itemToDelete) {
      deleteItem(itemToDelete._id)
        .then(() => {
          setClothingItems((prevItems) =>
            prevItems.filter((item) => item._id !== itemToDelete._id)
          );
          closeAllModals();
        })
        .catch((error) => {
          console.error("Error deleting item:", error);
        });
    }
  };

  // Open preview modal
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  // Add item and persist to server
  const onAddItem = (inputValues) => {
    const newCardData = {
      name: inputValues.name,
      imageUrl: inputValues.imageUrl,
      weather: inputValues.weatherType,
    };

    postItem(newCardData)
      .then((addedItem) => {
        console.log("Item successfully added to server:", addedItem);
        setClothingItems([addedItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getItems()
      .then((items) => {
        console.log("Items fetched:", items);

        setClothingItems(items);
      })
      .catch((error) => {
        console.log("Error fetching items:", error);
        setClothingItems(defaultClothingItems);
      });
  }, []);

  // Fetch weather data
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((error) => {
        console.log("Weather API error:", error);
        setWeatherData({
          type: "hot",
          temp: { F: 75, C: 24 },
          condition: "sunny",
          isDay: true,
          city: "New York",
        });
      });
  }, []);

  return (
    <currentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header
            handleAddClick={handleAddClick}
            handleCardClick={handleCardClick}
            weatherData={weatherData}
            activeModal={activeModal}
            setActiveModal={setActiveModal}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  onCardClick={handleCardClick}
                  onDeleteClick={handleDeleteClick}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                  onAddItemClick={handleAddClick}
                  currentUser={{ name: "Terrence Tegegne", avatar: "" }}
                  handleAddClick={handleAddClick}
                  onCardClick={handleCardClick}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          onClose={closeActiveModal}
          isOpen={activeModal === "add-garment"}
          onAddItem={onAddItem}
        />

        {activeModal === "preview" && (
          <ItemModal
            isOpen={activeModal === "preview"}
            card={selectedCard}
            onClose={closeActiveModal}
            onDeleteClick={handleDeleteClick}
          />
        )}
      </div>
    </currentTemperatureUnitContext.Provider>
  );
}

export default App;

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

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Current user data
  const currentUser = {
    name: "Terrence Tegegne",
    avatar: "https://via.placeholder.com/40x40/cccccc/ffffff?text=TT",
  };

  // Toggle temperature unit
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  // Modal handlers
  const handleAddClick = () => {
    setActiveModal("add-garment");
    console.log("🆕 Opening add item modal");
  };

  const handleCardClick = (card) => {
    console.log("Opening preview modal for:", card);
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteClick = (card) => {
    console.log("Delete clicked for:", card);
    setActiveModal("delete-confirmation");
    setItemToDelete(card);
  };

  const closeActiveModal = () => {
    setActiveModal("");
    setSelectedCard({});
    setItemToDelete(null);
  };

  // Add item function
  const onAddItem = (inputValues) => {
    setIsLoading(true);
    console.log("Adding item:", inputValues);

    const newCardData = {
      name: inputValues.name,
      imageUrl: inputValues.imageUrl,
      weather: inputValues.weatherType,
    };

    postItem(newCardData)
      .then((addedItem) => {
        console.log("Item added successfully:", addedItem);
        setClothingItems([addedItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Error adding item:", error);
        alert("Failed to add item. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Delete confirmation function
  const handleConfirmDelete = () => {
    if (!itemToDelete) return;

    setIsLoading(true);
    const itemId = itemToDelete.id || itemToDelete._id;

    console.log("Deleting item with ID:", itemId);

    deleteItem(itemId)
      .then(() => {
        console.log("Item deleted successfully");
        setClothingItems(
          clothingItems.filter((item) => (item.id || item._id) !== itemId)
        );
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
        alert("Failed to delete item. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Load initial data
  useEffect(() => {
    setIsLoading(true);

    // Load weather data
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
        console.log("Weather data loaded:", filteredData);
      })
      .catch((error) => {
        console.error("Weather fetch error:", error);
        setWeatherData({
          type: "hot",
          temp: { F: 75, C: 24 },
          condition: "sunny",
          isDay: true,
          city: "New York",
        });
      });

    // Load clothing items
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

  return (
    <currentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header
            handleAddClick={handleAddClick}
            weatherData={weatherData}
            currentUser={currentUser}
          />

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
                  currentUser={currentUser}
                  onCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                  onDeleteClick={handleDeleteClick}
                />
              }
            />
          </Routes>
          <Footer />
        </div>

        {/* Modals */}
        <AddItemModal
          onClose={closeActiveModal}
          isOpen={activeModal === "add-garment"}
          onAddItem={onAddItem}
          isLoading={isLoading}
        />

        <ItemModal
          isOpen={activeModal === "preview"}
          card={selectedCard}
          onClose={closeActiveModal}
          onDeleteClick={handleDeleteClick}
        />

        <DeleteConfirmationModal
          isOpen={activeModal === "delete-confirmation"}
          onClose={closeActiveModal}
          onConfirm={handleConfirmDelete}
          itemName={itemToDelete?.name}
          isLoading={isLoading}
        />
      </div>
    </currentTemperatureUnitContext.Provider>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { defaultClothingItems } from "../../utils/constants";
import { Route, Routes } from "react-router-dom";
import { coordinates, APIkey } from "../../utils/constants";
import "./App.css";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import ItemModal from "../ItemModal/ItemModal";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import currentTemperatureUnitContext from "../../CurrentTemperatureUnitContext/CurrentTemperatureUnitContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import EditProfile from "../EditProfile/EditProfile";

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
  const [itemToDelete, setItemToDelete] = useState(null); // Move this outside onAddItem
  const [currentUser, setCurrentUser] = useState({
    name: "Terrence Tegegne",
    avatar: "https://via.placeholder.com/80x80/cccccc/ffffff?text=TT",
  });

  // Handler functions
  const handleToggleSwitchChange = () => {
    setcurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
    console.log("🆕 App handleAddClick function called!");
    console.log("🆕 Current activeModal:", activeModal);
  };

  const handleDeleteClick = (item) => {
    console.log("Delete clicked for item:", item);
    setActiveModal("delete-confirmation");
    setItemToDelete(item);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      setClothingItems(
        clothingItems.filter((item) => item._id !== itemToDelete._id)
      );
      closeAllModals();
    }
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddItem = (item) => {
    const newCardData = {
      _id: Date.now().toString(), // Use _id instead of id
      name: item.name,
      imageUrl: item.imageUrl,
      weather: item.weatherType,
    };
    setClothingItems([...clothingItems, newCardData]);
    closeAllModals();
  };

  const handleDeleteItem = (item) => {
    // Use local state instead of API call for now
    setClothingItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem._id !== item._id)
    );
    closeActiveModal();
  };

  const closeAllModals = () => {
    setActiveModal("");
    setItemToDelete(null);
    setSelectedCard({});
  };

  const closeActiveModal = () => {
    setActiveModal("");
    setItemToDelete(null);
    setSelectedCard({});
  };

  const handleProfileData = () => {
    setActiveModal("edit_profile");
  };

  const handleUpdateUser = ({ name, avatar }) => {
    const updatedUser = {
      ...currentUser,
      name: name || currentUser.name,
      avatar: avatar || currentUser.avatar,
    };
    setCurrentUser(updatedUser);
    closeAllModals();
    return Promise.resolve(updatedUser);
  };

  // useEffect hooks
  useEffect(() => {
    console.log("Setting default clothing items");
    setClothingItems(defaultClothingItems);
  }, []);

  useEffect(() => {
    console.log("Setting up weather data");
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch((error) => {
        console.error("Weather API error:", error);
        // Set mock weather data as fallback
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
            handleUpdateUser={handleUpdateUser}
            handleProfileData={handleProfileData}
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
                  onUpdateUser={handleUpdateUser}
                  onCardClick={handleCardClick}
                  onAddItemClick={handleAddClick} // Make sure this is passed
                  onDeleteClick={handleDeleteClick}
                />
              }
            />
          </Routes>

          <Footer />
        </div>
      </div>

      <AddItemModal
        title="New garment"
        name="new-card"
        isOpen={activeModal === "add-garment"}
        onAddItem={onAddItem}
        onClose={closeActiveModal}
        handleAddClick={handleAddClick}
      />

      <EditProfile
        activeModal={activeModal}
        isOpen={activeModal === "edit_profile"}
        onClose={closeActiveModal}
        onUpdateUser={handleUpdateUser}
        currentUser={currentUser}
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
          onDeleteClick={handleDeleteClick}
        />
      )}
    </currentTemperatureUnitContext.Provider>
  );
}

export default App;

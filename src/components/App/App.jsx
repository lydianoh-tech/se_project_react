import React, { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import { coordinates, APIkey } from "../../utils/constants";
import "./App.css";
import Profile from "../Profile/Profile";

import Header from "../Header/Header";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { deleteItem } from "../../utils/api";
import { postItem } from "../../utils/api";
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

  const [currentUser, setCurrentUser] = useState({
    name: "Terrence Tegegne",
    avatar: "https://via.placeholder.com/80x80/cccccc/ffffff?text=TT",
  });

  const handleToggleSwitchChange = () => {
    setcurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
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

  const handleDeleteItem = (id) => {
    deleteItem(id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== id)
        );
        closeActiveModal();
      })
      .catch(console.error);
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
  const handleProfileData = () => {
    setActiveModal("edit_profile");
  };

  useEffect(() => {
    const token = (() => {
      try {
        return localStorage.getItem("jwt");
      } catch (e) {
        return null;
      }
    })();
  }, []);

  const handleUpdateUser = ({ name, avatar }) => {
    return updateUser({ name, avatar }).then((user) => {
      setCurrentUser(user);
      return user;
    });
  };

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
            onClose={closeActiveModal}
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
          onDeleteItem={handleDeleteItem}
        />
      )}
    </currentTemperatureUnitContext.Provider>
  );
}
export default App;

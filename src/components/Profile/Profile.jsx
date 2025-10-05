import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import Main from "../Main/Main";
import App from "../App/App";

function Profile({
  clothingItems,
  onCardClick,
  onAddItemClick,
  onDeleteClick,
}) {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar />
      </div>
      <div className="profile__content">
        <App />
        <ClothesSection
          clothingItems={clothingItems}
          onCardClick={onCardClick}
          onAddItemClick={onAddItemClick}
          onDeleteClick={onDeleteClick}
        />
      </div>
    </div>
  );
}

export default Profile;

import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  clothingItems,
  onCardClick,
  onAddItemClick,
  onDeleteClick,
  handleCardClick,
  handleAddClick,
  currentUser,
  onUpdateUser,
}) {
  return (
    <div className="profile">
      <div className="profile__sidebar">
        <SideBar currentUser={currentUser} onUpdateUser={onUpdateUser} />
      </div>
      <div className="profile__main-content">
        <ClothesSection
          clothingItems={clothingItems}
          onCardClick={onCardClick}
          onAddItemClick={onAddItemClick}
          onDeleteClick={onDeleteClick}
          handleCardClick={handleCardClick}
          handleAddClick={handleAddClick}
        />
      </div>
    </div>
  );
}

export default Profile;

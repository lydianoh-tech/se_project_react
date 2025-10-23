import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  clothingItems,
  onCardClick,
  onAddItemClick,
  onDeleteClick,
  currentUser,
  onUpdateUser,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar currentUser={currentUser} onUpdateUser={onUpdateUser} />
      </section>
      <section className="profile__main-content">
        <ClothesSection
          clothingItems={clothingItems}
          onCardClick={onCardClick}
          onAddItemClick={onAddItemClick}
          onDeleteClick={onDeleteClick}
        />
      </section>
    </div>
  );
}

export default Profile;

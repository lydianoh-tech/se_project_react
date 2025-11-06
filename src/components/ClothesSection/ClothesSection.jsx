import "./ClothesSection.css";

import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  handleAddClick,
  handleCardClick,
  clothingItems,
  onCardClick,

  onDeleteClick,
}) {
  return (
    <div className="clothes__section">
      <div className="clothes__section-main">
        <p className="clothes__section-title">Your items</p>
        <button
          onClick={handleAddClick}
          type="button"
          className="clothes__section-add-btn"
        >
          + Add new
        </button>
      </div>
      <ul className="clothes__section-items">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
              onDeleteClick={onDeleteClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;

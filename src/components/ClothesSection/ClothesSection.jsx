import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({
  clothingItems,
  onCardClick,
  handleAddClick,
  onAddItemClick,
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
        {clothingItems.map((item) => (
          <ItemCard
            key={item.id || item._id || item.name} // Add unique key
            item={item}
            onCardClick={onCardClick}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;

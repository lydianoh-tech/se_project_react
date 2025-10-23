import React from "react";
import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import { Link } from "react-router-dom";

function ClothesSection({
  weatherData,
  clothingItems,
  onCardClick,
  onAddItemClick,
  onDeleteClick = [],
}) {
  console.log("🎯 ClothesSection - clothingItems:", clothingItems);
  console.log("🎯 ClothesSection - onAddItemClick exists:", !!onAddItemClick);

  const handleAddClick = () => {
    console.log("🎯 ClothesSection add button clicked!");
    if (onAddItemClick) {
      onAddItemClick();
    } else {
      console.error("❌ onAddItemClick is not defined!");
    }
  };

  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <h2 className="clothes-section__title">Your Items</h2>
        <button
          className="clothes-section__add-btn"
          onClick={handleAddClick}
          type="button"
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id || item.id}
              item={item}
              onCardClick={onCardClick}
              onDeleteClick={onDeleteClick}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;

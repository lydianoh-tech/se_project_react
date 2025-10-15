import React from "react";
import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import { Link } from "react-router-dom";
function ClothesSection({
  clothingItems,
  onCardClick,
  onAddItemClick,
  onDeleteClick = [],
}) {
  return (
    <section className="clothes-section">
      <div className="clothes-section__header">
        <h2 className="clothes-section__title">Your Items</h2>
        <button
          className="clothes-section__add-btn"
          onClick={onAddItemClick}
          type="button"
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          <ItemCard
            key={item._id || item.id}
            imageUrl={item.imageUrl || item.link}
            name={item.name}
            onCardClick={onCardClick}
            onDeleteClick={onDeleteClick}
            clothingItems={clothingItems}
          />;
        })}
      </ul>
    </section>
  );
}
export default ClothesSection;

import React from "react";
import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    console.log("Card clicked:", item.name);
    if (onCardClick) {
      onCardClick(item);
    }
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setIsLiked((prev) => !prev);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Prevent card click
    console.log("🗑️ ItemCard delete clicked for:", item.name);
    if (onDeleteClick) {
      onDeleteClick(item);
    }
  };

  return (
    <li className="card">
      <h2 className="card__name ">
        {item.name}{" "}
        <button
          type="button"
          onClick={handleLikeClick}
          className="card__delete-btn"
        ></button>
      </h2>

      <img
        onClick={handleCardClick}
        src={item.imageUrl || item.link}
        alt={item.name}
        className="card__image"
      />

      <button
        type="button"
        onClick={handleDeleteClick}
        className="card__delete-btn"
      >
        🗑️
      </button>
    </li>
  );
}

export default ItemCard;

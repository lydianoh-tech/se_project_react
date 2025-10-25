import React, { useState } from "react";

import "./ItemCard.css";

function ItemCard({ item, onCardClick, onDeleteClick }) {
  const [isLiked, setIsLiked] = useState(false);

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
          className="card__like-btn"
        >
          {isLiked ? "❤️" : "🤍"}
        </button>
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
        Delete Item
      </button>
    </li>
  );
}

export default ItemCard;

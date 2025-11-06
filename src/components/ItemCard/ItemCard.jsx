import React, { useState } from "react";

import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    console.log("Card clicked:", item.name);
    if (onCardClick) {
      onCardClick(item);
    }
  };
  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Prevent card click

    if (onDeleteClick) {
      onDeleteClick(item);
    }
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>

      <img
        onCardClick={handleCardClick}
        src={item.imageUrl || item.link}
        alt={item.name}
        className="card__image"
      />
    </li>
  );
}

export default ItemCard;

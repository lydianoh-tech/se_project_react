import React, { useState } from "react";

import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = (item) => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>

      <img
        onClick={(event) => handleCardClick(item)}
        className="card__image"
        src={item.imageUrl || item.link}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;

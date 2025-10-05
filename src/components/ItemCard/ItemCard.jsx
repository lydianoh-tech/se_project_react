import React from "react";
import "./ItemCard.css";

function ItemCard({ item, onCardClick, onDeleteClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Prevent card click when delete is clicked
    onDeleteClick(item);
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
      <button
        onClick={handleDeleteClick}
        className="card__delete-btn"
        type="button"
        aria-label="Delete item"
      ></button>
    </li>
  );
}

export default ItemCard;

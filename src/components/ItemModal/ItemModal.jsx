import "./ItemModal.css";
import React from "react";

function ItemModal({ isOpen, onClose, card, onDeleteClick }) {
  console.log("12312313123");
  console.log(card);
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-icon modal__close-icon_type_image"
        ></button>

        <img src={card.link} alt={card.name} className="modal__image" />

        <div className="modal__footer">
          <div>
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            onClick={() => onDeleteClick(card)}
            type="button"
            className="modal__delete-btn"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

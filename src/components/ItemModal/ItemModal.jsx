import "./ItemModal.css";



import React from "react";

function ItemModal({ isActiveModal, onClose, card }) {
    return (
        <div className={`modal ${isActiveModal === "preview" ? "modal__opened" : ""}`}>
            <div className="modal__content modal__content_type_image">
                <button onClick={onClose} type="button" className="modal__close">Close</button>
                <img className="modal__image" src={card.link} alt={card.name} />
                <div className="modal__footer">
                    <h2 className="modal__title">{card.name}</h2>
                    <p className="modal__weather">Weather : {card.weather}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemModal;
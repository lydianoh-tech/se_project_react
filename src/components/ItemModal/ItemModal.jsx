import "./ItemModal.css";
import closeBtn from "../../assets/close-btn.png";
import React from "react";

function ItemModal({ isOpen, onClose, card }) {
    return (
        <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
            <div className="modal__content modal__content_type_image">
                <button onClick={onClose} type="button" className="modal__close">
                    <img src={closeBtn} alt="Close" className="modal__close-icon" />
                </button>
                <img className="modal__image" src={card.link} alt={card.name} />
                <div className="modal__footer">
                    <h2 className="modal__caption">{card.name}</h2>
                    <p className="modal__weather">Weather : {card.weather}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemModal;


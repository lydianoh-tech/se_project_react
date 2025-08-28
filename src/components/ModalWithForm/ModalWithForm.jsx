import React from "react";
import closeBtn from "../../assets/close-btn.png";
import "./ModalWithForm.css";

function ModalWithForm({
  title,
  buttonText,
  isOpen,
  closeActiveModal,
  children,
}) {
  return (
    <div className={`modal${isOpen ? " modal__opened" : ""}`}>
      <div className="modal__overlay">
        <div className="modal__content">
          <h2 className="modal__title">{title}</h2>
          <button
            type="button"
            className="modal__close"
            onClick={closeActiveModal}
          >
            <img src={closeBtn} alt="Close" className="modal__close-icon" />
          </button>
          <form className="modal__form">
            {children}
            <button type="submit" className="modal__submit-btn">
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;
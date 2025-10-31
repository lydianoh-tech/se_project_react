import React from "react";
import "./DeleteConfirmationModal.css";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm, itemName }) {
  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_confirmation">
        <button onClick={onClose} type="button" className="modal__close" />
        <div className="modal__confirmation">
          <p className="modal__confirmation-text">
            Are you sure you want to delete this item? This action is
            irreversible.
          </p>
          <div className="modal__confirmation-buttons">
            <button
              onClick={onConfirm}
              type="button"
              className="modal__btn modal__btn_type_delete"
            >
              Yes, delete item
            </button>
            <button
              onClick={onClose}
              type="button"
              className="modal__btn modal__btn_type_cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;

import React from "react";
import "./DeleteConfirmationModal.css";

function DeleteConfirmationModal({
  isOpen,
  onClose,
  itemId,
  onDeleteModalSubmit,
}) {
  function handleDeleteModalSubmit() {
    onDeleteModalSubmit(itemId);
  }

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_delete">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <p className="delete__text">
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
        <button
          className="delete__confirm-btn"
          type="button"
          onClick={handleDeleteModalSubmit}
        >
          Yes, delete item
        </button>
        <button className="delete__cancel-btn" type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
export default DeleteConfirmationModal;

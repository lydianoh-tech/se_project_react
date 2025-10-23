import "./ItemModal.css";
import ItemCard from "../ItemCard/ItemCard";
import closeBtn from "../../assets/close-btn.png";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function ItemModal({ isOpen, onClose, card, onDeleteClick }) {
  if (!isOpen || !card) return null;

  const handleDelete = () => {
    console.log("🗑️ ItemModal delete button clicked for:", card);
    // Close the ItemModal first
    onClose();
    // Then trigger the delete confirmation modal
    if (onDeleteClick) {
      onDeleteClick(card);
    }
  };
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
          aria-label="Close modal"
        >
          ✕
        </button>

        <img src={card.link} alt={card.name} className="modal__image" />

        <div className="modal__footer">
          <div className="modal__item-info">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>

          <button
            onClick={handleDelete}
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

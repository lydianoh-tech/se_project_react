import "./ItemModal.css";
import closeBtn from "../../assets/close-btn.png";

function ItemModal({ isOpen, onClose, card, onDeleteItem }) {
  if (!isOpen || !card) return null;

  const handleDelete = () => {
    onDeleteItem(card);
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

        <img src={card.imageUrl} alt={card.name} className="modal__image" />

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

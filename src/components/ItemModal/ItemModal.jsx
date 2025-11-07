import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card, onDeleteClick }) {
  if (!isOpen || !card) return null;

  const handleDelete = () => {
    onDeleteClick(card);
  };
  return (
    <div className={`modal ${isOpen === "preview" && "modal__opened"}`}>
      <div className="item__modal-content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-icon"
          aria-label="Close modal"
        ></button>

        <img
          src={card.imageUrl || card.link}
          alt={card.name}
          className="modal__image"
        />

        <div className="modal__footer">
          <div className="modal__item-info">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>

          <button
            onClick={() => {
              onDeleteClick(card);
            }}
            type="submit"
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
/* Please Reviewer i have tried everything to make this modal work 
but it still not working properly. The modal does not open when i click . 
Please help me to fix this issue. 
Thank you! */

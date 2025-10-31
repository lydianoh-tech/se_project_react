import "./ClothesSection.css";

import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  handleAddClick,
  handleCardClick,
  clothingItems,

  onDeleteClick = [],
}) {
  return (
    <section>
      <div className="clothes__section-header">
        <h2 className="clothes__section-title">Your Items</h2>
        <button
          className="clothes__section-add-btn"
          type="button"
          onClick={handleAddClick}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes__section-items">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id || item.id}
              item={item}
              handleCardClick={handleCardClick}
              onDeleteClick={onDeleteClick}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;

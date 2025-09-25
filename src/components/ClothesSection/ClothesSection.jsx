import React from "react";
import './ClothesSection.css';
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import { Link } from "react-router-dom";

export function ClothesSection({ clothingItems = [], onCardClick, onAddItemClick }) {
  return (
    
    <div className="clothes-section">
      <div>
        <Link to="/main" >
        <p>Clothing Items</p>
        </Link>
        <Link to="/add-item">
          <button onClick={onAddItemClick}>Add New</button>
        </Link>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onCardClick={onCardClick}
          />
        ))}
      </ul>
    </div>
    
  );
}

export default ClothesSection;


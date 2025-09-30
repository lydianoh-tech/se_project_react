import React from "react";
import './ClothesSection.css';
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import { Link } from "react-router-dom";

export function ClothesSection({ clothingItems = [], onCardClick, onAddClick }) {
  return (
    
    <div className="clothes-section">
      <div>
        
        <p>Clothing Items</p>
        
        <Link to="/add-item">
          <button onClick={onAddClick}>Add New</button>
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


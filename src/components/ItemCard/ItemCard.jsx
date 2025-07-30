function ItemCard({ item }) {
    return (
        <div className="cards__item">
            <img src={item.link} alt={item.name} className="cards__image" />
            <p className="cards__name">{item.name}</p>
            
        </div>)
};
            export default ItemCard;
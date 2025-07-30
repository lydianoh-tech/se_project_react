import "./Header.css";

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src="/src/assets/logo.svg" alt="logo image" />
            <p className="header__date-and-location">DATE, LOCATION</p>
            <div className="header__search">
                
            </div>
            <div className="header__user-container">
                <button className="header__add-clothes-btn">+ Add clothes</button>
                <p className="header__user-name">User Name</p>
                
            </div>
            <img className="header__user-avatar" src="/src/assets/Ellipse 18.png" alt="User Avatar" />
        </header>
    );
}

export default Header;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../styles/Header.scss';

const Header = () => {
  const [isMenuClosed, setIsMenuClosed] = useState(window.innerWidth > 767 ? false : true);
  return (
    <header className="header">
      <nav className="header__container">
        <div className="header__nav">
          <Link to="/" className="header__logo">
            CocktailStore
          </Link>
          <ul
            style={isMenuClosed ? { transform: 'translateX(-100vw)' } : {}}
            className="header__links">
            <li className="header__link">
              <Link to="/store">Store</Link>
            </li>
            <li className="header__link">
              <Link to="random">Random</Link>
            </li>
            <li className="header__link">
              <Link to="ingridients">Ingridients</Link>
            </li>
            <li className="header__link">
              <Link to="#">Info</Link>
            </li>
            <span
              onClick={() => {
                setIsMenuClosed(!isMenuClosed);
              }}
              class="material-symbols-outlined cross">
              cancel
            </span>
          </ul>
        </div>
        <span
          onClick={() => {
            setIsMenuClosed(!isMenuClosed);
          }}
          class="material-symbols-outlined">
          menu
        </span>
      </nav>
    </header>
  );
};

export default Header;

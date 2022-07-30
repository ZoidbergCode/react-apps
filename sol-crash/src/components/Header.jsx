import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <ul className="header__links">
            <li className="header__logo">
              <Link to="/">
                solcrash.<span className="green">io</span>
              </Link>
            </li>
            <li className="header__link">
              <Link to="/play">Play</Link>
            </li>
            <li className="header__link">
              <Link to="/leaderboards">Leaderboards</Link>
            </li>
            <li className="header__link">
              <Link to="/statistics">Statistics</Link>
            </li>
            <li className="header__link">
              <Link to="/FAQ">FAQ</Link>
            </li>
          </ul>
        </nav>
        <div id="root" className="header__button">
          <main>
            <div>
              <button className="header-bottom__button header-bottom__button-text trigger">
                Connect
              </button>
            </div>
          </main>
        </div>
      </div>
    </header>
  );
};

export default Header;

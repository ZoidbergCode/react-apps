import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ choose }) => {
  const [a1Spoiler, setA1Spoiler] = useState('none');
  return (
    <header className="header">
      <div className="header__container">
        <Link to="howitworks" className="header__logo">
          <span className="material-symbols-outlined">public</span>
        </Link>
        <Link to="howitworks" className="header__link">
          How it works?
        </Link>
        <span
          onClick={() => {
            a1Spoiler === 'none' ? setA1Spoiler('flex') : setA1Spoiler('none');
          }}
          className="header__link">
          A1
          <div style={{ display: `${a1Spoiler}` }} className="header__spoiler">
            <span
              onClick={() => {
                choose('A1verbs');
              }}
              className="header__link">
              <Link to="cards">Verbs</Link>
            </span>
            <span
              onClick={() => {
                choose('A1nouns');
              }}
              className="header__link">
              <Link to="cards">Nouns</Link>
            </span>
            <span
              onClick={() => {
                choose('A1adjectives');
              }}
              className="header__link">
              <Link to="cards">Adjectives</Link>
            </span>
            <span
              onClick={() => {
                choose('A1adverbs');
              }}
              className="header__link">
              <Link to="cards">Adverbs</Link>
            </span>
          </div>
        </span>
        <span
          onClick={() => {
            choose('custom');
          }}
          className="header__link">
          <Link to="cards">Custom</Link>
        </span>
        <div className="header__last-block">
          <div className="last-block"></div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  choose: PropTypes.func,
};

export default Header;

import React, { useMemo, useRef, useState } from 'react';
import styles from './Card.module.css';
import PropTypes from 'prop-types';

const Card = ({ word, index, succes }) => {
  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  const colors = [
    '#F44336',
    '#F44336',
    '#7B1FA2',
    '#512DA8',
    '#303F9F',
    '#1976D2',
    '#03A9F4',
    '#0097A7',
    '#00796B',
    '#4CAF50',
    '#8BC34A',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722',
  ];
  let input = useRef();
  let color = useMemo(() => {
    return randomInteger(0, colors.length);
  }, []);
  const [active, setActive] = useState(false);
  const [translate, setTranslate] = useState('');
  const [translated, setTranslated] = useState(false);
  useMemo(() => {
    if (translate.toLowerCase() === word.ru.toLowerCase()) {
      setTranslated(true);
      input.current.disabled = true;
      input.current.style = 'background-color: greenyellow';
      succes();
    }
  }, [translate]);

  useMemo(() => {
    setTranslate('');
  }, [word]);

  return (
    <div className={styles.card__container}>
      <div className={active ? styles.card__active : styles.card}>
        <div style={{ backgroundColor: colors[color] }} className={styles.back}>
          <span>{word.ru}</span>
        </div>
        <div style={{ backgroundColor: colors[color] }} className={styles.front}>
          <span>{word.en}</span>
        </div>
      </div>
      <input
        tabIndex={index + 1}
        ref={input}
        onChange={(e) => {
          setTranslate(e.target.value);
        }}
        value={translate}
        className={styles.input}
        type="text"
        placeholder="Translate..."
      />
      <button
        tabIndex={-(index + 1)}
        onClick={() => {
          setActive(!active);
        }}
        className={styles.button}>
        Flip
      </button>
    </div>
  );
};

Card.propTypes = {
  index: PropTypes.number,
  word: PropTypes.shape({
    en: PropTypes.string,
    ru: PropTypes.string,
  }),
  succes: PropTypes.func,
};

export default Card;

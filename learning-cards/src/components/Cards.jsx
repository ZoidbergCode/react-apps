import React, { useMemo, useRef, useState } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = ({ words }) => {
  const [pagValue, setPagValue] = useState(8);
  const [pagCounter, setPagCounter] = useState(0);
  const [translatedWords, setTranslatedWords] = useState(0);
  const [progress, setProgress] = useState(0);

  const getPercent = () => {
    let one = words.length / 100;
    return translatedWords / one;
  };

  let win = useRef();
  let goTop = useRef();

  useMemo(() => {
    if (translatedWords === words.length) {
      win.current.style = '';
    }
    if (translatedWords >= 20) {
      goTop.current.style = '';
    }
    if (translatedWords > 0) {
      setProgress(getPercent());
    }
  }, [translatedWords]);

  useMemo(() => {
    setPagValue(8);
    setPagCounter(0);
    setTranslatedWords(0);
    setProgress(0);
    if (translatedWords >= 20) {
      goTop.current.style = 'display: none';
    }
  }, [words]);

  useMemo(() => {
    if (pagCounter === 4) {
      setPagValue(pagValue + 4);
      setPagCounter(0);
    }
  }, [pagCounter]);

  const succes = () => {
    setTranslatedWords(translatedWords + 1);
    setPagCounter(pagCounter + 1);
  };
  return (
    <div className="cards">
      <div style={{ display: 'none' }} ref={win} className="cards__win">
        <span>All words are translated. You did a good job, keep it up! =D</span>
        <button
          onClick={() => {
            win.current.style = 'display: none';
          }}>
          Close
        </button>
      </div>
      <div className="cards__progress">
        <span>
          {translatedWords} / {words.length}
        </span>
        <div style={{ width: `${progress}%` }} className="cards__line"></div>
      </div>
      {words.map((word, index) => {
        if (index + 1 <= pagValue) {
          return <Card succes={succes} key={word.en} index={index} word={word} />;
        }
      })}
      <div ref={goTop} style={{ display: 'none' }} className="cards__top">
        <a href="#top">
          <span className="material-symbols-outlined">expand_less</span>
        </a>
      </div>
    </div>
  );
};

Cards.propTypes = {
  words: PropTypes.arrayOf(PropTypes.object),
};

export default Cards;

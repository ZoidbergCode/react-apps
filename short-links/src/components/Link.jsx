import React from 'react';

const Linkk = ({ target, short, counter }) => {
  const shortLink = 'http://79.143.31.216/s/' + short;
  return (
    <div className="Links__item l-item">
      <div className="l-item__target i_item__stroke">
        <span>Target: </span>
        <a target="_blank" href={target}>
          {target}
        </a>
      </div>
      <div className="l-item__short i_item__stroke">
        <span>Short: </span>
        <a target="_blank" href={shortLink}>
          {shortLink}
        </a>
      </div>
      <div className="l-item__counter i_item__stroke">
        <span>used: </span> <span>{counter} times</span>
      </div>
    </div>
  );
};

export default Linkk;

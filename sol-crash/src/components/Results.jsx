import React, { useMemo, useState } from 'react';

const Results = ({ crashStatus, result, results }) => {
  const styleTransparent = { display: 'none' };
  const memoValue = useMemo(() => {
    if (crashStatus) {
      console.log('results updated');
      results.push(result);
      results.shift();
    }
  }, [crashStatus]);
  return (
    <div className="results">
      <div className="results__container">
        {results.map((result, index) => {
          if (result < 2.3) {
            return (
              <span
                key={index}
                style={index % 2 == 0 ? { color: '#ff0000' } : styleTransparent}
                className="results__result">
                {result}x
              </span>
            );
          }
          if (result > 4.99) {
            return (
              <span
                key={index}
                style={index % 2 == 0 ? { color: 'yellow' } : styleTransparent}
                className="results__result">
                {result}x
              </span>
            );
          }
          return (
            <span
              key={index}
              style={index % 2 == 0 ? { color: '#41d315' } : styleTransparent}
              className="results__result">
              {result}x
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Results;

import React from 'react';
import TableMostProfit from './TableMostProfit';
import TableWins from './TableWins';

const Leaderboards = () => {
  return (
    <div className="leaderboards">
      <div className="leaderboards__container">
        <div className="leaderboards__boards boards">
          <div className="boards__most-profit">
            <div className="most-profit__container">
              <h2 className="boards__title">Most Profit</h2>
              <TableMostProfit />
            </div>
          </div>
          <div className="boards__highest-wins">
            <div className="wins__container">
              <h2 className="boards__title">Highest Wins</h2>
              <TableWins />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboards;

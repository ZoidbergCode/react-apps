import React from 'react';
import logo from './../images/logo.png';

const TableMostProfit = () => {
  return (
    <table className="most-profit">
      <tr className="most-profit__header most-profit__stroke">
        <td>DAO</td>
        <td>Rank</td>
        <td>Name</td>
        <td>Bets</td>
        <td>Profit</td>
      </tr>
      <tr className="most-profit__dark most-profit__stroke">
        <td>
          <img className="most-profit__image" alt="user" src={logo} />
        </td>
        <td>#1</td>
        <td className="most-profit__user">니애미</td>
        <td>215</td>
        <td className="most-profit__pink most-profit__sol">118 SOL</td>
      </tr>
      <tr className="most-profit__light most-profit__stroke">
        <td>
          <img className="most-profit__image" alt="user" src={logo} />
        </td>
        <td>#2</td>
        <td className="most-profit__user">Wallet (CMFv...3Daj)</td>
        <td>46</td>
        <td className="most-profit__pink most-profit__sol">114 SOL</td>
      </tr>
      <tr className="most-profit__dark most-profit__stroke">
        <td>
          <img className="most-profit__image" alt="user" src={logo} />
        </td>
        <td>#3</td>
        <td className="most-profit__user">Wallet (HiBm...X2oL)</td>
        <td>85</td>
        <td className="most-profit__pink most-profit__sol">87 SOL</td>
      </tr>
      <tr className="most-profit__light most-profit__stroke">
        <td>
          <img className="most-profit__image" alt="user" src={logo} />
        </td>
        <td>#4</td>
        <td className="most-profit__user">Wallet (9qXb...fpKp)</td>
        <td>38</td>
        <td className="most-profit__pink most-profit__sol">74 SOL</td>
      </tr>
      <tr className="most-profit__dark most-profit__stroke">
        <td>
          <img className="most-profit__image" alt="user" src={logo} />
        </td>
        <td>#5</td>
        <td className="most-profit__user">Wallet (4pfn...rVX1)</td>
        <td>46</td>
        <td className="most-profit__pink most-profit__sol">73 SOL</td>
      </tr>
    </table>
  );
};

export default TableMostProfit;

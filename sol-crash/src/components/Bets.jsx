import React, { useEffect, useMemo, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const Bets = ({ crashStatus, result, flag, players }) => {
  function random(min, max) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    return rand;
  }
  const [crashed, setCrashed] = useState(false);
  let memo4 = useMemo(() => {
    console.log(crashStatus, 'crash status');
    setCrashed(crashStatus);
    console.log(crashed, 'local crash status');
  }, [crashStatus]);

  let memo3 = useMemo(() => {}, []);

  useEffect(() => {
    if (crashed) {
      console.log('bets init:', true);
    }
  }, []);

  let memoFlag = useMemo(() => {
    if (flag) {
      flag = false;
      console.log('players updated:', true);
    }
  }, []);

  return (
    <div className="play__bets bets">
      <div className="bets__container">
        <table className="bets__table">
          <tr className="bets__header bets-header">
            <td className="bets-header__item item-1">User</td>
            <td className="bets-header__item item-2">Bet</td>
            <td className="bets-header__item item-3">Multiplier</td>
            <td className="bets-header__item item-4">Profit</td>
          </tr>
          {useMemo(() => {
            if (crashed) {
              return players.map((player, index) => {
                let styles;
                let winner;
                if (player.back <= result) {
                  winner = true;
                  styles = index % 2 === 0 ? 'bets__win bets__1' : 'bets__win bets__2';
                }
                if (player.back > result) {
                  winner = false;
                  styles = index % 2 === 0 ? 'bets__loose bets__1' : 'bets__loose bets__2';
                }
                if (random(1, 100) > 40) {
                  styles = 'bets__none';
                }
                return (
                  <tr className={styles}>
                    <td className="bets__item item-1">{player.name}</td>
                    <td className="bets__item item-2">{player.bet} SOL</td>
                    <td className="bets__item item-3">{winner ? player.back + `x` : '-'}</td>
                    <td className="bets__item item-4">
                      {winner
                        ? (Number(player.back) * Number(player.bet) - Number(player.bet)).toFixed(
                            4,
                          ) + ' SOL'
                        : '-'}
                    </td>
                  </tr>
                );
              });
            }
          }, [crashed])}
        </table>
        {useMemo(() => {
          if (!crashed) {
            return (
              <div className="containerBets">
                <div className="playersBets">Players place bets...</div>
                <div className="connectBets">Connect your wallet to see game details</div>
                <div style={{ padding: '15px 0', color: 'var(--text-color-2)' }}>
                  <CircularProgress disableShrink color="inherit" />
                </div>
              </div>
            );
          }
        }, [crashed])}
      </div>
    </div>
  );
};

export default Bets;

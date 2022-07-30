import React, { useEffect, useState } from 'react';
import Bets from './Bets';
import CanvasComponent from './CanvasComponent';
import Chat from './Chat';
import ChatInput from './ChatInput';
import Results from './Results';

const Play = () => {
  const users = [
    'frost',
    'Zigmund',
    'Darssian',
    'God__LIKE',
    'givememymoney',
    'Guru123',
    'MyWallet',
    'Alex',
    'Wallet (2C88...WDFP)',
    'Wallet (HGBa...GdW4)',
    'Wallet (HSyx...PUCF)',
    'Wallet (BDt1...Redi)',
    'Wallet (4ZJg...fkes)',
    'Wallet (DKjd...jxpt)',
    'Wallet (2yZF...rCgi)',
    'Wallet (EB3N...be6Z)',
    'Wallet (BLrQ...zsMH)',
    'Wallet (5N9P...h21Y)',
    'dannykozell',
    'BRIBRI0951',
    'Wallet (J3DG...7Tik)',
    'Brownie',
    'Wallet (3bWd...4Nus)',
    'Dimple',
    'Wallet (Frgx...j5K4)',
    'Cherry',
    'Wallet (Z1bn...NZwD)',
    'Wallet (Bh2m...mPhV)',
    'Wallet (DUkK...9fzp)',
    'Wallet (5PhW...Zeti)',
    'Wallet (5E5Y...poKS)',
    'Wallet (G8zX...UBDs)',
    'Wallet (3HuA...MpaV)',
    'Wallet (5N9P...h21Y)',
    'Wallet (ACmf...MBrR)',
    'Douz',
    'Wallet (FaPE...xXVv)',
    'Wallet (Driz...x6MN)',
    'Wallet (7x96...D74q)',
    'Wallet (AXke...YDWq)',
    'Wallet (BYFj...UTPn)',
    'Wallet (5Haw...eQVs)',
    'Wallet (7hBX...pmzx)',
    'Wallet (ADCM...UKLQ)',
    'Wallet (4nig...vbPs)',
    'Wallet (7ho7...tJkh)',
    'pablo',
    'p1ka',
    'REDBULL99',
    'JeSu3',
    'Tom Hopkins',
    'robber',
    'science 4000',
  ];

  const getUser = () => {
    let rand = (min, max) => {
      return Math.floor(min + Math.random() * (max + 1 - min));
    };
    return users[rand(0, users.length - 1)];
  };
  const getCrash = () => {
    const result = Number((Number((Math.random() * 10).toFixed(2)) + 0.2).toFixed(2));
    return result < 1 || result > 8 ? 2.41 : result;
  };
  const [crash, setCrash] = useState(getCrash());
  const [crashValue, setCrashValue] = useState(getCrash());
  const [crashed, setCrashed] = useState(true);
  let tempResults = [];
  for (let i = 0; i < 14; i++) {
    tempResults.push(getCrash());
  }
  const [results, setResults] = useState(tempResults);
  let init = true;
  let init2 = true;
  const getSeconds = (mls) => {
    let result = String(mls / 1000);
    if (!result[1]) {
      return `${result}.0`;
    }
    return result;
  };

  let crashCounter = crash;
  const startCrash = () => {
    setCrash(getCrash());
    crashCounter = 1.0;
    let timerCrash = setInterval(() => {
      crashCounter = Number((crashCounter + 0.01).toFixed(2));
      setCrashValue(crashCounter);
    }, 80);
    setTimeout(() => {
      clearInterval(timerCrash);
      setCrashed(true);
      init2 = true;
      console.log('Crash value: ', crash + 1, '.');
    }, crash * getCrash() * 100 * getCrash() * getCrash());
  };

  const [time, setTime] = useState(10);
  const [timerValue, setTimerValue] = useState(100);
  var counter = 100;
  const displayNone = { display: 'none' };
  const [styles, setStyles] = useState(displayNone);
  const [valueStyles, setValueStyles] = useState(displayNone);
  const startTimer = () => {
    counter = 100;
    init = false;
    let mls = 10000;
    setTimerValue(0);
    setValueStyles({ display: 'block' });
    let timerId = setInterval(() => {
      setStyles({ width: `${counter}%` });
      setTimerValue(counter - 1);
      mls = mls - 100;
      setTime(getSeconds(mls));
      counter--;
    }, 100);
    setTimeout(() => {
      clearInterval(timerId);
      setStyles(displayNone);
      setValueStyles(displayNone);
      startCrash();
      setCrashed(false);
    }, 10000);
  };

  useEffect(() => {
    if (init) {
      setInterval(() => {
        if (init2) {
          init2 = false;
          startTimer();
          console.log('Init: ', true);
        } else {
        }
      }, 10000);
    }
    init = false;
  }, []);

  return (
    <div className="play">
      <div className="play__container">
        <div className="game__container">
          <div className="play__game game">
            <div className="game__timer timer">
              <div style={valueStyles} className="timer__value">
                Next round in: {time}s
              </div>
              <div style={styles} className="timer__display"></div>
            </div>
            <div className="game__crash">
              {crashed ? (
                <span style={{ color: 'red' }}>CRASHED {crashValue + 'x'}</span>
              ) : (
                crashValue + 'x'
              )}
            </div>
            <CanvasComponent crashStatus={crashed} crash={crash * 7000} />
          </div>
          <div className="gamepad">
            <button className="trigger">Connect to play!</button>
            <div className="gamepad__description">
              There is no way for solcrash.io to store or steal information from the connection of
              your wallet, it is only used to keep track of playing data and giving you the ability
              to withdraw and deposit
            </div>
          </div>
          <Bets
            players={[
              // random ones will be display: none :)
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
              { name: getUser(), bet: (getCrash() / 100).toFixed(4), back: getCrash(), profit: 1 },
            ]}
            flag={true}
            crashStatus={crashed}
            result={crashValue}
          />
        </div>
        <Results crashStatus={crashed} result={crashValue} results={results} />
        <Chat init={true} />
        <ChatInput />
      </div>
    </div>
  );
};

export default Play;

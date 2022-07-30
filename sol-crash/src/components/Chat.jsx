import React, { useEffect, useMemo, useState } from 'react';
import Message from './Message';

const Chat = ({}) => {
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

  const bodys = [
    'How to get withdraw guys?',
    'Who can give me some sols?',
    'Its frikinn joke :D just no idea',
    'Somebody wins here?',
    'Sometimes you are winner, sometimes not ;/',
    'I want to be winner everytime =3',
    'My dad faks me :O',
    'Lol its not funny, why am I won here too much times ?',
    'If this will go as its going I will buy car for my dad guys ',
    'AHAHAHHAHAHAHAHAHHAHAHAHAHAHAHAHHAHA',
    'Dont spam please, guys',
    'We can try to rob this roulete',
    'I get something like 1k$ for 2 hours, lmao',
    'Does anybody loosed something?',
    'Just wait for 1x-2x crash and bet:)',
    'Who wants play together Minecraft?',
    'won 300$ LMAO AAOAOAO',
    'Its probably application problems. Im really not sure that I should have winning here',
    'Graphic lagging but its working, its okay :-)',
    'Need to develop a strategy to win this game',
    'In fact, the time will come and we will all lose :D',
    'I dont know about you, but Im done',
    'Not a bad way to earn money, maybe go to quit your job, what do u think?',
    'Again, hah',
    'Who wants to by strategy of winning every time? Discord: ********',
    '********* - discord, send me message to buy strategy of winning:)',
    'Subscribe on my youtube channel guys https://w***************',
    'i loosed lol',
    'Does any body have lags?',
    'Little bit lagging but its works anyway, you can win here really a lot of money',
    '*EARHING SOLS* easy peasy lemon squezy',
    'How to loose? I relly want to loose this crash but I cant',
    'watchin naruto and playin this game, awesome play loosin',
    'how is it going boys?',
    'great :)',
    'not so easy as i thinked before playing',
    'Guys if you want to dont have lags, just dont hide window with this crash game!!!',
    'Dont hide browser window, its will lag',
    'when you hidded google window: -_-... FUCK',
    '**** ********** ************',
    'Any moderators here?',
  ];

  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  const createMessage = () => {
    let name = randomInteger(0, users.length - 1);
    let body = randomInteger(0, bodys.length - 1);
    return { name: `${users[name]}`, body: `${bodys[body]}` };
  };
  const [messages, setMessages] = useState([]);
  let newMessages = [];
  var init = true;
  useEffect(() => {
    if (init) {
      init = false;
      setInterval(() => {
        let newMessage = createMessage();
        let temp = [...messages, createMessage()];
        setMessages(temp);
      }, randomInteger(1000, 10000));
    }
  }, []);

  return (
    <div className="play__chat chat">
      <div className="chat__container">
        {messages.map((message) => {
          return <Message key={Date.now()} message={message} />;
        })}
      </div>
    </div>
  );
};

export default Chat;

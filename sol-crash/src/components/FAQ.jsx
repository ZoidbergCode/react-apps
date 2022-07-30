import React from 'react';

const FAQ = () => {
  return (
    <div className="FAQ">
      <div className="FAQ__container">
        <h1 className="FAQ__title">Common Questions</h1>
        <div className="FAQ__content">
          <div className="FAQ__block faq-bloc">
            <h3 className="faq-bloc__title">How do I play?</h3>
            <div className="faq-bloc__text">
              Place a bet with any amount of Solana. Once the game starts, a multiplier will
              increase from 1x! You can cash out at any time while the multiplier is going up, but
              it will randomly "crash" meaning it will stop increasing. If you fail to cash out
              before it crashes, you will lose the amount that you bet, but if you cash out before,
              you will win your bet multiplied by the current multiplier.
            </div>
          </div>
          <hr className="FAQ__hr" />
          <div className="FAQ__block faq-bloc">
            <h3 className="faq-bloc__title">How long do deposits/withdrawals take?</h3>
            <div className="faq-bloc__text">
              Usually the Solana network confirms transactions very quickly, so on average it
              shouldn't take longer than 30 seconds. However, when there is a lot of traffic on the
              network, please wait up to 5 minutes for your deposit/withdrawal to be credited. After
              5 minutes, if the transaction still doesn't confirm, it means your SOL was never sent
              and therefore your account won't be credited. If this happens you will have to just
              try again.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

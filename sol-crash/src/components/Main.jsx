import React from 'react';
import logo from './../images/logo.png';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main-page">
      <div className="main-page__container">
        <div className="main-page__title-block title-block">
          <div className="title-block__logo">
            <img src={logo} alt="rocket" />
          </div>
          <h2 className="title-block__title">solcrash.io</h2>
          <p className="title-block__body">The most trusted gaming establishment on Solana</p>
          <div className="title-block__button">
            <Link to="/play">Play now</Link>
          </div>
        </div>
        <div className="main-page__stats stats">
          <div className="stats__items">
            <div className="stats__column">
              <div className="stats__item stats-item">
                <div className="stats-item__title">House Edge</div>
                <div className="stats-item__value">5%</div>
              </div>
            </div>
            <div className="stats__column">
              <div className="stats__item stats-item">
                <div className="stats-item__title">Wagered</div>
                <div className="stats-item__value">$700,000+</div>
              </div>
            </div>
            <div className="stats__column">
              <div className="stats__item stats-item">
                <div className="stats-item__title">Bankroll</div>
                <div className="stats-item__value">$15,000+</div>
              </div>
            </div>
          </div>
        </div>
        <hr className="main-page__hr" />
        <div className="main-page__advantages advantages">
          <div className="advantages__container">
            <div className="advantages__items">
              <div className="advantages__column">
                <div className="advantages__item adv-item">
                  <div className="adv-item__title">Easy</div>
                  <hr style={{ width: '100%' }} />
                  <div className="adv-item__body">
                    Bet on an increasing multiplier that grows until it randomly crashes. Cash out
                    before the crash or lose it all!
                  </div>
                </div>
              </div>
              <div className="advantages__column">
                <div className="advantages__item adv-item">
                  <div className="adv-item__title">Social</div>
                  <hr style={{ width: '100%' }} />
                  <div className="adv-item__body">
                    This game happens in real-time, meaning the whole community is synchronized.
                    Chat with other players while you have fun!
                  </div>
                </div>
              </div>
              <div className="advantages__column">
                <div className="advantages__item adv-item">
                  <div className="adv-item__title">Fair</div>
                  <hr style={{ width: '100%' }} />
                  <div className="adv-item__body">
                    All crash outcomes can be proven as fair. Visit the FAQ page for a technical
                    description and methods to check for yourself.
                  </div>
                </div>
              </div>
              <div className="advantages__column">
                <div className="advantages__item adv-item">
                  <div className="adv-item__title">Private</div>
                  <hr style={{ width: '100%' }} />
                  <div className="adv-item__body">
                    We don't collect any information except your public Solana address, and that's
                    only to keep track of your site balance.
                  </div>
                </div>
              </div>
              <div className="advantages__column">
                <div className="advantages__item adv-item">
                  <div className="adv-item__title">Invest</div>
                  <hr style={{ width: '100%' }} />
                  <div className="adv-item__body">
                    Holders of our NFT get a % of profits. Purchase one from our secondary
                    marketplace, MagicEden to join the house.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="main-page__hr" />
        <div className="main-page__wantlearmore wantlearmore">
          <h3 className="wantlearmore__title">Want to learn more?</h3>
          <div className="wantlearmore__body">
            Check out our frequently asked questions. Follow us on Twitter to stay updated and join
            our Discord to meet the community/ask questions!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

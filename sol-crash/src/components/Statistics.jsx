import React from 'react';
import logo from './../images/logo.png';
import Chat from './Chat';

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics__container">
        <h1 className="statistics__title">Statistics</h1>
        <div className="statistics__items">
          <div className="statistics__column">
            <div className="statistics__item stat-item">
              <div className="stat-item__img">
                <img src={logo} alt="statistic" />
              </div>
              <div className="stat-item__title">Total Users</div>
              <div className="stat-item__value">11690</div>
            </div>
          </div>
          <div className="statistics__column">
            <div className="statistics__item stat-item">
              <div className="stat-item__img">
                <img src={logo} alt="statistic" />
              </div>
              <div className="stat-item__title">Total Users</div>
              <div className="stat-item__value">11690</div>
            </div>
          </div>
          <div className="statistics__column">
            <div className="statistics__item stat-item">
              <div className="stat-item__img">
                <img src={logo} alt="statistic" />
              </div>
              <div className="stat-item__title">Total Users</div>
              <div className="stat-item__value">11690</div>
            </div>
          </div>
          <div className="statistics__column">
            <div className="statistics__item stat-item">
              <div className="stat-item__img">
                <img src={logo} alt="statistic" />
              </div>
              <div className="stat-item__title">Total Users</div>
              <div className="stat-item__value">11690</div>
            </div>
          </div>
          <div className="statistics__column">
            <div className="statistics__item stat-item">
              <div className="stat-item__img">
                <img src={logo} alt="statistic" />
              </div>
              <div className="stat-item__title">Total Users</div>
              <div className="stat-item__value">11690</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

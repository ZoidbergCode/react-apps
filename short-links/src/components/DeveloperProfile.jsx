import React from 'react';
import { Link } from 'react-router-dom';
import developerPic from './../images/developerWIthDakimakura.jpg';
import './../styles/DeveloperMessage.css';

const DeveloperProfile = () => {
  return (
    <div className="developer">
      <div className="developer__container">
        <div className="developer__title">
          <h2 className="developer__h2">I am trying to get your attention by all options :)</h2>
        </div>
        <div className="developer__body">
          <img className="developer__img" src={developerPic} alt="Developer with dakimakura" />
          <p className="developer__p point1">
            I made this photo special for this project. Actually i dont like it but i dont see more
            ways to get job:):). Here is the list of techs I have ever used:
            <ul className="developer__list">
              <li>HTML, CSS, JavaScript</li>
              <li>React, Mobx, Redux, React-router, Prop-Types, Axios, Fetch</li>
              <li>TypeScript little bit</li>
              <li>Scss, Sass, Css modules, Material UI</li>
              <li>Методология БЭМ, responsive & adaptive верстка</li>
            </ul>
          </p>

          <p className="developer__p">
            I have experience of developming with freelance something like half of year. Here is my
            Repo:{'   '}
            <a
              className="developer__link"
              target="_blank"
              href="https://github.com/ZoidbergCode?tab=repositories">
              github.
            </a>
            Also you can check my solutions on codewars:{' '}
            <a
              className="developer__link"
              target="_blank"
              href="https://www.codewars.com/users/coDe1nsIDE/completed_solutions">
              codewars.
            </a>
            My contacts:
            <ul className="developer__list">
              <li>
                <a className="developer__link" href="https://vk.com/p1kavk">
                  Vkontakte
                </a>
              </li>
              <li>Discord: p1ka#3596</li>
              <li>
                <a className="developer__link" href="https://t.me/p1kacoded">
                  Telegram
                </a>
              </li>
              <li>Phone number: +7 928 211 08 76</li>
              <li>WhatsApp registered on the same number</li>
            </ul>
            I am ready to work by hard on full time. Thanks for attention. Hope to see a feedback
            from you.
          </p>
        </div>
        <Link className="Links__button-back" to="/">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default DeveloperProfile;

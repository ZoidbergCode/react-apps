import React, { useState } from 'react';
import axios from 'axios';
import './../styles/Menu.css';
import Auth from '../store/Auth';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [message, setMessage] = useState(
    `Make your long link shorter. It's may be useful for twitter:)`,
  );
  const [shortLink, setShortLink] = useState('');
  const [styles, setStyles] = useState({});
  const [link, setLink] = useState('');
  const makeShort = (e, link) => {
    e.preventDefault();
    axios
      .post(
        `http://79.143.31.216/squeeze?link=${link}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${Auth.user.token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      )
      .then((response) => {
        console.log(response);
        setStyles({});
        setMessage('Your short link is ready, you are welcome :)');
        setShortLink(`http://79.143.31.216/s/${response.data.short}`);
      })
      .catch((error) => {
        console.log(error);
        setStyles({ background: 'darkred' });
      });
  };
  return (
    <nav className="Menu">
      <div className="Menu__description">{message}</div>
      <div className="Menu__container">
        <form className="Menu__form" action="post">
          <input
            style={styles}
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="Menu__input"
            type="text"
            placeholder="Your link"
          />
          <div className="Menu__input input-container">
            <input
              value={shortLink}
              className="input-shortLink"
              type="text"
              placeholder="Short link will be here"
            />
            <CopyToClipboard text={shortLink}>
              <span class="material-symbols-outlined">content_copy</span>
            </CopyToClipboard>
          </div>
          <button onClick={(e) => makeShort(e, link)} className="Menu__button">
            Make short
          </button>
          <Link className="Menu__button" to="/links">
            My links
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Menu;

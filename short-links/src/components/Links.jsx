import axios from 'axios';
import React from 'react';
import './../styles/Links.css';
import Auth from '../store/Auth';
import { useState, useEffect } from 'react';
import Linkk from './Link';
import { Link } from 'react-router-dom';

const Links = () => {
  const [sort, setSort] = useState('');
  const [links, setLinks] = useState([]);
  const [startFlag, setStartFlag] = useState(true);
  const [offset, setOffset] = useState(10);
  const sortLinks = (value) => {
    setSort(value);
    console.log(value);
    if (value !== 'counter') {
      setLinks([...links].sort((a, b) => a[value].localeCompare(b[value])));
    } else {
      setLinks([...links].sort((a, b) => b[value] - a[value]));
    }
  };
  useEffect(() => {
    if (startFlag) {
      setStartFlag(false);
      axios
        .get('http://79.143.31.216/statistics?order=desc_short&offset=0&limit=10', {
          headers: {
            Authorization: `Bearer ${Auth.user.token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
        .then((response) => {
          console.log(response);
          setLinks(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  const getStats = (e) => {
    e.preventDefault();
    axios
      .get(`http://79.143.31.216/statistics?order=desc_short&offset=${offset}&limit=10`, {
        headers: {
          Authorization: `Bearer ${Auth.user.token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then((response) => {
        console.log(response);
        setLinks([...links, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
    setOffset(offset + 10);
  };
  return (
    <>
      {Auth.user.token === null ? (
        <Link className="Login-to-use" to="/">
          Log in to use service
        </Link>
      ) : (
        <div className="Links">
          <div className="Links__container">
            <h4 className="Links__title">Your links statistic</h4>
            <div className="Links__menu">
              <select
                className="Links__select"
                defaultValue="Sorting"
                value={sort}
                onChange={(e) => sortLinks(e.target.value)}>
                <option value="" className="disabled-option" selected disabled>
                  Sort by...
                </option>
                <option value="target">target</option>
                <option value="short">short</option>
                <option value="counter">counter</option>
              </select>
              <Link className="Links__button-back" to="/">
                Go back
              </Link>
            </div>
            <div>
              {links.map((link) => {
                return (
                  <Linkk
                    key={link.id}
                    target={link.target}
                    short={link.short}
                    counter={link.counter}
                  />
                );
              })}
            </div>
            <div className="Links__button">
              {links.length === 0 ? (
                <div style={{ color: 'gray', fontSize: '25px', padding: '20px' }}>No links</div>
              ) : (
                <button onClick={(e) => getStats(e)}>More</button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Links;

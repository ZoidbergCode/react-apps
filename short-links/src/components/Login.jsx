import React, { useState } from 'react';
import axios from 'axios';
import './../styles/Login.css';
import Auth from './../store/Auth';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Login = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [status, setStatus] = useState({});
  const login = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://79.143.31.216/login`,
        `grant_type=&username=${name}&password=${pass}&scope=&client_id=&client_secret=`,
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          Auth.login(response.data.access_token, name, pass);
        }
        setStatus({});
        setName('');
        setPass('');
      })
      .catch((error) => {
        console.log(error);
        setStatus({ background: 'darkred' });
      });
  };
  return (
    <>
      {Auth.user.token === null ? (
        <div className="Login">
          <div className="Login__description">Log in to use the service</div>
          <div className="Login__container">
            <form className="Login__form" action="post">
              <input
                style={status}
                className="Login__form-input"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Username"
              />
              <input
                style={status}
                className="Login__form-input"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                type="text"
                placeholder="Password"
              />
              <button className="Login__form-button" onClick={(e) => login(e)}>
                Login
              </button>
            </form>
          </div>
          <div className="regLink">
            <Link to="/register">Create account</Link>
          </div>
        </div>
      ) : (
        <Menu />
      )}
    </>
  );
};

export default Login;

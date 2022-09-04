import React, { useState } from 'react';
import axios from 'axios';
import './../styles/Login.css';
import Auth from './../store/Auth';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [status, setStatus] = useState({});
  const [succes, setSucces] = useState(false);

  const login = (e) => {
    e.preventDefault();
    axios
      .post(`http://79.143.31.216/register?username=${name}&password=${pass}`)
      .then((response) => {
        console.log(response);
        setStatus({});
        setSucces(true);
      })
      .catch((error) => {
        console.log(error);
        setStatus({ background: 'darkred' });
      });
    setName('');
    setPass('');
  };
  return (
    <div className="Login">
      <div className="Login__description">
        {succes ? `You are registered, now log in.` : 'Register to use the service'}
      </div>
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
            Register
          </button>
        </form>
      </div>
      <div className="regLink">
        <Link to="/">Log in</Link>
      </div>
    </div>
  );
};

export default Register;

import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import './styles/App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Links from './components/Links';
import DeveloperProfile from './components/DeveloperProfile';

const App = () => {
  return (
    <div className="App">
      <div className="devMSG">
        <Link to="/developerMessage">Developer message</Link>
      </div>
      <div className="Login__title">
        <strong>Short Links</strong> service
      </div>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="" element={<Login />} />
        <Route path="links" element={<Links />} />
        <Route path="developerMessage" element={<DeveloperProfile />} />
      </Routes>
    </div>
  );
};

export default App;

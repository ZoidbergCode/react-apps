import axios from 'axios';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Info from './components/Info';
import Ingridients from './components/Ingridients';
import RandomCocktails from './components/RandomCocktails';
import Store from './components/Store';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="info" element={<Info />} />
        <Route path="ingridients" element={<Ingridients />} />
        <Route path="random" element={<RandomCocktails />} />
        <Route path="store" element={<Store />} />
        <Route path="/" element={<RandomCocktails />} />
      </Routes>
    </div>
  );
}

export default App;

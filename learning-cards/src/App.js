import React, { useState, Suspense } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import HowItWorks from './components/HowItWorks';
import library from './store/library';
function App() {
  const chooseWords = (array) => {
    setWords(library[array]);
  };
  const [words, setWords] = useState(library.custom);
  return (
    <div id="top" className="App">
      <Header choose={chooseWords} />

      <Routes>
        <Route path="/cards" element={<Cards words={words} />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/" element={<HowItWorks />} />
      </Routes>
    </div>
  );
}

export default App;

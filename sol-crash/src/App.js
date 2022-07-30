import Header from './components/Header';
import Main from './components/Main';
import Play from './components/Play';
import Leaderboards from './components/Leaderboards';
import Statistics from './components/Statistics';
import FAQ from './components/FAQ';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Main />} />
          <Route path="/play" element={<Play />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

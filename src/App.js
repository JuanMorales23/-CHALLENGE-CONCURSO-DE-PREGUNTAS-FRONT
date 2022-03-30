import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home'
import Settings from './components/Settings';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/settings" element={<Settings />} exact />
          <Route path="/game/:name" element={<Game />} exact />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

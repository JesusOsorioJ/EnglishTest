import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Hom';
import Subtitle from './pages/Subtitle'
import InfoTest from './pages/InfoTest';
import Tester from './pages/Tester';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Subtitle />} />
          <Route path="/subtitle/:id" element={<InfoTest />} />
          <Route path="/test/:id" element={<Tester />} />
          <Route path="/test/:id/:subid" element={<Tester />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

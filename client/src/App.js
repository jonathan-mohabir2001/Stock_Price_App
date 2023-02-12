import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Prices from './components/Prices';

function App() {
  return (
    <div className="App">
      <Home />

      <Route path="/contact" element={<Contact />} />
      <Route path="/prices" element={<Prices />} />
    </div>
  );
}

export default App;

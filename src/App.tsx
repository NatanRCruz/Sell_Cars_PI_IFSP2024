import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Vender1 from './screens/primeira.tsx';
import Vender2 from './screens/segunda.tsx';
import './App.css'

const App: React.FC = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Vender1 />} />
        <Route path="/segundaEtapa" element={<Vender2 />} />
      </Routes>
    </Router>
  );
};

export default App;

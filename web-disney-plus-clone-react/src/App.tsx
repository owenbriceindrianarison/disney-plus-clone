import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Detail from './pages/Detail';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/detail' element={<Detail />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

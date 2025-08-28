import React from 'react';
import './stylesheets/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Banner from './components/Banner';

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

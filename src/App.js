import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Events, Contact } from './components/pages/Pages';
import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/events" element={ <Events /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </div>
  )
}

export default App;

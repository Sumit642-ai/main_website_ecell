import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SponsorsPage from './pages/SponsorsPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sponsors" element={<SponsorsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;

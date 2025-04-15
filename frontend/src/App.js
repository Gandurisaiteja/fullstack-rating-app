import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Rate from './pages/Rate';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rate" element={<Rate />} />
      </Routes>
    </div>
  );
}

export default App;

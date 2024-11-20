import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './componentes/Navbar.jsx';
import './App.css'
import GenCard from './componentes/GenCard';
import Contact from './componentes/Contact.jsx';
import UserInfo from './componentes/UserInfo.jsx';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AppRoutes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:name" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;

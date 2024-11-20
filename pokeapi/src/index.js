import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Asegúrate de que esta línea esté presente en tu archivo index.js o App.jsx

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
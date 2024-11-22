import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Generation from "./components/Generation";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/gen1">Gen 1</Link></li>
          <li><Link to="/gen2">Gen 2</Link></li>
          <li><Link to="/gen3">Gen 3</Link></li>
          <li><Link to="/contacto/:name">Contacto</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gen1" element={<Generation gen={1} />} />
        <Route path="/gen2" element={<Generation gen={2} />} />
        <Route path="/gen3" element={<Generation gen={3} />} />
        <Route path="/contacto/:name" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

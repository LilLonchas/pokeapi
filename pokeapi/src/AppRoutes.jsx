import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GenCard from './componentes/GenCard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/gen1" element={<GenCard gen={1} />} />
      <Route path="/gen2" element={<GenCard gen={2} />} />
      <Route path="/gen3" element={<GenCard gen={3} />} />
    </Routes>
  );
}

export default AppRoutes;

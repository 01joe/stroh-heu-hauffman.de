import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Fuhrpark from './pages/Fuhrpark';
import Agrarprodukte from './pages/Agrarprodukte';
import SpeditionLogistik from './pages/SpeditionLogistik';
import Zertifikate from './pages/Zertifikate';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fuhrpark" element={<Fuhrpark />} />
          <Route path="/agrarprodukte" element={<Agrarprodukte />} />
          <Route path="/spedition-logistik" element={<SpeditionLogistik />} />
          <Route path="/zertifikate" element={<Zertifikate />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutzerklaerung" element={<Datenschutz />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

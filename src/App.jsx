import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ModulesPage from './pages/ModulesPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* Root = List Modul */}
          <Route path="/" element={<ModulesPage />} />
          {/* Detail Produk - Supports both /kelas/:slug and /:slug */}
          <Route path="/kelas/:slug" element={<SingleProductPage />} />
          <Route path="/:slug" element={<SingleProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

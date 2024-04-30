import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Sources from './pages/sources';
import Methodologies from './pages/methodologies';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element ={<Home />} />
          <Route path="/sources" element ={<Sources />} />
          <Route path="/methodologies" element ={<Methodologies />} />
          <Route path="/privacy" element ={<Privacy />} />
          <Route path="/terms" element ={<Terms />} />
          <Route path="*" element ={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

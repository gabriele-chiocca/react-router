import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/AboutUs" Component={AboutUsPage} />
          <Route path="/Products" Component={ProductsPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

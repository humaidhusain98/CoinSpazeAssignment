import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,  Routes,
  Route } from "react-router-dom";
import Payment from './pages/Payment';
import Login from './pages/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Payment />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>

  </React.StrictMode>
);


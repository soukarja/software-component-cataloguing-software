import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "./global.css"
import Home from './components/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import AddComponent from './components/addcomponent/addcomponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/add-component" element={<AddComponent />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

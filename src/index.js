import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import reportWebVitals from './reportWebVitals';
import Work from './components/Work'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Experience from './components/Experience';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="" element={<About />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

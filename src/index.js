import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from '../src/Home';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';

// import ReactDOM from 'react-router-dom';
// import {
//   Route,
//   BrowserRouter as Router,
//   Redirect,
//   Switch,
// } from 'react-router-dom'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>
// );
const routing = (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route path="/notfound" element={<NotFound/>}/>
        <Route path="*" element={<Navigate to ="/notfound" />}/> */}
      </Routes>
    </div>
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

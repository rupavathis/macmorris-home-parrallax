import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Map from './Map'
import Search from './Search';
import Database from './Database';

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Map />
  </React.StrictMode>
);

const root3 = ReactDOM.createRoot(document.getElementById('search'));

root3.render(
  <React.StrictMode>
    <Search />
  </React.StrictMode>
);

const database = ReactDOM.createRoot(document.getElementById('database'));

database.render(
  <React.StrictMode>
    <Database />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

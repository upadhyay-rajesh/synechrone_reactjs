import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './apphoc';
import Day5Stateless from './day5stateless';
import Day5StatelessRef from './day5statelessref';
import AppStateful from './AppStateful';
import reportWebVitals from './reportWebVitals';
import StopWatch from './lifecycle';
import FetchUser from './mount';
import ThemeToggler from './updatecycle';
import StudentRecords from './statefulcomponents/StudentsRecords';
import FactorialCalculator from './usememo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter basename='/MimicsAndXorn'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

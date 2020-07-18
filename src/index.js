import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import ScrollToTop from './components/ScrollToTop';
import { HashRouter } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <ScrollToTop />
    <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


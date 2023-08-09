import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorsCtxProvider } from './styles/Colors';
import { ContextProvider } from './utils/Context';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorsCtxProvider>
      <ContextProvider>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </ContextProvider>
    </ColorsCtxProvider>
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { ResultContextProvider } from './components/contexts/ResultContextProvider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ResultContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </React.StrictMode>
  </ResultContextProvider>
);



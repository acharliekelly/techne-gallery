import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/index.scss';
import { GalleryProvider } from './context/GalleryContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GalleryProvider>
        <App />
      </GalleryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
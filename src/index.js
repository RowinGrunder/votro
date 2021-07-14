import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SongContextProvider from './contexts/SongContext';

ReactDOM.render(
  <React.StrictMode>
    <SongContextProvider>
      <App />
    </SongContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

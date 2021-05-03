import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { AppContextProvider } from './store/AppContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

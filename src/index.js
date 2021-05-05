import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { AppContextProvider } from './store/AppContext';
import App from './App';

/*
 * All the app is surrounded by a context provider that supplies
 * a state with a reducer function to all the components. This makes
 * it easy for us to update the state in different points in the app
 * without cluttering our components with a lot of lifted state.
 */
ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

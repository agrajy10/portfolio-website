import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { AppProvider } from './context/AppContext';
import GlobalFonts from './styles/globalFonts';

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

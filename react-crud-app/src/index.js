import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ContactContextProvider } from './context/contact-context';
import App from './App';

import 'fomantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <ContactContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContactContextProvider>,
  document.getElementById('root')
);

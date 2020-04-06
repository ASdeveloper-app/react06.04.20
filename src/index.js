import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

// Estilos
import './index.css';
import './App.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import theme from './theme';

// Rutas
import App from './App';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CSSReset />
      <Provider store={ store }>
        <Router>
          <App />
        </Router>
      </Provider>
  </ThemeProvider>, 
  document.getElementById('root')
);

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import theme from './theme'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Router>
      <App />
    </Router>
  </ThemeProvider>, 
  document.getElementById('root')
);

serviceWorker.unregister();

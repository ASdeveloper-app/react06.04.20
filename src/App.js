import React from 'react';
import './App.css';

import Home from './pages/Home';
import News from './pages/News';
import Error from './pages/Error';
// Character
import Characters from './pages/Characters';
import Character from './pages/Character';
// Episode
import Episodes from './pages/Episodes';
import Episode from './pages/Episode';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <>
      <Provider store = { store }>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/news" component={News}/>
        <Route exact path="/characters" component={Characters}/>
        <Route exact path="/character/1" component={Character}/>
        <Route exact path="/episodes" component={Episodes}/>
        <Route exact path="/episode/1" component={Episode}/>
        <Route component={Error}/>
      </Switch>  
      <Footer/>
      </Provider>
    </>
  );
}

export default App;


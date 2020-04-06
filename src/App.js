import React from 'react';

import Home from './pages/Home';
import News from './pages/News';
import Error from './pages/Error';
// Character
import Characters from './pages/Characters';
import Character from './pages/Character';
// Episode
import Episodes from './pages/Episodes';
import Episode from './pages/Episode';
// Location
import Locations from './pages/Locations';
import Location from './pages/Location';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Redux


function App() {
  return (
    <>
      <Navbar/>
        <br/>
        <br/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/news" component={News}/>
          <Route exact path="/characters" component={Characters}/>
          <Route exact path="/characters/1" component={Character}/>
          <Route exact path="/episodes" component={Episodes}/>
          <Route exact path="/episodes/1" component={Episode}/>
          <Route exact path="/locations" component={Locations}/>
          <Route exact path="/locations/1" component={Location}/>
          <Route component={Error}/>
        </Switch>  
        <br/>
        <br/>
      <Footer/>
    </>
  );
}

export default App;


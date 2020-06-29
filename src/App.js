import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import {Switch,Route,withRouter,Link} from 'react-router-dom'


import Hats from './components/Hats';
import Sneakers from './components/Sneakers';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
         <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route exact path='/cart' component={Cart}/>
     </Switch>
       
     </div>
  );
}

export default withRouter( App);

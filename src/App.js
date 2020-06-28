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
    <nav className="navbar  navbar-expand-lg navbar-dark bg-dark ">
  <a className="navbar-brand" href="/">IMSS</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse">
  
    <ul className="nav justify-content-center ">
      <li className="nav-item active">
        <a className="nav-link" href="/"> SHOP<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/cart">CART</a>
      </li>
    </ul>
    
  </div>
</nav>
     <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route exact path='/cart' component={Cart}/>
     </Switch>
       
     </div>
  );
}

export default withRouter( App);

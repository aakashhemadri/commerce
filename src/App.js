import React, { Component } from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import CartPage from './components/CartPage.js';
import ProductPage from './components/ProductPage.js';
import HomePage from './components/HomePage.js';
import LoginPage from './components/LoginPage';
// import FacebookLoginWithButton from 'react-facebook-login';

// Facebook Sign-in
const responseFacebook = (response) => {
  console.log(response);
}

const componentClicked = () => {
  console.log( "Clicked!" )
}

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/commerce/product-list" component={(props) => <HomePage {...props}/>} />
          <Route path="/commerce/product" component={(props) => <ProductPage {...props}/>} />
          <Route path="/commerce/cart" component={(props) => <CartPage {...props}/>} />
          <Route component={(props) => <HomePage {...props}/>} />
        </Switch>
      </Router>

    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ProductPage from './components/ProductPage.js';
import ProductsListPage from './components/ProductsListPage.js';
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
        <div>
          <Switch>
            <Route path="/product-list" component={ProductsListPage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/">
              <ProductsListPage />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;

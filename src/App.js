import React, { Component } from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import CartPage from './components/CartPage.js';
import ProductPage from './components/ProductPage.js';
import ProductsListPage from './components/ProductsListPage.js';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/product-list" component={ProductsListPage} />
          <Route path="/product" component={ProductPage} />
          <Route path="/cart" component={CartPage} />
          <Route component={ProductsListPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;

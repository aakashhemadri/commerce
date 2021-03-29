import React, { Component } from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ProductsListPage from './components/ProductsListPage.js';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/product-list">
              <ProductsListPage />
            </Route>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route path="/">
              <ProductsListPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function ProductPage() {
  return (
    <p>product page</p>
  );
}

export default App;

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

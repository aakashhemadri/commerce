import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const DefaultNavbar = React.lazy(() => import('./DefaultNavbar.js'));

const CartView = React.lazy(() => import('../views/CartView.js'));
const ProductView = React.lazy(() => import('../views/ProductView.js'));
const HomeView = React.lazy(() => import('../views/HomeView.js'));

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <DefaultNavbar />
                    <Router>
                        <Switch>
                            <Route path="/commerce/product-list" component={(props) => <HomeView {...props} />} />
                            <Route path="/commerce/product" component={(props) => <ProductView {...props} />} />
                            <Route path="/commerce/cart" component={(props) => <CartView {...props} />} />
                            <Route component={(props) => <HomeView {...props} />} />
                        </Switch>
                    </Router>
            </React.Fragment>
        );
    }
}

export default App;

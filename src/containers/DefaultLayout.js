import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import config from '../config.js';

const DefaultNavbar = React.lazy(() => import('./DefaultNavbar.js'));

const CartView = React.lazy(() => import('../views/CartView.js'));
const ProductView = React.lazy(() => import('../views/ProductView.js'));
const HomeView = React.lazy(() => import('../views/HomeView.js'));
const LoginView = React.lazy(() => import('../views/LoginView.js'));

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class='page-container'>
                <DefaultNavbar />
                <Router>
                    <Switch>
                        <Route path={config.BASE_PATH + "/home"} component={(props) => <HomeView {...props} />} />
                        <Route path={config.BASE_PATH + "/product"} component={(props) => <ProductView {...props} />} />
                        <Route path={config.BASE_PATH + "/cart"} component={(props) => <CartView {...props} />} />
                        <Route path={config.BASE_PATH + "/login"} component={(props) => <LoginView {...props} />} />
                        <Route component={(props) => <HomeView {...props} />} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

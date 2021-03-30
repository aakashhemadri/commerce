import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import NavBar from './NavBar.js';
import CartItem from './CartItem.js';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar />
        <CartItem />
      </div>
    );
  }
}

export default CartPage;

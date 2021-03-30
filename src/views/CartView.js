import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import CartItem from '../components/CartItem.js';

class CartView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CartItem />
    );
  }
}

export default CartView;

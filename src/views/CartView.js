import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import config from '../config';
import CartItem from '../components/CartItem.js';

import axios from 'axios';
import { Container } from 'reactstrap';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItemsList: [
      ],
    }
  }

  componentDidMount() {
    axios.get(config.BASE_PROXY + '/cart/list')
      .then((res) => {
        this.setState({
          cartItemsList: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <Container>
        {this.cartItems(this.state.cartItemsList)}
        </Container>
      </div>
    );
  }

  cartItems(items, index) {
    return (
      <React.Fragment>
        {items.map((item) => <CartItem item={item}/>)}
      </React.Fragment>
    )
  }
}

export default CartPage;

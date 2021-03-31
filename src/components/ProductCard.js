import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios';

import {
  Link,
} from "react-router-dom";
import config from '../config';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article class='m-card'>
        <div class="m-card__picture">
          <Link to={{
            pathname: config.BASE_PATH + "/product",
            state: this.props.item,
          }}>
            <img class='m-card__picture-background' src={this.props.item.imageURL} alt={this.props.item.name + " Image"} />
          </Link>
        </div>
        <div class="m-card__info">
          <Link to={{
            pathname: config.BASE_PATH + "/product",
            state: this.props.item,
          }}>
            <title class='.m-card__title'>{this.props.item.name}</title>
          </Link>
          <div class="m-card__tag">{'Rs.' + this.props.item.price}</div>
          <div class='m-button primary' onClick={() => this.addToCart(this.props)} >Add to Cart</div>
        </div>
      </article>
    );
  }

  addToCart(props) {
    axios.post(config.PROXY_URL + config.BASE_PROXY + '/cart', {
      products: {
        "product": this.props.item._id,
        "quantity": 1
      }
    });
  }
};

export default ProductCard;

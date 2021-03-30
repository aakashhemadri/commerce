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

class ProductCard extends React.Component
{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Link to={{
          pathname: "/commerce/product",
          state: this.props.item,
        }}>
          <CardImg top width="100%" src={this.props.item.imageURL} alt={this.props.item.name + " Image"} />
        </Link>
        <CardBody>
          <Link to={{
            pathname: "/commerce/product",
            state: this.props.item,
          }}>
            <CardTitle tag="h5">{this.props.item.name}</CardTitle>
          </Link>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{"$" + this.props.item.price}</CardSubtitle>
          <Button onClick={() => this.addToCart(this.props)} >Add to Cart</Button>
        </CardBody>
      </Card >
    );
  }

  addToCart(props) {
    axios.post('/api/cart/', {
        products: {
          "product": this.props.item._id,
          "quantity": 1
        }
    });
  }
};

export default ProductCard;

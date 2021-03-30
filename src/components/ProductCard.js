import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import {
  Link,
} from "react-router-dom";

const ProductCard = (props) => {
  return (
    <Link to={{
      pathname: "/commerce/product",
      state: props.item,
    }}>
      <Card>
        <CardImg top width="100%" src={props.item.imageURL} alt="Product Image" />
        <CardBody>
          <CardTitle tag="h5">{props.item.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{"$" + props.item.price}</CardSubtitle>
          <Button>Add to Cart</Button>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProductCard;

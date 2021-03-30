import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import {
  Link,
} from "react-router-dom";

const ProductCard = (props) => {
  return (
    <Card>
      <Link to={{
        pathname: "/commerce/product",
        state: props.item,
      }}>
        <CardImg top width="100%" src={props.item.imageURL} alt={props.item.name + " Image"} />
      </Link>
      <CardBody>
        <Link to={{
          pathname: "/commerce/product",
          state: props.item,
        }}>
          <CardTitle tag="h5">{props.item.name}</CardTitle>
        </Link>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{"$" + props.item.price}</CardSubtitle>
        <Button>Add to Cart</Button>
      </CardBody>
    </Card >

  );
};

export default ProductCard;

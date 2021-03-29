import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ProductCard = (props) => {
  return (
    <Card>
      <a href={"/product/" + props.id}>
				<CardImg top width="100%" src={props.imageUrl} alt="Product Image" />
      </a>
      <CardBody>
        <a href={"/product?id=" + props.id}>
          <CardTitle tag="h5">{props.name}</CardTitle>
        </a>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{"$" + props.price}</CardSubtitle>
        <CardText>{props.description}</CardText>
        <Button>Add to Cart</Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;

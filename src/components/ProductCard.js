import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ProductCard = (props) => {
  return (
    <div>
      <Card>
				<CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Dell Laptop</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">999.49$</CardSubtitle>
          <CardText>
						Dell 16 inch laptop with core i5 and 8GB RAM
					</CardText>
          <Button>Buy</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;

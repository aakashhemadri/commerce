import React from 'react';
import { Row, Col } from 'reactstrap';

import NavBar from './NavBar.js';
  import ProductCard from './ProductCard.js';

class ProductsListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        "name": "Loading",
        "price": "Loading",
        "description": "Loading",
        "imageURL": "Loading"
      }],
    }
  }

  componentDidMount() {
    fetch('/api/product/list')
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    var product_cards = this.state.data.map(function(product, index) {
    return (
       <Col>
          <ProductCard id = {product["_id"]}
            name = {product["name"]}
            price = {product["price"]}
            description = {product["description"]}
            imageUrl = {product["imageURL"]}
  	      />
        </Col>
        );
     });

    return (
      <div className="App">
        <NavBar />
        <Row sm="4">
          {product_cards}
        </Row>
      </div>
    );
  }
}

export default ProductsListPage;

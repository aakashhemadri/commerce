import React from 'react';
import NavBar from './NavBar.js';
import { Row, Col } from 'reactstrap';
import ProductCard from './ProductCard.js';

class ProductPage extends React.Component {
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
    const queryString = require('query-string');
    let params = queryString.parse(this.props.location.search)
    fetch('/api/product/' + params["id"])
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }

  render() {

    return (
        <div>
        <NavBar />
        
        <div>
          {this.state.data["imageURL"]}
        </div>
        
        <div>
          Product Description :
          <div>
            {this.state.data["description"]}
          </div>
        </div>

        <div>    
          Product Details :
          <div>
            Name : {this.state.data["name"]}
          </div>
          <div>
            Price : {this.state.data["price"]}
          </div>
        </div>

      </div>
    );
  }
}

export default ProductPage;

import React from 'react';
import {
  Row,
} from 'reactstrap';

import ProductCard from '../components/ProductCard.js';
import axios from 'axios';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [{
        "name": "",
        "description": "",
        "category": "",
        "imageURL": "",
        "price": "",
        "reviews": [],
        "offers": [],
        "seller": ""
      }],
    }

    this.productCards = this.productCards.bind(this);
  }

  componentDidMount() {
    axios.get('/api/product/list')
      .then((res) => {
        this.setState({
          productList: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <React.Fragment>
        <div className="App" >
          <Row sm="4">
            {this.productCards(this.state.productList)}
          </Row>
        </div>
      </React.Fragment>

    );
  }

  productCards(items, index) {
    return (
      <React.Fragment>
        {items.map((item) => <ProductCard item={item}/>)}
      </React.Fragment>
    )
  }
}

export default HomePage;
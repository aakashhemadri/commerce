import React from 'react';
import NavBar from './NavBar.js';

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

  render() {
    return (
      <div>
        <NavBar />
        Product page
      </div>
    );
  }
}

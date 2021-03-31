import React from 'react';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.location.state
    }
  }

  render() {
    return (
      <div class='product'>
        <img src={this.state.item.imageURL} class='product-image' />
        <div class='product-body'>
          <div class='product-title'>
            {this.state.item.name}
          </div>
          <div class='product-price'>
            Rs. {this.state.item.price}
          </div>
          <div class='product-description'>
            {this.state.item.description}
          </div>
        </div>
        <div class='product-information'>

        </div>
        <div class='product-reviews'>

        </div>
        <div class='product-recommendations'>

        </div>
      </div>
    );
  }
}

export default ProductPage;

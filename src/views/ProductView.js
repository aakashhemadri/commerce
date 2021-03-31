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
      <div>
        <img src={this.state.item.imageURL} />
        <div>
          Product Description :
            {this.state.item.description}
        </div>

        <div>
          Product Details :
          <div>
            Name : {this.state.item.name}
          </div>
          <div>
            Price : {this.state.item.price}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;

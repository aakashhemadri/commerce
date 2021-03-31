import React from 'react';
import config from '../config.js';
import axios from 'axios';
import ReviewCard from '../components/ReviewCard.js';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.location.state,
      reviews: [],
    }
  }

  componentDidMount() {
    var i;
    for (i = 0; i < this.state.item.reviews.length; i++) {
      axios.get(config.PROXY_URL + config.BASE_PROXY + '/review/' + this.state.item.reviews[i])
        .then((res) => {
          var revs = this.state.reviews;
          revs.push(res.data);
          this.setState({
            item: this.state.item,
            reviews: revs,
          });
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  render() {
    return (
    <React.Fragment>
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
        <div class='product-recommendations'>

        </div>
      </div>
      <div class='product-reviews'>
        <h4>
          Reviews
        </h4>
        {this.reviews(this.state.reviews)}
      </div>
    </React.Fragment>
    );
  }

  reviews(items, index) {
    return (
      <React.Fragment>
        {items.map((item) => <ReviewCard item={item} />)}
      </React.Fragment>
    );
  }

}

export default ProductPage;

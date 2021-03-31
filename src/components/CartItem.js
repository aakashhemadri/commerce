import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Card, CardImg,
  CardTitle, Button,
  Row, Col
} from 'reactstrap';
import axios from 'axios';
import config from '../config.js';


class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        imageURL: "",
        name: "",
        price: ""
      }
    }
  }

  componentDidMount() {
    axios.get(config.PROXY_URL +  config.BASE_PROXY + '/product/' + this.props.item.products[0].product)
      .then((res) => {
        this.setState({
          product: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <Card>
        <Row>
          <Col>
            <CardImg src={this.state.product.imageURL} />
          </Col>
          <Col sm="6">
            <CardTitle>{this.state.product.name}</CardTitle>
          </Col>
          <Col>
            Quantity: {this.props.item.products[0].quantity}
          </Col>
          <Col>
            <Row>
              Price: {this.state.product.price * this.props.item.products[0].quantity}
            </Row>
            <Row>
              <Button onClick={() => {this.removeItem()} } >
                Remove from cart
              </Button>
            </Row>
          </Col>
        </Row>
      </Card>
    );
  }

  removeItem() {
    axios.delete(config.PROXY_URL + config.BASE_PROXY + "/cart/" + this.state.product._id).then(
      function(response) {
        console.log("Respone:" +response);
      }
    );
    //window.location.reload();
  }
}

export default CartItem;

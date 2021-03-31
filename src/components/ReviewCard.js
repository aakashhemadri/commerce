import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Card, CardImg,
  CardTitle, Button,
  Row, Col
} from 'reactstrap';
import axios from 'axios';
import config from '../config.js';

class ReviewCard extends React.Component
{
  constructor(props) {
    super(props);
    console.log(props.item);
    this.state = {
      title: props.item.title,
      description: props.item.description,
      rating: props.item.rating[0]["description"]
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.title} - {this.state.rating} out of 5
        </div>
        <div>
          {this.state.description}
        </div>
        <hr/>
      </React.Fragment>
    );
  }
}

export default ReviewCard;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ProductCard from './components/ProductCard.js';
import { Row, Col } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = { message: '' };
  }

  componentDidMount() {
    fetch('/api/message')
      .then(response => response.json())
      .then(json => this.setState({ message: json }));
  }

  render() {
    return (
      <div className="App">
			  <NavBar />
				<div>
					<Row>
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</Row>
				</div>
      </div>
    );
  }
}

export default App;

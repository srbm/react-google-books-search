import React, { Component } from 'react';
import './resultsItem.scss';

class ResultItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <img src={this.props.image} alt={"book cover of " + this.props.title} />
        <div>
          <h2>{this.props.title}</h2>
          <h3>{this.props.author}</h3>
          <p>Price: {this.props.price}</p>
          <p>{this.props.description}</p>
        </div>
      </li>
    );
  }
}

export default ResultItem;
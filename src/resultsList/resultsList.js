import React, { Component } from 'react';
import './resultsList.scss'

import ResultItem from '../resultsItem/resultsItem';

class ResultsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = this.props.books.map((book, index) => {
      return (<ResultItem
        key={index}
        title={book.title}
        subtitle={book.subtitle}
        author={book.author}
        description={book.description}
        image={book.thumbnail}
        price={book.price}
      />)
    })
    return (
      <div>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}

export default ResultsList;
import React from 'react';
import './App.scss';

import SearchForm from './searchForm/searchForm';
import ResultsList from './resultsList/resultsList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
    }
  }
  componentDidMount() {
    const params = {
      q: 'ishmael',
      filter: 'ebooks',
      maxResults: 10,

    }
    const url = `https://www.googleapis.com/books/v1/volumes?q=${params.q}&maxResults=${params.maxResults}`
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('didnt work this time');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        const books = data.items.map(book => {
          let price;
          book.saleInfo.saleability === "FOR_SALE"
          ? price = book.saleInfo.retailPrice.amount
          : price = "Not for sale";
          return {
            "author": book.volumeInfo.authors,
            "title": book.volumeInfo.title,
            "subtitle": book.volumeInfo.subtitle,
            "description": book.volumeInfo.description,
            "thumbnail": book.volumeInfo.imageLinks.smallThumbnail,
            "price": price,
          }}
        );
        console.log(books);
        this.setState({
          books: books,
        });
      })
      .catch(err => {
        console.log(err.message);
      })
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Search Books</h1>
        </header>
        <main>
          <SearchForm />
          <ResultsList books={this.state.books}/>
        </main>
      </div>
    )
  }
}

export default App;

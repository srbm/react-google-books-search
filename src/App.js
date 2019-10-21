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
  handleSearch(search) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search.book}&filter=${search.filter}&printType=${search.printType}&maxResults=10&key=AIzaSyCa46rR-S9qDK3DDN2uXheJo63NVxGayLs`
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('fetch didnt work this time');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const books = data.items.map(book => {
          let price, thumbnail;
          book.saleInfo.saleability === "FOR_SALE"
          ? price = book.saleInfo.retailPrice.amount
          : price = "Not for sale";
          book.volumeInfo.imageLinks
          ? thumbnail = book.volumeInfo.imageLinks.smallThumbnail
          : thumbnail = "";
          return {
            "author": book.volumeInfo.authors,
            "title": book.volumeInfo.title,
            "subtitle": book.volumeInfo.subtitle,
            "description": book.volumeInfo.description,
            "thumbnail": thumbnail,
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
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <SearchForm handleSearch={search => this.handleSearch(search)}/>
          <ResultsList books={this.state.books}/>
        </main>
      </div>
    )
  }
}

export default App;

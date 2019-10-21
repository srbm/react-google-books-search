import React, { Component } from 'react';
import './searchForm.scss';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: "",
      printType: "all",
      filter: "partial"
    };
  }
  bookChange(book) {
    this.setState({
      book,
    });
  }
  printTypeChange(printType) {
    this.setState({
      printType,
    });
  }
  filterChange(filter) {
    this.setState({
      filter,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    // const searchQuery = this.state;
    this.props.handleSearch(this.state);
  }
  render() {
    return (
      <section>
        <form onSubmit={e => this.handleSubmit(e)}>
          <fieldset>
            <label htmlFor="search">Search</label>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Book"
              value={this.state.title}
              onChange={e => this.bookChange(e.target.value)} />
            <button type="submit">Search</button>
            <label htmlFor="print-type">Print Type: </label>
            <select id="print-type" onChange={e => this.printTypeChange(e.target.value)}>
              {/* {printOptions} */}
              <option default value="all">All</option>
              <option value="books">Books</option>
              <option value="magazines">Magazines</option>
            </select>
            <label htmlFor="filter">Filter</label>
            <select id="filter" onChange={e => this.filterChange(e.target.value)}>
              {/* {bookOptions} */}
              <option default value="partial">none</option>
              <option value="ebooks">ebooks</option>
              <option value="free-ebooks">free ebooks</option>
              <option value="paid-ebooks">paid ebooks</option>
            </select>
          </fieldset>
        </form>
      </section>
    )
  }
}

export default SearchForm;

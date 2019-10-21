import React, { Component } from 'react';
import './searchForm.scss';

class SearchForm extends Component {
  render() {
    return (
      <section>
        <form>
          <legend>Search Books</legend>
          <fieldset>
            <label htmlFor="search">Search</label>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Ishmael"
              value="" />
            <button type="submit">Search</button>
            <label htmlFor="print-type"></label>
            <select id="print-type">
              {/* {printOptions} */}
            </select>
            <label htmlFor="book-type"></label>
            <select id="book-type">
              {/* {bookOptions} */}
            </select>
          </fieldset>
        </form>
      </section>
    )
  }
}

export default SearchForm;

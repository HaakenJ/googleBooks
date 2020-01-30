import React, { Component } from 'react';
import { Nav, NavItem } from "./components/Nav";
import Banner from "./components/Banner";
import { SearchBar, Input } from "./components/SearchBar";
import SearchBtn from "./components/SearchBtn";
import Results from "./components/Results";
import Book from "./components/Book";
import API from "../utils/API";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        };
        this.saveBook = this.saveBook.bind(this);
        this.searchBooks = this.searchBooks.bind(this);
        this.loadBooks = this.loadBooks.bind(this);
    }

    findBook = (title) => {
      for (let i = 0; i < this.state.books.length; i++) {
        if (this.state.books[i].title === title) {
          return this.state.books[i];
        }
      }
      return null;
    }

    loadBooks = () => {
        API.getBooks()
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.error(err));
    }

    saveBook(title) {
        const book = this.findBook(title);
        API.saveBook(book)
          .then(res => console.log('Book has been saved'))
          .catch(err => console.error(err));
    }

    searchBooks = event => {
        event.preventDefault();

        API.searchBooks()
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
              <Nav logo="GoogleBooks">
                <NavItem path="/books/search" title="Search" />
                <NavItem path="/books/saved" title="Saved" />
              </Nav>
              <Banner />
              <SearchBar>
                <Input>
                  <SearchBtn onclick={this.searchBooks} />
                </Input>
              </SearchBar>
              <Results title="Results">
                {this.state.books.map(book => (
                    <Book 
                    title={book.title}
                    description={book.description}
                    authors={book.authors}
                    image={book.image}
                    link={book.link}
                    onSave={this.saveBook}
                  />
                ))}
              </Results>
            </div>
        )
    }
}

export default Search;
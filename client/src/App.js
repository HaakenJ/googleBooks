import React from 'react';
import { Nav, NavItem } from "./components/Nav";
import Banner from "./components/Banner";
import { SearchBar, Input } from "./components/SearchBar";
import SearchBtn from "./components/SearchBtn";
import Results from "./components/Results";
import Book from "./components/Book";
import './App.css';

const hPotter = {
  title: "Harry Potter",
  description: "A lovely book about the occult, magic, and witchcraft that pitches children against evil wizards bent on destroying the world",
  authors: ["J.K. Rowling", "Alister Crowley (probably)"],
  image: "https://thatoregonlife.com/wp-content/uploads/2020/01/harry-potter-events-in-Oregon-2020.jpg",
  link: "https://www.google.com/books/edition/Harry_Potter_and_the_Philosopher_s_Stone/czK9nQEACAAJ?hl=en"
};

function App() {
  return (
    <div className="App">
      <Nav logo="GoogleBooks">
        <NavItem path="/books/search" title="Search" />
        <NavItem path="/books/saved" title="Saved" />
      </Nav>
      <Banner />
      <SearchBar>
        <Input>
          <SearchBtn />
        </Input>
      </SearchBar>
      <Results title="Results">
        <Book 
          title={hPotter.title}
          description={hPotter.description}
          authors={hPotter.authors}
          image={hPotter.image}
          link={hPotter.link}
        />
      </Results>
    </div>
  );
}

export default App;

import React from 'react';
import { Nav, NavItem } from "./components/Nav";
import Banner from "./components/Banner";
import { SearchBar, Input } from "./components/SearchBar";
import SearchBtn from "./components/SearchBtn";
import './App.css';

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
    </div>
  );
}

export default App;

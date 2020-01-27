import React from 'react';
import { Nav, NavItem } from "./components/Nav";
import Banner from "./components/Banner";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav logo="GoogleBooks">
        <NavItem path="/books/search" title="Search" />
        <NavItem path="/books/saved" title="Saved" />
      </Nav>
      <Banner />
    </div>
  );
}

export default App;

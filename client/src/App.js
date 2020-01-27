import React from 'react';
import { Nav, NavItem } from "./components/Nav";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav logo="GoogleBooks">
        <NavItem path="/books/search" title="Search" />
        <NavItem path="/books/saved" title="Saved" />
      </Nav>
    </div>
  );
}

export default App;

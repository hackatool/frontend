import React from 'react';

import menu from './assets/menu.svg';
import logo from './assets/logo.svg';
import search from './assets/search.png';

import CardList from "./components/CardList";

function App() {

  return (
    <div className="App">
      <nav>
        <img src={menu} alt="menu" />
        <img src={logo} alt="logo" />
        <img src={search} alt="search" />
      </nav>
    <CardList/>
    </div>
  );
}

export default App;

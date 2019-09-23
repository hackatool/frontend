import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';


// import CardList from "./components/CardList";
import Routes from './routes';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Routes></Routes>
    </BrowserRouter>
    
    <footer>
      Hackatool - alpha version 0.1
    </footer>
    </div>
  );
}

export default App;

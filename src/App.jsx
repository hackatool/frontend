import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';


// import CardList from "./components/CardList";
import Routes from './routes';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    {/* can use global component here */}
    <Routes></Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;

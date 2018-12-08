import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import CardsArea from './components/CardsArea.js';
import AddCardBtn from './components/AddCardBtn.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CardsArea/>   
        <AddCardBtn/> 
      </div>
    );
  }
}

export default App;

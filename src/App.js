import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import CardsArea from "./components/CardsArea.js";
import AddCardBtn from "./components/AddCardBtn.js";

class App extends Component {
  state = {
    cards: [
      // {
      //   id: 1,
      //   title: "New card",
      //   cardItems: []
      // }
    ]
  };

  addCard = () => {
    this.setState({
      cards: [
        ...this.state.cards,
        {
          id: Date.now(),
          title: "New card",
          cardItems: []
        }
      ]
    });
  };

  deleteCard = id => {
    this.setState({
      cards: this.state.cards.filter(card => card.id !== id)
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <CardsArea cardDelete={this.deleteCard} cardData={this.state.cards} />
        <AddCardBtn onClick={this.addCard} />
      </div>
    );
  }
}

export default App;

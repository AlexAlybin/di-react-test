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
          cardItems: [
            // {
            //   id: 1,
            //   body: "Text",
            //   isChecked: false
            // }
          ]
        }
      ]
    });
  };

  deleteCard = id => {
    this.setState({
      cards: this.state.cards.filter(card => card.id !== id)
    });
  };

  addCardItemByCardId = (cardId, value) => {
    console.log(cardId, value);
    const newState = this.state;
    this.setState({
      cards: newState.cards.map(card => {
        if (card.id === cardId) {
          card.cardItems.push({
            id: Date.now(),
            body: value,
            isChecked: false
          });
        }
        return card;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <CardsArea
          addItem={this.addCardItemByCardId}
          cardDelete={this.deleteCard}
          cardData={this.state.cards}
        />
        <AddCardBtn onClick={this.addCard} />
      </div>
    );
  }
}

export default App;

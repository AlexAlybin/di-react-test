import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import CardsArea from './components/CardsArea.js';
import AddCardBtn from './components/AddCardBtn.js';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
        cards: [
            // {
            //   id: 1,
            //   title: 'First title',
            //   itemsList: [
            //       {
            //         id: 1,
            //         isChecked: true,
            //         text: 'Hello world'
            //       },
            //       {
            //         id: 2,
            //         isChecked: false,
            //         text: 'New text here'
            //       },
            //       {
            //         id: 3,
            //         isChecked: true,
            //         text: 'Hello world Test line text here'
            //       }
            //   ]
            // },
            // {
            //   id: 2,
            //   title: 'Second title',
            //   itemsList: [
            //       {
            //         id: 4,
            //         isChecked: true,
            //         text: 'Hello world'
            //       }
            //   ]
            // }
        ]
    }
}


addCard = () => {
  this.setState({cards: [...this.state.cards, {
    id: Date.now(),
    title: 'New title',
    itemsList: []
  }]})
};

deleteCard = (id) => (event) => {

  console.log(event.target)

  const copyState = this.state.cards.slice();

  this.setState({cards: [...copyState.filter(card => card.id !== id)]})

}

addListItem = (id, itemText) => {
  const copyCards = [...this.state.cards];

  const index = copyCards.findIndex(card => card.id === id);

  if(index !== -1) {
    copyCards[index].itemsList.push({
      id: Date.now(),
      isChecked: false,
      text: itemText
    })

    this.setState({ cards: [...copyCards] })
  }

}

render() {
    return (
      <div className="App">
        <Header/>
        <CardsArea onKeyPress={this.addListItem} cardsData={this.state.cards} onCardDelete={this.deleteCard}/>   
        <AddCardBtn onClick={this.addCard}/> 
      </div>
    );
  }
}

export default App;

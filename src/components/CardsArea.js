import React, {Component} from 'react';
import Card from './Card';

class CardsArea extends Component {

    render() {
        return <div id = 'cards-area'>
          {this.props.cardsData.map((cardElement) => 
          <Card 
            key={cardElement.id} 
            cardData={cardElement} 
            onCardDelete={this.props.onCardDelete(cardElement.id)}
            onKeyPress={this.props.addListItem}
          />)}
        </div>
    }
}

export default CardsArea;
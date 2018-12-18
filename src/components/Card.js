import React, {Component} from 'react';
import CardHeader from './CardHeader';
import CardItemList from './CardItemsList';
import AddItemInput from './AddItemInput';

class Card extends Component {
    render() {
        return <div className = 'main-card'>
            <CardHeader 
            cardTitle={this.props.cardData.title} 
            onCardDelete={this.props.onCardDelete}
            />
            <CardItemList 
            itemsList={this.props.cardData.itemsList}
            />
            <AddItemInput 
            id={this.props.cardData.id}
            onKeyPress={this.props.addListItem}
            />
        </div>
    }
}

export default Card;
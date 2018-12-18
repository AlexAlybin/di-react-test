import React, {Component} from 'react';
import CardTitle from './CardTitle';
import DeleteCardBtn from './DeleteCardBtn';

class CardHeader extends Component {
    render() {
        return <div className = 'card-header'>
            <CardTitle cardTitle={this.props.cardTitle}/>
            <DeleteCardBtn onCardDelete={this.props.onCardDelete}/>
        </div>
    }
}

export default CardHeader;
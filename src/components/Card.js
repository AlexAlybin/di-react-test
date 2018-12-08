import React, {Component} from 'react';
import CardHeader from './CardHeader';
import CardItemList from './CardItemsList';

class Card extends Component {
    render() {
        return <div className = 'main-card'>
            <CardHeader/>
            <CardItemList/>
        </div>
    }
}

export default Card;
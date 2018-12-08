import React, {Component} from 'react';
import Card from './Card';

class CardsArea extends Component {
    render() {
        return <div id = 'cards-area'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    }
}

export default CardsArea;
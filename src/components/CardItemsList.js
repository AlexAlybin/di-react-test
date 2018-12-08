import React, {Component} from 'react';
import ListItem from './ListItem';

class CardItemList extends Component {
    render() {
        return <div className = 'card-items-list'>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>            
        </div>
    }
}

export default CardItemList;
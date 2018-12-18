import React, {Component} from 'react';
import ListItem from './ListItem';

class CardItemList extends Component {
    render() {
        return <div className = 'card-items-list'>
            {this.props.itemsList.map((item) => <ListItem key={item.id} itemData={item}/>)}         
        </div>
    }
}

export default CardItemList;
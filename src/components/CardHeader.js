import React, {Component} from 'react';
import CardTitle from './CardTitle';
import DeleteCardBtn from './DeleteCardBtn';

class CardHeader extends Component {
    render() {
        return <div className = 'card-header'>
            <CardTitle/>
            <DeleteCardBtn/>
        </div>
    }
}

export default CardHeader;
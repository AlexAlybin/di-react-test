import React, {Component} from 'react';

class CardTitle extends Component {
    render() {
        return <input type = "text" name = "" className = "card-title" placeholder = "GV 2020 OD" defaultValue={this.props.cardTitle}/>
    }
}

export default CardTitle;
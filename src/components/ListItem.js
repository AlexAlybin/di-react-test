import React, {Component} from 'react';

class ListItem extends Component {
    render() {
        return <div className = "card-item">
                <label className = "checkbox-container">
                    <input type = "checkbox"/>
                    <span className = "item-checkbox"></span>
                </label>
                    <label className = "item-text">{this.props.itemData.text}</label>
                </div>
    }
}

export default ListItem;
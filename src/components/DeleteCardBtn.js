import React, {Component} from 'react';

class DeleteCardBtn extends Component {
    render() {
        return <button className = "delete-card-button" onClick={this.props.onCardDelete}>
        </button>
    }
}

export default DeleteCardBtn;
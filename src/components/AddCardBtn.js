import React, {Component} from 'react';
import addCard from '../images/Add.svg';

class AddCardBtn extends Component {
    render() {
        return <div className = 'footer-add-icon'>
            <button id="add-card-button">
            <img className="add-card-icon" alt = "" src={addCard}/>
            </button>
        </div>
    }
}

export default AddCardBtn;
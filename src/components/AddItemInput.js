import React, {Component} from 'react';

class AddItemInput extends Component {
    render(){
        return (
        <input
        className="card-item-input" 
        type="text" 
        name="card-item-input" 
        placeholder="Add to-do" 
        onKeyPress={(e) => {
            if(e.key === 'Enter'){
                this.props.onKeyPress(this.props.id, e.target.value)
            }
        }
    }
        />)
    }
}

export default AddItemInput;
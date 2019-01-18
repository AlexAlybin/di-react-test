import React from "react";

const AddItemInput = props => (
  <input
    onKeyDown={onEnterPress(props)}
    className="card-item-input"
    type="text"
    name="card-item-input"
    placeholder="Add to-do"
  />
);
export default AddItemInput;

const onEnterPress = props => e => {
  if (e.key === "Enter") {
    props.addItem(props.cardId, e.target.value);
  }
  console.log(e.key, e.target.value);
};

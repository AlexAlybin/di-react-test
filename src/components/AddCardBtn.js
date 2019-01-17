import React from "react";
import addCard from "../images/Add.svg";

const AddCardBtn = props => (
  <div className="footer-add-icon">
    <button onClick={props.onClick} id="add-card-button">
      <img className="add-card-icon" alt="Add button" src={addCard} />
    </button>
  </div>
);

export default AddCardBtn;

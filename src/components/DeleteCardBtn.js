import React from "react";

const DeleteCardBtn = props => (
  <button className="delete-card-button" onClick={props.onCardDelete} />
);

export default DeleteCardBtn;

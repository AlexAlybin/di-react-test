import React from "react";

const DeleteCardBtn = props => {
  const onDelete = () => props.cardDelete(props.cardId);
  return <button className="delete-card-button" onClick={onDelete} />;
};

export default DeleteCardBtn;

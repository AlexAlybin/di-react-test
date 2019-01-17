import React from "react";
import CardTitle from "./CardTitle";
import DeleteCardBtn from "./DeleteCardBtn";

const CardHeader = props => (
  <div className="card-header">
    <CardTitle />
    <DeleteCardBtn cardId={props.cardId} cardDelete={props.cardDelete} />
  </div>
);

export default CardHeader;

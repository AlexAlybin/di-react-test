import React from "react";
import CardTitle from "./CardTitle";
import DeleteCardBtn from "./DeleteCardBtn";

const CardHeader = props => (
  <div className="card-header">
    <CardTitle />
    <DeleteCardBtn />
  </div>
);

export default CardHeader;

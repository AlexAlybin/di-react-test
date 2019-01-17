import React from "react";
import CardHeader from "./CardHeader";
import CardItemList from "./CardItemsList";
import AddItemInput from "./AddItemInput";

const Card = props => (
  <div className="main-card" key={props.id}>
    <CardHeader cardTitle={props.title} />
    <CardItemList cardItems={props.cardItems} />
    <AddItemInput />
  </div>
);

export default Card;

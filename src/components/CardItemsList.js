import React from "react";
import ListItem from "./ListItem";

const CardItemList = props => (
  <div className="card-items-list">
    {props.cardItems.map(item => (
      <ListItem key={item.id} itemData={item} />
    ))}
  </div>
);

export default CardItemList;

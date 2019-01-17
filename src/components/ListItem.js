import React from "react";

const ListItem = props => (
  <div className="card-item">
    <label className="checkbox-container">
      <input type="checkbox" />
      <span className="item-checkbox" />
    </label>
    <label className="item-text">{props.itemData.text}</label>
  </div>
);

export default ListItem;

import React from "react";

const ListItem = props => (
  <div className="card-item">
    <label className="checkbox-container">
      <input type="checkbox" value={props.itemData.isChecked} />
      <span className="item-checkbox" />
    </label>
    <label className="item-text">{props.itemData.body}</label>
  </div>
);

export default ListItem;

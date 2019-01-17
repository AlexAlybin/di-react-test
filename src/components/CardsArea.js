import React from "react";
import Card from "./Card";

const CardsArea = props => (
  <div id="cards-area">
    {props.cardData.map(card => (
      <Card {...card} key={card.id} />
    ))}
  </div>
);

export default CardsArea;

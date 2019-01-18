import React from "react";
import Card from "./Card";

const CardsArea = props => (
  <div id="cards-area">
    {props.cardData.map(
      card =>
        card && (
          <Card
            {...card}
            key={card.id}
            cardDelete={props.cardDelete}
            addItem={props.addItem}
          />
        )
    )}
  </div>
);

export default CardsArea;

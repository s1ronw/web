import React from "react";
import './Card.css';

function Card({ card, handleCardClick, isFlipped }) {
  return (
    <div className="card" onClick={() => handleCardClick(card)}>
      {isFlipped ? <div className="card-content">{card.value}</div> : <div className="card-back"></div>}
    </div>
  );
}

export default Card;

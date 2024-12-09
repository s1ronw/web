import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Board.css';

function Board() {
  const initialCards = [
    { id: 1, value: 'A' },
    { id: 2, value: 'B' },
    { id: 3, value: 'C' },
    { id: 4, value: 'D' },
    { id: 5, value: 'E' },
    { id: 6, value: 'F' },
    { id: 1, value: 'A' },
    { id: 2, value: 'B' },
    { id: 3, value: 'C' },
    { id: 4, value: 'D' },
    { id: 5, value: 'E' },
    { id: 6, value: 'F' }
  ];

  const shuffleCards = () => {
    return [...initialCards].sort(() => Math.random() - 0.5);
  };

  const [cards, setCards] = useState(shuffleCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (first.value === second.value) {
        setMatchedCards((prev) => [...prev, first.value]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards]);

  const handleCardClick = (card) => {
    if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedCards.includes(card.value)) {
      setFlippedCards([...flippedCards, card]);
    }
  };

  return (
    <div className="board">
      {cards.map((card) => (
        <Card 
          key={card.id} 
          card={card} 
          handleCardClick={handleCardClick} 
          isFlipped={flippedCards.includes(card) || matchedCards.includes(card.value)} 
        />
      ))}
      {matchedCards.length === 6 && <div className="win-message">You win!</div>}
    </div>
  );
}

export default Board;

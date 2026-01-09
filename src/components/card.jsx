import React from "react";

const Card = ({ card, onClick }) => {
  return (
    <div
      onClick={() => onClick(card)}
      className="h-20 w-20 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-2xl font-bold cursor-pointer shadow-md hover:scale-105 transition-transform duration-200"
    >
      {card.isflipped || card.isMatched ? card.value : "?"}
    </div>
  );
};

export default Card;


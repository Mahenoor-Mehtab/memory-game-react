import React from 'react';

const WinMessage = ({ score, moves, onRestart }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-80 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 You Win! 🎉</h2>
        <p className="text-gray-700 mb-2">Score: <span className="font-semibold">{score}</span></p>
        <p className="text-gray-700 mb-6">Moves: <span className="font-semibold">{moves}</span></p>
        <button
          onClick={onRestart}
          className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition-colors"
        >
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default WinMessage;

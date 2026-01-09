import React from 'react';

const LoseMessage = ({ moves, onRestart }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-red-600 text-white p-8 rounded-2xl text-center shadow-xl w-80">
        <h2 className="text-3xl font-bold mb-4">😢 You Lose!</h2>
        <p className="mb-6">Moves used: <span className="font-semibold">{moves}</span></p>
        <button
          onClick={onRestart}
          className="bg-white text-red-600 px-6 py-2 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
        >
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default LoseMessage;

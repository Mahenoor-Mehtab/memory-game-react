import React from 'react'

const Header = ({score , moves  , onReset}) => {

  return (
    <div className="w-full max-w-md mx-auto mb-6 p-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      
      <h2 className="text-2xl font-bold text-center mb-4">
        🪄 Magic Card Game
      </h2>

      <div className="flex justify-between text-lg font-semibold">
        <p>
          Score: <span className="ml-1 text-yellow-300">{score}</span>
        </p>

        <p>
          Moves: <span className="ml-1 text-green-300">{moves}</span>
        </p>
       

      </div>
      <div className='flex justify-center'>
          <button onClick={onReset } className='bg-gray-700 px-4 py-2 rounded my-3 justify-center cursor-pointer '>New Game</button>
      </div>

     
    </div>
  )
}

export default Header
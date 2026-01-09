
import Card from "./components/card";
import Header from "./components/Header"
import WinMessage from "./components/winMessage";
import LoseMessage from "./components/lossMessage";
import { useGameLogic } from "./hook/useGameLogic";

const numbers = [
  '😀','🐶','🍎','🌟',
  '🐶','🍕','🌟','💖',
  '😀','🍕','🍎','💖'
];


const App = () => {
  const { cards , score , moves , isGameComplete , isGameLoss , initilizeGame , handleCardClick} = useGameLogic(numbers);

  return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
      
      <div className="w-full max-w-lg p-6 rounded-2xl bg-slate-800 shadow-2xl">
        
        <Header score={score} moves={moves} onReset={initilizeGame} />
       { isGameComplete &&  <WinMessage score={score} moves={moves} onRestart={initilizeGame} />}

       { isGameLoss && <LoseMessage moves={moves} onRestart={initilizeGame}  />}

        <div className="mt-6 text-center text-slate-400">
       <div className="grid grid-cols-4 gap-5 mt-15">
          {
            cards.map((card, index)=>(
              <Card key={index} card={card} onClick={handleCardClick}  />

            ))
          }
        </div>
        </div>

      </div>
      </div>
  )
}

export default App
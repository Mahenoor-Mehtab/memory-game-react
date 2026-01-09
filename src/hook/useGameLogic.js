import { useEffect, useState } from "react";
export const useGameLogic = (numbers)=>{
    const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards , setMatchedCards] = useState([]);
  const [score , setScore] = useState(0);
  const [moves , setMoves] = useState(0);
  const [isLocked , setIsLocked] = useState(false);

const shuffleArray =(num)=>{
  return [...num].sort(() => Math.random() - 0.5)
}

  const initilizeGame = ()=>{
    // SUFFLE THE CARDS
  const shuffled = shuffleArray(numbers)
    const finalCard = shuffled.map((number, index)=>({
      id:index,
      value:number,
      isflipped:false,
      isMatched:false
     

    }))
     setCards(finalCard)
     setIsLocked(false);
     setMoves(0);
     setScore(0);
     setFlippedCards([])
     setMatchedCards([])
  }
 

  useEffect(()=>{
initilizeGame();
  },[])


  const handleCardClick = (card)=>{
    // DON'T ALLOW CLICKING IF CARD IS ALREADY FLIPPED OR MATCHED
    if( card.isflipped || card.isMatched || isLocked || flippedCards.length === 2) return;
     
    // update card flipped state:
    const newCards = cards.map((c)=>{
      if(c.id == card.id) {
        return { ...c , isflipped:true}
      }
      else return c;
    }) 

    setCards(newCards)

// setCards(cards.map(c =>
//   c.id === id ? { ...c, isFlipped: true } : c
// ));

const newFlippedCards = [...flippedCards , card.id];
setFlippedCards(newFlippedCards);

// Check for match if two cards are flipped

if(flippedCards.length === 1){
  setIsLocked(true);
  const firstCard = cards[flippedCards[0]];

  if(firstCard.value === card.value){
  setTimeout(()=>{
    setMatchedCards((prev)=> [...prev , firstCard.id , card.id] )
     setScore((prev)=> prev+1 );

   const newMatchedCards = 

    setCards((prev)=> prev.map((c)=>{
      if( card.id === firstCard.id) {
        return { ...c , isMatched:true}
      }
      else return c;
    }) )

    setFlippedCards([])
    setIsLocked(false);
  }, 500)
  }else{

    // flip back card 1 , card 2
//  yaha pr hum timeout isliye use karte h ki state change hone pe thoda time leke ui update hota to humko changes dekhan h 
    setTimeout(()=>{
        const flippedBackCard = newCards.map((c)=>
      // newFlippedCards.includes(c.id) || c.id === card.id ? {...c, isflipped:false} : c
        {
          if(newFlippedCards.includes(c.id) || c.id === card.id ){
            return {...c , isflipped:false}
          }
          else{
            return c;
          }
        }
    )

    setCards(flippedBackCard)
    setFlippedCards([])
     setIsLocked(false);

    }, 1000)
  
  }
  setMoves((prev)=> prev+1)
}


  }

  const isGameComplete = matchedCards.length === numbers.length ;
 const isGameLoss = moves === 15;

 return { cards , score , moves , isGameComplete , isGameLoss , initilizeGame , handleCardClick}
}
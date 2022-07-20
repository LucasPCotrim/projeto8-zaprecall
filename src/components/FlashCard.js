import React from 'react'
import './css/FlashCard.css'



function FlashCard({state, setState, position}) {



  function open_card(pos){
    console.log(state);
    flashcardRef.current.style.height = "131px";

    let decks = update_decks(state, 'open', pos);
    setState({...state, decks:decks})
  }

  function flip_card(pos) {
    console.log(state);
    flashcardBackRef.current.style.transform = "rotateY(0deg)";
    flashcardFrontRef.current.style.transform = "rotateY(-180deg)";

    let decks = update_decks(state, 'flip', pos);
    setState({...state, decks:decks})
  }


  const flashcardRef = React.useRef(null);
  const flashcardFrontRef = React.useRef(null);
  const flashcardBackRef = React.useRef(null);

  let card = state.decks.filter((deck)=>deck.active)[0]
                  .cards[position];
  

  return (
    <div className='flash-card' ref={flashcardRef}>
      {(!card.opened)
        ? (
            <div className="card-header">
              <h2>Pergunta {position+1}</h2>
              <img src="./img/play.svg" alt="play card button" onClick={()=>open_card(position)}/>
            </div>
          )
        : (
            <>
              <div className="card-front" ref={flashcardFrontRef}>
                <p>{card.question}</p>
                <img src="./img/flip.svg" alt="flip card button" onClick={()=>flip_card(position)}/>
              </div>
              <div className='card-back' ref={flashcardBackRef}>
                <p>{card.answer}</p>
                <div className="button-row">
                  <button>Não Lembrei</button>
                  <button>Quase não lembrei</button>
                  <button>Zap!</button>
                </div>
              </div>
            </>
          )
      }
    </div>
  )
}





function update_decks(state, action, pos){

  let decks = state.decks.map((deck)=>{
    if (!deck.active){
      return {...deck}
    }
    else{
      let cards = deck.cards.map((card, index)=>{
        if (action==='open') {
          return (index===pos) ? {...card, opened: true} : {...card}
        } else if (action==='flip'){
          return (index===pos) ? {...card, flipped: true} : {...card}
        } else throw new Error('Invalid Action!')
      });
      return {...deck, cards:cards}
    }
  })

  return decks;
}



export default FlashCard
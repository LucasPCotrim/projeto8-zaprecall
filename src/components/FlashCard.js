import React from 'react'
import './css/FlashCard.css'



function FlashCard({state, setState, position}) {

  console.log(state);

  function open_card(pos) {
    let card = state.decks.filter((deck)=>deck.active)[0].cards[pos];
    if(card.user_answer!=='') return;
    flashcardRef.current.style.height = "131px";

    update_decks(state, setState, 'open', pos);
  }

  function flip_card(pos) {
    flashcardBackRef.current.style.transform = "rotateY(0deg)";
    flashcardFrontRef.current.style.transform = "rotateY(-180deg)";

    update_decks(state, setState, 'flip', pos);
  }

  function answer_card(pos, ans) {
    flashcardBackRef.current.style.transform = "rotateY(180deg)";
    flashcardFrontRef.current.style.transform = "rotateY(0deg)";
    flashcardRef.current.style.height = "65px";

    update_decks(state, setState, ans, pos);
  }


  const flashcardRef = React.useRef(null);
  const flashcardFrontRef = React.useRef(null);
  const flashcardBackRef = React.useRef(null);

  let card = state.decks.filter((deck)=>deck.active)[0]
                  .cards[position];
  const header_images = {'': './img/play.svg',
                         'nao-lembrei': './img/nao-lembrei.svg',
                         'quase-nao-lembrei': './img/quase-nao-lembrei.svg',
                         'zap': './img/zap.svg'}

  
  return (
    <div className='flash-card' ref={flashcardRef}>
      {(!card.opened || card.user_answer !== '')
        ? (
            <div className="card-header">
              <h2 className={card.user_answer}>Pergunta {position+1}</h2>
              <img src={header_images[card.user_answer]} alt="play card button" onClick={()=>open_card(position)}/>
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
                  <button onClick={()=>answer_card(position,'answer_nao_lembrei')}>
                    Não Lembrei
                  </button>
                  <button onClick={()=>answer_card(position,'answer_quase_nao_lembrei')}>
                    Quase não lembrei
                  </button>
                  <button onClick={()=>answer_card(position,'answer_zap')}>
                    Zap!
                  </button>
                </div>
              </div>
            </>
          )
      }
    </div>
  )
}





function update_decks(state, setState, action, pos){

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
        } else if (action==='answer_zap'){
          return (index===pos) ? {...card, user_answer: 'zap'} : {...card}
        } else if (action==='answer_quase_nao_lembrei'){
          return (index===pos) ? {...card, user_answer: 'quase-nao-lembrei'} : {...card}
        } else if (action==='answer_nao_lembrei'){
          return (index===pos) ? {...card, user_answer: 'nao-lembrei'} : {...card}
        } else throw new Error('Invalid Action!')
      });
      return {...deck, cards:cards}
    }
  })

  setState({...state, decks:decks})
}



export default FlashCard
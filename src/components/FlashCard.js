import React from 'react'
import '../assets/css/FlashCard.css'
import play_svg from '../assets/img/play.svg'
import nao_lembrei_svg from '../assets/img/nao-lembrei.svg'
import quase_nao_lembrei_svg from '../assets/img/quase-nao-lembrei.svg'
import zap_svg from '../assets/img/zap.svg'
import flip_svg from '../assets/img/flip.svg'


export default function FlashCard({
  state,
  setState,
  position,
  opened,
  question,
  answer,
  user_answer
}) {

  function open_card(pos) {
    let card = state.decks.filter((deck)=>deck.active)[0].cards[pos];
    if(card.user_answer!=='') return;
    flashcardRef.current.style.height = "131px";

    update_decks(state, setState, 'open', pos);
  }

  function flip_card(pos) {
    flashcardBackRef.current.style.transform = "rotateX(0deg)";
    flashcardFrontRef.current.style.transform = "rotateX(-180deg)";

    update_decks(state, setState, 'flip', pos);
  }

  function answer_card(pos, ans) {
    flashcardBackRef.current.style.transform = "rotateX(180deg)";
    flashcardFrontRef.current.style.transform = "rotateX(0deg)";
    flashcardRef.current.style.height = "65px";

    update_decks(state, setState, ans, pos);
  }

  const flashcardRef = React.useRef(null);
  const flashcardFrontRef = React.useRef(null);
  const flashcardBackRef = React.useRef(null);
  
  return (
    <div className='flash-card' ref={flashcardRef}>
      {(!opened || user_answer !== '')
        ? (
            <CardHeader
              user_answer={user_answer}
              position={position}
              handle_open={()=>open_card(position)}
            />
          )
        : (
            <>
              <CardFront
                component_ref={flashcardFrontRef}
                question={question}
                handle_flip={()=>flip_card(position)}
              />
              <CardBack
                component_ref={flashcardBackRef}
                answer={answer}
                handle_nao_lembrei={()=>answer_card(position,'nao-lembrei')}
                handle_quase_nao_lembrei={()=>answer_card(position,'quase-nao-lembrei')}
                handle_zap={()=>answer_card(position,'zap')}
              />
            </>
          )
      }
    </div>
  )
}



// Auxiliary components
//-------------------------------------------------------


function CardHeader({user_answer, position, handle_open}){

  const header_images = {'': play_svg,
                         'nao-lembrei': nao_lembrei_svg,
                         'quase-nao-lembrei': quase_nao_lembrei_svg,
                         'zap': zap_svg}

  return (
    <div className="card-header">
      <h2 className={user_answer}>Pergunta {position+1}</h2>
      <img src={header_images[user_answer]} alt="play card button" onClick={handle_open}/>
    </div>
  );
}


function CardFront({component_ref, question, handle_flip}){
  return (
    <div className="card-front" ref={component_ref}>
      <p>{question}</p>
      <img src={flip_svg} alt="flip card button" onClick={handle_flip}/>
    </div>
  );
}


function CardBack({component_ref, answer, handle_nao_lembrei, handle_quase_nao_lembrei, handle_zap}){
  return (
    <div className='card-back' ref={component_ref}>
      <p>{answer}</p>
      <div className="button-row">
        <button onClick={handle_nao_lembrei}>
          Não Lembrei
        </button>
        <button onClick={handle_quase_nao_lembrei}>
          Quase não lembrei
        </button>
        <button onClick={handle_zap}>
          Zap!
        </button>
      </div>
    </div>
  );
}




// Auxiliary functions
//-------------------------------------------------------

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
        } else if (action==='zap'){
          return (index===pos) ? {...card, user_answer: 'zap'} : {...card}
        } else if (action==='quase-nao-lembrei'){
          return (index===pos) ? {...card, user_answer: 'quase-nao-lembrei'} : {...card}
        } else if (action==='nao-lembrei'){
          return (index===pos) ? {...card, user_answer: 'nao-lembrei'} : {...card}
        } else throw new Error('Invalid Action!')
      });

      let new_user_answers;
      if (action === 'nao-lembrei' || action === 'quase-nao-lembrei' || action === 'zap'){
        new_user_answers = [...deck.user_answers, action];
      } else{
        new_user_answers = [...deck.user_answers];
      }
      return {...deck, cards:cards, user_answers: new_user_answers}
    }
  })

  setState({...state, decks:decks})
}


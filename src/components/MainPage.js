import './css/MainPage.css'
import FlashCard from './FlashCard'
import StatusDisplay from './StatusDisplay'



export default function MainPage({state, setState}) {
  
  //shuffle_deck(state, setState);

  return (
    <div className="main-page">
      <header>
        <img src="./img/logo_small.svg" alt="Logo"/>
        <h1 className='title'>ZapRecall</h1>
      </header>
      <div className="flash-card-container">
        {state.decks.filter((d)=>d.active)[0]
                    .cards.map((card,index)=>
          (<FlashCard
              state={state}
              setState={setState}
              position={index}
              opened={card.opened}
              question={card.question}
              answer={card.answer}
              user_answer={card.user_answer}
              key={index}
            />
          )
        )}
      </div>
      <StatusDisplay
        user_answers={state.decks.filter((d)=>d.active)[0].user_answers}
        deck_length={state.decks.filter((d)=>d.active)[0].cards.length}
      />
    </div>
  )
}




// Auxiliary functions
//-------------------------------------------------------

// function shuffle_deck(state, setState) {
//   const shuffled_cards = state.decks
//     .filter((deck)=>deck.active)[0]
//     .cards.sort(() => Math.random() - 0.5);
//   const suffled_decks = state.decks.map((deck)=>(deck.active)
//     ? ({...deck, cards:shuffled_cards})
//     : ({...deck}))

//   setState({...state, decks:suffled_decks})
// }
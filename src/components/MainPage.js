import '../assets/css/MainPage.css'
import logo_small_svg from '../assets/img/logo_small.svg'
import FlashCard from './FlashCard'
import StatusDisplay from './StatusDisplay'



export default function MainPage({state, setState}) {
  
  return (
    <div className="main-page">
      <header>
        <img src={logo_small_svg} alt="Logo"/>
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
        state={state}
        setState={setState}
        user_answers={state.decks.filter((d)=>d.active)[0].user_answers}
        deck_length={state.decks.filter((d)=>d.active)[0].cards.length}
      />
    </div>
  )
}





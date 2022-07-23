import '../assets/css/MainPage.css';
import logo_small_svg from '../assets/img/logo_small.svg';
import FlashCard from './FlashCard';
import StatusDisplay from './StatusDisplay';



export default function MainPage({state, setState}) {
  
  return (
    <div className="main-page">
      <Header img={logo_small_svg} title={'ZapRecall'}/>
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
              userAnswer={card.userAnswer}
              key={index}
            />
          )
        )}
      </div>
      <StatusDisplay
        state={state}
        setState={setState}
        userAnswers={state.decks.filter((d)=>d.active)[0].userAnswers}
        deck_length={state.decks.filter((d)=>d.active)[0].cards.length}
      />
    </div>
  );
}


// Auxiliary components
//-------------------------------------------------------

function Header({img, title}){
  return (
    <header>
        <img src={img} alt="Logo"/>
        <h1 className='title'>{title}</h1>
    </header>
  );
}





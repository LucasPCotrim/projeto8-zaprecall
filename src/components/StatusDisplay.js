import './css/StatusDisplay.css'

export default function StatusDisplay({state, setState}) {

  const user_answers = state.decks.filter((d)=>d.active)[0].user_answers;
  const deck_length = state.decks.filter((d)=>d.active)[0].cards.length;

  const finished = (user_answers.length === deck_length);
  const remembered_all = (!user_answers.includes('nao-lembrei'));

  return (
    <div className="status-display">
      <RecallResults finished={finished} remembered_all={remembered_all}/>
      <RecallProgress user_answers={user_answers} deck_length={deck_length}/>
      <RecallProgressIcons user_answers={user_answers}/>
      <RestartButton state={state} setState={setState} finished={finished}/>
    </div>
  )
}



// Auxiliary components
//-------------------------------------------------------

function RecallResults({finished, remembered_all}) {

  if (finished){
    return (
      <div className='recall-results'>
        <div>
          <img src={`./img/` + ((remembered_all) ? `parabens` : `putz`) + `.svg`} alt="emoji"/>
          <h2>{(remembered_all) ? `Parabéns!` : `Putz...`}</h2>
        </div>
        <p>{(remembered_all)
          ? `Você não esqueceu de nenhum flashcard!`
          : `Ainda faltam alguns... mas não desanime!`}
        </p>
      </div>
    );
  } else {
    return (<></>);
  }
}


function RecallProgress({user_answers, deck_length}) {
  return (
    <h3 className='recall-progress'>
      {user_answers.length + `/` + deck_length + ` Concluídos`}
    </h3>
  )
}


function RecallProgressIcons({user_answers}) {
  return (
    <div className='recall-progress-icons'>
      {user_answers.map((ans,index)=>{return (
        <img src={`./img/`+ans+`.svg`} alt="answer icon" key={index}/>
      )})}
    </div>
  );
}


function RestartButton({state, setState, finished}) {

  function restart_recall(){
    let decks = state.decks.map((deck)=>{
      if (!deck.active){
        return {...deck}
      }
      else{
        let cards = deck.cards.map((card)=>{
          return {...card, opened: false, flipped: false, user_answer: ''}
        });
        let new_user_answers = [];
        return {...deck, cards:cards, user_answers: new_user_answers}
      }
    })
    setState({...state, screen: 'homepage', decks:decks});
  }

  return (
    (finished)
      ? (<div class="restart_button" onClick={restart_recall}>REINICIAR RECALL</div>)
      : (<></>)
  );
}
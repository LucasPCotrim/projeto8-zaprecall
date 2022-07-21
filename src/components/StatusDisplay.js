import './css/StatusDisplay.css'

export default function StatusDisplay({state, setState}) {

  const user_answers = state.decks.filter((d)=>d.active)[0].user_answers;
  const deck_length = state.decks.filter((d)=>d.active)[0].cards.length;

  const finished = (user_answers.length === deck_length);
  const n_zaps = user_answers.filter((ans)=>ans === 'zap').length
  const zap_goal_reached = (n_zaps >= state.goal);

  return (
    <div className="status-display">
      <RecallResults
        finished={finished}
        n_zaps={n_zaps}
        zap_goal={state.goal}
        zap_goal_reached={zap_goal_reached}/>
      <RecallProgress
        user_answers={user_answers}
        deck_length={deck_length}/>
      <RecallProgressIcons
        user_answers={user_answers}/>
      <RestartButton
        state={state}
        setState={setState}
        finished={finished}/>
    </div>
  )
}



// Auxiliary components
//-------------------------------------------------------

function RecallResults({finished, n_zaps, zap_goal, zap_goal_reached}) {
  

  if (finished){
    return (
      <div className='recall-results'>
        <div>
          <img src={`./img/` + ((zap_goal_reached) ? `parabens` : `putz`) + `.svg`} alt="emoji"/>
          <h2>{(zap_goal_reached) ? `Parabéns!` : `Putz...`}</h2>
        </div>
        <p>{(zap_goal_reached)
          ? (`Você alcançou sua meta de zaps! ${n_zaps}/${zap_goal}`)
          : (`Ainda faltam alguns... mas não desanime! ${n_zaps}/${zap_goal}`)}
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
    setState({...state, screen: 'homepage', goal: 0, decks:decks});
  }

  return (
    (finished)
      ? (<div class="restart_button" onClick={restart_recall}>REINICIAR RECALL</div>)
      : (<></>)
  );
}
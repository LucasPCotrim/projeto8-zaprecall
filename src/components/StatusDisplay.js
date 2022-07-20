import './css/StatusDisplay.css'

export default function StatusDisplay({user_answers, deck_length}) {
  return (
    <div className="status-display">
      <RecallResults user_answers={user_answers} deck_length={deck_length}/>
      <RecallProgress user_answers={user_answers} deck_length={deck_length}/>
      <RecallProgressIcons user_answers={user_answers}/>
    </div>
  )
}



// Auxiliary components
//-------------------------------------------------------

function RecallResults({user_answers, deck_length}) {
  const finished = (user_answers.length === deck_length);

  if (finished){
    const remembered_all = (!user_answers.includes('nao-lembrei'))
    if(remembered_all){
      return (
        <div className='recall-results'>
          <div>
            <img src="./img/parabens.svg" alt="parabens emoji"/>
            <h2>Parabéns!</h2>
          </div>
          <p>Você não esqueceu de nenhum flashcard!</p>
        </div>
      );
    } else{
      return (
        <div className='recall-results'>
          <div>
            <img src="./img/putz.svg" alt="putz emoji"/>
            <h2>Putz...</h2>
          </div>
          <p>Ainda faltam alguns... mas não desanime!</p>
        </div>
      );
    }
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
import '../assets/css/StatusDisplay.css';
import parabens_svg from '../assets/img/parabens.svg';
import putz_svg from '../assets/img/putz.svg';
import nao_lembrei_svg from '../assets/img/nao-lembrei.svg';
import quase_nao_lembrei_svg from '../assets/img/quase-nao-lembrei.svg';
import zap_svg from '../assets/img/zap.svg';


export default function StatusDisplay({state, setState}) {

  const userAnswers = state.decks.filter((d)=>d.active)[0].userAnswers;
  const deck_length = state.decks.filter((d)=>d.active)[0].cards.length;
  const finished = (userAnswers.length === deck_length);
  const n_zaps = userAnswers.filter((ans)=>ans === 'zap').length;
  const zap_goal_reached = (n_zaps >= state.goal);

  return (
    <div className="status-display">
      <RecallResults
        finished={finished}
        n_zaps={n_zaps}
        zap_goal={state.goal}
        zap_goal_reached={zap_goal_reached}/>
      <RecallProgress
        userAnswers={userAnswers}
        deck_length={deck_length}/>
      <RecallProgressIcons
        userAnswers={userAnswers}/>
      <RestartButton
        state={state}
        setState={setState}
        finished={finished}/>
    </div>
  );
}



// Auxiliary components
//-------------------------------------------------------

function RecallResults({finished, n_zaps, zap_goal, zap_goal_reached}) {
  

  if (finished){
    return (
      <div className='recall-results'>
        <div>
          <img src={(zap_goal_reached) ? parabens_svg : putz_svg} alt="emoji"/>
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


function RecallProgress({userAnswers, deck_length}) {
  return (
    <h3 className='recall-progress'>
      {userAnswers.length + `/` + deck_length + ` Concluídos`}
    </h3>
  );
}


function RecallProgressIcons({userAnswers}) {
  const icons_dict = 
    {'nao-lembrei': nao_lembrei_svg,
     'quase-nao-lembrei': quase_nao_lembrei_svg,
     'zap': zap_svg};
  
  return (
    <div className='recall-progress-icons'>
      {userAnswers.map((ans,index)=>{
        
        return (
        <img src={icons_dict[ans]} alt="answer icon" key={index}/>
      )})}
    </div>
  );
}


function RestartButton({state, setState, finished}) {

  function restart_recall(){
    const decks = state.decks.map((deck)=>{
      if (!deck.active){
        return {...deck}
      }
      else{
        let cards = deck.cards.map((card)=>{
          return {...card, opened: false, flipped: false, userAnswer: ''}
        });
        let newUserAnswers = [];
        return {...deck, active:false, cards:cards, userAnswers: newUserAnswers}
      }
    });
    setState({...state, loading: true});
    setTimeout(()=>{
      setState({...state,
        screen: 'homepage_select_deck',
        goal: 0,
        loading: false,
        decks: decks});
    }, 2100);
  }

  return (
    (finished)
      ? (<div class="restart_button" onClick={restart_recall}>REINICIAR RECALL</div>)
      : (<></>)
  );
}
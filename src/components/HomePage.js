import React from 'react'
import './css/HomePage.css'


export default function HomePage({state, setState}) {

  function handleDeckButton(){
    if (state.decks.filter((deck)=>deck.active).length === 0) return;
    setState({...state, screen: 'homepage_select_goal'});
  }

  function handleSelectDeckChange(event) {
    const new_decks = state.decks.map((deck)=>{
      return ((deck.id===Number(event.target.value))
        ? {...deck, active: true}
        : {...deck})
    })
    setState({...state, decks: new_decks});
    if (event.target.value !== 'DEFAULT'){
      update_button('enable', buttonDeckRef)
    } else {
      update_button('disable', buttonDeckRef)
    }
  }


  function handleStartButton(){
    if (state.goal === 0) return;
    setState({...state, screen: 'mainpage'});
  }

  function handleInputGoalChange(event){
    const n_cards = state.decks.filter((deck)=>deck.active)[0].cards.length;

    if (event.target.value >= 1 && event.target.value <= n_cards){
      update_button('enable', buttonGoalRef);
      setState({...state, goal: event.target.value});

    } else{
      update_button('disable', buttonGoalRef);
    }
  }

  

  const selectDeckRef = React.useRef(null);
  const buttonDeckRef = React.useRef(null);
  const inputGoalRef = React.useRef(null);
  const buttonGoalRef = React.useRef(null);
  

  return (
    <div className='home-page'>
      <img src="./img/logo.svg" alt="Logo"/>
      <h1 className='title'>ZapRecall</h1>
      <InputDeckScreen
        state={state}
        selectDeckRef={selectDeckRef}
        handleSelectDeckChange={handleSelectDeckChange}
        buttonDeckRef={buttonDeckRef}
        handleDeckButton={handleDeckButton}
      />
      <InputGoalScreen
        state={state}
        inputGoalRef={inputGoalRef}
        handleInputGoalChange={handleInputGoalChange}
        buttonGoalRef={buttonGoalRef}
        handleStartButton={handleStartButton}
      />
    </div>
  )
}




// Auxiliary components
//-------------------------------------------------------
function InputDeckScreen({state, selectDeckRef, handleSelectDeckChange, buttonDeckRef, handleDeckButton}){
  if (state.screen !== 'homepage_select_deck'){
    return (<></>);
  }

  return (
    <>
      <select
        required
        ref={selectDeckRef}
        className="deck-dropdown"
        defaultValue={'DEFAULT'}
        onChange={handleSelectDeckChange}
      >
        <option disabled hidden value="DEFAULT" id='default-option'>Escolha seu deck</option>
        {state.decks.map((deck, index)=>{
          return (
            <option value={deck.id} key={index}>
              {deck.name}
            </option>
          )
        })}
      </select>
      <button
        ref={buttonDeckRef}
        className='choose-deck'
        onClick={handleDeckButton}>
          Escolher deck!
      </button>
    </>
  );
}


function InputGoalScreen({state, inputGoalRef, handleInputGoalChange, buttonGoalRef, handleStartButton}){
  if(state.screen !== 'homepage_select_goal'){
    return (<></>);
  }

  return (
    <>
      <input
        ref={inputGoalRef}
        className='enter-goals'
        type="number"
        onChange={handleInputGoalChange}
        placeholder='Digite sua meta de zaps...'
      />
      <button
        ref={buttonGoalRef}
        className='start-recall'
        onClick={handleStartButton}>
          Iniciar Recall!
      </button>
    </>
  );
}


// Auxiliary functions
//-------------------------------------------------------

function update_button(mode, button_ref) {
  if (mode === 'enable'){
    button_ref.current.style.backgroundColor = "#FFFFFF";
    button_ref.current.style.border = "1px solid #D70900";
    button_ref.current.style.color = "#D70900";
    button_ref.current.style.cursor = "pointer";
  } else {
    button_ref.current.style.backgroundColor = "#E8E8E8";
    button_ref.current.style.border = "none";
    button_ref.current.style.color = "#C0C0C0";
    button_ref.current.style.cursor = "initial";
  }
}
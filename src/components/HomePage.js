import React from 'react'
import './css/HomePage.css'


export default function HomePage({state, setState}) {
  console.log(state)

  function go_to_main_page(){
    if (state.goal === 0) return;

    setState({...state, screen: 'mainpage'});
  }

  function handleInputGoalChange(event){
    const n_cards = state.decks.filter((deck)=>deck.active)[0].cards.length;

    if (event.target.value >= 1 && event.target.value <= n_cards){
      update_button('enable', buttonRef);
      setState({...state, goal: event.target.value});

    } else{
      update_button('disable', buttonRef);
    }
  }

  const inputGoalRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  return (
    <div className='home-page'>
      <img src="./img/logo.svg" alt="Logo"/>
      <h1 className='title'>ZapRecall</h1>
      <input
        ref={inputGoalRef}
        className='enter-goals'
        type="number"
        onChange={handleInputGoalChange}
        placeholder='Digite sua meta de zaps...'
      />
      <button
        ref={buttonRef}
        className='start-recall'
        onClick={go_to_main_page}>
          Iniciar Recall!
      </button>
    </div>
  )
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
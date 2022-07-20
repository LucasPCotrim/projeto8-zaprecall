import React from 'react'
import HomePage from './components/HomePage'
import MainPage from './components/MainPage'

export default  function App() {
  const [state, setState] = React.useState(initial_state);
  return (
    <> {(state.screen === 'homepage')
        ? (<HomePage state={state} setState={setState}/>)
        : (<MainPage state={state} setState={setState}/>)}
    </>
  )
}


// Initial state
//-------------------------------------------------------

const initial_state = {
  screen: 'homepage',
  decks: [
    {
      id: 1,
      active: true,
      cards: [
        {id: 1,
         opened: false,
         flipped: false,
         question: 'O que é JSX?',
         answer: 'Uma extensão de linguagem do JavaScript',
         user_answer: ''},
        {id: 2,
         opened: false,
         flipped: false,
         question: 'O React é __',
         answer: 'uma biblioteca JavaScript para construção de interfaces',
         user_answer: ''},
        {id: 3,
         opened: false,
         flipped: false,
         question: 'Componentes devem iniciar com __',
         answer: 'letra maiúscula',
         user_answer: ''},
        {id: 4,
         opened: false,
         flipped: false,
         question: 'Podemos colocar __ dentro do JSX',
         answer: 'expressões',
         user_answer: ''},
        {id: 5,
         opened: false,
         flipped: false,
         question: 'O ReactDOM nos ajuda __',
         answer: 'interagindo com a DOM para colocar componentes React no mesmo',
         user_answer: ''},
        {id: 6,
         opened: false,
         flipped: false,
         question: 'Usamos o npm para __',
         answer: 'gerenciar os pacotes necessários e suas dependências',
         user_answer: ''},
        {id: 7,
         opened: false,
         flipped: false,
         question: 'Usamos props para __',
         answer: 'passar diferentes informações para componentes',
         user_answer: ''},
        {id: 8,
         opened: false,
         flipped: false,
         question: 'Usamos estado (state) para __',
         answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
         user_answer: ''}
      ],
      user_answers: []
    }
  ]
}
import React from 'react'
import HomePage from './components/HomePage'
import MainPage from './components/MainPage'

export default  function App() {
  const [state, setState] = React.useState(shuffle_deck(initial_state));
  return (
    <> {(state.screen !== 'mainpage')
        ? (<HomePage state={state} setState={setState}/>)
        : (<MainPage state={state} setState={setState}/>)}
    </>
  )
}


// Initial state
//-------------------------------------------------------

const initial_state = {
  screen: 'homepage_select_deck',
  goal: 0,
  decks: [
    {
      id: 1,
      name: 'Você manja de React?',
      active: false,
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
    },
    {
      id: 2,
      name: 'Javascripto',
      active: false,
      cards: [
        {id: 1,
         opened: false,
         flipped: false,
         question: 'Qual o papel/responsabilidade do JavaScript na construção de um site?',
         answer: 'Nos permite criar sites mais interativos, reagindo ao comportamento do usuário',
         user_answer: ''},
        {id: 2,
         opened: false,
         flipped: false,
         question: 'O que é árvore DOM?',
         answer: 'É a árvore de elementos do HTML representada como objetos no JavaScript',
         user_answer: ''},
        {id: 3,
         opened: false,
         flipped: false,
         question: 'Eventos no JavaScript são __',
         answer: 'Ações ou ocorrências que acontecem nos elementos acarretadas pelo usuário',
         user_answer: ''},
        {id: 4,
         opened: false,
         flipped: false,
         question: 'Qual diferença de requisições GET e POST?',
         answer: 'GET para pegar informações e POST para enviar informações',
         user_answer: ''},
        {id: 5,
         opened: false,
         flipped: false,
         question: 'Status Codes são __',
         answer: 'Códigos para dar mais informações sobre uma requisição (sucesso ou erro de cliente/servidor)',
         user_answer: ''},
        {id: 6,
         opened: false,
         flipped: false,
         question: 'O que são Higher-Order Functions (HOFs)?',
         answer: 'Funções que recebem outras funções como parâmetro',
         user_answer: ''}
      ],
      user_answers: []
    }
  ]
}


// Auxiliary functions
//-------------------------------------------------------

function shuffle_deck(state){
  const suffled_decks = state.decks.map((deck)=>{
    const shuffled_cards = deck.cards.sort(() => Math.random() - 0.5);
    return {...deck, cards:shuffled_cards};
  })
  return {...state, decks:suffled_decks};
}
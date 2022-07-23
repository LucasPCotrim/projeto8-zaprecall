import React from 'react';
import './assets/css/reset.css';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import LoadingScreen from './components/LoadingScreen';

export default  function App() {
  const [state, setState] = React.useState(shuffle_deck(initialState));
  if (state.loading){
    return (<LoadingScreen/>);
  }
  return (
    <> {(state.screen !== 'mainpage')
        ? (<HomePage state={state} setState={setState}/>)
        : (<MainPage state={state} setState={setState}/>)}
    </>
  );
}


// Initial state
//-------------------------------------------------------

const initialState = {
  screen: 'homepage_select_deck',
  goal: 0,
  loading: false,
  decks: [
    {
      id: 1,
      name: 'React 😨',
      active: false,
      cards: [
        {id: 1,
         opened: false,
         flipped: false,
         question: 'O que é JSX?',
         answer: 'Uma extensão de linguagem do JavaScript',
         userAnswer: ''},
        {id: 2,
         opened: false,
         flipped: false,
         question: 'O React é __',
         answer: 'uma biblioteca JavaScript para construção de interfaces',
         userAnswer: ''},
        {id: 3,
         opened: false,
         flipped: false,
         question: 'Componentes devem iniciar com __',
         answer: 'letra maiúscula',
         userAnswer: ''},
        {id: 4,
         opened: false,
         flipped: false,
         question: 'Podemos colocar __ dentro do JSX',
         answer: 'expressões',
         userAnswer: ''},
        {id: 5,
         opened: false,
         flipped: false,
         question: 'O ReactDOM nos ajuda __',
         answer: 'interagindo com a DOM para colocar componentes React no mesmo',
         userAnswer: ''},
        {id: 6,
         opened: false,
         flipped: false,
         question: 'Usamos o npm para __',
         answer: 'gerenciar os pacotes necessários e suas dependências',
         userAnswer: ''},
        {id: 7,
         opened: false,
         flipped: false,
         question: 'Usamos props para __',
         answer: 'passar diferentes informações para componentes',
         userAnswer: ''},
        {id: 8,
         opened: false,
         flipped: false,
         question: 'Usamos estado (state) para __',
         answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
         userAnswer: ''}
      ],
      userAnswers: []
    },
    {
      id: 2,
      name: 'Javascripto 😮',
      active: false,
      cards: [
        {id: 1,
         opened: false,
         flipped: false,
         question: 'Qual o papel/responsabilidade do JavaScript na construção de um site?',
         answer: 'Nos permite criar sites mais interativos, reagindo ao comportamento do usuário',
         userAnswer: ''},
        {id: 2,
         opened: false,
         flipped: false,
         question: 'O que é árvore DOM?',
         answer: 'É a árvore de elementos do HTML representada como objetos no JavaScript',
         userAnswer: ''},
        {id: 3,
         opened: false,
         flipped: false,
         question: 'Eventos no JavaScript são __',
         answer: 'Ações ou ocorrências que acontecem nos elementos acarretadas pelo usuário',
         userAnswer: ''},
        {id: 4,
         opened: false,
         flipped: false,
         question: 'Qual diferença de requisições GET e POST?',
         answer: 'GET para pegar informações e POST para enviar informações',
         userAnswer: ''},
        {id: 5,
         opened: false,
         flipped: false,
         question: 'Status Codes são __',
         answer: 'Códigos para dar mais informações sobre uma requisição (sucesso ou erro de cliente/servidor)',
         userAnswer: ''},
        {id: 6,
         opened: false,
         flipped: false,
         question: 'O que são Higher-Order Functions (HOFs)?',
         answer: 'Funções que recebem outras funções como parâmetro',
         userAnswer: ''}
      ],
      userAnswers: []
    },
    {
      id: 3,
      name: 'CSS 😬',
      active: false,
      cards: [
        {id: 1,
         opened: false,
         flipped: false,
         question: 'Qual seletor deve ser usado para aplicar um determinado conjunto de regras de estilos em todos os parágrafos de uma página?',
         answer: 'p',
         userAnswer: ''},
        {id: 2,
         opened: false,
         flipped: false,
         question: 'Qual seletor deve ser usado para aplicar um estilo em todas as tags <a> que estiverem dentro de um elemento <li>?',
         answer: 'li a',
         userAnswer: ''},
        {id: 3,
         opened: false,
         flipped: false,
         question: 'Qual seletor deve ser usado para aplicar um estilo em um elemento <button> somente para quando o cursor estiver posicionado sobre ele?',
         answer: 'button:hover',
         userAnswer: ''},
        {id: 4,
         opened: false,
         flipped: false,
         question: 'O que é CSS Reset?',
         answer: 'É uma técnica onde resetamos os estilos padrões que o browser adiciona nos elementos',
         userAnswer: ''},
        {id: 5,
         opened: false,
         flipped: false,
         question: 'O que é box model?',
         answer: 'É o modelo utilizado no CSS para representar os elementos (largura/altura, margem, padding e borda)',
         userAnswer: ''}
      ],
      userAnswers: []
    },
    {
      id: 4,
      name: 'HTML 😇',
      active: false,
      cards: [
        {id: 1,
         opened: false,
         flipped: false,
         question: 'Qual é o papel/responsabilidade do HTML na construção de um site?',
         answer: 'Ele traz o conteúdo e a semântica dos elementos de um site',
         userAnswer: ''},
        {id: 2,
         opened: false,
         flipped: false,
         question: 'O que são, por exemplo, <body>, <p>, <strong>?',
         answer: 'Tags',
         userAnswer: ''},
        {id: 3,
         opened: false,
         flipped: false,
         question: 'O que são, por exemplo, class="...", href="...", src="..."?',
         answer: 'Atributos',
         userAnswer: ''},
        {id: 4,
         opened: false,
         flipped: false,
         question: 'Qual a versão do HTML que usamos hoje no mercado?',
         answer: 'HTML 5',
         userAnswer: ''},
        {id: 5,
         opened: false,
         flipped: false,
         question: 'Por que foram criadas tags como <article>, <aside>, <header>, <menu>, etc?This question is required.',
         answer: 'Para trazer mais semântica para os elementos e evitar uso excessivo de `<div>`',
         userAnswer: ''},
        {id: 6,
         opened: false,
         flipped: false,
         question: 'O que é um deploy?',
         answer: 'Deixar seu site disponivel para acesso na internet',
         userAnswer: ''},
      ],
      userAnswers: []
    }
  ]
};


// Auxiliary functions
//-------------------------------------------------------

function shuffle_deck(state){
  const suffled_decks = state.decks.map((deck)=>{
    const shuffled_cards = deck.cards.sort(() => Math.random() - 0.5);
    return {...deck, cards:shuffled_cards};
  });
  return {...state, decks:suffled_decks};
}
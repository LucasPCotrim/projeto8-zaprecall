import './css/HomePage.css'

export default function HomePage({state, setState}) {

  function go_to_main_page(){
    if(state.screen === 'homepage'){
      setState({...state, screen: 'mainpage'});
    }
  }

  return (
    <div className='home-page'>
      <img src="./img/logo.svg" alt="Logo"/>
      <h1 className='title'>ZapRecall</h1>
      <button onClick={go_to_main_page}>Iniciar Recall!</button>
    </div>
  )
}

import './css/MainPage.css'
import FlashCard from './FlashCard'
import StatusDisplay from './StatusDisplay'

function MainPage({state, setState}) {
  return (
    <div className="main-page">
      <header>
        <img src="./img/logo_small.svg" alt="Logo"/>
        <h1 className='title'>ZapRecall</h1>
      </header>
      <div className="flash-card-container">
        <FlashCard
          state={state}
          setState={setState}
          position={0}
        />
        <FlashCard
          state={state}
          setState={setState}
          position={1}
        />
        <FlashCard
          state={state}
          setState={setState}
          position={2}
        />
        <FlashCard
          state={state}
          setState={setState}
          position={3}
        />
        <FlashCard
          state={state}
          setState={setState}
          position={4}
        />
      </div>
      <StatusDisplay state={state} setState={setState}/>
    </div>
  )
}

export default MainPage
import './css/MainPage.css'
import FlashCard from './FlashCard'
import StatusDisplay from './StatusDisplay'

function MainPage() {
  return (
    <div className="main-page">
      <header>
        <img src="./img/logo_small.svg" alt="Logo"/>
        <h1 className='title'>ZapRecall</h1>
      </header>
      <div className="flash-card-container">
        <FlashCard />
        <FlashCard />
        <FlashCard />
      </div>
      <StatusDisplay />
    </div>
  )
}

export default MainPage
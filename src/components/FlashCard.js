import './css/FlashCard.css'

function FlashCard() {
  return (
    <div className='flash-card'>
      <div className="card-header">
        <h2 className='zap'>Pergunta 1</h2>
        <img src="./img/play.svg" alt="play card button"/>
      </div>
      {/* <div class="card-front">
        <p>Card front</p>
        <img src="./img/flip.svg" alt="flip card button"/>
      </div> */}
      {/* <div className='card-back'>
        Teste
        <div className="button-row">
          <button>Não Lembrei</button>
          <button>Quase não lembrei</button>
          <button>Zap!</button>
        </div>
      </div> */}
    </div>
  )
}

export default FlashCard
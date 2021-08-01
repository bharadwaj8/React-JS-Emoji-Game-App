import './index.css'

const WinOrLoseCard = props => {
  const {score, startGame} = props

  const newGame = () => {
    startGame()
  }

  return (
    <div className="result-card">
      {score === 12 ? (
        <div className="result-card-desc">
          <h1 className="heading">You Won</h1>
          <p className="desc">Best Score</p>
          <p className="result">{score}/12</p>
          <button className="button" type="button" onClick={newGame}>
            Play Again
          </button>
        </div>
      ) : (
        <div className="result-card-desc">
          <h1 className="heading">You Lose</h1>
          <p className="desc">Score</p>
          <p className="result">{score}/12</p>
          <button className="button" type="button" onClick={newGame}>
            Play Again
          </button>
        </div>
      )}

      {score === 12 ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="imag"
          className="result-image"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="imag"
          className="result-image"
        />
      )}
    </div>
  )
}

export default WinOrLoseCard

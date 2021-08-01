import './index.css'

const NavBar = props => {
  const {score, topScore, result} = props

  return (
    <div className="nav-bg">
      <div className="game-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="logo"
          className="logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {result === -1 ? (
        <div className="score-card">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default NavBar

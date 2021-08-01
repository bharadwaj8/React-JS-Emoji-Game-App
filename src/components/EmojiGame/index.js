/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, isChecked: [], result: -1, topScore: 0}

  updateEmoji = id => {
    const {emojisList} = this.props
    const {isChecked, score} = this.state
    if (!isChecked.includes(id)) {
      if (score === emojisList.length - 1) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          isChecked: [...prevState.isChecked, id],
          result: 1,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
          isChecked: [...prevState.isChecked, id],
        }))
      }
    } else {
      this.setState({result: 0})
    }
  }

  startGame = () => {
    const {score, topScore} = this.state

    if (score > topScore && score <= 12) {
      this.setState({score: 0, isChecked: [], result: -1, topScore: score})
    }
    this.setState({score: 0, isChecked: [], result: -1})
  }

  render() {
    const {score, result, topScore} = this.state
    console.log(score, topScore)
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    return (
      <div className="bg">
        <NavBar score={score} topScore={topScore} result={result} />
        <div className="body">
          {result >= 0 ? (
            <WinOrLoseCard score={score} startGame={this.startGame} />
          ) : (
            <ul className="emoji-card-container">
              {shuffledEmojisList().map(each => (
                <EmojiCard
                  key={each.id}
                  details={each}
                  updateEmoji={this.updateEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame

import './index.css'

const EmojiCard = props => {
  const {details, updateEmoji} = props
  const {id, emojiName, emojiUrl} = details

  const checkEmoji = () => {
    updateEmoji(id)
  }

  return (
    <li className="emoji-card">
      <img
        src={emojiUrl}
        alt={emojiName}
        className="emoji"
        onClick={checkEmoji}
      />
    </li>
  )
}

export default EmojiCard

import './index.css'

const Card = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="paragraph">{description}</p>
      <div className="back">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default Card

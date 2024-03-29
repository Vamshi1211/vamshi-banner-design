// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <li className={`${className} card-container`}>
      <div className="list-card">
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="buttons">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem

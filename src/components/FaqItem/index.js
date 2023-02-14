import {useState} from 'react'
import './index.css'

export default function FaqItem(props) {
  const [height, setHeight] = useState('faqs-list')
  const [imageAltText, setImageAltText] = useState('plus')
  const [buttonBackground, setButtonBackground] = useState(
    'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png',
  )
  const [isButtonClicked, setIsButtonClicked] = useState(true)

  const {faqsList} = props
  const {questionText, answerText} = faqsList

  const toggleButton = () => {
    setIsButtonClicked(!isButtonClicked)

    if (isButtonClicked === true) {
      setHeight('faqs-list-2')
      setImageAltText('minus')
      setButtonBackground(
        'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png',
      )
    }
    if (isButtonClicked === false) {
      setHeight('faqs-list')
      setImageAltText('plus')
      setButtonBackground(
        'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png',
      )
    }
  }

  const toggleCodes =
    toggleButton && isButtonClicked ? (
      ''
    ) : (
      <div className="hr-answerText-conatiner">
        <hr className="hr" />
        <p className="answerText">{answerText}</p>
      </div>
    )

  return (
    <li>
      <div className={height}>
        <div className="making-flex">
          <div className="question-container">
            <h1 className="question">{questionText}</h1>
          </div>
          <div className="button-container">
            <button className="plus" type="button" onClick={toggleButton}>
              <img src={buttonBackground} alt={imageAltText} className="plus" />
            </button>
          </div>
        </div>
        {toggleCodes}
      </div>
    </li>
  )
}

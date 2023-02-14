import {useState} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

export default function Faqs(props) {
  const {faqsList} = props

  return (
    <div className="faqs-container">
      <div className="faqs">
        <h1 className="faqs-head">FAQs</h1>
        <ul className="faqs-list-container">
          {faqsList.map(eachItem => (
            <FaqItem faqsList={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

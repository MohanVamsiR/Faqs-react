// Write your code here.
import './index.css'
import Faqitem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="container">
      <div className="faq-container">
        <h1 className="heading">FAQs</h1>
        <ul className="unordered">
          {faqsList.map(each => (
            <Faqitem eachItem={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs

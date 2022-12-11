import {Component} from 'react'
import './index.css'

class Faqitem extends Component {
  state = {hide: false}

  changeHide = () => {
    this.setState(prevState => ({hide: !prevState.hide}))
  }

  renderDiv = () => {
    const {hide} = this.state
    const {eachItem} = this.props
    const {answerText} = eachItem

    if (hide) {
      return (
        <div>
          <hr />
          <p className="answ">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {hide} = this.state
    const {eachItem} = this.props
    const {questionText} = eachItem

    const btnImg = hide
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const imgAlt = hide ? 'minus' : 'plus'

    return (
      <li className="listEl">
        <div className="faq-cont">
          <div className="ques-cont">
            <h1 className="question">{questionText}</h1>
            <button type="button" className="button" onClick={this.changeHide}>
              <img src={btnImg} alt={imgAlt} className="image" />
            </button>
          </div>
          {this.renderDiv()}
        </div>
      </li>
    )
  }
}

export default Faqitem

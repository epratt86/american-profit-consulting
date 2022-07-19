import React, { Component } from "react"
import InputRange from "react-input-range"
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa"
import "react-input-range/lib/css/index.css"
import styles from "../../css/calculator.module.css"
import Modal from "../../components/Modal"
import img from "../../images/business-plan.png"

export default class LoanCalculator extends Component {
  state = {
    amountValue: 50000,
    yearsValue: 10,
    show: false,
  }
  handleAmountChange = value => {
    this.setState({ amountValue: value })
  }
  handleYearChange = value => {
    this.setState({ yearsValue: value })
  }
  showModal = () => {
    this.setState({ show: true })
  }
  hideModal = () => {
    this.setState({ show: false })
  }
  render() {
    let { amountValue, yearsValue } = this.state
    return (
      <div className={styles.calculator}>
        <div className={styles.header}>
          <h2>
            Need a fast <br />
            business loan?
          </h2>
        </div>
        <div className={styles.calcBody}>
          <h4 className={styles.borrow}>I want to borrow: ${amountValue}</h4>
          <InputRange
            step={1000}
            maxValue={1000000}
            minValue={5000}
            value={amountValue}
            onChange={this.handleAmountChange}
          />
          <br />
          <h4>
            Over {yearsValue} year{yearsValue > 1 && "s"}
          </h4>
          <InputRange
            step={1}
            maxValue={25}
            minValue={5}
            value={yearsValue}
            onChange={this.handleYearChange}
          />
          <Display years={yearsValue} amount={amountValue} />
        </div>
        <div className={styles.footer}>
          <button
            fade
            className="btn-primary"
            id={styles.cta}
            aria-label="Get your free quote"
            onClick={this.showModal}
          >
            Get Your Free Quote
          </button>
          <p>*Example only. Assumes strong credit.</p>
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className={styles.modalContainer}>
            <div className={styles.modalRow}>
              <div style={{ margin: "auto" }}>
                <img src={img} alt="business plan" className={styles.image} />
              </div>
              <form
                name="loan-calc"
                className={styles.form}
                method="post"
                action="/success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <p className={styles.title}>
                  <span style={{ textTransform: "lowercase" }}>apc</span> |
                  American Profit Consulting
                </p>
                <div>
                  <label htmlFor="name">
                    <FaUser />
                    &nbsp;name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={styles.formControl}
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">
                    <FaEnvelope />
                    &nbsp;email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={styles.formControl}
                    placeholder="email@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone">
                    <FaPhone />
                    &nbsp;phone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className={styles.formControl}
                    placeholder="619-555-5555"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">
                    <FaRegCommentDots />
                    &nbsp;message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="10"
                    className={styles.formControl}
                    required
                    value={`I would like to borrow $${this.state.amountValue} over the next ${this.state.yearsValue} years - Show me how!`}
                  />
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="loan-calc" />
                </div>
                <div>
                  <button
                    type="submit"
                    aria-label="send message"
                    className="btn-primary"
                  >
                    send message
                  </button>
                </div>
                <br />
              </form>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

class Display extends React.Component {
  state = {
    APR: 0.05,
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateAPR()
    }
  }

  calculateAPR = () => {
    let { amount } = this.props

    if (1000 < amount && amount < 5000) {
      this.setState({ APR: 0.05 })
    }
    if (5000 < amount && amount < 10000) {
      this.setState({ APR: 0.1 })
    }
    if (10000 < amount && amount < 15000) {
      this.setState({ APR: 0.15 })
    }
    if (15000 < amount && amount < 20000) {
      this.setState({ APR: 0.2 })
    }
  }

  calculateMonthlyRepayment = () => {
    let { amount, years } = this.props
    let decimalFormat = this.state.APR + 1
    let totalOwed = decimalFormat * amount
    let monthlyRepayment = totalOwed / (years * 12)

    return <p>${Math.round(monthlyRepayment)}</p>
  }

  percentageAPR = () => {
    return <p>{this.state.APR * 100}%</p>
  }

  render() {
    return (
      <div className={styles.flex}>
        <DisplayChild func={this.percentageAPR()} text="Interest Rate" />
        <DisplayChild
          func={this.calculateMonthlyRepayment()}
          text="Monthly Repayment"
        />
      </div>
    )
  }
}

const DisplayChild = ({ func, text }) => {
  return (
    <span>
      {func} <small>{text}</small>
    </span>
  )
}

import React, { Component } from "react"
import InputRange from "react-input-range"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "react-input-range/lib/css/index.css"
import styles from "../../css/calculator.module.css"

export default class LoanCalculator extends Component {
  state = {
    amountValue: 5000,
    yearsValue: 5,
  }
  handleAmountChange = value => {
    this.setState({ amountValue: value })
  }
  handleYearChange = value => {
    this.setState({ yearsValue: value })
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
            step={100}
            maxValue={100000}
            minValue={1000}
            value={amountValue}
            onChange={this.handleAmountChange}
          />
          <h4>
            Over {yearsValue} year{yearsValue > 1 && "s"}
          </h4>
          <InputRange
            step={0.5}
            maxValue={15}
            minValue={1}
            value={yearsValue}
            onChange={this.handleYearChange}
          />
          <Display years={yearsValue} amount={amountValue} />
        </div>
        <div className={styles.footer}>
          <AniLink fade to="/contact" className="btn-primary">
            Get Your Free Quote
          </AniLink>
          <p>*Example only. Assumes strong credit.</p>
        </div>
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

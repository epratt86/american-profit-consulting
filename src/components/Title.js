import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="first">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </div>
  )
}
export default styled(Title)`
  text-transform: uppercase;
  font-size: 3rem;

  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }

  .first {
    color: var(--mainWhite);
  }

  span {
    display: block;
  }

  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`

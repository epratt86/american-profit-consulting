import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/cta.module.css"

const Cta = () => {
  return (
    <section className={styles.cta}>
      <h3>
        need a fast, <span>business loan?</span>
      </h3>
      <AniLink
        fade
        to="/contact"
        className="btn-white"
        aria-label="Get a free quote"
      >
        get a free quote
      </AniLink>
    </section>
  )
}

export default Cta

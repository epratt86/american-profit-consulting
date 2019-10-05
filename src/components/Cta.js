import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/cta.module.css"

const Cta = () => {
  return (
    <section className={styles.cta}>
      <h3>
        need a fast, <span>busines loan?</span>
      </h3>
      <AniLink fade to="/contact" className="btn-white">
        get a free quote
      </AniLink>
    </section>
  )
}

export default Cta

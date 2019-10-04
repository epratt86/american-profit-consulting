import React from "react"
import styles from "../css/banner.module.css"

const Banner = ({ title, info, children }) => {
  return (
    <section className={styles.banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </section>
  )
}

export default Banner

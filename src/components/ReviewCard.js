import React from "react"
import { FaStar } from "react-icons/fa"
import styles from "../css/review-card.module.css"

const ReviewCard = ({ name, company, review }) => {
  return (
    <article className={styles.reviewCard}>
      <div className={styles.row}>
        <div className={styles.colOne}>
          <div className={styles.stars}>
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
          </div>
        </div>
        <div className={styles.colTwo}>
          <h5>{name}</h5>
          <h6>{company}</h6>
          <p>{review}</p>
        </div>
      </div>
    </article>
  )
}

export default ReviewCard

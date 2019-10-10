import React from "react"
import { FaStar } from "react-icons/fa"
import styles from "../css/review-card.module.css"

const ReviewCard = () => {
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
          <h5>Sean Haggerty</h5>
          <h6>President Protector Brewery LLC</h6>
          <div>
            American Profit Consulting has done an awesome job with the services
            provided to our brewery! Products are outstanding and they will beat
            competitor pricing on everything they provide, highly recommend
            doing business with American Profit Consulting!
          </div>
        </div>
      </div>
    </article>
  )
}

export default ReviewCard

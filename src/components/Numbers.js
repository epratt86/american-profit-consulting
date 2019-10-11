import React from "react"
import CountUp from "react-countup"
import styles from "../css/numbers.module.css"

const Numbers = () => {
  return (
    <section className={styles.numbers}>
      <div className={styles.center}>
        <div className={styles.row}>
          <div className={styles.counter}>
            <CountUp
              delay={2}
              duration={2.75}
              start={0}
              end={3.9}
              decimals={2}
              suffix=" %"
            />
            <h4>rates</h4>
          </div>
          <div className={styles.counter}>
            <CountUp
              delay={2}
              duration={2.75}
              start={0}
              end={60}
              decimals={0}
              suffix=" minute"
            />
            <h4>approval</h4>
          </div>
          <div className={styles.counter}>
            <CountUp
              delay={2}
              duration={4}
              start={0}
              end={150}
              decimals={0}
              prefix="$ "
              suffix=" million"
            />
            <h4>funded</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Numbers

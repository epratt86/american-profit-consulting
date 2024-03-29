import React from "react"
import styles from "../../css/contact.module.css"
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className="center">
        <article className={styles.headline}>
          <h1>Get in Touch with American Profit Consulting</h1>
          <h2>
            Complete the form below and get in touch with someone today.
          </h2>
        </article>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.header}>
              <h4>FREE 30 MINUTE CONSULTATION</h4>
              <p>
                Contact us for a complimentary 30 minute consultation discovery
                call.
              </p>
              <br />
              <p>310 3rd Ave Suite c27a,</p>
              <p>Chula Vista, California 91910</p>
              <br />
              <p>
                Phone: <a href="tel:619-330-1285">619-330-1285</a>
              </p>
            </div>
          </div>
          <div className={styles.col}>
            <form
              name="contact"
              className={styles.form}
              method="post"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
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
                  placeholder="Leave your message"
                  required
                />
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn-primary"
                  aria-label="send message"
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.bgPattern}></div>
      </div>
    </section>
  )
}

export default Contact

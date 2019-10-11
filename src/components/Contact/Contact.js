import React from "react"
import styles from "../../css/contact.module.css"
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa"
import Title from "../Title"
import ReviewCard from "../ReviewCard"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className="center">
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.header}>
              <h4>FREE 30 MINUTE CONSULTATION</h4>
              <p>
                Contact us for a complimentary 30 minute consultation discovery
                call.
              </p>
              <br />
              <p>1340 Imperial Beach Blvd Ste 200,</p>
              <p>Imperial Beach, California</p>
              <br />
              <p>
                Phone: <a href="tel:619-836-0267">619-836-0267</a>
              </p>
            </div>
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
          <div className={styles.col}>
            <section className="reviews">
              <ReviewCard
                name="Kurt Bach"
                company="Attitude Brewing Company"
                review="Humberto really understands the needs of his clients. He is very capable of wadding through the complicated application processes and he will find you the right fit. We always felt we were his top priority. A complete pleasure to work with."
              />
              <br />
              <ReviewCard
                name="Carlos Hernandez"
                review="I’m very grateful for American Profit Consulting. They helped me secure financing to help grow my business that i didn’t think was possible. I would recommend these guys to anyone and everyone."
              />
              <br />
              <ReviewCard
                name="Dillon McCormick"
                review="I’ve had the pleasure of working with Humberto from American Profit Consulting and I would no doubt recommend his service to any business owner. His knowledge, guidance, and unbiased professional opinion are invaluable to the growth of a business. Do yourself a favor and give him a call."
              />
              <br />
              <ReviewCard
                name="Francesco Bucci"
                review="Humberto is responsive, competent, personable and... he's always on the lookout for problems: because his favorite job is to find solutions."
              />
              <br />
              <ReviewCard
                name="Patrick Sanders"
                review="Humberto was very professional and helped me purchase my commercial office with favorable terms. Would definitely recommend."
              />
            </section>
          </div>
        </div>
        <div className={styles.bgPattern}></div>
      </div>
    </section>
  )
}

export default Contact

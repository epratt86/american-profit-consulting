import React from "react"
import styles from "../../css/contact.module.css"
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Title from "../Title"

const getImage = graphql`
  query contactImage {
    contactImage: file(relativePath: { eq: "businessman-contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Contact = () => {
  const { contactImage } = useStaticQuery(getImage)

  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <div className={styles.header}>
          <article className={styles.contactImg}>
            <Img
              fluid={contactImage.childImageSharp.fluid}
              alt="Get in touch"
            />
          </article>
          <div className={styles.contactHeading}>
            <h4>FREE 30 MINUTE CONSULTATION</h4>
            <p>
              Contact us for a complimentary 30 minute consultation discovery
              call.
            </p>
            <h4>apc | American Profit Consulting</h4>
            <p>
              1340 Imperial Beach Blvd Ste 200, Imperial Beach, California,
              United States
            </p>
          </div>
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
        <div className={styles.bgPattern}></div>
      </div>
    </section>
  )
}

export default Contact

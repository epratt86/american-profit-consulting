import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "business-plan.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  // name must match name of query
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about} id="about">
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="Expert Knowledge"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>proven experience</h4>
          <p>
            Put over 15 years of financial services experience in your corner.
          </p>
          <p>
            As a former business banker/lender, I have a deep passion and regard
            for business but have spent the last 15 years working for business
            banks under their agenda. During that time I knew I was under
            serving business owners around me because of the bias guidance I was
            forced to give in order to keep my job at the bank that employed me.
            Now I have the opportunity to guide and consult business owners with
            the TRUTH.
          </p>
          <h4>Insider Knowledge &amp; Pricing</h4>
          <p>
            Allow me to negotiate pricing on your behalf using the insider
            information to yield unprecedented savings.
          </p>
          <p>
            With over 15 years of banking experience and having funded over
            $100,000,000 in business loans, I will use my expertise to navigate
            the entire loan process and negotiate excellent terms using the same
            information and knowledge that banks use.
          </p>
          <AniLink fade to="/contact" className="btn-primary">
            get in touch
          </AniLink>
        </article>
      </div>
    </section>
  )
}

export default About

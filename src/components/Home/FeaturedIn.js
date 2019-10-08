import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "../../css/featured-in.module.css"
import Img from "gatsby-image"

const getImages = graphql`
  query {
    inc: file(relativePath: { eq: "featured/500.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    businessInsider: file(
      relativePath: { eq: "featured/business-insider.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    businessdotcom: file(relativePath: { eq: "featured/businessdotcom.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    cnn: file(relativePath: { eq: "featured/cnn.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    forbes: file(relativePath: { eq: "featured/forbes.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    nbc: file(relativePath: { eq: "featured/nbc.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const FeaturedIn = () => {
  const {
    inc,
    businessInsider,
    businessdotcom,
    cnn,
    forbes,
    nbc,
  } = useStaticQuery(getImages)

  return (
    <section className={styles.featured}>
      <h4>featured in*</h4>
      <div className={styles.center}>
        <article className={styles.logos}>
          <Img
            fluid={inc.childImageSharp.fluid}
            alt="Fortune 500"
            className={styles.logo}
          />
          <Img
            fluid={businessInsider.childImageSharp.fluid}
            alt="Business Insider"
            className={styles.logo}
          />
          <Img
            fluid={businessdotcom.childImageSharp.fluid}
            alt="business.com"
            className={styles.logo}
          />
          <Img
            fluid={cnn.childImageSharp.fluid}
            alt="CNN"
            className={styles.logo}
          />
          <Img
            fluid={forbes.childImageSharp.fluid}
            alt="Forbes"
            className={styles.logo}
          />
          <Img
            fluid={nbc.childImageSharp.fluid}
            alt="NBC"
            className={styles.logo}
          />
        </article>
      </div>
    </section>
  )
}

export default FeaturedIn

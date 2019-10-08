import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Numbers from "../components/Numbers"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import FeaturedIn from "../components/Home/FeaturedIn"
import LoanCalculator from "../components/Home/LoanCalculator"
import Cta from "../components/Cta"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import styles from "../css/home.module.css"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" description="this is my description" />
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <div className={styles.landing}>
        <Banner>
          <div className={styles.intro}>
            <h1>not just another broker</h1>
            <h2>A consultant with specialized knowledge</h2>
            <AniLink
              fade
              to="/products"
              className="btn-white"
              aria-label="products"
            >
              what we offer
            </AniLink>
          </div>
        </Banner>
        <div className={styles.calcWrapper}>
          <LoanCalculator />
        </div>
      </div>
    </StyledHero>
    <Numbers />
    <Services />
    <FeaturedIn />
    <Cta />
  </Layout>
)

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "sandiego.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

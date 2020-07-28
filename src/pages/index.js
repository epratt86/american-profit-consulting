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
import ReviewSlider from "../components/ReviewSlider"
import social from "../constants/social-icons"

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Not just another broker, a consultant with specialized knowledge. Proven experience with over 15 years of financial services and expertise to help make your business thrive."
      />
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <div className={styles.landing}>
          <Banner>
            <div className={styles.intro}>
              <h1>Your SBA Disaster Loan Expert</h1>
              <h2>Helping Lenders Get Approved All Across San Diego</h2>
              <AniLink
                fade
                to="/contact"
                className="btn-white"
                aria-label="contact"
              >
                Get Funded
              </AniLink>
            </div>
          </Banner>
          <div className={styles.calcWrapper}>
            <LoanCalculator />
          </div>
        </div>
      </StyledHero>
      <Numbers />
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2.5rem",
          padding: "1rem 1rem",
          background: "var(--mainBlack)",
        }}
      >
        {social.map((icon, index) => {
          return (
            <a
              key={index}
              href={icon.url}
              target="_blank"
              className="social-icon"
              rel="noopener noreferrer"
              aria-label={icon.name}
            >
              {icon.icon}
            </a>
          )
        })}
      </section>
      <Services />
      <section className="clients">
        <div className="center">
          <h4>see what others are saying</h4>
          <ReviewSlider />
        </div>
      </section>
      <FeaturedIn />
      <Cta />
    </Layout>
  )
}

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

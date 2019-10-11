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
import ReviewCard from "../components/ReviewCard"
import Title from "../components/Title"
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
    <section className="clients">
      <div className="center">
        <Title title="satisfied" subtitle="clients" />
        <div className="row">
          <section id={styles.colOne}>
            <ReviewCard
              name="Sean Haggerty"
              company="President Protector Brewery LLC"
              review="American Profit Consulting has done an awesome job with the services provided to our brewery! Products are outstanding and they will beat competitor pricing on everything they provide, highly recommend doing business with American Profit Consulting!"
            />
            <br />
            <ReviewCard
              name="Chad Bell"
              company="Achilles Coffee Roasters"
              review="Humberto is a real pro. He managed our loan application process from beginning to end and helped us get the financing we needed to expand. In addition, he saved us a lot of money with our worker's comp and liability insurance policies. Recently he found us financing for a company van which was less than what the dealer offered us - Thanks Humberto!"
            />
          </section>
          <section id={styles.colTwo}>
            <ReviewCard
              name="Mike Woodall"
              review="Humberto is knowledgeable professional. Without his expert advice, one of my clients would never have received the growth capital they needed."
            />
            <br />
            <ReviewCard
              name="Jose"
              review="Humberto is an excellent consultant. I couldn’t think of anyone more knowledgeable and competent as him. He listens to understand your needs and delivers. Next time I need funding or guidance he’ll be the first I call without a doubt."
            />
            <br />
            <ReviewCard
              name="Ali Horuz"
              company="VIP Pedicabs"
              review="Great experience working with Humberto l higly recommend him."
            />
          </section>
        </div>
      </div>
    </section>
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

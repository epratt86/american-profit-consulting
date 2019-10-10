import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
import Video from "../components/Video"
import SEO from "../components/SEO"
import Title from "../components/Title"
import ReviewCard from "../components/ReviewCard"
import Numbers from "../components/Numbers"

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
      <Contact />
      <Numbers />
      <section className="clients">
        <div className="center">
          <Title title="client" subtitle="reviews" />
          <div className="row">
            <section className="reviews">
              <ReviewCard />
              <br />
              <ReviewCard />
            </section>
            <Video
              videoSrcURL="https://www.youtube.com/embed/pteZYJyo05M"
              videoTitle="Achilles Coffee Roasters Funded"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default contact

export const query = graphql`
  {
    contactBcg: file(relativePath: { eq: "balboa.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

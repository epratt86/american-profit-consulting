import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
import Video from "../components/Video"
import SEO from "../components/SEO"

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
      <Contact />
      <Video
        videoSrcURL="https://www.youtube.com/embed/hTgKjCSgGZY"
        videoTitle="another client successfully funded!"
      />
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

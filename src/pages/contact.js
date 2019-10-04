import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHero img={data.contactBcg.childImageSharp.fluid}>
        <h1 className="title">contact us</h1>
      </StyledHero>
      <Contact />
    </Layout>
  )
}

export default contact

export const query = graphql`
  {
    contactBcg: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

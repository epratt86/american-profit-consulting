import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"
import Numbers from "../components/Numbers"

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Free thirty minute consultation. Contact us for a complimentary discovery call."
      />
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
      <Contact />
      <Numbers />
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

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"
import styles from "../css/products.module.css"

const products = ({ data }) => {
  return (
    <Layout>
      <SEO title="Products" />
      <StyledHero img={data.productsBkg.childImageSharp.fluid}>
        <h1 className="title">products</h1>
      </StyledHero>
    </Layout>
  )
}

export const query = graphql`
  {
    productsBkg: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default products

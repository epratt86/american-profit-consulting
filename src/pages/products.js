import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"
import ProductsList from "../components/Products/ProductsList"

const products = ({ data }) => {
  return (
    <Layout>
      <SEO title="Products" />
      <StyledHero img={data.productsBkg.childImageSharp.fluid} />
      <ProductsList />
    </Layout>
  )
}

export const query = graphql`
  {
    productsBkg: file(relativePath: { eq: "coronado.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default products

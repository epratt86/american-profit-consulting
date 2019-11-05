import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"
import ProductsList from "../components/Products/ProductsList"

const products = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Services"
        description="We offer multiple services to fit your financial needs. We provide help with Small Business Financing, Bookkeeping and Accounting, Commercial Insurance, and Credit Card Processing."
      />
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

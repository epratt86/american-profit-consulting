import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/SEO"

const blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <StyledHero img={data.blogBcg.childImageSharp.fluid}>
        <h1 className="title">our blogs</h1>
      </StyledHero>
      <BlogList />
    </Layout>
  )
}

export default blog

export const query = graphql`
  {
    blogBcg: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

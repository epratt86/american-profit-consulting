import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Title from "../components/Title"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/SEO"

const blog = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Blog"
        description="Welcome to the APC Blog. Check out my recent posts."
      />
      <StyledHero img={data.blogBcg.childImageSharp.fluid}>
        <Title title="recent" subtitle="posts" />
      </StyledHero>
      <BlogList />
    </Layout>
  )
}

export default blog

export const query = graphql`
  {
    blogBcg: file(relativePath: { eq: "ocean.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

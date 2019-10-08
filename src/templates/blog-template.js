import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Cta from "../components/Cta"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/SEO"

const blogTemplate = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div>
            <img
              width="750"
              src={node.data.target.fields.file["en-US"].url}
              alt={title}
              style={{ display: "block", margin: "0 auto", padding: "1rem" }}
            />
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title={title} />
      <StyledHero img={data.blogTempBcg.childImageSharp.fluid}>
        <h1 className={styles.title}>apc</h1>
      </StyledHero>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
      <Cta />
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
    blogTempBcg: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default blogTemplate

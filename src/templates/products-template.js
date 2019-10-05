import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/SEO"

const productsTemplate = ({ data }) => {
  const {
    name,
    description: { json },
    image,
  } = data.products

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div>
            <img
              width="100%"
              src={node.data.target.fields.file["en-US"].url}
              alt="contentful"
              style={{ display: "block", margin: "0 auto", padding: "1rem" }}
            />
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <SEO title={name} />
      <StyledHero img={image.fluid} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{name}</h1>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/products" className="btn-primary">
            all products
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getProducts($slug: String!) {
    products: contentfulProducts(slug: { eq: $slug }) {
      name
      description {
        json
      }
      image {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default productsTemplate

import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Title from "../components/Title"
import StyledHero from "../components/StyledHero"
import Numbers from "../components/Numbers"
import SEO from "../components/SEO"
import styles from "../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

const getCustomers = graphql`
  query customersImage {
    customersImage: file(relativePath: { eq: "humberto-kids.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    customersHero: file(relativePath: { eq: "pier.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    content: allContentfulAbout {
      edges {
        node {
          featuredImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          textContent {
            json
          }
        }
      }
    }
  }
`

const Customers = () => {
  // name must match name of query
  const { customersHero, content } = useStaticQuery(getCustomers)
  const { featuredImage, textContent } = content.edges[0].node

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return <div></div>
      },
    },
  }

  return (
    <Layout>
      <SEO title="Customers" description="change me" />
      <StyledHero img={customersHero.childImageSharp.fluid}>
        <Title title="trusted" subtitle="partners" />
      </StyledHero>
      <section className={styles.about}>
        <div className="center">
          <div className={styles.row}>
            <div className={styles.bio}>
              <article className={styles.aboutImg}>
                <div className={styles.imgContainer}>
                  <Img fluid={featuredImage.fluid} alt="Humberto Hernandez" />
                </div>
              </article>
              <article className={styles.aboutInfo}>
                {documentToReactComponents(textContent.json, options)}
                <AniLink
                  fade
                  to="/contact"
                  className="btn-primary"
                  aria-label="Get in touch"
                >
                  get in touch
                </AniLink>
              </article>
            </div>
          </div>
        </div>
        <div className={styles.bgPattern}></div>
      </section>
      <Numbers />
    </Layout>
  )
}

export default Customers

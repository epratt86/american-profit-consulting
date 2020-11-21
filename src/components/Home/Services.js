import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from "../../css/services.module.css"

const getServices = graphql`
  query {
    services: allContentfulProducts {
      edges {
        node {
          name
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          homeIntroText {
            json
          }
        }
      }
    }
  }
`

const Services = () => {
  const { services } = useStaticQuery(getServices)

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return <div></div>
      },
    },
  }

  return (
    <section className={styles.services} id="services">
      <div className={styles.center}>
        <h2 className={styles.title}>We help business owners like you</h2>
        <article className={styles.serviceA}>
          <div className={styles.serviceImage}>
            <Image
              fluid={services.edges[0].node.image.fluid}
              className={styles.img}
              alt="product card"
            />
          </div>
          <div className={styles.serviceBody}>
            <h3 className={styles.serviceTitle}>
              {services.edges[0].node.name}
            </h3>
            <div>
              {documentToReactComponents(
                services.edges[0].node.homeIntroText.json,
                options
              )}
            </div>

            <AniLink
              fade
              //to={`/services/${services.edges[0].node.slug}`}
              to={"/contact"}
              className="btn-primary"
            >
              More Info
            </AniLink>
          </div>
        </article>
        <article className={styles.serviceB}>
          <div className={styles.serviceBody}>
            <h4 className={styles.serviceTitle}>
              {services.edges[1].node.name}
            </h4>
            <div>
              {documentToReactComponents(
                services.edges[1].node.homeIntroText.json,
                options
              )}
            </div>
            <AniLink
              fade
              to={`/services/${services.edges[1].node.slug}`}
              className="btn-primary"
            >
              Find Out How
            </AniLink>
          </div>
          <div className={styles.serviceImage}>
            <Image
              fluid={services.edges[1].node.image.fluid}
              className={styles.img}
              alt="product card"
            />
          </div>
        </article>
        <article className={styles.serviceA}>
          <div className={styles.serviceImage}>
            <Image
              fluid={services.edges[2].node.image.fluid}
              className={styles.img}
              alt="product card"
            />
          </div>
          <div className={styles.serviceBody}>
            <h4 className={styles.serviceTitle}>
              {services.edges[2].node.name}
            </h4>
            <div>
              {documentToReactComponents(
                services.edges[2].node.homeIntroText.json,
                options
              )}
            </div>
            <AniLink
              fade
              to={`/services/${services.edges[2].node.slug}`}
              className="btn-primary"
            >
              Learn More
            </AniLink>
          </div>
        </article>
        <article className={styles.serviceB}>
          <div className={styles.serviceBody}>
            <h4 className={styles.serviceTitle}>
              {services.edges[3].node.name}
            </h4>
            <div>
              {documentToReactComponents(
                services.edges[3].node.homeIntroText.json,
                options
              )}
            </div>
            <AniLink
              fade
              to={`/services/${services.edges[3].node.slug}`}
              className="btn-primary"
            >
              Discover How
            </AniLink>
          </div>
          <div className={styles.serviceImage}>
            <Image
              fluid={services.edges[3].node.image.fluid}
              className={styles.img}
              alt="product card"
            />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services

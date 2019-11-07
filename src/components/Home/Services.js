import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Title from "../Title"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
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
        }
      }
    }
  }
`

const Services = () => {
  const { services } = useStaticQuery(getServices)
  return (
    <section className={styles.services}>
      <Title title="services" subtitle="offered" />
      <div className={styles.center}>
        <article className={styles.serviceA}>
          <div className={styles.serviceImage}>
            <Image
              fluid={services.edges[0].node.image.fluid}
              className={styles.img}
              alt="product card"
            />
          </div>
          <div className={styles.serviceBody}>
            <h4 className={styles.serviceTitle}>
              {services.edges[0].node.name}
            </h4>
            <p>
              Fact: Over 70% of business loan applications are declined by banks
              and lenders. Why? We firmly believe that the reason the decline
              rate is so high is because clients are uneducated and
              underassisted in how to structure their financials and their loan
              request, let alone navigate the complex banking system. Let me
              show you how to get the funding you need.
            </p>
            <AniLink
              fade
              to={`/services/${services.edges[0].node.slug}`}
              className="btn-primary"
            >
              Learn More
            </AniLink>
          </div>
        </article>
        <article className={styles.serviceB}>
          <div className={styles.serviceBody}>
            <h4 className={styles.serviceTitle}>
              {services.edges[1].node.name}
            </h4>
            <p>
              Business operations can be complex. At American Profit Consulting,
              we make it our priority to understand your company and the
              exposures that you face. We take a practical & hands on approach
              to identifying areas of concern, and then work with you to
              eliminate and/or mitigate risk while lowering your overhead.
            </p>
            <AniLink
              fade
              to={`/services/${services.edges[1].node.slug}`}
              className="btn-primary"
            >
              Learn More
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
            <p>
              As your business grows, you need the tools and know-how to help
              improve efficiency and profitability. Grow and optimize your
              business with the guidence to help you succeed. American Profit
              Consulting will help you find the right merchants to process
              payments from anywhere.
            </p>
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
            <p>
              No matter how much revenue you can generate or how strong your
              balance sheet may be, the simple reality is that the only
              businesses that survive and thrive are those that can consistently
              find ways to lower overhead and increase their cash flow over long
              periods of time.
            </p>
            <AniLink
              fade
              to={`/services/${services.edges[3].node.slug}`}
              className="btn-primary"
            >
              Learn More
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

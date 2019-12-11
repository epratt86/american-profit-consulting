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

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "humberto-kids.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutHero: file(relativePath: { eq: "pier.jpg" }) {
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

const About = () => {
  // name must match name of query
  const { aboutImage, aboutHero, content } = useStaticQuery(getAbout)
  const { featuredImage, textContent } = content.edges[0].node

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return <div></div>
      },
    },
  }

  console.log(textContent)

  return (
    <Layout>
      <SEO
        title="About"
        description="As a former business banker/lender, I have a deep passion and regard for business but have spent the last 14 years working for business banks under their agenda. Now I know the truth..."
      />
      <StyledHero img={aboutHero.childImageSharp.fluid} />
      <section className={styles.about}>
        <Title title="proven" subtitle="experience" />
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

export default About

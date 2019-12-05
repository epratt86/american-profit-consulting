import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Title from "../components/Title"
import StyledHero from "../components/StyledHero"
import Numbers from "../components/Numbers"
import SEO from "../components/SEO"
import styles from "../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
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
  }
`

const About = () => {
  // name must match name of query
  const { aboutImage, aboutHero } = useStaticQuery(getAbout)

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
                  <Img
                    fluid={aboutImage.childImageSharp.fluid}
                    alt="Humberto Hernandez"
                  />
                </div>
              </article>
              <article className={styles.aboutInfo}>
                <h4>Expertise you can rely on</h4>
                <h5>
                  Put over 15 years of financial services experience in your
                  corner.
                </h5>
                <p>
                  As a former business banker/lender, I have a deep passion and
                  regard for business but have spent the last 14 years working
                  for business banks under their agenda. During that time I knew
                  I was under serving business owners around me because of the
                  bias guidance I was forced to give in order to keep my job at
                  the bank that employed me. Now I have the opportunity to guide
                  and consult business owners with the TRUTH.
                </p>
                <h4>Insider Knowledge &amp; Pricing</h4>
                <h5>
                  Allow me to negotiate pricing on your behalf using the insider
                  information to yield unprecedented savings.
                </h5>
                <p>
                  With over 15 years of banking experience and having funded
                  over $150,000,000 in business loans, I will use my expertise
                  to navigate the entire loan process and negotiate excellent
                  terms using the same information and knowledge that banks use.
                </p>
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

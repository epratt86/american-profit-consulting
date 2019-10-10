import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Title from "../components/Title"
import StyledHero from "../components/StyledHero"
import Numbers from "../components/Numbers"
import Video from "../components/Video"
import ReviewCard from "../components/ReviewCard"
import styles from "../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "humberto.jpg" }) {
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
      <StyledHero img={aboutHero.childImageSharp.fluid} />
      <section className={styles.about} id="about">
        <Title title="proven" subtitle="experience" />
        <div className={styles.aboutCenter}>
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
              Put over 15 years of financial services experience in your corner.
            </h5>
            <p>
              As a former business banker/lender, I have a deep passion and
              regard for business but have spent the last 14 years working for
              business banks under their agenda. During that time I knew I was
              under serving business owners around me because of the bias
              guidance I was forced to give in order to keep my job at the bank
              that employed me. Now I have the opportunity to guide and consult
              business owners with the TRUTH.
            </p>
            <h4>Insider Knowledge &amp; Pricing</h4>
            <p>
              Allow me to negotiate pricing on your behalf using the insider
              information to yield unprecedented savings.
            </p>
            <p>
              With over 15 years of banking experience and having funded over
              $100,000,000 in business loans, I will use my expertise to
              navigate the entire loan process and negotiate excellent terms
              using the same information and knowledge that banks use.
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
        <div className={styles.bgPattern}></div>
      </section>
      <Numbers />
      <section className="clients">
        <div className="center">
          <Title title="clients" subtitle="satisified" />
          <div className="row">
            <section className="reviews">
              <ReviewCard
                name="Mark Beach"
                company="Compass Real Estate"
                review="American Profit Consulting is amazing! I was introduced to them through a business colleague and Humberto was hands on with me the whole time. He worked day and night finding me the best insurance for my business and also my personal property.
As a Real Estate professional, I meet hundreds of brokers and business professionals weekly, and I can hands down say that Humberto and American Profit Consulting are the best! I felt that my best interest and comfort through the process was always priority #1 next to my investments.
I recommend Humberto and American Profit Consulting to all of my clients, friends, and family. They check in with me every quarter to make sure I am still happy. And one of the best parts is that I can call at anytime to ask them questions, knowing I am directly connected to my rep.
American Profit Consulting, thank you for all you have done and still do for me. I am a forever client!"
              />
            </section>

            <Video
              videoSrcURL="https://www.youtube.com/embed/diluqhgGMNg"
              videoTitle="RGC General Engineering Funded"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About

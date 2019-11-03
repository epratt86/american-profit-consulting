import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"
import Title from "../components/Title"
import styles from "../css/podcast.module.css"

const podcast = ({ data }) => {
  return (
    <Layout>
      <SEO title="Podcast" />
      <StyledHero img={data.podcastBcg.childImageSharp.fluid} />
      <section className={styles.podcast}>
        <Title title="apc" subtitle="podcast" />
        <div className="center">
          <h3>Podcast section coming soon! Check back for latest episodes.</h3>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>
    </Layout>
  )
}

export default podcast

export const query = graphql`
  {
    podcastBcg: file(relativePath: { eq: "podcast-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

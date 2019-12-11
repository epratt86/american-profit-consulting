import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"
import Title from "../components/Title"
import styles from "../css/podcast.module.css"

const podcast = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Podcast"
        description="Podcast will be coming soon. Check back for the latest episodes."
      />
      <StyledHero img={data.podcastBcg.childImageSharp.fluid} />
      <section className={styles.podcast}>
        <Title title="apc" subtitle="podcast" />
        <div className="center">
          <iframe
            src="https://open.spotify.com/embed-podcast/show/2UW2l5RyfcpjBgFh5WPRWy"
            width="100%"
            height="232"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
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

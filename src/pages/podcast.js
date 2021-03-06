import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"
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
        <div className="center">
          <article className={styles.headline}>
            <h1>Straight Outta Cash Flow</h1>
            <h2>A podcast brought to you by American Profit Consulting</h2>
          </article>
          <iframe
            src="https://anchor.fm/straightouttacashflow/embed"
            height="102px"
            width="400px"
            frameborder="0"
            scrolling="no"
          ></iframe>
          {/* <iframe
            sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups allow-forms"
            scrolling="no"
            width="100%"
            height="185"
            frameborder="0"
            src="https://embed.radiopublic.com/e?if=straight-outta-cash-flow-GOpYY7&ge=s1!d7c1d6b2b77bf02078b49f99abbf9ace68cc07c1"
          ></iframe>
          <iframe
            sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups allow-forms"
            scrolling="no"
            width="100%"
            height="185"
            frameborder="0"
            src="https://embed.radiopublic.com/e?if=straight-outta-cash-flow-GOpYY7&ge=s1!a446aeacb8e1b2aa7337424dcceb8b785c2c3e22"
          ></iframe>
          <iframe
            sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups"
            scrolling="no"
            width="100%"
            height="185"
            frameborder="0"
            src="https://embed.radiopublic.com/e?if=straight-outta-cash-flow-GOpYY7&ge=s1!d46dd6e7d32a555033c5e87f0824bd059df121ab"
          ></iframe> */}
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

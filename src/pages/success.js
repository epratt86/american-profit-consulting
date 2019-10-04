import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import styles from "../css/error.module.css"
import SEO from "../components/SEO"

const success = () => {
  return (
    <Layout>
      <SEO title="Success" />
      <header className={styles.error}>
        <Banner title="Success! Thank you for you interest. We will be getting back to you soon">
          <AniLink fade to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default success

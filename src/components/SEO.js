import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
          siteUrl
        }
      }
    }
  `)

  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      <html lang="en" />
      <meta name="description" content={`${description}`} />
      <meta
        property="og:title"
        content={`${title} | ${data.site.siteMetadata.title}`}
      />
      <meta property="og:description" content={`${description}`} />
      <meta property="og:url" content={`${data.site.siteMetadata.siteUrl}`} />
      <meta
        property="og:image"
        content="https://www.americanprofitconsulting.com/thumbnail.jpg"
      />
      <meta keywords={`${data.site.siteMetadata.keywords}`} />
      <meta property="og:site_name" content="American Profit Consulting" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        property="twitter:title"
        content={`${title}`}
      />
      <meta
        name="twitter:description"
        property="twitter:description"
        content={`${description}`}
      />
      <meta
        name="twitter:image"
        property="twitter:image"
        content="https://www.americanprofitconsulting.com/thumbnail.jpg"
      />
      <meta name="twitter:image:alt" content="American Profit Consulting" />
      <meta name="twitter:site" content="@the_bankwhisper" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.americanprofitconsulting.com/" />
      <script
        type="text/javascript"
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        async
      ></script>
    </Helmet>
  )
}

export default SEO

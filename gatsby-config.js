/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "American Profit Consulting",
    description:
      "Not just another broker, a consultant with specialized knowledge. Proven experience with over 15 years of financial services and expertise to help make your business thrive.",
    author: "Eric Pratt",
    twitterUsername: "@the_bankwhisper",
    image: "/defaultBkg.jpg",
    siteUrl: "https://www.americanprofitconsulting.com/",
    keywords:
      "American Profit Consulting, APC, broker, consultant, finance, financial services, San Diego, Coronado, Imperial Beach",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.americanprofitconsulting.com",
        sitemap: "https://www.americanprofitconsulting.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "5183301",
        respectDNT: true,
        productionOnly: true,
      },
    },
    "gatsby-plugin-styled-components",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}

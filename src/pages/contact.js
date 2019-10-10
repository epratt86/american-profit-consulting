import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
import Video from "../components/Video"
import SEO from "../components/SEO"
import Title from "../components/Title"
import ReviewCard from "../components/ReviewCard"
import Numbers from "../components/Numbers"

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
      <Contact />
      <Numbers />
      <section className="clients">
        <div className="center">
          <Title title="clients" subtitle="funded" />
          <div className="row">
            <section className="reviews">
              <ReviewCard
                name="Kurt Bach"
                company="Attitude Brewing Company"
                review="Humberto really understands the needs of his clients. He is very capable of wadding through the complicated application processes and he will find you the right fit. We always felt we were his top priority. A complete pleasure to work with."
              />
              <br />
              <ReviewCard
                name="Carlos Hernandez"
                review="I’m very grateful for American Profit Consulting. They helped me secure financing to help grow my business that i didn’t think was possible. I would recommend these guys to anyone and everyone."
              />
            </section>
            <Video
              videoSrcURL="https://www.youtube.com/embed/hTgKjCSgGZY"
              videoTitle="VIP Pedicabs Funded"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default contact

export const query = graphql`
  {
    contactBcg: file(relativePath: { eq: "balboa.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

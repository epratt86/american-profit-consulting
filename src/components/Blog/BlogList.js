import React from "react"
import BlogCard from "./BlogCard"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/blog.module.css"

const getPosts = graphql`
  query {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          title
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)

  return (
    <section className={styles.blog}>
      <article className={styles.headline}>
        <h1>American Profit Consulting Blog</h1>
        <h2>
          Your one-stop spot for all the latest info to help your business
          succeed
        </h2>
      </article>
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList

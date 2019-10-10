import React from "react"
import ProductCard from "./ProductsCard"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/products.module.css"

const getProducts = graphql`
  query {
    products: allContentfulProducts {
      edges {
        node {
          name
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

const ProductsList = () => {
  const { products } = useStaticQuery(getProducts)
  return (
    <section className={styles.productsList}>
      <Title title="services" subtitle="offered" />
      <div className={styles.center}>
        {products.edges.map(({ node }) => {
          return <ProductCard key={node.id} product={node} />
        })}
      </div>
    </section>
  )
}

export default ProductsList

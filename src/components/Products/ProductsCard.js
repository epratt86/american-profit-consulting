import React from "react"
import styles from "../../css/blog-card.module.css"
import Image from "gatsby-image"
import Anilink from "gatsby-plugin-transition-link/AniLink"

const ProductsCard = ({ product }) => {
  const { slug, name, image } = product
  return (
    <article className={styles.blog} id={styles.product}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} className={styles.img} alt="product card" />
        <Anilink fade to={`/products/${slug}`} className={styles.link}>
          read more
        </Anilink>
      </div>
      <div className={styles.footer}>
        <h2>{name}</h2>
      </div>
    </article>
  )
}

export default ProductsCard

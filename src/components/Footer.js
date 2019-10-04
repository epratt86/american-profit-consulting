import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((link, index) => {
          return (
            <AniLink fade key={index} to={link.path}>
              {link.text}
            </AniLink>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((icon, index) => {
          return (
            <a
              key={index}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        <p>
          copyright &copy; {new Date().getFullYear()} <br /> American Profit
          Consulting - all rights reserved
        </p>
        <h6>
          <small>*BANK PARTNERS FEATURED IN THESE SITES.</small>
        </h6>
      </div>
    </footer>
  )
}

export default Footer

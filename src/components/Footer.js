import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logo from "../images/apc.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <AniLink fade to="/" aria-label="Home">
            <img
              src={logo}
              alt="American Profit Consulting"
              className={styles.logo}
            />
          </AniLink>
          <div className={styles.links}>
            <h4>Overview</h4>
            {links.map((link, index) => {
              return (
                <AniLink fade key={index} to={link.path} aria-label={link.text}>
                  {link.text}
                </AniLink>
              )
            })}
          </div>
          <div className={styles.icons}>
            <h4>Social</h4>
            {socialIcons.map((icon, index) => {
              return (
                <a
                  key={index}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.name}
                >
                  {icon.icon}
                </a>
              )
            })}
          </div>
        </div>
        <div className={styles.disclaimers}>
          <h6 style={{ marginTop: "1rem" }}>
            <small>*BANK PARTNERS FEATURED IN THESE SITES.</small>
          </h6>
          <p>
            The opporator of this website is NOT a lender, does not make offers
            for loans, and does not broker online loans to lenders or lending
            partners. Customers who arrive at www.americanprofitconsulting.com
            are paired with a lender or a lending partner, and redirected only
            to lenders or lending partners who offer business loan products.
          </p>
        </div>
        <div className={styles.row}>
          <div className={styles.copyright}>
            <p>
              &copy; {new Date().getFullYear()} American Profit Consulting.
              <br />
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

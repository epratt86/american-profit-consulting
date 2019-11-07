import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/navbar.module.css"
import { FaAlignRight, FaPhoneSquare } from "react-icons/fa"
import links from "../constants/links"
import logo from "../images/apc.png"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to="/" aria-label="Home">
            <img
              src={logo}
              alt="American Profit Consulting"
              className={styles.logo}
            />
          </AniLink>

          <button
            type="button"
            aria-label="Menu"
            className={styles.logoBtn}
            onClick={toggleNav}
          >
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((link, index) => {
            return (
              <li key={index}>
                <AniLink fade to={link.path} aria-label={link.text}>
                  {link.text}
                </AniLink>
              </li>
            )
          })}
        </ul>
        <div
          className={
            isOpen
              ? `${styles.navCallNow} ${styles.showCall}`
              : `${styles.navCallNow}`
          }
        >
          {/* {socialIcons.map((icon, index) => {
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
          })} */}
          <span>
            Call Now&nbsp;
            <FaPhoneSquare />
          </span>
          <a href="tel:619-836-0267" style={{ fontSize: "14px", margin: "0" }}>
            619-836-0267
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

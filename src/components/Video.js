import React from "react"
import styles from "../css/video.module.css"

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  return (
    <section className={styles.video}>
      <h3>{videoTitle}</h3>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        className={styles.iframe}
      />
    </section>
  )
}

export default Video

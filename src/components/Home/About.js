import React from "react"
import StyledTitle from "../StyledTitle"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <StyledTitle title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>
            So many things to see, so little time. We have picked the best
            destinations based on years of experience and customers feed back to
            ensure that every journey is an experience that you will cherish.
          </p>
          <p>Let us help you build lifetime memories.</p>

          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About

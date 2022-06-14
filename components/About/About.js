import styles from './About.module.css'

function About() {
  return (
    <section className={styles.about} id='about'>
      <div className={styles.title}>
        <h2>About Us</h2>
        <div className={styles.underline}></div>
      </div>
    </section>
  )
}

export default About

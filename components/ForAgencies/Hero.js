import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.description}>
        <h1>We Shape Artists.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos sit rem
          sequi, nulla esse iure?
        </p>
        <button>What Do We Do ?</button>
      </div>
    </div>
  );
}

export default Hero;

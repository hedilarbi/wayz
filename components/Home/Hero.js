import styles from "./Hero.module.css";
import { useRef } from "react";
import React, { useEffect } from "react";

function Hero() {
  const background = useRef();
  const stone = useRef();
  const left = useRef();
  const right = useRef();
  const container = useRef();

  const handleScroll = (e) => {
    const { pageYOffset } = window;

    if (window.innerWidth > 768) {
      left.current.style.transform = `translateX(-${pageYOffset / 60 + 10}%)`;
      right.current.style.transform = `translateX(${pageYOffset / 60 + 10}%)`;
      left.current.style.opacity = `${1 - pageYOffset / 900}`;
      right.current.style.opacity = `${1 - pageYOffset / 900}`;
    } else {
      left.current.style.transform = `translateX()`;
      right.current.style.transform = `translateX()`;
    }
    background.current.style.transform = `scale(${0.955 + pageYOffset / 8000})`;
    stone.current.style.transform = `scale(${0.955 + pageYOffset / 5000})`;
    background.current.style.opacity = `${1 - pageYOffset / 1100}`;
    stone.current.style.opacity = `${1 - pageYOffset / 1000}`;
    if (pageYOffset > window.innerHeight * 1.6) {
      stone.current.style.position = "absolute";
      left.current.style.position = "absolute";
      right.current.style.position = "absolute";
      background.current.style.position = "absolute";
    } else {
      stone.current.style.position = "fixed";
      left.current.style.position = "fixed";
      right.current.style.position = "fixed";
      background.current.style.position = "fixed";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.container} ref={container}>
      <img
        src="./background.png"
        ref={background}
        className={styles.background}
      />
      <img src="./stone.png" ref={stone} />

      <img src="./left.png" className={styles.left} ref={left} />

      <img src="./right.png" className={styles.right} ref={right} />
    </section>
  );
}

export default Hero;

import { useRouter } from "next/router";
import styles from "./Services.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
function Services() {
  const router = useRouter();
  const navigationHandler = () => {
    router.push("/artists");
  };
  // const [position, setPosition] = useState(0);
  // useEffect(() => {
  //   setPosition(document.getElementById("services").getBoundingClientRect().y);
  // }, []);

  // const handleRotation = () => {
  //   const images = document.getElementsByClassName("flip-card-inner");
  //   if (window.screenY == position) {
  //     images[0].style.transform = "rotateY(180deg)";
  //     images[1].style.transform = "rotateY(180deg)";
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleRotation);
  //   return () => window.removeEventListener("scroll", handleRotation);
  // }, []);
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <h2>what we do</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.services}>
        <div className={styles.agency}>
          <h2>For Agencies</h2>
          <Link href="/services/agencies">
            <a>Read more</a>
          </Link>
        </div>
        <div className={styles.artist}>
          <h2>For Artists</h2>
          <Link href="/services/artists">
            <a>Read more</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;

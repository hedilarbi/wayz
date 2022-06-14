import styles from "../styles/Home.module.css";
import Hero from "../components/Home/Hero";

import Services from "../components/Home/Services";
import { FiChevronUp } from "react-icons/fi";
import Contact from "../components/Home/Contact";
import Artists from "../components/Artists/Artists";
import News from "../components/Artists/News";
export default function Home() {
  return (
    <div>
      <Hero />
      <div className={styles.block}>
        <h1>
          Al<span>wayz</span> The best for your photo and video needs
        </h1>
      </div>
      <Services />

      <Contact />
    </div>
  );
}

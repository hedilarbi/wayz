import styles from "./Card.module.css";
import { FaYoutube, FaSpotify } from "react-icons/fa";
import Image from "next/image";
function Card(props) {
  return (
    <div className={styles.artist}>
      <Image src={props.image} alt="artist" layout="fill" />

      <div className={styles.info}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.links}>
          <FaSpotify className={styles.spotify} />
          <FaYoutube className={styles.youtube} />
        </div>
      </div>
    </div>
  );
}

export default Card;

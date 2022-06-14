import styles from "./Card.module.css";
import { FaYoutube, FaSpotify } from "react-icons/fa";
function Card(props) {
  return (
    <div className={styles.artist}>
      <img src={props.image} alt="" />

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

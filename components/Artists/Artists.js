import styles from "./Artists.module.css";
import data from "../Home/data";
import Card from "../Artists/Card";
function Artists() {
  const artists = data;
  return (
    <section className={styles.artists} id="artists">
      <div className={styles.title}>
        <h2>Our Artists</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.cards}>
        {artists.map((artist) => (
          <Card image={artist.image} name={artist.name} key={artist.id} />
        ))}
      </div>
    </section>
  );
}

export default Artists;

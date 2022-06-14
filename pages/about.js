import styles from "../styles/about.module.css";

function about() {
  return (
    <section className={styles.about}>
      <div className={styles.title}>
        <h1>Who We Are </h1>
      </div>
      <div className={styles.text}>
        <p>
          Established on 30 September 2021 to help unleashed talents shape their
          music and rise above their limits using creative, artistic methods and
          assist businesses in formulating their digital marketing strategies.
          Wayz was founded by Mohamed Amine Maknine who as a director had the
          vision to create revolutionary art that led him to form a team with
          the help of Iheb Bejaoui as a co-founder.
        </p>
        <p>
          Wayz aims to set up a legacy in the history of Tunisian and North
          African Hip-hop by providing top-quality beats with the direct
          supervision of Hamdi Saidi AKA BADKIDBEATS plus video clip making from
          shooting to editing by the hand of many skilled content creators and
          video makers.
        </p>
        <p>
          We provide assistance for businesses from formulating their digital
          communication plans to customer acquisition. We help create effective
          product branding strategies and cost-efficient solutions that will
          highlight their niches among their competitors. We feed every demand
          of a business by providing them services consisting of web
          development, design, content creation, content curation, and
          innovative strategies for attraction and conversion.
        </p>
        <p>
          Wayz is a team of highly enlightened minds that combined their dreams
          and energies to uplift the future of art through hard work,
          consistency, and the ability to quickly adapt to changes in the
          market.
        </p>
      </div>
    </section>
  );
}

export default about;

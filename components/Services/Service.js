import React from "react";
import styles from "./Service.module.css";
const Service = (props) => {
  return (
    <div className={styles.card}>
      <h3>{props.service}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Service;

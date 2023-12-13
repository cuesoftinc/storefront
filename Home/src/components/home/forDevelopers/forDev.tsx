import React from "react";
import styles from "./forDev.module.css";

const ForDev = () => {
  return (
    <section className={styles.dev__section}>
      <h2>
        Storefront for <span>Developers</span>
      </h2>
      <p>
        Dive into the world of Storefront, contribute and even self-host your
        version
      </p>
    </section>
  );
};

export default ForDev;

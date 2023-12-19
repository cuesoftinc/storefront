import React from "react";
import styles from "./ad.module.css";

export default function Adsection() {
  return (
    <section className={styles.adsection}>
      <div className={styles.adcontainer}>
        <div className={styles.adContent}>
          <div className={styles.adheader}>
            <p>Free delivery on all local orders</p>
          </div>
        </div>
      </div>
    </section>
  );
}

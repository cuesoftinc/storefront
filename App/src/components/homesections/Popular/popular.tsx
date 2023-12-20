import React from "react";
import styles from "./popular.module.css";
import SinglePopular from "./singlePopular";

export default function Popular() {
  return (
    <section>
      <div className={styles.popularcontainer}>
        <div className={styles.popularheadercontainer}>
          <h1 className={styles.popularheader}>Popular</h1>

          <a href="#" className={styles.popularlink}>
            {" "}
            sort by <span>v</span>
          </a>
        </div>
        <div className={styles.popularimgcontainer}>
          <SinglePopular />
          <SinglePopular />
          <SinglePopular />
          <SinglePopular />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import styles from "./open.module.css";

const OpenSource = () => {
  return (
    <section className={styles.open__source__section}>
      <h2>
        <span>Open Source</span> Collaboration for Developers
      </h2>

      <div className={styles.all__open__source}>
        <div className={styles.open__source__con}>
          <h4>Contribution Opportunities</h4>
          <p>
            Join our thriving developer community on GitHub. Explore existing
            issues, propose new features, and contribute to the continuous
            improvement of Storefront
          </p>
        </div>
        <div className={styles.open__source__con}>
          <h4>Self-Hosting Guide</h4>
          <p>
            Empower yourself by self hosting Storefront. Our comprehensive guide
            walks you through the entire process new features, and also
            contribute to the continuous improvement of Storefront
          </p>
        </div>
        <div className={styles.open__source__con}>
          <h4>Benefits of Contribution</h4>
          <p>
            By contributing to Storefront, you not only enhance your skills but
            also become part of a collaborative ecosystem. Join a community
            passionate about open source and be part of the future of ecommerce
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;

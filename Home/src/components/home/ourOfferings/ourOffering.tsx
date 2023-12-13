import React from "react";
import styles from "./offerings.module.css";

const OurOffering = () => {
  return (
    <section className={styles.offering__section}>
      <h3>Our Offerings</h3>
      <h2>Key Features</h2>

      <div className={styles.all__features}>
        <div className={styles.feature__con}>
          <h4>Discover Unique Products</h4>
          <p>
            Explore a curated selection of hand- picked items, ranging from
            hand- made crafts to cutting edge technology
          </p>
        </div>
        <div className={styles.feature__con}>
          <h4>Seamless Buying Experience</h4>
          <p>
            Enjoy a smooth and secure shopping journey with very easy
            navigation, secure transactions and personalizes recommendations
          </p>
        </div>
        <div className={styles.feature__con}>
          <h4>Empower Sellers</h4>
          <p>
            For Sellers: Showcase your items to a global audience, mange
            inventory effortlessly, and build a loyal customer base
          </p>
        </div>
        <div className={styles.feature__con}>
          <h4>Customizable Storefronts</h4>
          <p>
            Sellers can create unique stores that reflects their brand identity,
            making it easy for customers to connect with their products
          </p>
        </div>
        <div className={styles.feature__con}>
          <h4>Efficient Order Management</h4>
          <p>
            Streamline your business operations with integrated order
            management, making it easy to track, process, and fulfill orders
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurOffering;

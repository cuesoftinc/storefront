import React from "react";
import styles from "./hero.module.css";
import Button from "@/components/general/button/buttonrafce";

const Hero = () => {
  return (
    <section className={styles.hero__section}>
      <h1>Welcome to Storefront; Your Ultimate Shopping Destination!</h1>
      <p>
        Embark on a journey of discovery- Storefront, where creativity meets
        commerce. Explore a world of unique products and empower your business
        to new heights
      </p>
      <div className={styles.hero__btns}>
        <Button btnContent="Try Cloud" btnStyle={styles.try__cloud} />
        <Button btnContent="Self Host" btnStyle={styles.self__host} />
      </div>
    </section>
  );
};

export default Hero;

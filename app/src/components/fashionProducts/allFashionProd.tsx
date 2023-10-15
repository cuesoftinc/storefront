import React from "react";
import SingleFashionProduct from "./singleFashion";
import { fashion } from "@/utils/data";
import styles from "./allFashion.module.css";

const AllFashionProducts = () => {
  return (
    <section className={styles.all__fashion__products}>
      <h1>This is all fashion products</h1>
      <article className={styles.all__fashion__products__display}>
        {fashion.map((each) => (
          <SingleFashionProduct {...each} key={each.id} />
        ))}
      </article>
    </section>
  );
};

export default AllFashionProducts;

import React from "react";
import SingleElectronicProduct from "./singleElectProduct";
import { electronics } from "@/utils/data";
import styles from "./allElectProd.module.css";

const AllElectronicsProducts = () => {
  return (
    <section className={styles.all__electronics__products}>
      <h1>This is all electronics products</h1>
      <article className={styles.all__elect__products__display}>
        {electronics.map((each) => (
          <SingleElectronicProduct {...each} key={each.id} />
        ))}
      </article>
    </section>
  );
};

export default AllElectronicsProducts;

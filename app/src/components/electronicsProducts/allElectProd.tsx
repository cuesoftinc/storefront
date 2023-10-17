import React, { Suspense } from "react";
// import SingleElectronicProduct from "./singleElectProduct";
import { electronics } from "@/utils/data";
import styles from "./allElectProd.module.css";

const SingleElectronicProduct = React.lazy(
  () => import("./singleElectProduct")
);

const AllElectronicsProducts = () => {
  return (
    <section className={styles.all__electronics__products}>
      <h1>This is all electronics products</h1>
      <article className={styles.all__elect__products__display}>
        {electronics.map((each) => (
          <Suspense fallback={<p>Loading...</p>} key={each.id}>
            <SingleElectronicProduct {...each} />
          </Suspense>
        ))}
      </article>
    </section>
  );
};

export default AllElectronicsProducts;

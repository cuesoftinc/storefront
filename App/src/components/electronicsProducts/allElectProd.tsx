"use client";

import React, { Suspense } from "react";
// import SingleElectronicProduct from "./singleElectProduct";
import { electronics } from "@/utils/data";
import styles from "./allElectProd.module.css";
import Filter from "../general/productFilter/filter";

const SingleElectronicProduct = React.lazy(
  () => import("./singleElectProduct")
);

const AllElectronicsProducts = () => {
  return (
    <section className={styles.all__electronics__products}>
      <Filter />

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

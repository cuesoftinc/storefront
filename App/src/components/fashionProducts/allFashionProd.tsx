"use client";

import React, { Suspense } from "react";
// import SingleFashionProduct from "./singleFashion";
import { fashion } from "@/utils/data";
import styles from "./allFashion.module.css";
import Filter from "../general/productFilter/filter";

const SingleFashionProduct = React.lazy(() => import("./singleFashion"));

const AllFashionProducts = () => {
  return (
    <section className={styles.all__fashion__products}>
      <Filter />

      <article className={styles.all__fashion__products__display}>
        {fashion.map((each) => (
          <Suspense fallback={<p>Loading...</p>} key={each.id}>
            <SingleFashionProduct {...each} />
          </Suspense>
        ))}
      </article>
    </section>
  );
};

export default AllFashionProducts;

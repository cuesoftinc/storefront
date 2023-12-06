"use client";

import React, { Suspense } from "react";
// import SingleFashionProduct from "./singleFashion";
import { fashion } from "@/utils/data";
import styles from "../electronicsProducts/allProd.module.css";
import Filter from "../general/productFilter/filter";
import { FaArrowCircleRight } from "react-icons/fa";
import { useGeneralContext } from "@/context";

const SingleFashionProduct = React.lazy(() => import("./singleFashion"));

const AllFashionProducts = () => {
  const { setIsOpenSidebar, setIsOpen } = useGeneralContext();

  return (
    <section className={styles.all__products}>
      <Filter />

      <FaArrowCircleRight
        className={styles.open__sidebar}
        onClick={() => {
          setIsOpenSidebar(true);
          setIsOpen(false);
        }}
      />

      <article className={styles.all__products__display}>
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

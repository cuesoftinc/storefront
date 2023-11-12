"use client";

import React, { Suspense } from "react";
// import SingleElectronicProduct from "./singleElectProduct";
import { electronics } from "@/utils/data";
import styles from "./allElectProd.module.css";
import Filter from "../general/productFilter/filter";
import { FaArrowCircleRight } from "react-icons/fa";
import { useGeneralContext } from "@/context";

const SingleElectronicProduct = React.lazy(
  () => import("./singleElectProduct")
);

const AllElectronicsProducts = () => {
  const { setIsOpenSidebar, setIsOpen } = useGeneralContext();

  return (
    <section className={styles.all__electronics__products}>
      <Filter />

      <FaArrowCircleRight
        className={styles.open__sidebar}
        onClick={() => {
          setIsOpenSidebar(true);
          setIsOpen(false);
        }}
      />

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

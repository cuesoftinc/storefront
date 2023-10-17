import React from "react";
import styles from "./products.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products",
};

const ProductsCategory = () => {
  return (
    <main>
      <h1>This is the all products page</h1>
    </main>
  );
};

export default ProductsCategory;

import React from "react";
import styles from "./fashion.module.css";
import SideBar from "@/components/sideBar/sideBar";
import AllFashionProducts from "@/components/fashionProducts/allFashionProd";
import { Metadata } from "next";
import ProductPath from "@/components/productPath/productPath";

export const metadata: Metadata = {
  title: "Fashion",
};

const FashionPage = () => {
  return (
    <>
      <ProductPath />
      <main className={styles.fashion__category}>
        <SideBar />
        <AllFashionProducts />
      </main>
    </>
  );
};

export default FashionPage;

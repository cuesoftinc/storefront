import React from "react";
import styles from "./electronics.module.css";
import SideBar from "@/components/sideBar/sideBar";
import AllElectronicsProducts from "@/components/electronicsProducts/allElectProd";
import { Metadata } from "next";
import ProductPath from "@/components/productPath/productPath";

export const metadata: Metadata = {
  title: "Electronics",
};

const ElectronicsPage = () => {
  return (
    <>
      <ProductPath />
      <main className={styles.electronics__category}>
        <SideBar />
        <AllElectronicsProducts />
      </main>
    </>
  );
};

export default ElectronicsPage;

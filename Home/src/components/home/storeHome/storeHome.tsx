import React from "react";
import { storeHome } from "@/assets/imagesrafce";
import Image from "next/image";
import styles from "./store.module.css";

const StoreHome = () => {
  return (
    <div className={styles.store__img__con}>
      <Image src={storeHome} alt="Store-home" />
    </div>
  );
};

export default StoreHome;

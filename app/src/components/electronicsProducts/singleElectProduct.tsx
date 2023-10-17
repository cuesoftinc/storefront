import React from "react";
import { cartIcon } from "@/assets/icons";
import Image from "next/image";
import styles from "./sinlgeElectProduct.module.css";

const SingleElectronicProduct = ({
  image,
  category,
}: {
  image: string;
  category: string;
}) => {
  return (
    <section className={styles.single__electronics__product}>
      <Image src={image} alt={category} width={200} height={100} />
      <div className={styles.short__desc}>
        <p>This is a short desc</p>
        <p>
          <sup>$</sup>
          <span>95</span>
          <sup>.00</sup>
        </p>
      </div>

      <h3>Full HD</h3>
      <p>
        rating <span>(91)</span>
      </p>
      <button>
        <Image src={cartIcon} alt="cart" /> <span>Add to Cart</span>
      </button>
    </section>
  );
};

export default SingleElectronicProduct;

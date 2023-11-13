import React from "react";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import Image from "next/image";
import styles from "../electronicsProducts/sinlgeProduct.module.css";
import Button from "../general/button/button";

interface FashionProps {
  image: string;
  category: string;
}

const SingleFashionProduct = ({ image, category }: FashionProps) => {
  return (
    <section className={styles.single__product}>
      <Image src={image} alt={category} width={200} height={100} />
      <FaHeart title="Add to favourite" className={styles.favourite__icon} />

      <div className={styles.short__desc}>
        <h3>Red Shimmer Summer Dress</h3>
        <h3>
          <span>$</span>
          <span>95</span>
          <span>.00</span>
        </h3>
      </div>

      <Button btnContent="Add to Cart" icon={<FaCartPlus />} />
    </section>
  );
};

export default SingleFashionProduct;

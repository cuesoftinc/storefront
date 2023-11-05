import React from "react";
import { cartIcon } from "@/assets/icons";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import Image from "next/image";
import styles from "./singleFashion.module.css";

const SingleFashionProduct = ({
  image,
  category,
}: {
  image: string;
  category: string;
}) => {
  return (
    <section className={styles.single__fashion__product}>
      <Image src={image} alt={category} width={200} height={100} />
      <FaHeart title="Add to favourite" className={styles.favourite__icon} />
      <div className={styles.fashion__short__desc}>
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
        <FaCartPlus className={styles.cart__icon} /> <span>Add to Cart</span>
      </button>
    </section>
  );
};

export default SingleFashionProduct;

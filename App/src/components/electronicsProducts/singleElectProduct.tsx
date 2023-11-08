import React from "react";
import { cartIcon } from "@/assets/icons";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import Image from "next/image";
import styles from "./sinlgeElectProduct.module.css";
import Button from "../general/button/button";
import RaisedElement from "../general/raisedElement/raisedElement";

interface ElectProps {
  image: string;
  category: string;
}

const SingleElectronicProduct = ({ image, category }: ElectProps) => {
  return (
    <section className={styles.single__electronics__product}>
      <Image src={image} alt={category} width={200} height={100} />
      <FaHeart title="Add to favourite" className={styles.favourite__icon} />

      <div className={styles.short__desc}>
        <h3>Acer 5822Q bi 21.5 Inches Full HD</h3>
        <h3>
          <RaisedElement content="$" />
          <span>95</span>
          <RaisedElement content=".00" />
        </h3>
      </div>

      <Button btnContent="Add to Cart" icon={<FaCartPlus />} />
    </section>
  );
};

export default SingleElectronicProduct;

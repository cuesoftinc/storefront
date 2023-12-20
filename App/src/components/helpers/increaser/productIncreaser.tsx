import React from "react";
import styles from "./increase.module.css";

interface IncreaserProp {
  content: string;
}

const ProductIncreaser = ({ content }: IncreaserProp) => {
  return (
    <button className={styles.increaser__button}>
      <span>–</span>
      <span>{content}</span>
      <span>+</span>
    </button>
  );
};

export default ProductIncreaser;

import React from "react";
import styles from "./filter.module.css";

const Filter = () => {
  return (
    <div className={styles.filter__product}>
      <span>Filters:</span>
      <select name="" value="">
        <option value="">Brand</option>
        <option value="acer">Acer</option>
        <option value="samsung">Samsung</option>
        <option value="apple">Apple</option>
        <option value="song">Sony</option>
      </select>

      <select name="" value="">
        <option value="">Price</option>
        <option value="highest">Highest</option>
        <option value="lowest">Lowest</option>
      </select>

      <select name="" value="">
        <option value="">
          Sort by: <b>A - Z</b>
        </option>
        <option value="highest">A - Z</option>
        <option value="lowest">Z - A</option>
      </select>
    </div>
  );
};

export default Filter;

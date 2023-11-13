"use  client";

import React, { useState } from "react";
import styles from "./filter.module.css";
import { usePathname } from "next/navigation";

const Filter = () => {
  const filterData = {
    brand: "",
    price: "",
    sort: "",
  };

  const [filter, setFilter] = useState(filterData);

  const { brand, price, sort } = filter;

  const pathname: string = usePathname();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilter({
      ...filter,
      [name]: value,
    });
    console.log(pathname);
  };

  // Function to handle change in the content of brand depending on the current page
  const handleFilterPlaceholder = (
    electHolder: string,
    fashionHolder: string
  ) => {
    if (pathname === "/electronics") {
      return electHolder;
    }
    return fashionHolder;
  };

  return (
    <div className={styles.filter__product}>
      <h3>Filters:</h3>
      <select name="brand" value={brand} onChange={handleSelectChange}>
        <option value="">Brand</option>
        <option value={`${handleFilterPlaceholder("acer", "native")}`}>
          {`${handleFilterPlaceholder("Acer", "Native")}`}
        </option>
        <option value={`${handleFilterPlaceholder("samsung", "camlock")}`}>
          {`${handleFilterPlaceholder("Samsung", "Camlock")}`}
        </option>
        <option
          value={`${handleFilterPlaceholder("apple", "z-wear")}`}
        >{`${handleFilterPlaceholder("Apple", "Z-wear")}`}</option>
        <option
          value={`${handleFilterPlaceholder("sony", "m&t")}`}
        >{`${handleFilterPlaceholder("Sony", "M&T")}`}</option>
      </select>

      <select name="price" value={price} onChange={handleSelectChange}>
        <option value="">Price</option>
        <option value="highest">Highest</option>
        <option value="lowest">Lowest</option>
      </select>

      <select name="sort" value={sort} onChange={handleSelectChange}>
        <option value="">Sort by: A - Z</option>
        <option value="highest">A - Z</option>
        <option value="lowest">Z - A</option>
      </select>
    </div>
  );
};

export default Filter;

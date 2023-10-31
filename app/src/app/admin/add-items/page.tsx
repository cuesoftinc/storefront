"use client";

import React from "react";
import styles from "./add-item.module.css";
import InputBox from "@/components/general/input/input";

const itemsData = [
  {
    id: 1,
    name: "productName",
    productName: "Product Name",
    holder: "Name",
  },
  {
    id: 2,
    name: "productDesc",
    productName: "Product Description",
    holder: "Description",
  },
  {
    id: 3,
    name: "price",
    productName: "Price",
    holder: "$0.00",
  },
  {
    id: 4,
    name: "quantity",
    productName: "Quantity",
    holder: "1",
  },
  {
    id: 5,
    name: "shippingInfo",
    productName: "Shipping Information",
    holder: "Info",
  },
  {
    id: 6,
    name: "size",
    productName: "size",
    holder: "Inch",
  },
  {
    id: 7,
    name: "available",
    productName: "Available",
    holder: "Red",
  },
  {
    id: 8,
    name: "category",
    productName: "Category",
    holder: "",
  },
  {
    id: 9,
    name: "subCat",
    productName: "Sub Category",
    holder: "",
  },
  {
    id: 10,
    name: "image",
    productName: "Add image",
    holder: "",
  },
];

const handleChange = () => {
  //
};

const NewItems = () => {
  return (
    <section className={styles.add__new__items}>
      <h2>Add new items</h2>
      <p>Add new available items to your shop.</p>
      <div className={styles.inputs__con}>
        {itemsData.map((each) => {
          return (
            <InputBox
              key={each.id}
              type={"text"}
              name={each.name}
              holder={each.holder}
              value={""}
              handleChange={handleChange}
              inputStyle={styles.items__input}
            />
          );
        })}
      </div>
    </section>
  );
};

export default NewItems;

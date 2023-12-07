"use client";

import { ChangeEvent, useState } from "react";
import React from "react";
import styles from "./addItems.module.css";
import InputBox from "../general/input/input";
import Button from "../general/button/button";
import ImageUpload from "../general/imageUpload/imageUpload";
import SubCategory from "./subCat";
import { useAddItemContext } from "@/contextrafce";

const AddItems = () => {
  const { addProduct, setAddProduct } = useAddItemContext();

  const {
    name,
    description,
    price,
    quantity,
    category_id,
    sub_category,
    shipping,
    color,
    size,
  } = addProduct;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddProduct({
      ...addProduct,
      [name]: value,
    });

    // console.log(addProduct);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddProduct({
      ...addProduct,
      [name]: value,
    });

    // console.log(addProduct);
  };

  return (
    <section className={styles.add__new__items}>
      <header className={styles.add__items__header}>
        <div className={styles.new__items__title}>
          <h2>Add new items</h2>
          <p>Add new available items to your shop.</p>
        </div>
        <div>
          <p>CALENDAR</p>
        </div>
      </header>

      <div className={styles.inputs__con}>
        <section>
          <label>Product Name</label>
          <InputBox
            type="text"
            name="name"
            holder="Name"
            value={name}
            handleChange={handleChange}
            inputStyle={styles.items__input}
            icons="" // Just added to avoid error message
          />
        </section>

        <section>
          <label>Product Description</label>
          <InputBox
            type="text"
            name="description"
            holder="Description"
            value={description}
            handleChange={handleChange}
            inputStyle={styles.items__input}
            icons="" // Just added to avoid error message
          />
        </section>

        <section>
          <label>Price</label>
          <InputBox
            type="number"
            name="price"
            holder="$0.00"
            value={price}
            handleChange={handleChange}
            inputStyle={styles.items__input}
            icons="" // Just added to avoid error message
          />
        </section>

        <section>
          <label>Quantity</label>
          <InputBox
            type="number"
            name="quantity"
            holder="1"
            value={quantity}
            handleChange={handleChange}
            inputStyle={styles.items__input}
            icons="" // Just added to avoid error message
          />
        </section>

        <section>
          <label>Shopping Information</label>
          <InputBox
            type="text"
            name="shipping"
            holder="Info"
            value={shipping}
            handleChange={handleChange}
            inputStyle={styles.items__input}
            icons="" // Just added to avoid error message
          />
        </section>

        <section>
          <label>Size</label>
          <InputBox
            type="text"
            name="size"
            holder="Inch"
            value={size}
            handleChange={handleChange}
            inputStyle={styles.items__input}
            icons="" // Just added to avoid error message
          />
        </section>

        <section>
          <label>Available Colors</label>
          <InputBox
            type="text"
            name="color"
            holder="Red"
            value={color}
            handleChange={handleChange}
            inputStyle={styles.items__input}
            icons="" // Just added to avoid error message
          />
        </section>

        <section>
          <label>Category</label>
          <div>
            <select
              name="category_id"
              value={category_id}
              onChange={handleSelectChange}
            >
              <option value=""></option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
            </select>
          </div>
        </section>

        <SubCategory
          label="Sub Category"
          category_id={category_id}
          sub_category={sub_category}
          handleSelectChange={handleSelectChange}
        />

        <ImageUpload />
      </div>

      <div className={styles.btns}>
        <Button btnContent="Cancel" btnStyles={styles.cancel__btn} />
        <Button btnStyles={styles.confirm__btn} btnContent="Confirm" />
      </div>
    </section>
  );
};

export default AddItems;

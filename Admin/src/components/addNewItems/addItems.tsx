"use client";

import { ChangeEvent, useState } from "react";
import React from "react";
import styles from "./addItems.module.css";
import { itemsData } from "@/data/datarafce";
import InputBox from "../general/input/input";
import Button from "../general/button/button";
import ImageUpload from "../general/imageUpload/imageUpload";

const catObj = {
  name: "",
  description: "",
  price: "",
  quantity: "",
  category_id: "",
  sub_category: "",
  shipping: "",
  color: "",
  size: "",
  image: "",
};

const AddItems = () => {
  const [addProduct, setAddProduct] = useState(catObj);

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
    image,
  } = addProduct;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddProduct({
      ...addProduct,
      [name]: value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddProduct({
      ...addProduct,
      [name]: value,
    });
  };

  const handleCategoryChange = (label: string) => {
    if (category_id === "") {
      return (
        <section>
          <label>{label}</label>
          <div>
            <select name="" value="">
              <option value="">Please select a category</option>
            </select>
          </div>
        </section>
      );
    }
    if (category_id === "Electronics") {
      return (
        <section>
          <label>{label}</label>
          <div>
            <select
              name="sub_category"
              value={sub_category}
              onChange={handleSelectChange}
            >
              <option value=""></option>
              <option value="laptops">Laptops</option>
              <option value="phones">Phones</option>
              <option value="accessories">Accessories</option>
              <option value="smartTv">SmartTv</option>
            </select>
          </div>
        </section>
      );
    }
    return (
      <section>
        <label>{label}</label>
        <div>
          <select
            name="sub_category"
            value={sub_category}
            onChange={handleSelectChange}
          >
            <option value=""></option>
            <option value="shoes">Shoes</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
      </section>
    );
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
            value={""}
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
            value={""}
            handleChange={handleChange}
            inputStyle={styles.items__input}
            icons="" // Just added to avoid error message
          />
        </section>
        <section>
          <label>Price</label>
          <InputBox
            type="text"
            name="price"
            holder="$0.00"
            value={""}
            handleChange={handleChange}
            inputStyle={styles.items__input}
            icons="" // Just added to avoid error message
          />
        </section>
        <section>
          <label>Quantity</label>
          <InputBox
            type="text"
            name="quantity"
            holder="1"
            value={""}
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
            value={""}
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
            value={""}
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
            value={""}
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
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>
        </section>
        {handleCategoryChange("Sub Category")}

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

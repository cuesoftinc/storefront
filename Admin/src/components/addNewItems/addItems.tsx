"use client";

import { ChangeEvent, useState } from "react";
import React from "react";
import styles from "./addItems.module.css";
import InputBox from "../general/input/input";
// import Button from "../general/button/button";
import ImageUpload from "../general/imageUpload/imageUpload";
import SubCategory from "./subCat";
import { addItem } from "@/api/addItemrafce";
import { Button } from "../general/button/button";
import { ImageType } from "react-images-uploading";
import axios from "axios";

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
  const [images, setImages] = useState<ImageType[]>([]);
  const handleImagesChange = (newImages: ImageType[]) => {
    setImages(newImages);
  };
  const [addProduct, setAddProduct] = useState(catObj);
  const [message, setMessage] = useState("");

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
  // const [item, setItem] = useState<any>({});

  const handleAddItem = async () => {
    try {
      console.log('Adding item:', addProduct, images);  // Log product and images
      const result = await addItem({ ...addProduct, image: images });  // Assuming `addItem` takes an object with an `image` property
      console.log('Success:', result);

      if (result.status === 200) {
        setMessage('Product created successfully!');
        // You can perform additional actions for a successful response
      } else {
        // Handle other status codes
        console.error('Unexpected status code:', result.status);
        setMessage(`Unexpected status code: ${result.status}`);
      }
    } catch (error: any) {
      console.error('Error:', error);
  
      if (axios.isAxiosError(error)) {
        // Check if it's an AxiosError to access the response
        if (error.response) {
          // Handle AxiosError with response
          console.error('Error response data:', error.response.data);
          console.error('Error response status:', error.response.status);
          setMessage(`Error: ${error.response.data.message || 'An error occurred'}`);
        } else {
          // Handle AxiosError without response
          console.error('No response received');
          setMessage('No response received');
        }
      } else {
        // Handle other types of errors
        console.error('Non-Axios error message:', error.message);
        setMessage(`Error: ${error.message}`);
      }
    }
  };
  console.log(addProduct);


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

        {/* <ImageUpload onImagesChange={handleImagesChange}  /> */}
        <section>
          <label>Avatar</label>
          <InputBox
            type="text"
            name="image"
            holder="first and last"
            value={image}
            handleChange={handleChange}
            inputStyle={styles.items__input}
            icons="" // Just added to avoid error message
          />
        </section>
      </div>
      {message ? (
          <div style={{backgroundColor:"blue",padding:"10px"}}>
            <span>{message}</span>
          </div>
        ) : (
          <div>
            <span></span>
          </div>
        )}

      <div className={styles.btns}>
      {/* <Button btnContent="Cancel" btnStyles={styles.cancel__btn}  /> */}
<Button onSubmit={handleAddItem} btnStyles={styles.confirm__btn} btnContent="Confirm" />


      </div>
    </section>
  );
};

export default AddItems;

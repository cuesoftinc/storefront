"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "./createCategory.module.css";
import InputBox from "../general/input/input";
import { Button } from "../general/button/button";
import { addnewCategory } from "@/api/addcategoryrafce";
import { addSubCategoryApi } from "@/api/addsubcategoryrafce";
const CategoryObj = {
  name: "",
  Subcategoryname: "",
  description: "",
  Subcategorydescription: "",
};
const CreateCategory = () => {
  const [addCategory, setAddCategory] = useState(CategoryObj);

  const { name, description, Subcategoryname, Subcategorydescription } =
    addCategory;
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name;
        const value = e.target.value;
        setAddCategory({
          ...addCategory,
          [inputName]: value,
        });
      };
      
  const handlecancle = async () => {
    setAddCategory(CategoryObj);

  };
  const handleAddCategory = async () => {
    const categoryData = {
      name: name,
      description: description,
    };
  
    const subcategoryData = {
      name: Subcategoryname,
      description: Subcategorydescription,
    };
  
    try {
      if (!name && !Subcategoryname && !description && !Subcategorydescription) {
        console.error("All fields are required");
        return;
      }
      // Add category
      const categoryResponse = await addnewCategory(categoryData);
  
      if (categoryResponse.status === 200 && categoryResponse.data.success) {
        // Add subcategory if the category addition was successful
        const subcategoryResponse = await addSubCategoryApi(
          categoryResponse.data.data.id,
          subcategoryData
        );
  
        if (
          subcategoryResponse.status === 200 &&
          subcategoryResponse.data.success
        ) {
          // Add any additional logic for a successful category and subcategory creation
          console.log("Category and Subcategory added successfully!");
        } else {
          console.error("Error adding subcategory:", subcategoryResponse);
        }
      } else {
        console.error("Error adding category:", categoryResponse);
      }
    } catch (error: any) {
      console.error("Error:", error);
    }
  };
  

  return (
    <section className={styles.create__new__items}>
      <header className={styles.create__items__header}>
        <div className={styles.create__new__items__title}>
          <h2>New Category</h2>
          <p>Create a new category for different items</p>
        </div>
        <div>
          <p>CALENDAR</p>
        </div>
      </header>

      <div className={styles.create__inputs__con}>
        <div className={styles.create__inputs__div}>
          <h4>New Category</h4>
          <section className={styles.create__inputs__div}>
            <label>Category Name</label>
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
          <section className={styles.create__inputs__div}>
            <label>Description (optional)</label>
            <InputBox
              type="text"
              name="description"
              holder="Name"
              value={description}
              handleChange={handleChange}
              inputStyle={styles.items__input}
              icons="" // Just added to avoid error message
            />
          </section>
        </div>
        <div className={styles.create__inputs__div}>
          <h4>Sub Category</h4>
          <section className={styles.create__inputs__div}>
            <label>Sub Category Name</label>
            <InputBox
              type="text"
              name="subcategoryname"
              holder="Name"
              value={Subcategoryname}
              handleChange={handleChange}
              inputStyle={styles.items__input}
              icons="" // Just added to avoid error message
            />
          </section>
          <section className={styles.create__inputs__div}>
            <label>Description (optional)</label>
            <InputBox
              type="text"
              name="subcategorydescription"
              holder="Name"
              value={Subcategorydescription}
              handleChange={handleChange}
              inputStyle={styles.items__input}
              icons="" // Just added to avoid error message
            />
          </section>
        </div>
      </div>
      <div className={styles.category__btns}>
        <Button
          btnContent="Cancel"
          btnStyles={styles.cancle__category__btns}
          onSubmit={handlecancle}
        />
        <Button
          onSubmit={handleAddCategory}
          btnStyles={styles.confirm__category__btns}
          btnContent="Confirm"
        />
      </div>
    </section>
  );
};

export default CreateCategory;

"use client";

import React from "react";
import styles from "./addItems.module.css";
import { itemsData } from "@/data/datarafce";
import InputBox from "../general/input/input";
import { dropIcon } from "@/assets/iconsrafce";
import Image from "next/image";
import Button from "../general/button/button";

const AddItems = () => {
  const handleChange = () => {
    //
  };

  return (
    <section className={styles.add__new__items}>
      <header className={styles.add__items__header}>
        <div>
          <h2>Add new items</h2>
          <p>Add new available items to your shop.</p>
        </div>
        <div>
          <p>CALENDAR</p>
        </div>
      </header>

      <div className={styles.inputs__con}>
        {itemsData.map((each) => {
          return (
            <div key={each.id}>
              <label>{each.label}</label>
              <InputBox
                type={"text"}
                name={each.name}
                holder={each.holder}
                value={""}
                handleChange={handleChange}
                inputStyle={styles.items__input}
                icons={each.icon} // Just added to avoid error message
              />
            </div>
          );
        })}
        <div className={styles.drop__images}>
          <Image src={dropIcon} alt="Drop" width={20} height={20} />
          <p>Add Image</p>
        </div>
        <Button btnContent="Cancel" />
        <Button btnStyles={styles.confirm__btn} btnContent="Confirm" />
      </div>
    </section>
  );
};

export default AddItems;

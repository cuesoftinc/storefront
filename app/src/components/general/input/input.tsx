import React from "react";
import { InputProps } from "@/types";
import Image from "next/image";
import styles from "./input.module.css";

const InputBox = ({
  type,
  name,
  holder,
  icons,
  value,
  handleChange,
}: InputProps) => {
  return (
    <div className={styles.input__box}>
      <input
        type={type}
        name={name}
        placeholder={holder}
        value={value}
        onChange={handleChange}
      />
      <Image src={icons} alt="profile" width="40" height="20" />
    </div>
  );
};

export default InputBox;

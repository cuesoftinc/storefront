import React from "react";
import { InputProps } from "@/typesrafce";
import Image from "next/image";
import styles from "./input.module.css";

const InputBox = ({
  type,
  name,
  holder,
  icons,
  value,
  handleChange,
  inputStyle,
}: InputProps) => {
  return (
    <div className={`${styles.input__box} ${inputStyle}`}>
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
